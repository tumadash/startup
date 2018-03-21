package startup;


import com.hazelcast.client.HazelcastClient;
import com.hazelcast.client.config.ClientConfig;
import com.hazelcast.client.config.XmlClientConfigBuilder;
import com.hazelcast.core.HazelcastInstance;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.util.Properties;

@Configuration
public class HazelcastClientConfig {

    @Bean
    public HazelcastInstance getHazelcastClientInstance() throws IOException {
        ClientConfig clientConfig = new ClientConfig();
        clientConfig = new XmlClientConfigBuilder("hazelcast-client-config.xml").build();
        Properties properties = new Properties();
        properties.put("hazelcast.client.statistics.enabled", true);
        clientConfig.setProperties(properties);
        HazelcastInstance hazelcastInstance=  HazelcastClient.newHazelcastClient(clientConfig);
        return hazelcastInstance;
    }
}
