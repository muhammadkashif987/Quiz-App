const quizData=[
    {
        question:"who is making the web standards?",
        a: "google",
        b: "microsoft",
        c: "mozilla",
        d: "the world wibe connection",
        correct:"d",

    },
    {
        question:"choose the correct HTML element for largest heading: ",
        a: "<head>",
        b: "<headings>",
        c: "<h1>",
        d: "<h6>",
        correct:"c",

    },
    {
        question:"what does CSS stands for?",
        a: "central style sheets",
        b: "cascading style sheets",
        c: "cascading simple sheets",
        d: "cars suvs sailboats ",
        correct:"b",

    },
    {
        question:"what does HTML stands for?",
        a: "hypertext markup language",
        b: "hypertext markdown language",
        c: "hyperloop machine language",
        d: "high level markeup language",
        correct:"a",

    },
    {
        question:"what is the correct HTML tag for adding a line break?",
        a: "<hr>",
        b: "<br>",
        c: "<p>",
        d: "<a>",
        correct:"b",

    },
]

const quiz= document.getElementById("quiz");
const answerE1s= document.querySelectorAll(".answer");
const questionE1= document.getElementById("question");
const a_text= document.getElementById("a_text");
const b_text= document.getElementById("b_text");
const c_text= document.getElementById("c_text");
const d_text= document.getElementById("d_text");

const submitBtn=document.getElementById("submit");

let currentQuiz=0;
let score=0;
loadQuiz();

function loadQuiz(){
    deselectAnswers()
    const currentQuizData=quizData[currentQuiz]

    questionE1.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
}

function deselectAnswers(){
    answerE1s.forEach(answerE1 => 
        answerE1.checked=false);
}


function getSelected(){
    // let answerE1s;
    answerE1s.forEach(answerE1 =>{
        if(answerE1.checked){
            answer = answerE1.id;
        }
    })
    return answer;
}
submitBtn.addEventListener(`click`, ()=>{
    const answer=getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML=`
            <h2> you answered ${score}/${quizData.length} questions correctly</h2>
            <button class="btn-2" onclick="location.reload()">reload</button>
            
            `
        }
    }
})
// let show=document.getElementById(quiz);
function showQuiz(){
    document.getElementById("quiz").className="active";
    document.getElementById("btn-1").className="hide";
}