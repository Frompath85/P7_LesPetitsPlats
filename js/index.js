import recipes from '../data/recipes.js';


//créer un tableau de tous les ingredients 
const Ingredients = [];
recipes.forEach(recette =>{
    //console.log(recette.ingredients)
    // creer un tableau qui contients tous les noms d'ingredients d'une recette
    const IngredientsOneRecipe = recette.ingredients.map(ele => ele.ingredient);
    //console.log(IngredientsOneRecipe)
   // IngredientsOneRecipe.forEach(el => el = el.toLowerCase())
    //pour chaque element du ArrayIngredientsOneRecipe je remplie un autre tableau contient tous les ingredients
    IngredientsOneRecipe.map(ele => Ingredients.push(ele.toLowerCase()))
})
//console.log(Ingredients) //254 ingredients
// eliminer les ingredients en double
const AllIngredients = [...new Set(Ingredients)];
 //const IngredientsNoRepeat = Ingredients.filter((ele,pos)=>Ingredients.indexOf(ele)==pos)
//console.log(AllIngredients )// 127 ingredients


// recuperer tous les Appareils
const Appareils=[];
recipes.forEach(recette => {
    Appareils.push(recette.appliance.toLowerCase());  
});
//console.log(Appareils);
const AllAppareils = [... new Set (Appareils)]
//console.log(AllAppareils )


// recuperer tous les Ustensils
const Ustensils =[]
recipes.forEach(recette => {
    const OneUstensils = recette.ustensils;
    OneUstensils.map(ele => Ustensils.push(ele.toLowerCase()))
});
//console.log(Ustensils);//122
const AllUstensils = [...new Set(Ustensils)]
//console.log(AllUstensils);//30


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
const ListeTagIngredients = document.querySelector('#ingredients-tag')//la liste des ingredients
const LiIngredients = document.querySelectorAll("#ingredients-tag li")
const ButtonTagIngredients = document.querySelector('.ingredients-btn-div')

const HideAppareils = document.getElementById('hide-Appareils')//up
const ShowAppareils = document.getElementById('show-Appareils')//down
const ListeTagAppareils = document.querySelector('#appareils-tag')//la liste des appareils
const ButtonTagAppareils = document.querySelector('.appareils-btn-div')

const HideUstensils = document.getElementById('hide-Ustensils')//up
const ShowUstensils = document.getElementById('show-Ustensils')//down
const ListeTagUstensils = document.querySelector('#ustensils-tag')//la liste des Ustensils
const ButtonTagUstensils = document.querySelector('.Ustensils-btn-div')


//********** Ingredients*/
ShowIngredients.addEventListener('click',() =>{   
    ShowIngredients.style.display="none";
    HideIngredients.style.display="block";
    ListeTagIngredients.style.display="grid";
    ButtonTagIngredients.style.borderRadius = "5px 5px 0px 0px";
    //affichage de la liste des ingredients 
    ListeTagIngredients.innerHTML="";
    ShowTagList(AllIngredients, ListeTagIngredients);

})
HideIngredients.addEventListener('click',() =>{
    HideIngredients.style.display="none";
    ShowIngredients.style.display='block';
    ListeTagIngredients.style.display="none";
    ButtonTagIngredients.style.borderRadius = "5px";
})

//**********  Appareils */
ShowAppareils.addEventListener('click',() =>{   
    ShowAppareils.style.display="none";
    HideAppareils.style.display="block";
    ListeTagAppareils.style.display="grid";
    ButtonTagAppareils.style.borderRadius = "5px 5px 0px 0px";
    ListeTagAppareils.innerHTML="";
    ShowTagList(AllAppareils, ListeTagAppareils);
})
HideAppareils.addEventListener('click',() =>{
    HideAppareils.style.display="none";
    ShowAppareils.style.display='block';
    ListeTagAppareils.style.display="none";
    ButtonTagAppareils.style.borderRadius = "5px";
})

//************  Ustensils */
ShowUstensils.addEventListener('click',() =>{   
    ShowUstensils.style.display="none";
    HideUstensils.style.display="block";
    ListeTagUstensils.style.display="grid";
    ButtonTagUstensils.style.borderRadius = "5px 5px 0px 0px";
    ListeTagUstensils.innerHTML="";
    ShowTagList(AllUstensils, ListeTagUstensils);
})
HideUstensils.addEventListener('click',() =>{
    HideUstensils.style.display="none";
    ShowUstensils.style.display='block';
    ListeTagUstensils.style.display="none";
    ButtonTagUstensils.style.borderRadius = "5px";
})

function ShowTagList(DataOfTagList, ListTag){
    DataOfTagList.forEach(el =>{
        const TagList =  `<li>${el}</li>`
        ListTag.insertAdjacentHTML("afterbegin",TagList);
     })
}

const InputIngredient = document.querySelector("#ingredients")
InputIngredient.addEventListener("keyup",()=>{
    const InputSearch = InputIngredient.value;
    //chercher dans le tableau Allingredients la valeur saisie et retourne un nouveau tableau
    const FiltredIngredients = AllIngredients.filter(el => el.includes(InputSearch))
    //console.log(FiltredIngredients);
    ListeTagIngredients.innerHTML="";
    ShowTagList(FiltredIngredients, ListeTagIngredients);
})

const InputAppareils = document.querySelector("#Appareils")
InputAppareils.addEventListener("keyup",()=>{
    const InputSearch = InputAppareils.value;
    const FiltredAppareils = AllAppareils.filter(el => el.includes(InputSearch))
    //console.log(FiltredIngredients);
    ListeTagAppareils.innerHTML="";
    ShowTagList(FiltredAppareils, ListeTagAppareils);
})

const InputUstensils = document.querySelector("#Ustensils")
InputUstensils.addEventListener("keyup",()=>{
    const InputSearch = InputUstensils.value;
    const FiltredUstensils = AllUstensils.filter(el => el.includes(InputSearch))
    //console.log(FiltredIngredients);
    ListeTagUstensils.innerHTML="";
    ShowTagList(FiltredUstensils, ListeTagUstensils);
})
InputUstensils.addEventListener("focusin",()=>{
    InputUstensils.value="";
    InputUstensils.setAttribute("placeholder", "Rechercher un ustensil");
})
InputUstensils.addEventListener("focusout",()=>{
    InputUstensils.value="Ustensils";
    console.log("hello");
    InputUstensils.setAttribute("placeholder", "");
})