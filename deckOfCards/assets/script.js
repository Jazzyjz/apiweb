
 var apiUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=4';
 var apiUrl1 = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
 var startbtn = document.querySelector('#button3')
 var Hit = document.querySelector('#button1')
 var Stay =document.querySelector('#button2')


 startbtn.addEventListener('click',getCards)
 Hit.addEventListener('click',addCard)
//create function


function getCards(){
    //startbtn.hidden=true;
// fetch api can be different
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
         var present = document.querySelector('#game');
         present.appendChild(card1);
       

        //create 
        var card2 = document.createElement('img');
        //inject
        var carddata2 = data.cards[1].image;
        card2.setAttribute('src',carddata2) ;
        //append
        present.appendChild(card2);

        var card3 = document.createElement('img');
        var carddata3 = data.cards[2].image;
        card3.setAttribute('src',carddata3);
        present.appendChild(card3);

        var card4 = document.createElement('img');
        var carddata4 = data.cards[3].image;
        card4.setAttribute('src',carddata4);
        present.appendChild(card4);

         

        function sum(){
            var cardvalue1 = data.cards[0].value;
            var cardvalue2 = data.cards[1].value;
        console.log( Number(cardvalue1) +  Number(cardvalue2));
        var total = Number(cardvalue1) +  Number(cardvalue2);
        function cap(){
              if(total == 21){
                console.log('you win');
              }else if(total>21){
                console.log('you lose');
              }else if(total<21){
                console.log('Hit or Stay');
              }
              else{
                    console.log('not working');
                }
            }
            cap()
        }
        sum()
          
        })
    }
        function addCard(){
        
        fetch(apiUrl1)
            .then(function(response){
                console.log(response.status);
                if(response.status !== 200){
                   console.log(response.status);
                }
                return response.json();
             })
             .then(function(data){
                console.log(data);

                var newCard = document.createElement('img');
                var newcard1 = data.cards[0].image;
        newCard.setAttribute('src',newcard1) ; 
         var present = document.querySelector('#game');
         present.appendChild(newCard);
             })

            }
       










