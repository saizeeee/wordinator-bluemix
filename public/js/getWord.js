var words = {
   "meaning":["to speak in favor of"," deviation from the normal"," extreme dislike"," to refrain"," to make impure"," lack of interest or emotion"," bold"," to lessen"," to support"," unpredictable"," harsh sounds"," to support with evidence"," opposite of harmony"," to make fun of"," dry out thoroughly"," labyrinthine"," learned"," produce"," lasting for a short period of time"," speak in ambiguous manner"," to reduce in strength"," speech in praise of someone"," extremely hot"," talkative"," easily cheated"," of similar kind"," innocent"," clear and easy to understand"," concise "," slow and sluggish in manneror torpid"," worthy of praise"," talkative"," capable of being shaped or formed"," a person who hates mankind"," to lessen or to pacify or to alleviate"," impenetrable to lightor not reflecting light"," hardhearted or inflexibleor stubborn or unyielding"," boastful/excessive showiness"," one who shows off learningor bookish"," Dealing or concerned with facts or actual occurrencesor practical","to pacify or to mollifyor to lessen"," To throw from or as if from a great height or hurl downward"," wastefulor lavishor extravagant"," correct behaviour or decorum"," contradiction"," a person who loves mankindor gives charity"," to lie or deviate from the truth"," to regard with respect"," to waveror to oscillate"," erraticor unpredictable or capricious"," to oscillate or to fluctuate"," passionate or enthusiastic"],
   "word":["Advocate ","Anomaly ","Antipathy ","Abstain ","Adulterate ","Apathy ","Audacious ","Assuage ","Bolster ","Capricious ","Cacophony ","Corroborate ","Dissonance ","Deride ","Desiccate ","Enigma ","Erudite ","Engender ","Ephemeral ","Equivocate ","Enervate ","Eulogy ","Fervid ","Garrulous ","Gullible ","Homogeneous ","Ingenuous ","Lucid ","Laconic ","Lethargic ","Laudable ","Loquacious ","Malleable ","Misanthrope ","Mitigate ","Opaque ","Obdurate ","Ostentation ","Pedant ","Pragmatic ","Placate ","Precipitate ","Prodigal ","Propriety ","Paradox ","Philanthropic ","Prevaricate ","Venerate ","Vacillate ","Volatile ","Waver ","Zeal "]
};


function getMeaning(wordy) {
    var i;
    console.log("aaasas")
    console.log(wordy)
    for(i=0;i<words.meaning.length;i++)
    {
        //console.log(words.word[i])
        if(words.word[i].trim() === wordy) {
            return words.meaning[i];
        }
    }
    
}

function wordlist(){
                  
                  var length = words.meaning.length;
                  //console.log(typeof arr);
                  var randNumber = Math.floor(Math.random()*length);
                    console.log(randNumber);
                    //console.log(arr[randNumber].meaning)
                  var word = words.word[randNumber];
                  var meaning = words.meaning[randNumber];
                  
                  meaning = meaning.trim();
                  word = word.trim();
    
                  wordDiv = document.getElementById("word");
                  meaningDiv = document.getElementById("mean");
                  
                  wordDiv.innerHTML = word;
                  meaningDiv.innerHTML = meaning;
              }
              
window.onload = wordlist;

document.getElementById("nextWord").onclick = wordlist;




