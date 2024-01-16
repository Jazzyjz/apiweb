 //variables
 var apiUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=4';
 var apiUrl1 = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
 var startbtn = document.querySelector('#button3');
 var Hit = document.querySelector('#button1');
 var Stay =document.querySelector('#button2');

//event listeners
 startbtn.addEventListener('click',starGame);
 Hit.addEventListener('click',addCard);

//create start function


async function getCards(){
fetch(apiUrl1)
const response = await fetch(apiUrl1);
const data = await response.json();
return data;
}
 

async function starGame (){
    // fetch(apiUrl)
    // .then(function(response){
    //     console.log(response.status);
    //     if(response.status !== 200){
    //        console.log(response.status);
    //     }
    //     return response.json();
    //  })
    //  .then(function(data){
    //     console.log(data);
    const grab = await getCards();
    
       
        //create 
        var card1 = document.createElement('img');
        //inject
        var carddata1 = grab.cards[0].image;
        card1.setAttribute('src',carddata1) ;
         //append
         var present = document.querySelector('#game');
         present.appendChild(card1);
       

        //create 
        var card2 = document.createElement('img');
        //inject
        var carddata2 = grab.cards[1].image;
        card2.setAttribute('src',carddata2) ;
        //append
      present.appendChild(card2);};
// function to add card on hit button 
    
 function addCard(data){
            var newCard = document.createElement('img');
            var newcard1 = grab.cards[0].image;
    newCard.setAttribute('src',newcard1) ; 
     var present = document.querySelector('#game');
     present.appendChild(newCard);
         };
        
    // function for calculating sum 
   function sum(){
    var cardvalue1 = data.cards[0].value;
        var cardvalue2 = data.cards[1].value;
    console.log( Number(cardvalue1) +  Number(cardvalue2));
    var total = Number(cardvalue1) +  Number(cardvalue2);
   }
   // function for evaluating score
   function rules(){
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

     
          











