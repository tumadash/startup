ВАЖНО
Перед запуском проверь в файле HazelcastClientConfig
1)dao.initialize("127.0.0.1") - адрес Cassandra
2)System.setProperty("hadoop.home.dir", "E:\\Дашина работа АСЭ\\") - местоположение hadoop
3)в hazelcast-client-config.xml адрес кластера Hazelcast(не работает? Поставь 127.0.0.1)

Запуск приложения
1. Установить Apache Cassandra
2. В -vm.options прописать -Dcassandra.ip=127.0.0.1
3. Запустить приложение
4. Создать запись. Метод POST, URL=http://localhost:8080/port/, Request Body - Text - например{"id":"1000", "name":"1"}
5. Получить запись. Метод GET, URL=http://localhost:8080/port/1000 - где 1000 id
6. Получить все записи. Метод GET, URL=http://localhost:8080/port/
7. Удалить запись. Метод DELETE, URL=http://localhost:8080/port/1000 - где 1000 id
8. Запустить таск Spark. Метод GET, URL=http://localhost:8080/port/run/1000 - где 1000 - количество создаваемых записей. Принцип действия - создается 1000 записей в методе
fillHazelcastMapWithPorts в PortService, далее с помощью Spark вычисляется среднее значение всех id и выводится на консоль.

Запуск в spark-2.3.0-bin-hadoop2.7
1. mvn clean package
2. Взять из папки target файл startup-backend-1.0-SNAPSHOT.jar и перенести его в spark-2.3.0-bin-hadoop2.7\bin
3. В папке bin в командной строки запустить "spark-submit --class startup.Application --master local startup-backend-1.0-SNAPSHOT.jar"
все запросы остаются теми же
Если Spark ругается на guava - в папке spark-2.3.0-bin-hadoop2.7\jars заменить старую guava на guava-19.0.