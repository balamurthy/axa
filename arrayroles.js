
let clientnames = ["raj", "rose", "Lisa"];


let expectedname;


for(let i=0; i<clientnames.length; i++) {
    console.log(clientnames[i]);
    expectedname=clientnames[i].charAt(0).toUpperCase() + clientnames[i].slice(1);
    console.log(expectedname);

    
    if (expectedname==="Rose")
    {
        console.log("Rose found");
    }


}

