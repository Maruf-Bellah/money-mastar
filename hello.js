const toggeSpiner = displayStyle =>{
     document.getElementById('spinner').style.display = displayStyle;
}

const toggeAbove= displayStyle =>{
     document.getElementById('above').style.display = displayStyle;

}
const toggeError= displayStyle =>{
     document.getElementById('error').style.display = displayStyle;

}

const searchMeal = () =>{
     const inputText = document.getElementById('search-input').value;
     if(inputText.length == 0){
          error.innerHTML=`<h2> Please try again </h2>` 
     }
     else if(inputText == 0){
          error.innerHTML=`<h2> Please try again </h2>` 

     }else{

          searchMeal.value = '';
          const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
          fetch(url)
          .then(res => res.json())
          .then(data => displayMeal(data.meals))
          document.getElementById('search-input').value ='';
     
          toggeSpiner ('block')
          toggeAbove ('none')
     }

}

const displayMeal = meals => {
 
     const mealContain = document.getElementById('meals');
     mealContain.innerHTML = ' ';

          if(!meals){
               error.innerHTML=`<h2> Please try again </h2>`
          }
          else{
               meals.forEach(meal => {
                    const div = document.createElement('div');
                    div.innerHTML=`
                    <div  onclick="displayUp(${meal.idMeal})" class="col">
                     <div   class="card">
                          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                          <div class="card-body">
                          <h5 class="card-title">${meal.strMeal}</h5>
                          <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                          </div>
                     </div>
               `
            
                    mealContain.appendChild(div);
                  
                   
               
           });
           toggeError('none')
          }
       
          toggeSpiner ('none')
          toggeAbove ('block')
         
   
}

const displayUp = meals => {
     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals}`;
     fetch(url)
     .then(res => res.json())
     .then(data => displayDetails(data.meals[0]))
   
    
}


const displayDetails = details =>{
     const dispayDone = document.getElementById('above');   
     dispayDone.textContent = '';

     if(!dispayDone){
          error.innerHTML=`<h2> Please try again </h2>`
     }
     const div = document.createElement('div');
     div.innerHTML =`
              <div class="card ">
                    <img src="${details.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${details.strMeal}</h5>
                    <p class="card-text">${details.strInstructions.slice(0, 100)}</p>
                </div>
      
     `
   
         dispayDone.appendChild(div) 

        
  
}
