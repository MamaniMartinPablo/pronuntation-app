

const inputSubmit = document.querySelector("#enviar")

const inputText = document.querySelector("#palabra")


inputSubmit.addEventListener('click', function(e){
    e.preventDefault()
    getData(inputText.value);
});


function getData(p){
fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${p}`) 
    .then(response => response.json()) 
    .then(data => {console.log(data)
        let cad
        if (data.hasOwnProperty("message") || data[0].phonetics.length == 0) {
            cad=`
            <p>No se encontro la palabra</p>
            `
        }
        else{
            if (data[0].phonetics[0].hasOwnProperty("sourceUrl")) {
                cad=`
                <p>Origen : Australia</p>
            <audio src="${data[0].phonetics[0].audio}" controls>
            </audio>
            `
            if (data[0].phonetics[0].text) {
                cad = cad + ` 
                <p>Se pronuncia como: ${data[0].phonetics[1].text}</p>
                `
            }
            cad = cad + ` 
            `
            }else{
                if (data[0].phonetics[1].hasOwnProperty("sourceUrl")) {
                    cad=`
                    <p>Origen : Reino Unido</p>
                <audio src="${data[0].phonetics[1].audio}" controls>
                </audio>
                <p>Se pronuncia como: ${data[0].phonetics[1]?.text}</p>
                `
                }else{
                    if (data[0].phonetics[2].hasOwnProperty("sourceUrl")) {
                        cad=`
                        <p>Origen : EEUU</p>
                    <audio src="${data[0].phonetics[2].audio}" controls>
                    </audio>
                    <p>Se pronuncia como: ${data[0].phonetics[1]?.text}</p>
                    `
                    }
                }
            }
        
        }
        document.querySelector(".container").innerHTML=cad
    }

);
}