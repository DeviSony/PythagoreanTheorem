// declaring the HTML id in java
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");


//declaring the button and giving it a function
document.getElementById("btn").onclick = function(){
  
//converting the string to a numeric value and saving it in a variable
  let x = parseFloat(num1.value);
  let y =  parseFloat(num2.value);
//calculating the given value to the power of 2 then declaring it as a variable.
  let val1 = Math.pow(x , 2);
  let val2 = Math.pow(y , 2);
  //declaring variable to save the results 
  let result1;
  let finresult;
   //An if statement to calculate the Pythagorean theorem
  if((x<1)||(y<1)){
//sees if the values are negative if it is then a warning is shown.
      result.innerHTML = ("<p>Please only use positive values</p>");   
   } else if (check.checked){
 //if the checkbox for solving hypotenuse is checked then the val1 and val2 are added together and the square root of the answer is displayed in the result box
      result1 = val1 + val2;
      finresult= Math.sqrt(result1);
      result.innerHTML= ("The answer is " + finresult);
   } else {
     //if the checkbox for solving hypotenuse is not checked then the val1 and val2 are subtracted together then the square root of the answer is displayed in the result box
     //There is an additional if statement to check which is greater, val1 or val2 so it can be subtracted without getting a negative value.
       if (val1>val2){
         result1 = val1 - val2;
         finresult= Math.sqrt(result1);
         result.innerHTML= ("The answer is "+ finresult);
       }else{
         result1 = val2 - val1;
         finresult= Math.sqrt(result1);
         result.innerHTML= ("The answer is "+ finresult);
     }
  } 
};

//declaring the second button and giving it the function to clear the format.
document.getElementById("clear").onclick = function(){
  num1.value=" ";
  num2.value = "";
  result.innerHTML = " ";
  check.checked = false;
};


//The code starts by declaring the two number input boxes and giving them appropriate names. Then the calculate button is declared given a function. Inside the function, the string from the input is set to a numeric value and the numeric value is calculated to the power of 2 then saved val1 and val2 with additional two variables also being declared to use later. then the If statement is used to calculate the Pythagorean theorem. The if statement first looks if the values are negative, if it is then a warning is given to use a positive value, if not, then it will check if it is solving for the hypothenuse if it is then the val1 and val2 are added together and saved in a variable and then squared to get the right answer, which is added to a fin result and displayed in the result box. If not then an if statement is used to check which value is greater, then it is subtracted and squared to get the value of a or b. Lastly, a clear button is used to clear the form so that the user doesn't have to clear each individual box on each try.