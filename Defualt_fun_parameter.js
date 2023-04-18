// Default function parameter (ES6):-

// function add(a, b = 0) {
    // function add(a, b = a){
    //     // console.log(a, b);
    //     return a + b;
    // }
    
    // console.log(add(10));  //20
    // console.log(add(10, 20)); //30




    function addTwoNumbers(first,second=10){
        console.log('first parameter is :',first)
        console.log('second parameter is :',second)
        return first+second;
        }
        console.log("case 1 sum:",addTwoNumbers(20)) // no value
        console.log("case 2 sum:",addTwoNumbers(2,3))
        console.log("case 3 sum:",addTwoNumbers())
        console.log("case 4 sum",addTwoNumbers(1,null))//null passed
        console.log("case 5 sum",addTwoNumbers(3,undefined))