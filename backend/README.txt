1. Установить Apache Cassandra
2. В -vm.options прописать -Dcassandra.ip=127.0.0.1
3. Запустить приложение
4. Создать запись. Метод POST, URL=http://localhost:8080/port/, Request Body - Text - например{"id":"1000", "name":"1"}
5. Получить запись. Метод GET, URL=http://localhost:8080/port/1000 - где 1000 id
6. Получить все записи. Метод GET, URL=http://localhost:8080/port/
7. Удалить запись. Метод DELETE, URL=http://localhost:8080/port/1000 - где 1000 id
8. Запустить таск Spark. Метод GET, URL=http://localhost:8080/port/run/1000 - где 1000 - количество создаваемых записей. Принцип действия - создается 1000 записей в методе
fillHazelcastMapWithPorts в PortService, далее с помощью Spark вычисляется среднее значение всех id и выводится на консоль.