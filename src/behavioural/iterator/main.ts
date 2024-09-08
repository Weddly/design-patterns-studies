import { MyDataStructure } from "./my-data-structure";
import { MyReverseIterator } from "./my-reverse-iterator";

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');

const [a, b] = dataStructure;

console.log('Roubados:', a, b);

for (const data of dataStructure) {
    console.log(data);
}

console.log('No more values in iterator:');
for (const data of dataStructure) {
    console.log(data);
}

console.log('Manually reset iterator');
dataStructure.resetIterator();
for (const data of dataStructure) {
    console.log(data);
}


console.log('Change iterator to reverse');
dataStructure.changeIterator(new MyReverseIterator(dataStructure))
for (const data of dataStructure) {
    console.log(data);
}