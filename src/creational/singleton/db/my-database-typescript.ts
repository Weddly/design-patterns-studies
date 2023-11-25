import { User } from "../interfaces/users";


export class MyDatabaseTypescript {
    private static _instance: MyDatabaseTypescript | null = null;
    private users: User[] = [];
    private constructor() { }

    static get instance(): MyDatabaseTypescript {
        if (MyDatabaseTypescript._instance === null) {
            MyDatabaseTypescript._instance = new MyDatabaseTypescript();
        }

        return MyDatabaseTypescript.instance;
    }

    add(user: User): void {
        this.users.push(user);
    }

    remove(index: number): void {
        this.users.slice(index, 1)
    }

    show(): void {
        for (const user of this.users) {
            console.log(user);
        }
    }
}