import recipes from '../data/recipes.js';

let AllRecipes = recipes;
let InputWord = null;

let AllIngredients = [];
let AllAppareils = [];
let AllUstensiles = [];

const TagArrayIngredients = [];
const TagArrayAppareils = [];
const TagArrayUstensils = [];

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
    //console.log(Ustensiles);
    return [...new Set(Ustensiles)];
}

// Afficher la recette sur la page
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
    //console.log(recette.ingredients)
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

//********** Afficher les tags Ingredients*/
function AfficheListeIngredients(){
    ShowIngredients.style.display="none";
    HideIngredients.style.display="block";
    ListeTagIngredients.style.display="grid";
    ButtonTagIngredients.style.borderRadius = "5px 5px 0px 0px";
    ListeTagIngredients.innerHTML="";
    InputIngredient.value="";
    InputIngredient.setAttribute("placeholder", "Rechercher un ingredient");

    AllIngredients = GetAllIngredients(AllRecipes);
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

//Affichages des tags Ingredients
function DisplayIngredientsTag(DataOfTagList, ListTag){
    DataOfTagList.forEach(el =>{
        const TagList =  `<li class ="ing-li">${el}</li>`
        ListTag.insertAdjacentHTML("afterbegin",TagList);
     })
     const IngLi = document.querySelectorAll(".ing-li")
     IngLi.forEach(element => {
            element.addEventListener("click",(e)=> {
                SelectIngredientTag(e.currentTarget.innerHTML)
             })
     });  
}
function  SelectIngredientTag(tag) {
    if(TagArrayIngredients.some(ele => ele == tag)){ 
        console.log("ingrédient déja sélectionné");
    }
    else{
        TagArrayIngredients.push(tag);
        const TagsIngredients = document.querySelector(".tag-ingredient");
        const codeItemTag = `<div>
                                <p>${tag}</p>
                                <i class="fa-regular fa-circle-xmark close-tag-Ing" ></i>
                             </div>`;
        TagsIngredients.insertAdjacentHTML('afterbegin',codeItemTag);

        document.querySelector(".close-tag-Ing").
                addEventListener("click", (e)=> CloseIngredientTag(e.currentTarget))

        AllRecipes = FilterRecipeWithIngredientTag(AllRecipes,TagArrayIngredients);
        RecipesContainer.innerHTML="";
        AllRecipes.forEach(recette => DisplayRecipe(recette));
        ActualiserListTag(); 
    }   
}
function FilterRecipeWithIngredientTag(RecipeList, ArrayTagIng){
    const FiltredRecipe =[];
    const test =[];       
    RecipeList.forEach(recp => {
        const IngOneRecipe = recp.ingredients.map(ele => ele.ingredient.toLowerCase())
        // je teste si mon tag est parmi les ingredients de recp
        for(let i = 0; i < ArrayTagIng.length; i++){
            if(IngOneRecipe.some(el => el == ArrayTagIng[i]))
                test[i] = true;
            else 
                test[i] = false;
        }
        if(test.every(el => el ==true)){
            FiltredRecipe.push(recp); 
        }
    })
    return FiltredRecipe;
}
function CloseIngredientTag(CloseIng){
    const SelectedIngredient = CloseIng.previousElementSibling.innerHTML;
    //console.log(SelectedIngredient);//tag
    const index = TagArrayIngredients.findIndex(ele => ele == SelectedIngredient);
    //console.log(index);
    
    TagArrayIngredients.splice(index, 1);//supprimer l'element du tableau TagArrayIngredients
   // console.log(TagArrayIngredients);
    CloseIng.parentNode.remove();//supprimer l'affichage dans la liste  

    //faire une recherche avec la liste TagArrayIngredients
    AllRecipes =  FilterWithRemoveTag(recipes)
    RecipesContainer.innerHTML="";
    AllRecipes.forEach(recette => DisplayRecipe(recette));
    ActualiserListTag();
}

// Affichages des tags appareils
function DisplayAppareilsTag(DataOfTagList, ListTag){
    DataOfTagList.forEach(el =>{
        const TagList =  `<li class = "app-li">${el}</li>`
        ListTag.insertAdjacentHTML("afterbegin",TagList);
     })
     const AppLi = document.querySelectorAll(".app-li")
     AppLi.forEach(element => {
            element.addEventListener("click",(e)=> {
                SelectAppareilsTag(e.currentTarget.innerHTML)
             })
     });  
}
function  SelectAppareilsTag(tag) {
    if(TagArrayAppareils.some(ele => ele == tag)){ 
        console.log("appareil déja sélectionné");
    }
    else{
        TagArrayAppareils.push(tag);
        const TagsAppareils = document.querySelector(".tag-appareil");
        const codeItemTag = `<div>
                                <p>${tag}</p>
                                <i class="fa-regular fa-circle-xmark close-tag-App"></i>
                             </div>`;
        TagsAppareils.insertAdjacentHTML('afterbegin',codeItemTag);

        document.querySelector(".close-tag-App").
                addEventListener("click", (e)=> CloseAppareilTag(e.currentTarget))

        AllRecipes = FilterRecipeWithAppareilTag(AllRecipes, TagArrayAppareils);
        RecipesContainer.innerHTML="";
        AllRecipes.forEach(recette => DisplayRecipe(recette));
        ActualiserListTag();
    }    
}
function FilterRecipeWithAppareilTag(RecipeList, ArrayTagApp){
    const FiltredRecipe =[];
    const test =[];       
    RecipeList.forEach(recp => {
       for(let i = 0; i < ArrayTagApp.length; i++){
            if(recp.appliance.toLowerCase().includes(ArrayTagApp[i]))
                test[i] = true;
            else 
                test[i] = false;
        }
        if(test.every(el => el ==true)){
            FiltredRecipe.push(recp); 
        }
    })
    return FiltredRecipe;
}
function CloseAppareilTag(CloseApp){
    const SelectedAppareil = CloseApp.previousElementSibling.innerHTML;
    //console.log(SelectedUstensil);
    const index = TagArrayAppareils.findIndex(ele => ele == SelectedAppareil);
    //console.log(index);
    TagArrayAppareils.splice(index, 1);//supprimer l'element du tableau
    //console.log(TagArrayIngredients);
    CloseApp.parentNode.remove();//supprimer l'element du tableau TagArrayIngredients
    // fonction qui met a jour les recette a la suppression de tag

   // AllRecipes = Rechercher(recipes, InputWord, TagArrayIngredients, TagArrayAppareils, TagArrayUstensils)
    AllRecipes =  FilterWithRemoveTag(recipes);
    RecipesContainer.innerHTML="";
    AllRecipes.forEach(recette => DisplayRecipe(recette));
    ActualiserListTag();
}

//Affichages des tags Ustensils
function DisplayUstensilsTag(DataOfTagList, ListTag){
    DataOfTagList.forEach(el =>{
        const TagList =  `<li class="ust-li">${el}</li>`
        ListTag.insertAdjacentHTML("afterbegin",TagList);
     })
     const UstLi = document.querySelectorAll(".ust-li")
     UstLi.forEach(element => {
            element.addEventListener("click",(e)=> {
                SelectUstensilsTag(e.currentTarget.innerHTML)
             })
     }); 
}
function  SelectUstensilsTag(tag) {
    if(TagArrayUstensils.some(ele => ele == tag)){ 
        console.log("Ustensil déja sélectionné");
    }
    else{
        TagArrayUstensils.push(tag);
        const TagsUstensils = document.querySelector(".tag-ustensile");
        const codeItemTag = `<div>
                                <p>${tag}</p>
                                <i class="fa-regular fa-circle-xmark close-tag-Ust"></i>
                             </div>`;
        TagsUstensils.insertAdjacentHTML('afterbegin',codeItemTag);

        document.querySelector(".close-tag-Ust").
                 addEventListener("click", (e)=> CloseUstensilTag(e.currentTarget))
        // filter les recette selon le tag selectionné
        AllRecipes =  FilterRecipeWithUstensilsTag(AllRecipes, TagArrayUstensils)
        RecipesContainer.innerHTML="";
        AllRecipes.forEach(recette => DisplayRecipe(recette));  
        ActualiserListTag()
    }    
}
function FilterRecipeWithUstensilsTag(RecipeList, ArrayTagUst){
    const FiltredRecipe =[];
    const test =[];       
    RecipeList.forEach(recp => {
       for(let i = 0; i < ArrayTagUst.length; i++){
           if(recp.ustensils.includes(ArrayTagUst[i]))
                test[i] = true;
            else 
                test[i] = false;
        }
        if(test.every(el => el ==true)){
            FiltredRecipe.push(recp); 
        }
    })
    return FiltredRecipe;    
}
function CloseUstensilTag(CloseUst){
    const SelectedUstensil = CloseUst.previousElementSibling.innerHTML;
    //console.log(SelectedUstensil);
    const index = TagArrayUstensils.findIndex(ele => ele == SelectedUstensil);
    //console.log(index);
    TagArrayUstensils.splice(index, 1);//supprimer l'element du tableau
    //console.log(TagArrayIngredients);
    CloseUst.parentNode.remove();//supprimer l'element du tableau TagArrayIngredients
    // fonction qui met a jour les recette a la suppression de tag
    AllRecipes =  FilterWithRemoveTag(recipes);
    RecipesContainer.innerHTML="";
    AllRecipes.forEach(recette => DisplayRecipe(recette));
    ActualiserListTag();
}

InputIngredient.addEventListener("keyup",()=>{// filtrer les ingredients
    const InputSearch = InputIngredient.value.toLowerCase();
    //chercher dans le tableau Allingredients la valeur saisie et retourne un nouveau tableau
    const FiltredIngredients = AllIngredients.filter(el => el.includes(InputSearch))
    //console.log(FiltredIngredients);
    ListeTagIngredients.innerHTML="";
    DisplayIngredientsTag(FiltredIngredients, ListeTagIngredients);
})

InputAppareils.addEventListener("keyup",()=>{// filtrer les appareils
    const InputSearch = InputAppareils.value.toLowerCase();
    const FiltredAppareils = AllAppareils.filter(el => el.includes(InputSearch))
    //console.log(FiltredIngredients);
    ListeTagAppareils.innerHTML="";
    DisplayAppareilsTag(FiltredAppareils, ListeTagAppareils);
})

Inputustensiles.addEventListener("keyup",()=>{ // filtrer les ustensils
    const InputSearch = Inputustensiles.value;
    const Filtredustensiles = AllUstensiles.filter(el => el.includes(InputSearch))
    //console.log(FiltredIngredients);
    ListeTagustensiles.innerHTML="";
    DisplayUstensilsTag(Filtredustensiles, ListeTagustensiles);
})

//lancement de la recherche 1- par nom de recette
SearchInput.addEventListener('keyup',(e)=>{
    InputWord = e.target.value.toLowerCase();// récuperer le mot saisie 

    if(InputWord.length > 2) { // au moins 3 caractères 
       // AllRecipes = FilterRecipeWithInputWord(AllRecipes, InputWord);
       AllRecipes = FilterWithRemoveTag(recipes);
    }
    else {// tester s'il ya des tags sinon remettre tous les recettes affichés
        AllRecipes = recipes;
        if(TagArrayIngredients.length !=0){
           // console.log("---- Re filtrage avec liste tag ingredients");
            AllRecipes = FilterRecipeWithIngredientTag(AllRecipes, TagArrayIngredients);
        } 
        if(TagArrayAppareils.length != 0){
           // console.log("--- Re filtrage avec liste tag appareils");
            AllRecipes = FilterRecipeWithAppareilTag(AllRecipes,TagArrayAppareils);
        }
        if(TagArrayUstensils.length != 0){
           // console.log("---Re filtrage avec liste tag Ustensiles ");
            AllRecipes = FilterRecipeWithUstensilsTag(AllRecipes, TagArrayUstensils);
        }
    }

    // Si il y a des tags, afficher les recettes filtrées
    RecipesContainer.innerHTML="";
    AllRecipes.forEach(recette => DisplayRecipe(recette));
    ActualiserListTag();
})

function FilterWithRemoveTag(ArrayRecipes){
    let FiltredRecipe = ArrayRecipes;

    if(InputWord != null){//premiere reccherche avec inputword
        console.log("-----filtrage avec inputword");
        FiltredRecipe = FilterRecipeWithInputWord(ArrayRecipes, InputWord)
    }
    if(TagArrayIngredients.length !=0){
        console.log("---- filtrage avec liste tag ingredients");
       FiltredRecipe = FilterRecipeWithIngredientTag(FiltredRecipe, TagArrayIngredients);
    } 
    if(TagArrayAppareils.length != 0){
        console.log("--- filtrage avec liste tag appareils");
        FiltredRecipe = FilterRecipeWithAppareilTag(FiltredRecipe,TagArrayAppareils);
    }
    if(TagArrayUstensils.length != 0){
        console.log("--- filtrage avec liste tag Ustensiles ");
        FiltredRecipe = FilterRecipeWithUstensilsTag(FiltredRecipe, TagArrayUstensils);
    }

    return FiltredRecipe;
}

function FilterRecipeWithInputWord(ArrayRecipes, KeyWord){
    let FiltredRecipe = [];
    let FilteredRecipeWithName =[];
    let FilteredRecipeWithIngredient =[];
   // let FilteredRecipeWithDescription =[];
    console.log(KeyWord);
   // console.log(ArrayRecipes);
    // filter les recettes avec le nom
    //FilteredRecipeWithName = ArrayRecipes.filter(ele => ele.name.toLowerCase().includes(KeyWord));
    for(let i = 0; i<ArrayRecipes.length; i++){
         console.log("recherche par nom");
        if(ArrayRecipes[i].name.toLowerCase().includes(KeyWord)){
            FilteredRecipeWithName.push(ArrayRecipes[i]);
            console.log(FilteredRecipeWithName);
        }
    }
    

 // recipes.forEach(recp => {
   // for(let i = 0; i<ArrayRecipes.length; i++){
        for(let i =0; i<ArrayRecipes.length; i++){
    // rechercher dans les ingredients    
        const IngredientsOneRecipe = ArrayRecipes[i].ingredients.map(ele => ele.ingredient.toLowerCase());
        console.log("recherche par ingredient");
        
         for(let i =0; i<IngredientsOneRecipe.length; i++){
             console.log(IngredientsOneRecipe[i]);
            if(IngredientsOneRecipe[i].includes(KeyWord)){
                FilteredRecipeWithIngredient.push(ArrayRecipes[i]);
             console.log(FilteredRecipeWithIngredient);
            }
        }
    // rechercher dans la description 
        // if(recipes[i].description.includes(KeyWord)){
        //     FilteredRecipeWithDescription.push(recipes[i]);
        // }
  //  }
    }
//    

    FiltredRecipe = FilteredRecipeWithName.concat(FilteredRecipeWithIngredient);//.concat(FilteredRecipeWithDescription);

    return [...new Set(FiltredRecipe)];
}

function ActualiserListTag(){
     //maj les tag ingredents
    AllIngredients = GetAllIngredients(AllRecipes);
    ListeTagIngredients.innerHTML="";
    DisplayIngredientsTag(AllIngredients, ListeTagIngredients);
    //maj les tag ustensils
    AllUstensiles = GetAllUstensiles(AllRecipes);
    ListeTagustensiles.innerHTML="";
    DisplayUstensilsTag(AllUstensiles, ListeTagustensiles);
    // maj les tags appareils
    AllAppareils = GetAllAppareils(AllRecipes);
    ListeTagAppareils.innerHTML="";
    DisplayAppareilsTag(AllAppareils, ListeTagAppareils);
}
