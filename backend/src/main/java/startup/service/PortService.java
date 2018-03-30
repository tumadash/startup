package startup.service;

import com.hazelcast.core.HazelcastInstance;
import com.hazelcast.core.IMap;
import com.hazelcast.spark.connector.HazelcastSparkContext;
import com.hazelcast.spark.connector.rdd.HazelcastJavaRDD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import startup.entity.Port;

import java.util.Map;

@Service
public class PortService {
    @Autowired
    HazelcastInstance hazelcastClient;
    @Autowired
    HazelcastSparkContext hazelcastSparkContext;


    public Long createPort(Port port) {
        IMap<Long, Port> map = hazelcastClient.getMap("port");
        long startTime = System.currentTimeMillis();
        map.put(port.getId(), port);
        System.out.println("1 запись " + (System.currentTimeMillis() - startTime));
        return port.getId();
    }
    //важно! Если в базе уже есть записи, то и их id будет тоже считать, т.е например если в базе 100 записей, а size=10,
    // то среднее будет от всех 100
    public Double run(int size) {
        //заполнили базу тестовыми данными
        fillHazelcastMapWithPorts(size);
        //загружаем данные из map Hazelcast в HazelcastJavaRDD (тип данных для Spark)
        HazelcastJavaRDD<Long, Port> portsRdd = hazelcastSparkContext.fromHazelcastMap("port");
        //передаем в СЕРЕАЛИЗУЕМЫЙ сервис. Важно! Если он будет несереализуемый, то Spark ругнется на это
        startup.service.Service service = new startup.service.Service();
        return service.run(portsRdd);
    }

    //функция, которая пишет в map Hazelcast столько записей, сколько хочет юзер - int size
    private void fillHazelcastMapWithPorts(int size) {
        //берем map
        IMap<Long, Port> ports = hazelcastClient.getMap("port");
        // в цикле пишем в него записи id порта и сам объект порта
        for (int i = 0; i < size; i++) {
            String name = "port-" + i;
            Port port = new Port(new Long(i), name);
            ports.put(new Long(i), port);
        }
    }

    public void deletePort(Long id) {
        IMap<Long, Port> map = hazelcastClient.getMap("port");
        map.remove(id);
    }

    public Port getPort(Long id) {
        IMap<Long, Port> map = hazelcastClient.getMap("port");
        return map.get(id);
    }

    public Map<Long, Port> getAllPort() {
        IMap<Long, Port> map = hazelcastClient.getMap("port");
        return map;
    }
}