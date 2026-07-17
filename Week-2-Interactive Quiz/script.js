const questions=[

{
question:"Which language is used for styling a webpage?",
answers:["HTML","Python","CSS","Java"],
correct:2
},

{
question:"Which tag is used to create a hyperlink?",
answers:["<img>","<a>","<p>","<h1>"],
correct:1
},

{
question:"JavaScript is mainly used for?",
answers:["Styling","Database","Interactivity","Hosting"],
correct:2
},

{
question:"Which company developed Java?",
answers:["Microsoft","Sun Microsystems","Google","Apple"],
correct:1
},

{
question:"Which symbol is used for comments in JavaScript?",
answers:["//","##","<!-- -->","**"],
correct:0
},

{
question:"Which HTML tag is used for images?",
answers:["<image>","<picture>","<img>","<src>"],
correct:2
},

{
question:"Which CSS property changes text color?",
answers:["font-color","text-color","color","background"],
correct:2
},

{
question:"Which keyword declares a constant variable?",
answers:["var","let","const","static"],
correct:2
},

{
question:"Which method prints something in the browser console?",
answers:["console.log()","print()","echo()","show()"],
correct:0
},

{
question:"Which HTML tag creates a line break?",
answers:["<hr>","<break>","<br>","<lb>"],
correct:2
}

];

let currentQuestion=0;
let score=0;
let answered=false;

const question=document.getElementById("question");
const answers=document.getElementById("answers");
const feedback=document.getElementById("feedback");
const nextBtn=document.getElementById("next-btn");

function loadQuestion(){

answered=false;

feedback.innerHTML="";

nextBtn.disabled=true;

answers.innerHTML="";

let q=questions[currentQuestion];

question.textContent=(currentQuestion+1)+". "+q.question;

q.answers.forEach((answer,index)=>{

let button=document.createElement("button");

button.textContent=answer;

button.onclick=()=>checkAnswer(index,button);

answers.appendChild(button);

});

}

function checkAnswer(selected,button){

if(answered) return;

answered=true;

nextBtn.disabled=false;

let correct=questions[currentQuestion].correct;

let buttons=document.querySelectorAll("#answers button");

buttons.forEach(btn=>btn.disabled=true);

if(selected===correct){

button.classList.add("correct");

feedback.innerHTML="✅ Correct! Great Job.";

feedback.style.color="green";

score++;

}

else{

button.classList.add("wrong");

buttons[correct].classList.add("correct");

feedback.innerHTML="❌ Wrong! Correct Answer : "+questions[currentQuestion].answers[correct];

feedback.style.color="red";

}

}

nextBtn.onclick=function(){

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}

else{

showScore();

}

}

function getMessage(){

let percent=(score/questions.length)*100;

if(percent===100)

return "🏆 Outstanding! Perfect Score!";

else if(percent>=80)

return "🎉 Excellent Work!";

else if(percent>=60)

return "😊 Good Job!";

else if(percent>=40)

return "👍 Keep Practicing!";

else

return "📚 Better Luck Next Time!";

}

function showScore(){

document.querySelector(".quiz-container").innerHTML=`

<div class="final">

<h1>Quiz Completed 🎉</h1>

<div class="circle">

<h1>${score}</h1>

<p>out of ${questions.length}</p>

</div>

<h2>${getMessage()}</h2>

<button onclick="location.reload()">Play Again</button>

</div>

`;

}

loadQuestion();