// ..............hide show........................................//
// back from edit quiz to menu//
function goToMenu() {
    if (document.getElementById('menu')) {
        if (document.getElementById('menu').style.display == 'none') {
            document.getElementById('menu').style.display = 'block';
            document.getElementById('edit-quiz').style.display = 'none';
            document.getElementById('do-quiz').style.display = 'none';
        }
    }
}

//back from do quiz to menu//
function backToMenu() {
    if (document.getElementById('menu')) {
        if (document.getElementById('menu').style.display == 'none') {

            document.getElementById('menu').style.display = 'block';
            document.getElementById('edit-quiz').style.display = 'none';
            document.getElementById('do-quiz').style.display = 'none';
        }
    }
}
// function to display Edit quiz page
 function displayEditQuizPage(){
    if (document.getElementById('edit-quiz')) {
        if (document.getElementById('edit-quiz').style.display == 'none') {
            document.getElementById('menu').style.display = 'none';
            document.getElementById('edit-quiz').style.display = 'block';
            document.getElementById('do-quiz').style.display = 'none';
        }
    }
 }
// function display do quiz page

function displayDoQuiz(){
    if (document.getElementById('do-quiz')) {
        if (document.getElementById('do-quiz').style.display == 'none') {
            document.getElementById('menu').style.display = 'none';
            document.getElementById('edit-quiz').style.display = 'none';
            document.getElementById('do-quiz').style.display = 'block';       
        }
    }
}
// function remove question
function remove(event){
    let itemForRemove=event.target.id
    DataAllQuestion.splice(itemForRemove,1)
    displayQuestion()
    console.log(itemForRemove)
}
// function to check input answer 
function answerCheck(){
    let checkAnswer=document.querySelectorAll(".label-choice")
    for(let choiceOfAnswer of checkAnswer){
        if (choiceOfAnswer!==""){
            return(true)
        }
    }
    return(false)
}
// function to check radion 
function radioCheck(){
    let checkRadio=document.getElementsByName("choice")
    for(let radios of checkRadio){
        if(radios.checked){
            return(true)
        }
    }
    return(false)
}
// hide do-quiz page and edit quiz page//
var  editQuiz= document.getElementById("edit-quiz");
editQuiz.style.display='none';
var  doQuiz= document.getElementById("do-quiz");
doQuiz.style.display='none';

