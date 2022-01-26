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

let backButton = document.getElementById('btn-back');
 backButton.addEventListener('click',goToMenu)

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

let btn_back = document.getElementById('btn-back1');
btn_back.addEventListener('click',backToMenu)

 
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

 let createButton = document.getElementById('btn-create');
 createButton.addEventListener('click', displayEditQuizPage)

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

let startButton = document.getElementById('btn-start');
startButton .addEventListener('click', displayDoQuiz )






// hide do-quiz page and edit quiz page//

var  editQuiz= document.getElementById("edit-quiz");
editQuiz.style.display='none';

var  doQuiz= document.getElementById("do-quiz");
doQuiz.style.display='none';

//...... ..............hide show..........................................................//


// ........................add question...................................................//
// function get value from input to create quiz//
function addQuestion(event){
    let listQuestion={}
    // set value of question and add to list
    let question=document.querySelector("#question").value;
    listQuestion["question"]=question
    // set value of choice and add to list
    let choices=document.querySelectorAll("input[name='choice']");
    let choice=""
    for (let index in choices){
        if(choices[index].checked){
            choice=index.toString();
        }
    }
    listQuestion["choice"]=choice
    // set value of eachanswer and add to list
    let AllAnswers=[]
    let answers=document.querySelectorAll("input[name='label-choice']")
    for(let answer of answers){
        AllAnswers.push(answer.value)
    }
    listQuestion["answers"]=AllAnswers
    // append listQuesion to DataAllQuestion
    DataAllQuestion.push(listQuestion)
    console.log(DataAllQuestion);

    // get the score
    let score= document.querySelector("#score").value;
    listQuestion["point"]= score;
    console.log(score);

    // // display what user have added
    displayQuestion()
}

// main data of question
let DataAllQuestion=[]
// add question button
let btnAdd=document.getElementById('btn-add-question')
btnAdd.addEventListener('click',addQuestion)

//......................................add question............//



// .............disply question......................................//
// / function to show the question//
function displayQuestion(){
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
        // content.appendChild(question)
        // card.appendChild(question);
        card_question.appendChild(question)
        // loop on ["answers"]
        let card_answers=document.createElement("div")
        card_answers.className="choies"
        // card.appendChild(card_answers)
        card_question.appendChild(card_answers)
        for(let i of objects['answers']){
            let answer=document.createElement("p")
            answer.className="answer"
            // checked if radion checked
            answer.textContent=i
            card_answers.appendChild(answer)
        }
    }
}
// .............................add question...................//

