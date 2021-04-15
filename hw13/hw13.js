
function getCharactersInfo(){
    fetch('https://swapi.dev/api/films/2/')
        .then((response) => {
            return response.json();
        })
        .then((someData) =>{
            return someData.characters;
        })
        .then((charactersUrl) =>{
                
                charactersUrl.forEach(element => {
    
                    fetch(`${element}`)
                        .then((response) =>{
                            return response.json();
                        })
                        .then((character) =>{
                            let characterElement = document.createElement('div');
                            characterElement.innerHTML = `Повне ім'я: ${character.name} <br> Рік народження:${character.birth_year} <br> Стать:${character.gender} <br>`;
                            characterElement.setAttribute('style', 'background-color: green; padding: 10px; height: 90px; ')
                            document.querySelector('.boxes').appendChild(characterElement);  
                        
                        })       
                    
                });
        })
    document.querySelector('.infoButton').removeAttribute('onclick')    

}

function getPlanetsName(){
    
    fetch('https://swapi.dev/api/planets')
        .then((response) =>{
            return response.json();
        })
        .then((data)=>{
            console.log(data)
            data.results.forEach(el =>{
                
                let planetsName = document.createElement('div');
                planetsName.innerHTML = `${el.name}`;
                document.querySelector('.planets').appendChild(planetsName);
            })
        })
}

function getNextPlanets(){
    fetch('https://swapi.dev/api/planets')
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            fetch(`${data.next}`)
                .then((response) =>{
                    return response.json();
                })
                .then((data) =>{
                    console.log(data)
                })
        })
}

getNextPlanets()

    
    


