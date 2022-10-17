// alert("Hello! I am an alert box!!");
// function bmiCalculator(weight,height)
// {

//    var bmi =weight/(height*height);
//    return Math.round(bmi);
   
// }
//    var bmi = bmiCalculator(65, 1.8);
//    prompt(bmi); 
//    var n = Math.random();  console.log(n);
//love score
// prompt("what is your name");
// prompt("what is their name");
// var lovescore =Math.random()*100;
// lovescore = Math.floor(lovescore)+1;
// if(lovescore>70){
//     alert("your lovebpersant is" +lovescore+ "%yes");
// }
// else{
//     alert("your lovebpersant is" +lovescore+ "%no");
// }
function bmiCalculator (weight, height) {
    var bmi =weight/(height*height);
     if(bmi < 18.5)
    {
         return  Math.round("Your BMI is "+bmi+", so you are underweight.");
    }
    else if( bmi >= 18.5 && bmi <= 24.9 )
    {
    return  Math.round("Your BMI is "+bmi+", so you have a normal weight.");
    }
    if(bmi>24.9)
    {
       return  Math.round( "Your BMI is "
       + bmi+ ", so you are overweight.");
    }
    else {
        console.log("no need");
    }
   


  
}

    