// .............display question......................................//
// / function to show the question//
function displayQuestion(event){
    let content=document.querySelector("#question-content")
    // delet item
    let oldCard = document.getElementsByClassName("card");
    if (oldCard.length>0){
        oldCard[0].remove()
    }
    let card =document.createElement("div")
    card.className="card"
    content.appendChild(card)
    for(let objects of DataAllQuestion){
        // creat div with class name card and append to #question-content
        let card_question=document.createElement("div")
        card_question.className="card_question"
        card.appendChild(card_question)
        // creat p for question and append to card
        let question=document.createElement("p")
        question.className="question"
        question.textContent=objects["question"]
        card_question.appendChild(question)
        // loop on ["answers"]
        let card_answers=document.createElement("div")
        card_answers.className="choies"
        card_question.appendChild(card_answers)
        for(let i of objects['answers']){
            let answer=document.createElement("p")
            answer.className="answer"
            // checked if radion checked
            answer.textContent=i
            card_answers.appendChild(answer)
        }
        // create icon delete
        let deletes=document.createElement("i")
        deletes.className="fa fa-trash"
        deletes.addEventListener("click",remove)
        console.log(deletes)
        card_question.appendChild(deletes)
        // create icon edit
        let edit=document.createElement("i")
        edit.className="fa fa-edit"
        console.log(edit)
        card_question.appendChild(edit)
    }
}
// .............................add question...................//
// number of each question
let OrderOfquestion=0
// function get value from input to create quiz
function addQuestion(event){
    let listQuestion={}
    let titlequiz=document.querySelector('.tittle').value
    listQuestion.title=titlequiz
    // set value of question and add to list
    let question=document.querySelector("#question").value;
    // set value of choice and add to list
    let choices=document.querySelectorAll("input[name='choice']")
    let choice=0
    // set value of eachanswer and add to list
    let AllAnswers=[]
    let answers=document.querySelectorAll("input[name='label-choice']")     
    // get the score
    let score= document.querySelector("#score").value;
    // // display what user have added
    if(question.value!=="" && radioCheck() && answerCheck()){
        // value of question
        listQuestion["question"]=question
        // answer choice
        for (let index=0; index<choices.length;index++){
            if(choices[index].checked){
                choice=index+1;
                console.log(choice)
            }
        }
        listQuestion["choice"]=choice

        // value of answer
        for(let answer of answers){
            AllAnswers.push(answer.value)
        }
        // add answer
        listQuestion["answers"]=AllAnswers
        // add score
        listQuestion["point"]= score;
        // increas id of each question
        OrderOfquestion+=1
        // set id of each qeustion
        listQuestion["idQuestion"]=OrderOfquestion
        // append listQuesion to DataAllQuestion
        DataAllQuestion.push(listQuestion)
        // call function to display
        displayQuestion()
        saveQuiz()
        // make all input empty agian
        document.querySelector("#question").value=""
        let radioClearForm=document.getElementsByName("choice")
        for(let rad of radioClearForm){
            if(rad.checked){
                rad.checked=false
            }
        }
        let clearAnswerForm=document.querySelectorAll(".label-choice")
        for(let clears of clearAnswerForm){
            clears.value=""
        }
    }else{
        alert("YOU MUST FILL ALL!")
    }
    console.log(DataAllQuestion);

}
var num=0
let  number=0
function saveQuiz(event){
    // // remove the answer that have duble
     let quizCards = document.getElementsByClassName("quiz-card");
    if (quizCards.length>0){
         quizCards[0].remove()
    }
        // // create card content question and answers
        let componant=document.querySelector('.nav-quiz')
        let cardQuiz=document.createElement('div')
        cardQuiz.className='quiz-card'
        componant.appendChild(cardQuiz)

        // loop on the array to get all value on array
        for (let obj of DataAllQuestion){
            // to get title quiz
            let cardTitle=document.createElement('div')
            cardTitle.className='titleCard'
            
            let cardTitles=document.createElement('p')
            cardTitles.className='titles'
            cardTitles.textContent=obj['title']
            if (cardTitles!=''){
                cardTitle.appendChild(cardTitles)
                cardQuiz.appendChild(cardTitle)
            }
            // to get the question quiz
            let cardQuestions=document.createElement('div')
            cardQuestions.className='questionCard'
            cardQuiz.appendChild(cardQuestions)
            let cardQuestion=document.createElement('p')
            cardQuestion.className='questions'
            cardQuestion.textContent=obj['question']
            cardQuestions.appendChild(cardQuestion)
            // card to content only answers
            
            let answerCard=document.createElement('div')
            answerCard.className='cardAnswer'
            cardQuestions.appendChild(answerCard)
            let rad=document.createElement('p')
            rad.textContent=obj['choice']
            
            // loop on key answers to get the each answer
            for (let answer of obj['answers']){
                let answerInp=document.createElement('div')
                answerInp.className='eachAnswer'
                let answers=document.createElement('p')
                answers.className='answerQuiz'
                let radio=document.createElement('input')
                radio.type="radio"
                var radioNames='radio'+ num.toString()
                radio.name=radioNames
                radio.id='choiceAnswer'
                radio.value=number+1
                answers.textContent=answer
                answerInp.appendChild(radio)
                answerInp.appendChild(answers)
                answerCard.appendChild(answerInp)
                
                number+=1
                if(number==4){
                    number=0
                }
            }
            num+=1
        }
}
let arrayCorrection=[]
let arrayCheckanswer=[]
let counter=0
// // show the correction answers
function correctionAsnwers(){
    let idRadio=document.querySelectorAll('#choiceAnswer')
        for (let i of idRadio){
            if(i.checked){
                newNumber=i.value
                arrayCheckanswer.push(newNumber)
            }
        }
        for (let object of DataAllQuestion){
            let correct=object['choice']
            arrayCorrection.push(correct)            
        }
        let totalScore=0
        for (let n in arrayCorrection){
            totalScore+=10
            let score=document.getElementById('scoreResult')
            if (arrayCorrection[n]==arrayCheckanswer[n]){
            counter+=10
            score.textContent=counter +'/'+ totalScore
            }
    }

}

