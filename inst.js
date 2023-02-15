var wordList = new Array; 
function enter() {
    var inputs = document.getElementById("listeWord").value;
    wordList.push(inputs);
    console.log("The text boxvalue=" + document.getElementById('listeWord').value)
    document.getElementById('listeWord').value = '';
}

function search() {
    var wordSearch = document.getElementById("word").value;
        if(wordList.includes(wordSearch)){
          alert("the word '" + wordSearch + "' is in the dictionary");
        } else {
            alert("the word '" + wordSearch + "' is not in the dictionary");
        }
        console.log("The text boxvalue=" + document.getElementById('word').value)
        document.getElementById('word').value = '';
}
