import { SmartHouseLight } from "../receivers/smart-house-light";
import { SmartHouseCommand } from "./smart-house-command";

export class LightIntensityCommand implements SmartHouseCommand {
    constructor(private readonly light: SmartHouseLight) {

    }
    execute(): void {
        this.light.increaseIntensity();
        console.log(`${this.light.name} Intensity: ${this.light.intensity}`)
    }
    undo(): void {
        this.light.decreaseIntensity();
        console.log(`${this.light.name} Intensity: ${this.light.intensity}`)
    }
}