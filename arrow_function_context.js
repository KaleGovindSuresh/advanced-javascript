const obj = {
    name: "Govind Kale",
    m1() {
        console.log("m1: ", this); //obj

        function f1() {
            console.log("f1: ", this);
        }
        return f1;
        // return () => {
        //     console.log("arrow", this);
        // };
    },
};

const f1 = obj.m1();
f1(); //global

const obj2 = {
    name: "other",
    m2: f1,
};
obj2.m2(); // obj2