 //variables
 var apiUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=2';
 var apiUrl1 = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
 var startbtn = document.querySelector('#button3');
 var Hit = document.querySelector('#button1');
 var Stay =document.querySelector('#button2');
 var dealer = document.querySelector('#dealers');

//event listeners
 startbtn.addEventListener('click',starGame);
 
 Stay.addEventListener('click', displayDeal);

//create start function


async function getCards(){
fetch(apiUrl)
const response = await fetch(apiUrl);
const data = await response.json();
return data;
}

async function getCard(){
  fetch(apiUrl1)
  const response = await fetch(apiUrl1);
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
             Hit.addEventListener('click',addCard);

        async function addCard(){
          const grab = await getCard();
                    var newCard = document.createElement('img');
                    var newcard1 = grab.cards[0].image;
                    var thirdCard = grab.cards[0].value;
                    var total1 = Number(thirdCard)
            newCard.setAttribute('src',newcard1) ; 
             var present = document.querySelector('#game');
             present.appendChild(newCard);
             console.log(grab)
             sum(cardvalue1,cardvalue2,total1)
                 };
      }
        
      // sum(cardvalue1,cardvalue2)};
      
// function to add card on hit button 
async function sum(cardvalue1,cardvalue2,total1){
  console.log(Number(cardvalue1)+ Number(cardvalue2));
  
  var total = Number(cardvalue1) +  Number(cardvalue2) + Number(total1); 
  console.log(total);        
        }; 
        
  
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


      async function displayDeal(){
        const grab = await getCards()

        var dealCard1 = document.createElement('img');
        var cardInfo1 = grab.cards[0].image;
        dealCard1.setAttribute('src',cardInfo1);

        dealer.appendChild(dealCard1)

        var dealCard2 = document.createElement('img');
        var cardInfo2 = grab.cards[1].image;
        dealCard2.setAttribute('src',cardInfo2);

        dealer.appendChild(dealCard2)}