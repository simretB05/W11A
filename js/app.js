//created an arry of pokemon object with name ,disciption and image_url of all the pokemon
let pokémon = [
    {
        name: `Pikachu`,
        description: `Pikachu is a fictional species in the Pokémon media franchise.`,
        image_url:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ754mEWaiCcgy7PWLxGmjvCXIEl0lsCzAls4CCC77Gwg&s`
    },
    {
        name: `Eevee`,
        description: `Eevee is a Pokémon species in the Pokémon franchise. Created by Motofumi Fujiwara, it first appeared in the video games Pokémon Red and Blue.`,
        image_url:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKPMlEikB5KHzkqZ5jRxFhOGS_ddAd_Xkked_b60OIQ&s`
    },
    {
        name: `Charizard`,
        description: `Charizard, known in Japan as Lizardon, is a Pokémon in Nintendo and Game Freak's Pokémon franchise.`,
        image_url:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScp_RxQxTGFExOq5HmLVAddzOCiLwZrvrm0jku2N4GSw&s`
    },
] 

//assigned an empty arry for later use
let new_data = []
//created a function that takes details argument
function selectPokemon( details ){
// stored the value of the targeted attribute and stored it in  selected_pokeman variable

    let selected_pokeman = details[`target`].getAttribute( `selection_kind` )

    for ( let x = 0; x < pokémon.length; x++ ){
//looped through the pokemon.length and if the name of the target value
//which is clicked is equal to the name comming from the loop
// then the the value of pokemon at the location of x is pushed to a new arry

    if ( selected_pokeman === pokémon[x][`name`] ){
        new_data.push( pokémon[x] )
//  the data which is pushed to the arry is then stringified and stored in the selection_json
//and its set in the cookies jar with a cookie name selections
        let selection_json = JSON.stringify( new_data );
        Cookies.set( `selection`, selection_json )
        
    }

     }
    

}


// added an event listener to all the buttons with a loop by frist
// selection the buttons with querySelectorAll
let selection_btn = document.querySelectorAll( `.selection` );

for ( let i = 0; i < selection_btn.length; i++ ){
    selection_btn[i].addEventListener( `click`, selectPokemon )
}