var quiz = [
    {
        Question: 'How many Tastes bud Does your Tongue have?',
        rightAns: "3000",
        options: [
            "1000",
            "4000",
            "1400",
            '3000'
        ]
    },

    {
        Question: 'What is always in front of you but cant be seen ?',
        rightAns: "Future",
        options: [
            "Skills",
            "Knowledge",
            "Churail",
            'Future'
        ]
    },
    {
        Question: 'Which Element is known as the building block of life ?',
        rightAns: "Carbon",
        options: [
            "Hydrogen",
            "Carbon",
            "Oxygen",
            "Nitrogen",
        ]
    },
    {
        Question: 'What is the largest bone in the human body?',
        rightAns: "Femur",
        options: [
            "Tibia",
            "Radius",
            "Femur",
            "Humerus",
        ]
    }

    ,
    {
        Question: 'What is the closest Planet to the sun?',
        rightAns: "Mercury",
        options: [
            "Mars",
            "Mercury",
            "Venus",
            "Earth",
        ]
    },
    {
        Question: 'What is the largest mammal  in the world ?',
        rightAns: "Blue Whale",
        options: [
            "Blue Whale",
            "African Elephant",
            "Whale Shark",
            "Giraffe",
        ]
    },

    {
        Question: 'Which Planet is know as the "Morning star" or "Evening Star"   ?',
        rightAns: "Venus",
        options: [
            "Mars",
            "Jupiter",
            "Saturn",
            "Venus",
        ]
    },
    {
        Question: 'Which food item never spoil ?',
        rightAns: "Honey",
        options: [
            "Beef jerky",
            "Honey",
            "Creal",
            "Beans",
        ]
    },
    {
        Question: 'About how many scents can a human nose remember ?',
        rightAns: "50,000",
        options: [
            "10,000",
            "50,000",
            "20,000",
            "25,000",
        ]
    },
    {
        Question: 'Which planet is known as the red planet ?',
        rightAns: "Mars",
        options: [
            "Mars",
            "Venus",
            "Mercury",
            "Saturn",
        ]
    },
];

var score = 0;



function showQuestions(e) {
    // show Q
    var questionElement = document.getElementById('question')
    console.log(questionElement.innerHTML = quiz[e].Question);

    // display options

    document.getElementById('flexRadioDefault1').nextElementSibling.innerHTML = quiz[e].options[0];
    document.getElementById('flexRadioDefault2').nextElementSibling.innerHTML = quiz[e].options[1];
    document.getElementById('flexRadioDefault3').nextElementSibling.innerHTML = quiz[e].options[2];
    document.getElementById('flexRadioDefault4').nextElementSibling.innerHTML = quiz[e].options[3];

}
var currenQuestion = 0;



function nextQues() {
var msg=document.getElementById('msg')
    if (currenQuestion < quiz.length - 1) {
        currenQuestion++;
        showQuestions(currenQuestion);
    } else {
      msg.innerHTML ='You have completed the quiz!' 
    }
}



function matchOption(dets) {
    var selectedOption = dets.nextElementSibling.innerHTML;
    var correctAnswer = quiz[currenQuestion].rightAns;
    var scoreElement = document.getElementById('scoring');
    if (selectedOption === correctAnswer) {
        score++;
        console.log('Correct Answer! Current Score:', score);
        scoreElement.innerHTML = 'Scores :' + score+'/10' ;

    } else {
        console.log('Wrong Answer!');
        scoreElement.innerHTML = score ;

    }


}
