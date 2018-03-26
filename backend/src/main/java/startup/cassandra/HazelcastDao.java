package startup.cassandra;
import java.io.Serializable;
import java.util.Collection;
import java.util.List;

public interface HazelcastDao<T extends Serializable> {
    void persist(T val);

    void remove(String id);

    T find(String id);

    List<T> findAll();

    List<T> findAll(Collection<String> ids);
}