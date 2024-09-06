import { LightIntensityCommand } from "./commands/light-intensity-command";
import { LightPowerCommand } from "./commands/light-power-command";
import { SmartHouseApp } from "./invokers/smart-house-app";
import { SmartHouseLight } from "./receivers/smart-house-light";

// Receiver
const bedroomLight = new SmartHouseLight('Bedroom light');
const bathroomLight = new SmartHouseLight('Bathroom light');

// Command
const lightPowerCommand1 = new LightPowerCommand(bedroomLight);
const lightIntensityCommand1 = new LightIntensityCommand(bedroomLight);
const lightPowerCommand2 = new LightPowerCommand(bathroomLight);

// lightPowerCommand1.execute();
// lightPowerCommand1.undo();

// Remote Control - Invoker
const smartHouseApp = new SmartHouseApp();

smartHouseApp.addCommand('btn-1', lightPowerCommand1);
smartHouseApp.addCommand('btn-2', lightPowerCommand2);
smartHouseApp.addCommand('btn-3', lightIntensityCommand1);

smartHouseApp.executeCommand('btn-1');
smartHouseApp.undoExecuteCommand('btn-1');

smartHouseApp.executeCommand('btn-2');
smartHouseApp.undoExecuteCommand('btn-2');

for (let i = 0; i < 50; i++) {
    smartHouseApp.executeCommand('btn-3');
}


for (let i = 0; i < 100; i++) {
    smartHouseApp.undoExecuteCommand('btn-3');
}
