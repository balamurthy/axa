let testData = [
{ customerName: "Anu", age: 18, expectedResult: "eligible" },
{ customerName: "Meena", age: 65, expectedResult: "Eligible" },
{ customerName: "Rose", age: 0, expectedResult: "Not Eligible" },
{ customerName: "John", age: 70, expectedResult: "Eligible" }

];
for (let record of testData) {
//for each record of customer test data call validateAge function
    validateAge(record.age,record.expectedResult);
}

function validateAge(age,expected)
{
    let actual ="";
    if (age >= 18 && age <= 70) {

        actual = "eligible";
    } 
    else 
    {
        actual = "not eligible";
       
    }
//convert expected and actual to lowercase

    if (actual.toLowerCase() === expected.toLowerCase())
    {
       console.log(age + " Pass Actual is " + actual  + " Expected is " + expected);
    }
    else
    {
         console.log(age + " Failed Actual is " + actual  + " Expected is " + expected);

    }
}
