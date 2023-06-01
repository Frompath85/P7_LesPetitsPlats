
const TagArrayIngredients = [];
const TagArrayAppareils = [];
const TagArrayUstensils = [];
//import {rechercheParTag} from './index.js'


function  SelectIngredientTag(ingredient) {
    const tag = ingredient.innerHTML;
    if(TagArrayIngredients.some(ele => ele == tag)){ 
        console.log("ingrédient déja sélectionné");
    }
    else{
        TagArrayIngredients.push(tag);
        const TagsIngredients = document.querySelector(".tag-ingredient");
        const codeItemTag = `<div>
                                <p>${ingredient.innerHTML}</p>
                                <i class="fa-regular fa-circle-xmark" onclick = CloseIngredientTag(this)></i>
                             </div>`;
        TagsIngredients.insertAdjacentHTML('afterbegin',codeItemTag);

        rechercheParTag(tag)
    }   
    //console.log(TagArrayIngredients); 
  // AllRecipes.forEach(recette => console.log(recette));
}
function  SelectAppareilsTag(Appareil) {
    const tag = Appareil.innerHTML;
    if(TagArrayAppareils.some(ele => ele == tag)){ 
        console.log("appareil déja sélectionné");
    }
    else{
        TagArrayAppareils.push(tag);
        const TagsAppareils = document.querySelector(".tag-appareil");
        const codeItemTag = `<div>
                                <p>${Appareil.innerHTML}</p>
                                <i class="fa-regular fa-circle-xmark"></i>
                             </div>`;
        TagsAppareils.insertAdjacentHTML('afterbegin',codeItemTag);
    }    
}

function  SelectUstensilsTag(Ustensil) {
    const tag = Ustensil.innerHTML;
    if(TagArrayUstensils.some(ele => ele == tag)){ 
        console.log("Ustensil déja sélectionné");
    }
    else{
        TagArrayUstensils.push(tag);
        const TagsUstensils = document.querySelector(".tag-ustensile");
        const codeItemTag = `<div>
                                <p>${Ustensil.innerHTML}</p>
                                <i class="fa-regular fa-circle-xmark"></i>
                             </div>`;
        TagsUstensils.insertAdjacentHTML('afterbegin',codeItemTag);
    }    
}

function CloseIngredientTag(ing){
    const SelectedIngredient = ing.previousElementSibling.innerHTML;
    //console.log(SelectedIngredient);
    const index = TagArrayIngredients.findIndex(ele => ele == SelectedIngredient);
    //console.log(index);
    TagArrayIngredients.splice(index, 1);//supprimer l'element du tableau
    //console.log(TagArrayIngredients);
    ing.parentNode.remove();//supprimer l'element du tableau TagArrayIngredients
}

