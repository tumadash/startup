package startup.cassandra;

import com.datastax.driver.core.Cluster;
import com.datastax.driver.core.Metadata;
import com.datastax.driver.core.ResultSet;
import com.datastax.driver.core.Row;
import com.datastax.driver.core.Session;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import startup.entity.Port;
//клиент для работы с cassandra
public class CassandraClient implements HazelcastDao<Port> {

    static final Logger log = LoggerFactory.getLogger(CassandraClient.class);

    private Cluster cluster;

    public void initialize(String node) {
        cluster = Cluster.builder().addContactPoint(node).build();
        final Metadata metadata = cluster.getMetadata();
        log.info("Connected to cluster: {}", metadata.getClusterName());
        metadata.getAllHosts().stream().
                forEach((host) -> {
                    log.info("Datacenter: {}; Host: {}; Rack: {}",
                            host.getDatacenter(), host.getAddress(), host.getRack());
                });
    }

    @Override
    public void persist(final Port value) {
        connect().execute(//
                "INSERT INTO " + Constants.CASSANDRA_KEYSPACE_TABLE_NAME//
                        + " (id, name) "//
                        + "VALUES (" + value.getId() + ",'" + value.getName() //
                        + "');");
    }

    @Override
    public void remove(String key) {
        connect().execute(//
                "DELETE FROM  " + Constants.CASSANDRA_KEYSPACE_TABLE_NAME//
                        + " WHERE id = " + key + ";");
    }

    @Override
    public Port find(String key) {
        ResultSet res = connect().execute(//
                "SELECT * FROM  " + Constants.CASSANDRA_KEYSPACE_TABLE_NAME//
                        + " WHERE id = " + key + ";");
        if (res.getAvailableWithoutFetching() > 0) {
            final Row r = res.one();
            return new Port(r.getLong(0), r.getString(1));
        }
        return null;
    }

    @Override
    public List<Port> findAll() {
        final ResultSet rowList = connect().execute(
                "SELECT * FROM " + Constants.CASSANDRA_KEYSPACE_TABLE_NAME + ";");
        if(rowList.getAvailableWithoutFetching()>0) {
            final List<Port> result = new ArrayList<>();
            rowList.all().stream().
                    forEach((row) -> {
                        result.add(new Port(row.getLong(0), row.getString(1)));
                    });
            return result;
        }
        return Collections.EMPTY_LIST;
    }

    public Session connect() {
        return cluster.connect();
    }

    public void close() {
        cluster.close();
    }

    @Override
    public List<Port> findAll(Collection<String> ids) {
        //Transform collection into a string
        final String filters = String.join(",", ids.stream().
                map((id) -> "'" + id + "'").collect(Collectors.toList()));


        String query = //
                "SELECT * FROM  " + Constants.CASSANDRA_KEYSPACE_TABLE_NAME//
                        + " WHERE id IN (" + filters + ");";
        log.info("Query: {}",query);
        ResultSet rowList = connect().execute(query);
        if(rowList.getAvailableWithoutFetching()>0) {
            final List<Port> result = new  ArrayList<>();
            rowList.all().stream().
                    forEach((row) -> {
                        result.add(new Port(row.getLong(0), row.getString(1)));
                    });
            return result;
        }
        return Collections.EMPTY_LIST;
    }
}