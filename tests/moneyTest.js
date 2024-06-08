import {formatCurrency} from "../script/utils/money.js"

console.log("Test suit: formatCurrency")

console.log("Convert cent into dollar")
if (formatCurrency(2095) === "20.95"){
    console.log('passed');
} else {
    console.log('failed');
}

console.log("Work with zero")
if (formatCurrency(0) === "0.00"){
    console.log("passed");
} else {
    console.log("failed");
}

console.log("Rounds up to the nearest cent")
if (formatCurrency(2000.5) === "20.01"){
    console.log("passed")
} else {
    console.log("failed")
}