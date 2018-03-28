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
//сервис для запуска тасков Spark
public class Service implements Serializable {
    //функция, которая берет все id и вычисляет среднее значение
    public void run(HazelcastJavaRDD<Long, Port> portsRdd) {
        Double average = portsRdd.flatMapToDouble(
                (DoubleFlatMapFunction<Tuple2<Long, Port>>) entry -> singletonList((double) entry._2().getId()).iterator()
        ).mean();
        System.out.println("Среднее значение id = " + average);
    }
}
