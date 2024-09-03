import { SystemUserProxy } from "./system-users/system-user-proxy";

async function clientCode(): Promise<void> {
    const user = new SystemUserProxy('Weddly', 'buzz');
    console.log("It's gonna take 2 seconds...");
    console.log(await user.getAddresses());

    console.log('Repeat itself 5 times');
    for (let i = 1; i < 6; i++) {
        console.log(i);
        console.log(await user.getAddresses());
    }

}

clientCode();