var DataAllQuestion=[
    {   title:"First Second and Third conditional Quiz",
        answers:["Will be", "Were", "Had be", "Would have been"],
        choice:"2",
        idQuestion:1,
        point:"5",
        question:"1. If I _______________ stronger,I'd help you carry the piano."
    },
    {
        answers:["Will stop", "Had stopped", "Would stop", "Would have stopped"],
        choice:"4",
        idQuestion:1,
        point:"5",
        question:"2. If we'd seen you, we _____________."
    },
    {
        answers:["Meet", "Had met", "Would meet", "Would have met"],
        choice:"1",
        idQuestion:1,
        point:"5",
        question:"3.If we ___________ him tomorrow,we'll say hello."
    },
    {
        answers:["Has", "Will have", "Had had", "Had"],
        choice:"3",
        idQuestion:1,
        point:"5",
        question:"4. He would have repaired the car himself if he ______________ the tools."
    },
    {
        answers:["Will break", "Broke", "Would break", "Would have broken"],
        choice:"1",
        idQuestion:1,
        point:"5",
        question:"5. If you drop the vase,it__________________."
    },
    {
        answers:["Will not pass", "Did not pass", "Had not passed", "Would not have passed"],
        choice:"4",
        idQuestion:1,
        point:"5",
        question:"6. If hadn't studied, I _____________ the exam."
    },
    {
        answers:["Have", "Had", "Had had", "Would have had"],
        choice:"2",
        idQuestion:1,
        point:"5",
        question:"7. I wouldn't go to school by bus if I __________ a driving license."
    },
    {
        answers:["Doesn't see", "Hadn't seen", "Didn't see", "Wouldn't see"],
        choice:"3",
        idQuestion:1,
        point:"5",
        question:"8. If she _________ him every day,she'd be lovesick."
    },
    {
        answers:["Won't travel", "Didn't travel", "Hadn't traveled", "Wouldn't travel"],
        choice:"1",
        idQuestion:1,
        point:"5",
        question:"9. I _______________ to London if I don't get a cheap flight."
    },
    {
        answers:["Tell", "Told", "Had told", "Would have told"],
        choice:"2",
        idQuestion:1,
        point:"5",
        question:"10. We'd be stupid if we ___________ him about our secret."
    }


]

// main data of question
// let DataAllQuestion=[]

// // btn sumbit quiz
let btnSubmit=document.getElementById('btn-submit')
btnSubmit.addEventListener('click',correctionAsnwers)

// btn to display quiz
let btnSave=document.getElementById('btn-start')
btnSave.addEventListener('click',saveQuiz)

// btn go to start quiz
let startButton = document.getElementById('btn-start');
startButton .addEventListener('click', displayDoQuiz )

// btn go to creat quiz
let createButton = document.getElementById('btn-create');
createButton.addEventListener('click', displayEditQuizPage)

// btn go to menu
let backButton = document.getElementById('btn-back');
 backButton.addEventListener('click',goToMenu)
 
// button back to menu
let btn_back = document.getElementById('btn-back1');
btn_back.addEventListener('click',backToMenu)

// add question button
let btnAdd=document.getElementById('btn-add-question')
btnAdd.addEventListener('click',addQuestion)

