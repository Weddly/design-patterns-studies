import { User } from "../interfaces/users";

const users: User[] = [];


export const MyDatabaseModule = {

    add(user: User): void {
        users.push(user);
    },

    remove(index: number): void {
        users.slice(index, 1)
    },

    show(): void {
        for (const user of users) {
            console.log(user);
        }
    }
}