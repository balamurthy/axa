const users = [
{name:"A", active:true,phone:"1234567890"},
{name:"B", active:false,phone:"332323223"},
{name:"C", active:true,phone:"7171288182"},
{name:"D", active:false,phone:"123456733323"},

];
const inactiveUsers = users.filter(u => u.active===false);

console.log(inactiveUsers);

