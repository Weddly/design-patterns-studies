import { SmartHouseCommand } from "./smart-house-command";
import { SmartHouseLight } from "../receivers/smart-house-light";

export class LightPowerCommand implements SmartHouseCommand {
    constructor(private readonly light: SmartHouseLight) {

    }
    execute(): void {
        this.light.on();
    }
    undo(): void {
        this.light.off();
    }
}