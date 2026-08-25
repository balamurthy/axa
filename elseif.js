let duration = 25;

if (duration < 5) {
    console.log("Short term policy " + duration);
}
else if (duration >= 5 && duration <= 10) {
    console.log("Medium term policy " + duration);
}
else if (duration > 10 && duration <= 20) {
    console.log("Long term policy " + duration);
}
else {
    console.log("Extra long term policy " + duration);
}
