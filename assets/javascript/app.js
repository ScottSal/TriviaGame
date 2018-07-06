$(document).ready(function() {
    var welcome = $("#welcome-screen")
    var gameOver = $("#result-screen")
    var game = $("#game-screen")

    var correct = $("#correct-answers")
    var incorrect = $("#incorrect-answers")
    var unanswered = $("#unaswered")

    var playerInteract = {
        correctAnswers: 0,
        incorrectAnswers: 0,
        unanswered: 8,
        seconds: 60,

        welcome: function() {
            gameOver.toggle();
            game.hide();
        },

        initiate: function() {
            welcome.hide();
            game.show();
            playerInteract.timer();
        },

        timer: function() {
            var windowTimeout = setTimeout(function() {
                game.hide()
                gameOver.show()
                playerInteract.answerCheck()
                playerInteract.scoreCount()
                }, 60000);

            var intervalVariable = setInterval(playerInteract.decrement, 1000);
            var seconds = playerInteract.seconds;  
            
        },

        decrement: function () {
            if (playerInteract.seconds >= 2) {
                playerInteract.seconds--;
                console.log("seconds: " + playerInteract.seconds);
                $("#countdown").text(playerInteract.seconds);
            }
        },

        answerCheck: function() {
            if ($("#correct1").is(':checked')) {
                ++playerInteract.correctAnswers;
                --playerInteract.unanswered;
                playerInteract.scoreCount;
            }
            else if ($("#wrongA").is(':checked') || $("#wrongB").is(':checked') || $("#wrongC").is(':checked')) {
                ++playerInteract.incorrectAnswers;
                --playerInteract.unanswered;
            };
            if ($("#correct2").is(':checked')) {
				++playerInteract.correctAnswers;
				--playerInteract.unanswered;
			} 
			else if ($("#wrongD").is(':checked') || $("#wrongE").is(':checked')  || $("#wrongF").is(':checked')) {
				++playerInteract.incorrectAnswers;
				--playerInteract.unanswered;
			};
			if ($("#correct3").is(':checked')) {
				++playerInteract.correctAnswers;
				--playerInteract.unanswered;
			} 
			else if ($("#wrongG").is(':checked')) {
				++playerInteract.incorrectAnswers;
				--playerInteract.unanswered;
			};
			if ($("#correct4").is(':checked')) {
				++playerInteract.correctAnswers;
				--playerInteract.unanswered;
			} 
			else if ($("#wrongH").is(':checked') || $("#wrongI").is(':checked')  || $("#wrongJ").is(':checked')) {
				++playerInteract.incorrectAnswers;
				--playerInteract.unanswered;
			};
			if ($("#correct5").is(':checked')) {
				++playerInteract.correctAnswers;
				--playerInteract.unanswered;
			} 
			else if ($("#wrongK").is(':checked')) {
				++playerInteract.incorrectAnswers;
				--playerInteract.unanswered;
			};
			if ($("#correct6").is(':checked')) {
				++playerInteract.correctAnswers;
				--playerInteract.unanswered;
			} 
			else if ($("#wrongL").is(':checked') || $("#wrongM").is(':checked')  || $("#wrongN").is(':checked')) {
				++playerInteract.incorrectAnswers;
				--playerInteract.unanswered;
			};
			if ($("#correct7").is(':checked')) {
				++playerInteract.correctAnswers;
				--playerInteract.unanswered;
			} 
			else if ($("#wrongO").is(':checked') || $("#wrongP").is(':checked')  || $("#wrongQ").is(':checked')) {
				++playerInteract.incorrectAnswers;
				--playerInteract.unanswered;
			};
			if ($("#correct8").is(':checked')) {
				++playerInteract.correctAnswers;
				--playerInteract.unanswered;
			} 
			else if ($("#wrongR").is(':checked')) {
				++playerInteract.incorrectAnswers;
				--playerInteract.unanswered;
			};
        },
    
    scoreCount: function() {
       $("#correct-answers").text(playerInteract.correctAnswers);
       $("#incorrect-answers").text(playerInteract.incorrectAnswers);
       $("#unanswered").html(playerInteract.unanswered); 
    }

    };

     window.onload = playerInteract.welcome;

    $("#startButton").on("click", function(event) {
        playerInteract.initiate()
    });

    $("#resetButton").on("click", function(event) {
        window.location.reload();
    });

    $("#countdown").text(playerInteract.seconds);

});