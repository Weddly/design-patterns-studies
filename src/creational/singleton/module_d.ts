import { MyDatabaseFunction } from "./db/my-database-function";

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({ name: "John", age: 30 });
MyDatabaseFunction.add({ name: "May", age: 60 });
myDatabaseFunction.add({ name: "Paul", age: 25 });
myDatabaseFunction.show();