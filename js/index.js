import recipes from '../data/recipes.js';

let AllRecipes = recipes;

let AllIngredients = [];
let AllAppareils = [];
let AllUstensiles = [];

const HideIngredients = document.getElementById('hide-ingredients')//up
const ShowIngredients = document.getElementById('show-ingredients')//down
const ListeTagIngredients = document.querySelector('#ingredients-liste')//la liste des ingredients

const ButtonTagIngredients = document.querySelector('.ingredients-btn-container')
const InputIngredient = document.querySelector("#ingredients")


const HideAppareils = document.getElementById('hide-Appareils')//up
const ShowAppareils = document.getElementById('show-Appareils')//down
const ListeTagAppareils = document.querySelector('#appareils-liste')//la liste des appareils
const ButtonTagAppareils = document.querySelector('.appareils-btn-container')
const InputAppareils = document.querySelector("#Appareils")


const Hideustensiles = document.getElementById('hide-ustensiles')//up
const Showustensiles = document.getElementById('show-ustensiles')//down
const ListeTagustensiles = document.querySelector('#ustensiles-liste')//la liste des ustensiles
const ButtonTagustensiles = document.querySelector('.ustensiles-btn-container')
const Inputustensiles = document.querySelector("#ustensiles")

const SearchInput = document.querySelector('.search-input');
const RecipesContainer = document.querySelector('.recipes-container');

//initialisation de tous les tableaux

//récupérer tous les ingrédients 
function GetAllIngredients(RecipeList){
    const Ingredients = [];
    RecipeList.forEach(recette =>{
        //recupérer tous les ingredients d'une seule recette
        const IngredientsOneRecipe = recette.ingredients.map(ele => ele.ingredient);
        //pour chaque element du ArrayIngredientsOneRecipe je remplie un autre tableau contient tous les ingredients
        IngredientsOneRecipe.map(ele => Ingredients.push(ele.toLowerCase())) 
    })
    return [...new Set(Ingredients)];
}

// récupérer tous les Appareils
function GetAllAppareils(RecipeList){
    const Appareils = [];
    RecipeList.forEach(recette => {
        Appareils.push(recette.appliance.toLowerCase());  
    });
    return [... new Set (Appareils)];
}

// récupérer tous les ustensiles
function GetAllUstensiles(RecipeList){
    const Ustensiles = [];
    RecipeList.forEach(recette => {
        const OneUstensiles = recette.ustensils;
        OneUstensiles.map(ele => Ustensiles.push(ele.toLowerCase()))
    });
    return [...new Set(Ustensiles)];
}

// Affichage de tous les recettes
function DisplayRecipe(recette){
    const CodeRecipe =`<div class="recipe-card">
                        <div class="recipe-image"></div>
                        <div class="recipe-infos">
                            <div class="name-time-recipe">
                                <h2 class="name-recipe">${recette.name}</h2>
                                <p class="time-recipe"><img src="images/clock.png" alt="clock time"> ${recette.time} min</p>
                            </div>
                            <div class="ingred-instr-recipe">
                                <ul class="ingred-recipe"></ul>
                                <p class="instr-recipe">${recette.description}</p>
                            </div>
                        </div>
                      </div>`
    RecipesContainer.insertAdjacentHTML('afterbegin',CodeRecipe);

    const IngredRecipe = document.querySelector('.ingred-recipe');
    //console.log(recp.ingredients)
    recette.ingredients.forEach(ingd =>{ // affiche la liste des ingredients
        let ListeIngrds = `<li></li>`;
        if(ingd.quantity == undefined) 
            ListeIngrds = `<li>${ingd.ingredient} </li>`
        else if (ingd.unit == undefined)
            ListeIngrds = `<li>${ingd.ingredient} : ${ingd.quantity} </li>`
        else    
         ListeIngrds = `<li>${ingd.ingredient} : ${ingd.quantity}  ${ingd.unit}</li>`

        IngredRecipe.insertAdjacentHTML('afterbegin',ListeIngrds)   
    })
}
recipes.forEach(recp =>{
    DisplayRecipe(recp)
})

//********** Afficher les Ingredients*/
function AfficheListeIngredients(){
    ShowIngredients.style.display="none";
    HideIngredients.style.display="block";
    ListeTagIngredients.style.display="grid";
    ButtonTagIngredients.style.borderRadius = "5px 5px 0px 0px";
    ListeTagIngredients.innerHTML="";
    InputIngredient.value="";
    InputIngredient.setAttribute("placeholder", "Rechercher un ingredient");

    AllIngredients = GetAllIngredients(AllRecipes)
    DisplayIngredientsTag(AllIngredients, ListeTagIngredients);
}
InputIngredient.addEventListener('click',() =>{   
    AfficheListeIngredients();
})
ShowIngredients.addEventListener('click',() =>{   
    AfficheListeIngredients();
})
HideIngredients.addEventListener('click',() =>{
    HideIngredients.style.display="none";
    ShowIngredients.style.display='block';
    ListeTagIngredients.style.display="none";
    ButtonTagIngredients.style.borderRadius = "5px";
    InputIngredient.value="Ingredients";
    InputIngredient.setAttribute("placeholder", "");
})
// selectionner un tag et l'afficher sur la barre des tags

