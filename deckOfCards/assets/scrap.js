 //variables
 var apiUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=2';
 var apiUrl1 = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
 var startbtn = document.querySelector('#button3');
 var Hit = document.querySelector('#button1');
 var Stay =document.querySelector('#button2');

//event listeners
 startbtn.addEventListener('click',starGame);
 Hit.addEventListener('click',addCard);

//create start function


async function getCards(){
fetch(apiUrl)
const response = await fetch(apiUrl);
const data = await response.json();
return data;
}
 

async function starGame (){
    const grab = await getCards();
    console.log(grab)
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
      present.appendChild(card2);
      var cardvalue1 = grab.cards[0].value;
      var cardvalue2 = grab.cards[1].value;
      sum(cardvalue1,cardvalue2)

      
    };
     // function to add card on hit button 
    async function addCard(cardvalue3){
    const grab = await getCards();
    console.log(grab)
            
            var newCard = document.createElement('img');
            var newcard1 = grab.cards[0].image;
            var cardvalue3 =grab.cards[0].value;
    newCard.setAttribute('src',newcard1) ; 
     var present = document.querySelector('#game');
     present.appendChild(newCard);
     
         };
         
        
    // function for calculating sum 
   async function sum(cardvalue1,cardvalue2){
    console.log( Number(cardvalue1) +  Number(cardvalue2));
    var total = Number(cardvalue1) +  Number(cardvalue2);
    var total1 = Number(cardvalue1) +  Number(cardvalue2) + Number(cardvalue3);
    addCard(cardvalue3)
    rules(total)
   }
   
   
   // function for evaluating score
   function rules(total){
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
        
          











