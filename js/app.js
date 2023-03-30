
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


let selection_json = JSON.stringify( pokémon );
Cookies.set( `selection`, selection_json );

function selectPokemon( details ){
    for ( let i = 0; i < details.length; i++ ){
     details[i][`target`].getAttribute( `selection_kind` )
    }
}
let selection_btn = document.querySelectorAll( `.selection` );

for ( let i = 0; i < selection_btn.length; i++ )
{
    selection_btn[i].addEventListener( `click`, selectPokemon )
}