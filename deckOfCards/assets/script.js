

var apiUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=2';
//create function
function getCards(){
    
// fetch api
fetch(apiUrl)
    .then(function(response){
        console.log(response.status);
        if(response.status !== 200){
           console.log(response.status);
        }
        return response.json();
     })
     .then(function(data){
        console.log(data);
        
       

        //create 
        var suit1 = document.createElement('img');
        //inject
        var suitdata1 = data.cards[0].image;
        suit1.setAttribute('src',suitdata1) 
        //append
        var present = document.querySelector('#scoreboard');
        present.appendChild(suit1);

    }



)

}

getCards()