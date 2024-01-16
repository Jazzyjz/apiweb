
 var apiUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=4';
 var startbtn = document.querySelector('#button3')


 startbtn.addEventListener('click',getCards)
//create function


function getCards(){
    //startbtn.hidden=true;
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
                switch(total=21){
                    case total < 21 :
                        console.log('So Close')
                        break;
                    case  total > 21: 
                        console.log('Too Far Buddy')
                        break;
                   default:
                            console.log('win') ;
                            break;   
                }
                cap()
            }
            
        }
        sum()
          
        })
       




}






