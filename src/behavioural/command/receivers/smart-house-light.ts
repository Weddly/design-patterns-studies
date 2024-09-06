export class SmartHouseLight {
    private isOn = false;
    public intensity = 50;

    constructor(public name: string) { }

    getPowerStatus(): string {
        return this.isOn ? 'ON' : 'OFF';
    }

    on(): boolean {
        this.isOn = true;
        console.log(`${this.name} is ${this.getPowerStatus()}`)
        return this.isOn;
    }

    off(): boolean {
        this.isOn = false;
        console.log(`${this.name} is ${this.getPowerStatus()}`)
        return this.isOn;
    }

    increaseIntensity(): number {
        if (this.intensity < 100) {
            this.intensity += 1;
        }

        return this.intensity;
    }


    decreaseIntensity(): number {
        if (this.intensity > 0) {
            this.intensity -= 1;
        }
        return this.intensity;
    }
}