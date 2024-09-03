import { SystemUserAddresProtocol, SystemUserProtocol } from "./system-user-protocol";

export class AdminUser implements SystemUserProtocol {
    public firstName: string;
    public userName: string;

    constructor(firstName: string, userName: string) {
        this.firstName = firstName;
        this.userName = userName;
    }

    async getAddresses(): Promise<SystemUserAddresProtocol[]> {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                return resolve([
                    { street: 'Av. Brasil', number: 10 },
                    { street: 'Rua A.', number: 44 },
                ]);
            }, 2000)
        })
    }
}