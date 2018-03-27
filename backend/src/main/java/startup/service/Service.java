package startup.service;

import com.hazelcast.spark.connector.rdd.HazelcastJavaRDD;
import org.apache.spark.api.java.function.DoubleFlatMapFunction;
import scala.Tuple2;
import startup.entity.Port;

import java.io.Serializable;

import static java.util.Collections.singletonList;

/**
 * Created by Дария on 27.03.2018.
 */
public class Service implements Serializable{
    public void run(HazelcastJavaRDD<Long, Port> usersRdd){
        Double average = usersRdd.flatMapToDouble(
                (DoubleFlatMapFunction<Tuple2<Long, Port>>) entry -> singletonList((double) entry._2().getId()).iterator()
        ).mean();
        System.out.println("Среднее значение id = " + average);
    }
}
