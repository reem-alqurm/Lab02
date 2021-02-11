
'use strict';


let userName = prompt('What\'s Your Name ?? ') ;


      alert('Hi  '+ userName + ' ,would you please answer these qustionse about Reem with Y/N:) ');
     let counter = 0;
// eslint-disable-next-line no-unused-vars
let firQ = prompt('Is Reem 27 years old ??');
     function question1(){
 
    
      if(firQ.toLowerCase() === "y" || firQ.toLowerCase() === "yes")
      {
        alert('yes you are correct');
        console.log('For the first Q you are correct');
        counter = counter+1;
      }
      else if (firQ.toLowerCase() === 'n' || firQ.toLowerCase() === 'no')
      {
        alert('No, thats not correct !');
        console.log('For the first Q you are not correct');
  } else {
    alert('you entered invalid answer !');
  }
}
question1(firQ);
    let secQ = prompt("Did Reem ever want to Turky ??")
    function question2(){
      if(secQ.toLowerCase() === "y" || secQ.toLowerCase() === "yes")
      {
        alert("yes you are correct");
        console.log("For the Secound Q you are correct")
        counter = counter+1;

      }
      else if (secQ.toLowerCase() === "n" || secQ.toLowerCase() === "no")
      {
        alert("No, thats not correct !");
       console.log("For the Secound Q you are not correct")
      }else {
        alert("you entered invalid answer !");
      }
    }
       question2();

       function question3(){ 
    let thirQ = prompt("Does Reem like moveis ??")
      if(thirQ.toLowerCase() === "y" || thirQ.toLowerCase() === "yes")
      {
        alert("yes you are correct");
        console.log("For the third Q you are correct");
        counter = counter+1;

      }
      else if (thirQ.toLowerCase() === "n" || thirQ.toLowerCase() === "no")
      {
        alert("No, thats not correct !");
        console.log("For the third Q you are not correct");
      }else {
        alert("you entered invalid answer !");
      }}
      question3();

      function question4(){
 
    let fortQ = prompt("Does Reem like Shishbarak ??")
      if(fortQ.toLowerCase() === "y" || fortQ.toLowerCase() === "yes")
      {
        alert("No, thats not correct !");
        console.log("For the forth Q you are not correct");
      }
      else if (fortQ.toLowerCase() === "n" || fortQ.toLowerCase() === "no")
      {
        alert("yes you are correct");
        console.log("For the forth Q you are correct");
        counter = counter+1;
      }else {
        alert("you entered invalid answer !");
      }
    }
    question4();

    function question5(){
      let fiftQ = prompt("Does Reem's favorite move is The Shining ??")
      if(fiftQ.toLowerCase() === "y" || fiftQ.toLowerCase() === "yes")
      {
        alert("yes you are correct");
        console.log("For the fifth Q you are correct");
        counter = counter+1;

      }
      else if (fiftQ.toLowerCase() === "n" || fiftQ.toLowerCase() === "no")
      {
        alert("No, thats not correct !");
        console.log("For the fifth Q you are not correct");
      }else {
        alert("you entered invalid answer !");
      }}
      question5();
           
    function question6(){
    let i = 0       
    for (i = 0 ; i < 4 ; i++)
     { let sixQ = prompt("Guss reem's luky number ??")
      let gussNum = parseInt (sixQ);
      if(gussNum == 7 )
      {
        alert("yes you are correct");
        counter = counter+1;
        console.log("For the sixth Q you are correct");

         break
      }
      
      else if (gussNum < 7 )
      {
        alert("too low !!");

      
      }
      else if (gussNum > 7 ){
        alert("too high !!");
            }
       else 
       {
        alert("invaled input");

       }
      }
      if (i >= 4 )
      {
        alert("the correct answar is 7 ");
      }  
      else if (i< 4){
        alert ("nice !")
      }
    }
    question6();
    
    function question7(){
      let coloArr = ['red','black','yallow','blue'];
      let x = 0       
      let seveQ = prompt("Guss reem's fav coloer ??") 
      let flage = false;
    for (x = 1 ; x <= 6 ; x++){
      for (let j = 0 ; j < coloArr.length ; j++ ){  
       
        if(coloArr[j]===seveQ){
            alert("yes you are correct");
            console.log("For the seventh Q you are correct");
            counter = counter+1;
            flage =true;
            break;
        }
        
      }
    if (flage=== false){
      alert('wrong answar try again')
    seveQ = prompt("Guss reem's fav coloer ??")
    
    }
    else{
      break;
    }
        }
      if (x >= 6 )
    {
      alert('you attmets is over, the correct answar is red , black , yallow , blue');
    }  
      }
        question7();

   alert("you totle correct answares is "+ counter);

    

    