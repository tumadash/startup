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

    public void run(int size) {
        fillHazelcastMapWithPorts(size);
        HazelcastJavaRDD<Long, Port> usersRdd = hazelcastSparkContext.fromHazelcastMap("port");

        startup.service.Service service = new startup.service.Service();
        service.run(usersRdd);
    }

    private void fillHazelcastMapWithPorts(int size) {
        IMap<Long, Port> ports = hazelcastClient.getMap("port");
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