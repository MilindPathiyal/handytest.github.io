const options=document.querySelector(".options").children;
const answerTrackerContainer=document.querySelector(".answers-tracker");
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const question=document.querySelector(".question");
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
let questionIndex = 0;
let index = 0;
let move = 0;
let score = 0;
const questions = [
  {
    q:"What is the recommended time to scrub your hands with soap?",
    options:["0-5 Seconds", "5-10 Seconds", "10-15 Seconds", "15-20 Seconds"],
    answer:3
  },
  {
    q:"How many hand movements for effective handwashing are recommedned by CDC?",
    options:["3 Movements", "6 Movements", "5 Movements", "4 Movements"],
    answer:2
  },
  {
    q:"What is the recommended time to scrub your hands with hand sanitzer?",
    options:["0-5 Seconds", "5-10 Seconds", "10-15 Seconds", "15-20 Seconds"],
    answer:3
  },
]

totalQuestionSpan.innerHTML=questions.length;
function load(){
  questionNumberSpan.innerHTML=index+1;
  question.innerHTML=questions[questionIndex].q;
  op1.innerHTML=questions[questionIndex].options[0];
  op2.innerHTML=questions[questionIndex].options[1];
  op3.innerHTML=questions[questionIndex].options[2];
  op4.innerHTML=questions[questionIndex].options[3];
  index++;
}

function check(element){
  if(element.id==questions[questionIndex].answer){
    element.classList.add("correct");
    updateAnswerTracker("correct")
    score++;
  }
  else{
    element.classList.add("wrong");
    updateAnswerTracker("wrong")
  }
  disabledOptions()
}

function disabledOptions(){
  for(let i=0;i<options.length;i++){
    options[i].classList.add("disabled");
    if(options[i].id==questions[questionIndex].answer){
      options[i].classList.add("correct");
    }
  }
}

function enableOptions(){
  for(let i=0;i<options.length;i++){
    options[i].classList.remove("disabled","correct","wrong");
  }
}


function validate(){
  if(!options[0].classList.contains("disabled")){
    alert("Please select one option.")
  }
  else{
    enableOptions();
    nextQuestion();
  }
}

function next(){
  validate();
}

function nextQuestion(){
  move++;
  questionIndex = move;
  if(move == questions.length){
    document.querySelector(".quiz-over").classList.add("show");
  }
  else{
    load();
  }

}

function answerTracker(){
  for(let i=0;i<questions.length;i++){
    const div=document.createElement("div")
      answerTrackerContainer.appendChild(div);
  }
}
function updateAnswerTracker(className){
  answerTrackerContainer.children[index-1].classList.add(className);

}
window.onload=function(){
  load();
  answerTracker();
}
