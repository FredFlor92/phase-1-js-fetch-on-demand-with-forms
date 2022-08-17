const init = () => {
// 1. add an event listener to the form element.
  const inputForm = doucment.querySelector('form');
// 2. Event Listeners require two arguments: the type of event, a string, and the listener, a callback function,    
  inputForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const input = document.querySelector('input#searchByID');
    console.log(input.value);

    fetch('http://localhost:3000/movies/${input.value}')
    .then(function (response){
        return response.json()
    })
    .then(function (data){

        const title = document.querySelector('section#movieDetails h4');
        const summary = doucment.querySelector('selection#movieDetails p')

        title.innerText = data.title;
        summary.innerText = data.summary;
    });
  })

}

document.addEventListener('DOMContentLoaded', init);