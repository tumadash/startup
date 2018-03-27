package startup;


import com.datastax.driver.core.Session;
import com.hazelcast.client.HazelcastClient;
import com.hazelcast.client.config.ClientConfig;
import com.hazelcast.client.config.XmlClientConfigBuilder;
import com.hazelcast.core.HazelcastInstance;
import com.hazelcast.spark.connector.HazelcastSparkContext;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaSparkContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import startup.entity.Port;
import startup.cassandra.*;

import java.io.IOException;
import java.util.Properties;

@Configuration
public class HazelcastClientConfig {
    private CassandraClient dao;
    @Bean
    public HazelcastInstance getHazelcastClientInstance() throws IOException {
        dao = new CassandraClient();
        dao.initialize(System.getProperty("cassandra.ip"));
        // creating data keyspace and table
        final Session session = dao.connect();
        session.execute("CREATE KEYSPACE IF NOT EXISTS "
                + Constants.CASSANDRA_KEYSPACE + " WITH replication "
                + "= {'class':'SimpleStrategy', 'replication_factor':3};");
        session.execute("CREATE TABLE IF NOT EXISTS "
                + Constants.CASSANDRA_KEYSPACE_TABLE_NAME + " ("
                + "id bigint PRIMARY KEY," + "name text" + ");");

        CassandraMapStore mapStore = new CassandraMapStore(String.class, Port.class, dao);

        // starting 3 instances of hazelcast
        MyHazelcastInstance store = new MyHazelcastInstance(mapStore, Constants.CASSANDRA_MAP_STORE);

//
        ClientConfig clientConfig = new ClientConfig();
        clientConfig = new XmlClientConfigBuilder("hazelcast-client-config.xml").build();
        Properties properties = new Properties();
        properties.put("hazelcast.client.statistics.enabled", true);
        clientConfig.setProperties(properties);
        HazelcastInstance hazelcastInstance=  HazelcastClient.newHazelcastClient(clientConfig);
        return hazelcastInstance;
    }
    @Bean
    public HazelcastSparkContext getSpark(){
        System.setProperty("hadoop.home.dir", "E:\\Дашина работа АСЭ\\");
        SparkConf conf = new SparkConf()
                .setMaster("local[2]")
                .setAppName("Create RDD From Hazelcast")
                .set("hazelcast.server.addresses", "127.0.0.1:5701")
                .set("spark.driver.host", "127.0.0.1");

        JavaSparkContext sparkContext = new JavaSparkContext(conf);
        return new HazelcastSparkContext(sparkContext);
    }
}
