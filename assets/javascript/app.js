$(document).ready(function () {
    var index = 0;
    var countdownTimer = {
        time: 30,
        reset: function () {
            this.time = 30;
            $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
        },
        start: function () {
            counter = setInterval(countdownTimer.count, 1000);
        },
        stop: function () {
            clearInterval(counter);
        },
        count: function () {
            countdownTimer.time--;
            console.log(countdownTimer.time);

            if (countdownTimer.time >= 0) {
                $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
            }
            else {
                index++;
                answerWrong();
                countdownTimer.reset();
                if (index < questionArray.length) {
                    loadQuestion(index);
                } else {
                    $(".answerchoice").hide();
                    showScore();
                }
            }
        }
    };

    var correct = 0;
    var wrong = 0;
    var q1 = {
        question: 'What player has the highest career PPG?',
        possibleAnswers: ['A. Lebron James',
                          'B. Michael Jordan',
                          'C. Larry Byrd',
                          "D. Shaquille O'Neal"],
        flags: [false, true, false, false],
        answer: 'B. Michael Jordant'
    };

    var q2 = {
        question: 'Who was the #1 draft pick in 2003?',
        possibleAnswers: ['A. Vince Carter',
                          'B. Lebron James',
                          'C. James Harden',
                          'D. Kevin Love'],
        flags: [false, true, false, false],
        answer: 'B. Lebron James'
    };

    var q3 = {
        question: 'What team has the best record in one season?',
        possibleAnswers: ['A. Chicago Bulls',
                          'B. Boston Celtics',
                          'C. Golden State Warriors',
                          'D. Detroit Pistons'],
        flags: [false, false, true, false],
        answer: 'C. Golden State Warriors'
    };

    var q4 = {
        question: 'What team holds the record for the most consecutive NBA titles?',
        possibleAnswers: ['A. New York Knicks',
                          'B. Chicago Bulls',
                          'C. San Antonio Spurs',
                          'D. Boston Celtics'],
        flags: [false, false, false, true],
        answer: 'D. Boston Celtics'
    };

    var q5 = {
        question: 'Who is the first player to be drafted #1 without playing college or high school basketball in the U.S.?',
        possibleAnswers: ['A. Yao Ming',
                          'B. John Wall',
                          'C. Derrick Rose',
                          'D. Kobe Bryant'],
        flags: [true, false, false, false],
        answer: 'A. Yao Ming'
    };

    var q6 = {
        question: 'What player holds the record for most consecutive double-doubles in one season since the NBA/ABA merger?',
        possibleAnswers: ['A. Dwight Howard',
                          'B. Kevin Love',
                          'C. Kevin Durant',
                          'D. Kobe Bryant'],
        flags: [false, true, false, false],
        answer: 'B. Kevin Love'
    };

    var q7 = {
        question: 'What Indiana Pacer did Knicks fan Spike Lee anger during the 1994 playoffs by calling him "Cheryl"?',
        possibleAnswers: ['A. Charles Barkley',
                          'B. Reggie Miller',
                          'C. John Stockton',
                          'D. Larry Byrd'],
        flags: [false, true, false, false],
        answer: 'B. Reggie Miller'
    };



    var questionArray = [q1, q2, q3, q4, q5, q6, q7];

    function displayQuestion(questionSelection) {
        console.log(questionSelection);
        countdownTimer.reset();
        $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
        $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
        $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
        $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
        $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
    }


    function setup() {
        index = 0;
        $('.question').append('<button id="startButton">Start</button>');
        $('#startButton').on('click', function () {
            $(this).hide();
            countdownTimer.start();
            displayQuestion(index);
        });
    }

    function getAnswer() {

        $('.answerchoice').on('click', function () {
            index++;
            $(".question").text('');
            $("#buttonA").text('');
            $("#buttonB").text('');
            $("#buttonC").text('');
            $("#buttonD").text('');
            displayQuestion();
        })
    }

    function answerCorrect() {
        correct++;
        console.log("correct");
    }

    function answerWrong() {
        wrong++;
        console.log("wrong");
    }

    function showScore() {
        $('.question').empty();
        $('.question').append("<h2><p>" + correct + " correct</p></h2>");
        $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
        countdownTimer.stop();
        $('.timer').empty();

    }


    setup();
    $('.answerchoice').on('click', function () {
        console.log($(this));
        if (this.id == 'buttonA') {
            var answerChosen = 'A';
        } else if (this.id == 'buttonB') {
            answerChosen = 'B';
        } else if (this.id == 'buttonC') {
            answerChosen = 'C';
        } else if (this.id == 'buttonD') {
            answerChosen = 'D';
        }
        if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
            answerCorrect();
        } else if (answerChosen == 'A') {
            answerWrong();
        }
        if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
            answerCorrect();
        } else if (answerChosen == 'B') {
            answerWrong();
        }
        if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
            answerCorrect();
        } else if (answerChosen == 'C') {
            answerWrong();
        }
        if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
            answerCorrect();
        } else if (answerChosen == 'D') {
            answerWrong();
        }

        $(".question").text('');
        $("#buttonA").text('');
        $("#buttonB").text('');
        $("#buttonC").text('');
        $("#buttonD").text('');
        index++;
        if (index < questionArray.length) {
            displayQuestion(index);
        } else {
            $(".answerchoice").hide();
            showScore();
        }
    });

});