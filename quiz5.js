const quizData = [
    
    {
        question: "what is use of bootstrap?",
        a: "To creative a responsive mobile website",
        b: "To create app",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "a",
    },
    {
        question: "What is the correct HTML for referring to an external style sheet?",
        a: "linkrel",
        b: "link1",
        c: "link2",
        d: "link3",
        correct: "a",
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet",
        a: "In the head",
        b: "in the corner",
        c: "in the leftside",
        d: "in the rightside",
        correct: "a",
    },
    
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})