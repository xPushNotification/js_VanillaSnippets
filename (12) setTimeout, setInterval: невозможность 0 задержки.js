
//----------
// нулевая задержка возможна лишь при первых вызовах setTimeout/setInterval
// задержку делает браузер
//----------

setTimeout( ()=>alert(2) );
alert(1);       // 1,2
// multy calling will produce delays like this:
//  1,1,1,1,9,15,20,24,30,35,40,45,50,55,59,64,70,75,80,85,90,95,100

