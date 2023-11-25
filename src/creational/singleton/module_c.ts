import { MyDatabaseModule } from "./db/my-database-module";

MyDatabaseModule.add({ name: "John", age: 30 });
MyDatabaseModule.add({ name: "May", age: 60 });
MyDatabaseModule.add({ name: "Paul", age: 25 });
MyDatabaseModule.show();