var newsKey = 'f93aeec5d3ac4aab85825744ef51f35a'


//JASMINS CODE









//OSCARS CODE

var btn = document.querySelector('.btn')
btn.addEventListener('click',generateFood)

function generateFood (){
    var foodUrl='www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
    var vnum =

    fetch(foodUrl)
       
        .then(function(response){
            if(response.ok){
                console.log('connnection recieved')
            }
            
            console.log(response)
        
    })
};
