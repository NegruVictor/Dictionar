let wordList = new Array; 
function enter() {
    let input = document.getElementById("listeWord").value;
    wordList.push(input);
    document.getElementById('listeWord').value = '';
}
function search() {
    let wordSearch = document.getElementById("word").value;
        if(wordList.includes(wordSearch)) {
            alert("the word '" + wordSearch + "' is in the dictionary");
        } else {
            alert("the word '" + wordSearch + "' is not in the dictionary");
        }
        document.getElementById('word').value = '';
}
