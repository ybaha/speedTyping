const inputTwo = document.getElementById("input-2");
var inpURL = "name";
var words = [];

inputTwo.addEventListener("input", (event) => {
    event.target.value = event.target.value.toLowerCase();
    input.value = input.value.replace(/\s/g, "");
    inpURL = inputTwo.value;
    console.log(inpURL);
    parseData();
});

async function getWords(){
    const url = "http://api.datamuse.com/words?ml=" + inpURL;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// getWords()
//     .then(data => {
//         console.log(data);
//     });


async function parseData(){
    const data = await getWords();
    words = [];
    for(let i=0; i<data.length; i++){
        if(data[i].word.length < 6){
            words.push(data[i].word);
        }
    }
    words = words;
    console.log(words);
}





parseData();


