//Day5 javascript Fundamentals for Testers - Insurance Hands On
//Exercise 3 — Reusable Policy Number Validation

function validatePolicyNumber(policyNumber) {
    return /^POL-\d{6}$/.test(policyNumber);
}


let policynumbers = ["POL-123456", "POL-ABC123", "POL-789012", "POL-123456"];
policynumbers.forEach((policyNumber) => {
    console.log(`${policyNumber}: ${validatePolicyNumber(policyNumber)}`);
});