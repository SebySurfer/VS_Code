/*
Here you can play with the conditions if it has an empty Name or not, the same way for the Question:
*/

let userName = 'Seb';
let userQuestion = '';

if(userName){
  console.log(`Hello ${userName}!`);
 
} else {
  console.log('Hello');
}

if(userQuestion){
  console.log(`So, your question is, ${userQuestion}? The eightball says: `)

} else {
    console.log('Lets see whats the answer for your head:');
}
 

let randomNumber = Math.floor(Math.random() * 8);

switch(randomNumber){
  case 1:
    console.log('It is certain');
    break;
  case 2:
    console.log('It is decidedly so');
    break;
  case 3:
    console.log('Reply hazy try again');
    break;
  case 4:
    console.log('Cannot predict now');
    break;
  case 5:
    console.log('Do not count on it');
    break;
  case 6:
    console.log('My sources say no');
    break;
  case 7:
    console.log('Outlook not so good');
    break;
  case 8:
    console.log('Signs point to yes');
    break;
  default:
  console.log('There is no answer');
  break;

}
