



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
// function to show the question
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


// number of each question
let OrderOfquestion=0
// function get value from input to create quiz
function addQuestion(event){
    let listQuestion={}
    // set value of question and add to list
    let question=document.querySelector("#question").value;
    // set value of choice and add to list
    let choices=document.querySelectorAll("input[name='choice']")
    let choice=""
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
        for (let index in choices){
            if(choices[index].checked){
                choice=index.toString();
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
        console.log(DataAllQuestion);
        console.log(OrderOfquestion);
        console.log(score);
        // call function to display
        displayQuestion()
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

}

// main data of question
let DataAllQuestion=[]
// add question button
let btnAdd=document.getElementById('btn-add-question')
btnAdd.addEventListener('click',addQuestion)
