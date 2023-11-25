import { MyDatabaseClassic } from "./db/my-database-classic";
import { db1 as db1_module_a } from './module_a';
const db1 = MyDatabaseClassic.getInstance();
const db2 = MyDatabaseClassic.getInstance();
db1.add({ name: "Pete", age: 30 });
db1.add({ name: "Mary", age: 60 });
db1.add({ name: "Joe", age: 25 });
db2.show();

console.log(db1 === db1_module_a);