//********** Afficher les Appareils */
function  AfficheListeAppareils(){
    ShowAppareils.style.display="none";
    HideAppareils.style.display="block";
    ListeTagAppareils.style.display="grid";
    ButtonTagAppareils.style.borderRadius = "5px 5px 0px 0px";
    ListeTagAppareils.innerHTML="";
    InputAppareils.value="";
    InputAppareils.setAttribute("placeholder", "Rechercher un Appareil");

    AllAppareils = GetAllAppareils(AllRecipes) 
    DisplayAppareilsTag(AllAppareils, ListeTagAppareils);
}
InputAppareils.addEventListener('click',() =>{   
    AfficheListeAppareils();
})
ShowAppareils.addEventListener('click',() =>{   
    AfficheListeAppareils();
})
HideAppareils.addEventListener('click',() =>{
    HideAppareils.style.display="none";
    ShowAppareils.style.display='block';
    ListeTagAppareils.style.display="none";
    ButtonTagAppareils.style.borderRadius = "5px";
    InputAppareils.value="Appareils";
    InputAppareils.setAttribute("placeholder", "");
})

//************ Afficher les ustensiles */
function  AfficheListeUstensils(){
    Showustensiles.style.display="none";
    Hideustensiles.style.display="block";
    ListeTagustensiles.style.display="grid";
    ButtonTagustensiles.style.borderRadius = "5px 5px 0px 0px";
    ListeTagustensiles.innerHTML="";
    Inputustensiles.value="";
    Inputustensiles.setAttribute("placeholder", "Rechercher un ustensile");

    AllUstensiles = GetAllUstensiles(AllRecipes);
    DisplayUstensilsTag(AllUstensiles, ListeTagustensiles);
}
Inputustensiles.addEventListener('click',() =>{   
    AfficheListeUstensils();
})
Showustensiles.addEventListener('click',() =>{   
    AfficheListeUstensils();
})
Hideustensiles.addEventListener('click',() =>{
    Hideustensiles.style.display="none";
    Showustensiles.style.display='block';
    ListeTagustensiles.style.display="none";
    ButtonTagustensiles.style.borderRadius = "5px";
    Inputustensiles.value="ustensiles";
    Inputustensiles.setAttribute("placeholder", "");
})

function DisplayIngredientsTag(DataOfTagList, ListTag){
    DataOfTagList.forEach(el =>{
        const TagList =  `<li onclick = SelectIngredientTag(this)>${el}</li>`
        ListTag.insertAdjacentHTML("afterbegin",TagList);
     })
}
function DisplayAppareilsTag(DataOfTagList, ListTag){
    DataOfTagList.forEach(el =>{
        const TagList =  `<li onclick = SelectAppareilsTag(this)>${el}</li>`
        ListTag.insertAdjacentHTML("afterbegin",TagList);
     })
}
function DisplayUstensilsTag(DataOfTagList, ListTag){
    DataOfTagList.forEach(el =>{
        const TagList =  `<li onclick = SelectUstensilsTag(this)>${el}</li>`
        ListTag.insertAdjacentHTML("afterbegin",TagList);
     })
}


InputIngredient.addEventListener("keyup",()=>{// filtrer les ingredients
    const InputSearch = InputIngredient.value.toLowerCase();
    //chercher dans le tableau Allingredients la valeur saisie et retourne un nouveau tableau
    const FiltredIngredients = AllIngredients.filter(el => el.includes(InputSearch))
    //console.log(FiltredIngredients);
    ListeTagIngredients.innerHTML="";
    ShowTagList(FiltredIngredients, ListeTagIngredients);
})

InputAppareils.addEventListener("keyup",()=>{// filtrer les appareils
    const InputSearch = InputAppareils.value.toLowerCase();
    const FiltredAppareils = AllAppareils.filter(el => el.includes(InputSearch))
    //console.log(FiltredIngredients);
    ListeTagAppareils.innerHTML="";
    ShowTagList(FiltredAppareils, ListeTagAppareils);
})

Inputustensiles.addEventListener("keyup",()=>{ // filtrer les ustensils
    const InputSearch = Inputustensiles.value;
    const Filtredustensiles = AllUstensiles.filter(el => el.includes(InputSearch))
    //console.log(FiltredIngredients);
    ListeTagustensiles.innerHTML="";
    ShowTagList(Filtredustensiles, ListeTagustensiles);
})

//lancement de la recherche 1- par nom de recette
SearchInput.addEventListener('keyup',(e)=>{
    const InputWord = e.target.value.toLowerCase();// récuperer le mot saisie 
   
    if(InputWord.length > 2) { // au moins 3 caractères
      const FiltredRecipe = recipes.filter(ele => ele.name.toLowerCase().includes(InputWord));
      RecipesContainer.innerHTML="";
      AllRecipes = FiltredRecipe;
     // FiltredRecipe.forEach(recette => DisplayRecipe(recette));
    }
    else {// sinon remettre tous les recettes affichés
        RecipesContainer.innerHTML="";
        AllRecipes = recipes;
       // recipes.forEach(recp  => DisplayRecipe(recp));
    }
    AllRecipes.forEach(recette => DisplayRecipe(recette));
})


function rechercheParTag(tag){
    console.log(tag)
}

module.exports =  rechercheParTag;
