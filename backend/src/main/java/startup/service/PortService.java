package startup.service;

import com.hazelcast.core.HazelcastInstance;
import com.hazelcast.core.IMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import startup.entity.Port;

import java.util.List;
import java.util.Map;

import static org.hibernate.validator.internal.util.CollectionHelper.newArrayList;
@Service
public class PortService {
    @Autowired
    HazelcastInstance hazelcastClient;


    public Long createPort(Port port) {
        IMap<Long, Port> map = hazelcastClient.getMap("port");
        long startTime = System.currentTimeMillis();
        map.put(port.getId(), port);
        System.out.println("1 запись " + (System.currentTimeMillis() - startTime));
//        List<Port> list = hazelcastClient.getList( "port" );
//        list.add(port);
        return port.getId();
    }

    public void run(int size) {
        IMap<String, String> map = hazelcastClient.getMap("run");
        long startTime = System.currentTimeMillis();
        for (int i = 0; i<size; i++) {
            String k = String.valueOf(i);
            map.put(k, k);
        }
        System.out.println(size + " записей " + (System.currentTimeMillis() - startTime));
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