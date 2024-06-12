const inputSubmit = document.querySelector("#enviar")

const inputText = document.querySelector("#palabra")

inputSubmit.addEventListener('click', function(e){
    e.preventDefault()
    console.log(e.target);
    console.log(inputText.value);
    getData(inputText.value);
});


let data = []

async function getData(p) {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${p}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
 

  console.log(data);