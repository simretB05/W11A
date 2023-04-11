
//  selected elements from the DoM  with querySelector  
let get_main = document.querySelector( `#main` )

//get data from Cookies jar and stored in a variable user_section  
let user_selection = Cookies.get( `selection` );
let selection_data = JSON.parse(user_selection );

// checking if the t data is stored in the Cookies jar  and parsed to object form
if ( selection_data === undefined ){
// if its undefined we get a message to go and select a pokemon
    get_main.insertAdjacentHTML( `afterbegin`, `<h3>Error Please go back to home page and select Your Pokémon </h3>` )
} else{
// data is parsed with JSON.parse to change it from string object form and stored in a new variable
    let selection_data = JSON.parse(user_selection );
    //if its not loop through the parsed json data and create individual pokeman based on the number of pokeman selected
    for ( i = 0; i < selection_data.length; i++ ){
        get_main.insertAdjacentHTML( `afterbegin`, `<div><img  style=" width:60px; height:60px; " src="${ selection_data[i][`image_url`] }></div><div style="width:500px; height:500px; display:grid; place-items:center;"><h1>${selection_data[i][`name`] }</h1><p style="width:40%;">${selection_data[i][`description`] }</p><button class="delete">Delete</button></div>` )

    }
    
}


