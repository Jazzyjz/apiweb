

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
        var card1 = document.createElement('img');
        //inject
        var carddata1 = data.cards[0].image;
        card1.setAttribute('src',carddata1) ;
        //append
        var present = document.querySelector('#scoreboard');
        present.appendChild(card1);

        //create 
        var card2 = document.createElement('img');
        //inject
        var carddata2 = data.cards[1].image;
        card2.setAttribute('src',carddata2) ;
        //append
        var present = document.querySelector('#scoreboard');
        present.appendChild(card2);

            



    }



)

}

getCards()