




// function get value from input to create quiz
function addQuestion(event){
    let listQuestion={}
    // set value of question and add to list
    let question=document.querySelector("#question").value;
    listQuestion["question"]=question
    // set value of choice and add to list
    let choices=document.querySelectorAll("input[name='choice']")
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
    // displayQuestion()
}

// main data of question
let DataAllQuestion=[]
// add question button
let btnAdd=document.getElementById('btn-add-question')
btnAdd.addEventListener('click',addQuestion)
