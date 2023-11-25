import { MyDatabaseClassic } from "./db/my-database-classic";

const db1 = MyDatabaseClassic.getInstance();
const db2 = MyDatabaseClassic.getInstance();
db1.add({ name: "John", age: 30 });
db1.add({ name: "May", age: 60 });
db1.add({ name: "Paul", age: 25 });
db2.show();

console.log(db1 === db2);

export { db1 };