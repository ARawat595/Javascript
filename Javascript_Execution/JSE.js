//**************How does Javascript works behid the scene******************
//javascript is single threaded language bcz everything is run according to process
 //Example                   
let val1=10
let val2=5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10,2)


//T************There are basic two types ************
//Global Execution Context
//Function Execution Context

//Execution context of nodejs, dino are different and execution context of browser is (window object) it runs in thread

//1=> Global Execution/Environment => Any code is firstly run with Global Execution and is allocated into (this).this is basic step this will 

//2=>Memory creation Phase or creation Phase => It has Memory Allocation phase
//In this phase all variables, opeartors or everything which we have declared is assigned a memory (this is called first cycle )
//from example above 
/* val1 => undefined
   val2 => undefined 
   addNum => Definition(this will not be undefined bcz we have not executed function we have just define it )
   result1 => undefined 
   result2 => undefined*/

//2=>Execution Phase =>(this cycle 2 phase )
   /* val1 => 10
      val2 => 5 
      addNUm in this we have nothing to execute its body definition is hold in memory phase 
      //result1 is having addNum (function)=> now addNUm will create a new executional context
      which will contain 1=> New Variable environment 2=> Execution thead no matter how may times any function is executed every time a (new executional context will be created) fo that function
      result1 => now will have value 15
      //result2 is again having addNum(function)=> same thing will repeat for this */

//Now for (addNum)  Memory Phase and  Execution Context  will again run
//=>Memory Phase
/*val1 => undefined                                        
  val2 => undefined                                            
 total => undefined*/

/*  and   */ 
 
//=> Execution Context
/*num1 => 10                                        
  num2 => 5                                           
 total => 15   // This generaally returned to parent (Global Execution Context)*/ 

 //Note: Executional Context created, after doing its  work for the funtion as (we have created above)will be deleted.


 //***********CALL STACK ***************************/
 // Global Execution/Environment  Is basic will be present

 /*  In this functions are getting executed and removed and place is taken by other functions for execution*/
 /* In case if there is nested functions then it follows LIFO concept */
 
