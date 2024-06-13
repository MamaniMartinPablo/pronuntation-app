

const inputSubmit = document.querySelector("#enviar")

const inputText = document.querySelector("#palabra")

const res = []


inputSubmit.addEventListener('click', function(e){
    e.preventDefault()
    getData(inputText.value);
});


function getData(p){
fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${p}`) 
    .then(response => response.json()) 
    .then(data => {console.log(data)
        let cad=`
        <p>Como se pronuncia: ${data[0].phonetics[1].text}</p>
        <audio src="${data[0].phonetics[0].audio}" controls>
        </audio>
        `
        document.querySelector(".container").innerHTML=cad
    }

);
}