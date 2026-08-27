let ages = [5, 18, 25, 65, 67];

console.log("No of test data for ages is  :" + ages.length);

for (let i = 0; i < ages.length; i++) {
     //console.log(ages[i]);
     validateAge(ages[i]);

}


function validateAge(age)
{
    
    if (age >= 18 && age <= 65) {

         console.log(age + " -Eligible ");
        } 
    else 
    {
         console.log(age + "Not Eligible" );
       
    }

}

function validateAge(age,expected)
{
    
    let actual ="";
    if (age >= 18 && age <= 65) {

        actual = "eligible";
     //   console.log(age + " - Actual : Eligible " + " Expected :" + expected);
        } 
    else 
    {
        actual = "not eligible";
       // console.log(age + " -  Actual : Not Eligible" + " Expected :" + expected);
       
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



let testData = [
{ customerName: "Anu", age: 18, expectedResult: "eligible" },
{ customerName: "Ravi", age: 70, expectedResult: "Not Eligible" },
{ customerName: "Meena", age: 65, expectedResult: "Eligible" },
{ customerName: "Rose", age: 0, expectedResult: "Not Eligible" }

];
for (let record of testData) {
//for each record of customer test data call validateAge function
    validateAge(record.age,record.expectedResult);


}
