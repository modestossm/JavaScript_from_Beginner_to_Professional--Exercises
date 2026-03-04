// 1. Miles-to-kilometers converter

// Create a variable that contains a value in miles, convert it to kilometers, and log the value in kilometers in the following format:
// For reference, 1 mile equals 1.60934 kilometers.

let reference = 1.60934;
let distanceInMiles = 1050;

let covertMilesToKilometers = distanceInMiles * reference;

console.log(covertMilesToKilometers);
console.log("-----------------------");


// 2. BMI calculator

// Set values for height in inches and weight in pounds, then convert the values to centimeters and kilos, outputting the results to the console:
// • 1 inch is equal to 2.54 cm
// • 2.2046 pounds is equal to 1 kilo
// Output the results. Then, calculate and log the BMI:
// This is equal to weight (in kilos) divided by squared height (in meters). Output the results to the console.

let heightReference = 2.54;
let weightReference = 2.2046;

let heightInches = 70;
let weightPounds = 176;

let heightConverted = (heightInches * heightReference) / 100;
let weightConverted = weightPounds / weightReference;

let bmi = weightConverted / (heightConverted ** 2)

console.log("BMI = " + bmi);