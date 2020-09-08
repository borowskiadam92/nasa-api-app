const spaceInput = document.getElementById('space__value');
const spaceButton = document.querySelector('button[type="submit"]');
const nasaContainer = document.querySelector('.nasa__container');

//console.log(spaceInput.value);
//console.log(spaceButton);
let spaceInputValue = '';

const urlEndPoint = 'https://images-api.nasa.gov/search?q='


spaceButton.addEventListener('click', function(e) {

    e.preventDefault();
    spaceInputValue=spaceInput.value;
    nasaContainer.innerHTML="";
    //console.log(spaceInput.value)
    $.ajax({

        method: 'GET',
        url: urlEndPoint + spaceInputValue,
        success: function (response){   
            inputResponseToHTML(response);

        },
        error : function (err){
            console.log(err);
        }
    
    });

    spaceInput.value='';
});

function inputResponseToHTML(res){
    const response = res.collection.items;
    for(let i=0; i< response.length ; i++){
        nasaContainer.innerHTML += `
        <div class="nasa__item">
        
        <img class = nasa__img src =" ${response[i].links[0].href}"  />
        
        </div>

        `
            console.log(response[i].links[0].href);

    }




}