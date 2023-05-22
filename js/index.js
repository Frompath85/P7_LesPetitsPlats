import recipes from '../data/recipes.js';

const SearchInput = document.querySelector('.search-input');
SearchInput.addEventListener('keyup',(e)=>{
    const InputWord = e.target.value;// récuperer le mot saisie 
    if(InputWord.length > 2)  // au moins 3 caractères
      console.log(InputWord);
      //RecipeFilter(InputWord); creer une foction qui filtre les recette selon la recherche
})
//console.log(recipes)
const ShowRecipes = document.querySelector('.show-recipes')
recipes.forEach(recp =>{
    //console.log(rec)
    const CodeRecipe =`<div class="recipe-card">
                        <div class="recipe-image"></div>
                        <div class="recipe-infos">
                            <div class="name-time-recipe">
                                <h2 class="name-recipe">${recp.name}</h2>
                                <p class="time-recipe"><img src="images/clock.png" alt="clock time"> ${recp.time} min</p>
                            </div>
                            <div class="ingred-instr-recipe">
                                <ul class="ingred-recipe"></ul>
                                <p class="instr-recipe">${recp.description}</p>
                            </div>
                        </div>
                      </div>`
    ShowRecipes.insertAdjacentHTML('afterbegin',CodeRecipe);

    const IngredRecipe = document.querySelector('.ingred-recipe');
    //console.log(recp.ingredients)
    recp.ingredients.forEach(ingd =>{ // affiche la liste des ingredients
        let ListeIngrds = `<li></li>`;
        if(ingd.quantity == undefined) 
            ListeIngrds = `<li>${ingd.ingredient} </li>`
        else if (ingd.unit == undefined)
            ListeIngrds = `<li>${ingd.ingredient} : ${ingd.quantity} </li>`
        else    
         ListeIngrds = `<li>${ingd.ingredient} : ${ingd.quantity}  ${ingd.unit}</li>`

        IngredRecipe.insertAdjacentHTML('afterbegin',ListeIngrds)   
    })
})

const HideIngredients = document.getElementById('hide-ingredients')//up
const ShowIngredients = document.getElementById('show-ingredients')//down

ShowIngredients.addEventListener('click',() =>{
    ShowIngredients.style.display="none";
    HideIngredients.style.display="block";
})

HideIngredients.addEventListener('click',() =>{
    HideIngredients.style.display="none";
    ShowIngredients.style.display='block';
})