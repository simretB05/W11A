
//  selected main with querySelector 
let get_main = document.querySelector( `#main` )
let user_selection = Cookies.get( `selection` );

let selection_data = JSON.parse(user_selection );


if ( selection_data === undefined )
{
    get_main.insertAdjacentHTML( `afterbegin`, `<h3>Error Please go back to home page and select Your Pokémon </h3>` )
} else{
    for ( i = 0; i < selection_data.length;  i++){
        get_main.insertAdjacentHTML( `afterbegin`, `<div><img  style=" width:60px; height:60px; " src="${ selection_data[i][`image_url`] }></div><div style="width:500px; height:500px; display:grid; place-items:center;"><h1>${selection_data[i][`name`] }</h1><p style="width:40%;">${selection_data[i][`description`] }</p><button class="delete">Delete</button></div>` )

    }
    
}



 

// function deletePokemon( details )
// {
// Cookies.remove(`selection`);
// }
// let delete_button = document.querySelector( `.delete` );
// delete_button.addEventListener(`click`, deletePokemon)
