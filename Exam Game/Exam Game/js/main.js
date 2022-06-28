
var word = "Word";
var answer;
var wordMaxWidth = 40;
var score =0;

function newWord() {
    //document.getElementById("demo").style.color = "red";
    var randomValue = randomString(wordMaxWidth);
    word = randomValue;
    document.getElementById("txWord").innerHTML = word;
    //document.getElementById("txScore").innerHTML = 0;

    genrateQuestin();
}

function randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
}


function genrateQuestin() {

    var random = Math.floor(Math.random() * 5) + 1;
    switch (random) {

        case 1: {
            var localRandom = Math.floor(Math.random() * 35) + 1;
            var question = "What is the Character at index " + localRandom + "?";
            document.getElementById("txQuestion").innerHTML = question;
            answer = word.charAt(localRandom);
            break;
        }

        case 2:{
            var firstLocation = Math.floor(Math.random() * 35) + 1;
            var secLocation = firstLocation+1;
            var searchString = word.charAt(firstLocation) + ""+word.charAt(secLocation);

            var question = "Where did "+searchString+" First Located index?";
            document.getElementById("txQuestion").innerHTML = question;
            answer = word.indexOf(searchString);
            break;
        }

        case 3:{
            var firstLocation = Math.floor(Math.random() * 35) + 1;
            var searchString = word.charAt(firstLocation);

            var question = "Where did "+searchString+" Last Located index?";
            document.getElementById("txQuestion").innerHTML = question;
            answer = word.lastIndexOf(searchString);
            break;
        }

        case 4:{
            var firstLocation = Math.floor(Math.random() * 35) + 1;
            var secLocation = firstLocation+2;

            var question = "What will substring("+firstLocation+","+secLocation+") get you?";
            document.getElementById("txQuestion").innerHTML = question;
            answer = word.substring(firstLocation,secLocation);
            break;
        }
        case 5:{
            var firstLocation = Math.floor(Math.random() * 35) + 1;
            var secLocation = firstLocation+2;

            var question = "What will substr("+firstLocation+","+secLocation+") get you?";
            document.getElementById("txQuestion").innerHTML = question;
            answer = word.substr(firstLocation,secLocation);
            break;
        }

        default :{
            var localRandom = Math.floor(Math.random() * 35) + 1;
            var question = "What is the Character at index " + localRandom + "?";
            document.getElementById("txQuestion").innerHTML = question;
            answer = word.charAt(localRandom);
            break;
        }

    }

}


function answerQuestion() {
    var Localanswer = document.getElementById("txAnswer").value;
    if(Localanswer!= answer){
        score =score-1;
        document.getElementById("txScore").innerHTML = score;
        document.getElementById("txScore").style.color = "red";
    }else{
        score =score+1;
        document.getElementById("txScore").innerHTML = score;
        document.getElementById("txScore").style.color = "limegreen";

        genrateQuestin();
    }
 
}
