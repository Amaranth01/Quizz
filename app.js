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
        Question: "Quelle est la phrase que dit souvent Buzz l'éclair ?",
        choicesAnswer: ["Buzz l'éclair à la rescousse !", "Poussez-vous je suis le roi !", "Pars très loin et ne revient jamais !", "Vers l'infini et au-delàs !"],
        answer: 3
    },
    {
        Question: "Quels sont les animaux utilisés pour le croquet dans Alice aux pays des marveilles ?",
        choicesAnswer: ["Une mouette et une souris", "Un flamand rose et un hérisson", "Le lièvre et la tortue", "Boule et Bill"],
        answer: 1
    },
    {
        Question: "Laquelle de ces conditions ne fait pas partie des conditions initiales pour s'occuper d'un mogwaï ?",
        choicesAnswer: ["Ne pas les mouiller", "Ne pas les nourrir après minuit", "Ne pas les exposer à la lumière du soleil","Ne pas les toucher"],
        answer: 3
    },
    {
        Question: "De qui Eivor est-il la réincarnation ?",
        choicesAnswer: ["De Freya", "D'Odin", "De Loki", "De Thor"],
        answer: 1
    },
    {
        Question: "Gandalf dans la mythologie Nordique est",
        choicesAnswer: ["Un Nain","Un elfe","Un humain","Un magicien",],
        answer: 0
    },
]
let index = 0;
let answers = $('.answers');
let choices = $('#choices');
let scoreAll = $('#scoreAll');
//hide the elements of questions
choices.hide();
scoreAll.hide();

//Start the game
$('#start').click(function() {
    $('#start').hide();
    choices.show();
    scoreAll.show();
    seeQuestion();
});

//See the questions in HTML
function seeQuestion () {
    for (let element of Question) {
    $('#quiz').text(Question[index].question);
        console.log("sdf")
    }
}

//Create button for the answers

Question[index].choicesAnswer.forEach(function (){
    answers.text(Question[index].choicesAnswer);
    console.log("tyu");
})

answers.click(function (){
// Verify if the answer is correct
    let score = $('#score');
    let point = 0;
    if (Question.answer=== Question[index].choicesAnswer.index) {
        score.text(point++);
        console.log("aze")
    }
    //go to the next question
    this.Question[index].question++;
    console.log('test click');
});
// créer la fenêtre de récap :D

console.log(Question)