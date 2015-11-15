var allQuestions = [
  {
    question: "Who is the Prime Minisiter of England in 2015?",
    choices: ["Margaret Thatcher", "David Cameron", "Tony Blair", "John Major"],
    correctAnswer:1
  }
];

var elForm = document.getElementById('questionForm');
var questionNumber = 0;
var question = document.getElementById('question');
var questionContent = question.textContent;
var answerChoices = answerOptions(questionNumber);

question.textContent = selectQuestion(questionNumber);

function selectQuestion(number) {
  if (allQuestions.length > 0) {
    return allQuestions[number].question;
  }  
}

function answerOptions(number) {
  var choices = allQuestions[number].choices;
  var div;
  var element;
  var radioLabel;
  for (var i=0; i < choices.length; i++) {
    div = document.createElement('div');
    element = document.createElement('input');
    element.setAttribute('id', choices[i]);
    element.setAttribute('type', 'radio');
    element.setAttribute('name', 'name');
    element.setAttribute('value', choices[i]);
    
    radioLabel = document.createElement('label');
    radioLabel.setAttribute('for', choices[i]);
    radioLabel.textContent = choices[i];
  
    insertAfter(question, div);
    div.appendChild(element);
    div.appendChild(radioLabel);
  }
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function checkAnswer(e, number) {
  e.preventDefault();
  console.log(number);
}

elForm.addEventListener('submit', function(e) {
  checkAnswer(e, questionNumber);
}, false);



