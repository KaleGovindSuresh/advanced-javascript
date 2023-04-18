// nested for;-
// 10 20 30
// 40 50 60
// 70 80 90
var num=10;
for(i=1;i<=3;i++){
    for(j=1;j<=3;j++,num+=10){
        console.log(num);
    }
}