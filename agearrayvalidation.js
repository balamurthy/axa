let ages = [5, 18, 25, 65, 67];

for (let i = 0; i < ages.length; i++) {

     validateAge(ages[i]);

}

function validateAge(age)
{
    if (age >= 18 && age <= 65) {
        console.log(age + " - Actual - Eligible");
    } 
    else 
    {
        console.log(age + " - Actual - Not Eligible");
    }

}



let testData = [
{ customerName: "Anu", age: 25, expectedResult: "Eligible" },
{ customerName: "Ravi", age: 70, expectedResult: "Not Eligible" },
{ customerName: "Meena", age: 40, expectedResult: "Eligible" }
];
for (let testCase of testData) {
console.log(
testCase.customerName + " | Age: " +
testCase.age + " | Expected: " +
testCase.expectedResult
);

validateAge(testCase.age);


}