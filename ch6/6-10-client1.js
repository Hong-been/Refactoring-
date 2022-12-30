import {acquireReading, enrichReading} from "./6-10.js";

const rowReading = acquireReading();
const reading = enrichReading(rowReading);
s;

console.log(reading.baseCharge);
console.log(reading.taxableCharge);
