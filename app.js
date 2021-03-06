const Question = [
    {
        question: "Comment se nomme le plombier créé par les japonais ?",
        choicesAnswer: [ "Bowser", "Mario", "Zelda", "Chépas"],
        answer: 1
    },
    {
        question: "Quel est le troisième pokémon que Sacha capture?",
        choicesAnswer : [ "Bulbizarre", "Salamèche", "Carapuce", "Roucoups"],
        answer: 3
    },
    {
        question: "Quel personnage de Walking Dead se bat avec des sabres ?",
        choicesAnswer: [ "Michonne", "Jack", "Rick", "Glenn"],
        answer: 0
    },
    {
        question: "A quelle vitesse doit aller une Delorean pour retourner vers le futur ?",
        choicesAnswer: ["88 Miles","221 Miles", "42 Miles","25 Miles"],
        answer: 0
    },
    {
        question: "Dans quel manga et animé les personnages possèdent des queues de singes ?",
        choicesAnswer: ["Naruto", "One Piece", "Dragon Ball", "L'attaque des Titans"],
        answer: 2
    },
    {
        question: "Quelle est la phrase que dit souvent Buzz l'éclair ?",
        choicesAnswer: ["Buzz l'éclair à la rescousse !", "Poussez-vous je suis le roi !", "Pars très loin et ne revient jamais !", "Vers l'infini et au-delàs !"],
        answer: 3
    },
    {
        question: "Quels sont les animaux utilisés pour le criquet dans Alice aux pays des marveilles ?",
        choicesAnswer: ["Une mouette et une souris", "Un flamand rose et un hérisson", "Le lièvre et la tortue", "Boule et Bill"],
        answer: 1
    },
    {
        question: "Laquelle de ces conditions ne fait pas partie des conditions initiales pour s'occuper d'un mogwaï ?",
        choicesAnswer: ["Ne pas les mouiller", "Ne pas les nourrir après minuit", "Ne pas les exposer à la lumière du soleil","Ne pas les toucher"],
        answer: 3
    },
    {
        question: "De qui Eivor est-il la réincarnation ?",
        choicesAnswer: ["De Freya", "D'Odin", "De Loki", "De Thor"],
        answer: 1
    },
    {
        question: "Dans la mythologie nordique Gandalf est",
        choicesAnswer: ["Un Nain","Un elfe","Un humain","Un magicien"],
        answer: 0
    },
]

let index = 0;
let answers = document.getElementsByClassName('answers');
let choices = $('#choices');
let scoreAll = $('#scoreAll');
let quiz = $('#quiz');
let point = 0;
let score = $('#score');
let sum = document.getElementById('sum');

//hide the elements of questions
choices.hide();
scoreAll.hide();
quiz.hide();
$('#allAnswers').hide();
$('#sum').hide();

//Start the game
$('#start').click(function() {
    $('#start').hide();
    $('#text').hide();
    $('#title').hide();
    quiz.show();
    choices.show();
    scoreAll.show();
    seeQuestion(index);
});

//See the questions in HTML
function seeQuestion (next) {
    for (let element of Question) {
        quiz.text(Question[next].question);
        //Create button for the answers
        for (let i = 0; i < answers.length; i++) {
            answers[i].innerHTML = (Question[index].choicesAnswer[i]);
        }
    }
}

for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener('click', function () {
// Verify if the answer is correct
        if ( Question[index].answer === i) {
            score.text(point +=1);
        }
        //go to the next question
        index++;
        if( index< Question.length) {
            seeQuestion(index);
        }
        else {
            quiz.hide();
            choices.hide();
            scoreAll.hide();
            $('#sum').show();
            sum.innerHTML = "Les bonnes réponses étaient : " + "<br>" +
            "Comment se nomme le plombier créé par les japonais ? Réponse : Mario" + "<br>" + "<br>" +
            "Quel est le troisième pokémon que Sacha capture ? Réponse : Roucoups" + "<br>" + "<br>" +
            "Quel personnage de Walking Dead se bat avec des sabres ? Réponse : Michonne" + "<br>" + "<br>" +
            "A quelle vitesse doit aller une Delorean pour retourner vers le futur ? Réponse : 88 Miles" + "<br>" + "<br>" +
            "Dans quel manga et animé les personnages possèdent des queues de singes ? Réponse : Dragon Ball" + "<br>" + "<br>" +
            "Quelle est la phrase que dit souvent Buzz l'éclair ? Réponse : Vers l'infini et au-delàs !" + "<br>" + "<br>" +
            "Quels sont les animaux utilisés pour le criquet dans Alice aux pays des marveilles ? Réponse : Un flamand rose et un hérisson"+ "<br>" + "<br>" +
            "Laquelle de ces conditions ne fait pas partie des conditions initiales pour s'occuper d'un mogwaï ? Réponse : Ne pas le toucher" + "<br>" + "<br>" +
            "De qui Eivor est-il la réincarnation ? Réponse : D'Odin" + "<br>" + "<br>" +
            "Dans la mythologie nordique Gandalf est... Réponse : Un nain";

        }
    });
}