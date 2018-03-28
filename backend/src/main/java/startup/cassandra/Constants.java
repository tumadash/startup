/**
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package startup.cassandra;

public class Constants {

  //имя map в Hazelcast
  public static final String CASSANDRA_MAP_STORE = "port";
  //Keyspace в cassandra
  public static final String CASSANDRA_KEYSPACE = "example";
  //имя таблицы в cassandra
  public static final String CASSANDRA_TABLE_NAME = "ports";
  public static final String CASSANDRA_KEYSPACE_TABLE_NAME = CASSANDRA_KEYSPACE
      + "." + CASSANDRA_TABLE_NAME;
  public static final int HC_PORT = 5701;
}
