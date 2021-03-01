const petsData =[
{

name: "Purrsloud",
species: "Cat",
favFoods: ["uphuthu na masi", "umbila","coke" ,"<strong>any</strong> food"],
birthYear: 2000,
photo: "/home/codex/Desktop/tempLit/Purrsloud.jpg"
},
{
name: "Barksalot",
species: "Dog",
birthYear: 2010,
photo:  "/home/codex/Desktop/tempLit/Barksalot.jpeg"
},
{
name: "Meowsalot",
species: "Cat",
favFoods: ["tuna","catnip","celery","ace - porridge", "rats"],
birthYear: 1992,
photo:  "/home/codex/Desktop/tempLit/Meowsalot.jpg"
}
];
function age(birthYear){
let calculated = new Date().getFullYear() - birthYear ;

return (calculated == 0)?" Baby": (calculated <= 1)?" " +calculated + " year old":" "+ calculated + " years old";
}


function favFood(food){
return  ` <h4>Favourite Foods</h4>
 <ul class = "food-list">  
  ${food.map((items) => `<li>${items}</li>`).join('')} 
   </ul>
`
}


 function petTemplate(pet){
    return `
  <div class="animal">
   <img class="pet-photo" src="${pet.photo}">
   <h2 class="pet-name">${pet.name}<span class="species">(${pet.species})</h2>
   <p><strong>Age:</strong>${age(pet.birthYear)}</p>
   ${pet.favFoods ? favFood(pet.favFoods): ''}
 </div>
   `
   }

document.getElementById("app").innerHTML = `
<h1 class = "app-title">Mabutho's Pets (${petsData.length} results)</h1>
${petsData.map(petTemplate).join('')}
<p class="footer">These ${petsData.length} pets were added recently.Check back soon updates</p>
`
