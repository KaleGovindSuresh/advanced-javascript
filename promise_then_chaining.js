// Then chaining
// calling multiple then() on one another is called then chaining

new Promise((reolve , reject ) => {
    const data = [
        {id:1, name: "aaaaa", mobile: "11111",city:"pune", age: 27},
        {id:2, name: "bbbbb", mobile: "22222", age: 22},
        {id:3, name: "ccccc", mobile: "33333",city:"pune", age: 25},
        {id:4, name: "ddddd", mobile: "44444",city:"pune", age: 22},
        {id:5, name: "eeeee", mobile: "55555", age: 24},
        {id:6, name: "fffff", mobile: "66666",city:"pune", age: 21},
    ];

    reolve(JSON.stringify(data));
})
.then((data) => {
    //parse the data
    const users = JSON.parse(data);
    return users;
})
.then((users) => {
    //filter the data having city field
    const fusers = users.filter((user) => user.city);
    return fusers;
})
.then((users) => {
    // display the data 
    console.table(users);     // For table form we use console.table()
    // console.log(users);
})
.catch(console.log);
 
