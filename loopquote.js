//Exercise 2 — while Loop for Quote Attempts
//Document name - Day_5_JavaScript_Fundamentals_for_Testers_Insurance_Hands_On
function validatePremium(p) {
    if (p >= 1000) {
    console.log("Valid premium: "  + p);
    return;
    }
    else {
    console.log("Invalid premium: " + p);
    }
}



let premiums = [-4, 1000, 20000];
let attempt = 0;

while (attempt < premiums.length) {

    console.log("Attempt " + (attempt + 1));
    validatePremium(premiums[attempt]);
    attempt++; // INCREMENT THE LOOP LOGIC SO IT DOES NOT RUN FOREVER
}