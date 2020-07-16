window.onload = function(){
    apiCall()
}

function apiCall()
{
    var arr = ['strIngredient1','strIngredient2','strIngredient3','strIngredient4','strIngredient5','strIngredient6','strIngredient7','strIngredient8','strIngredient9','strIngredient10']
    var url = "https://www.themealdb.com/api/json/v1/1/random.php"
    var xhr = new XMLHttpRequest()
    xhr.open('GET',url)
    xhr.send()
    xhr.onload = function(){
        var count = 1
        var ing = document.getElementById('ingredients')
        var param = document.getElementById('param')
        var mealTitle = document.getElementById('mealTitle')
        var instruction = document.getElementById('instruction')
        var link = document.getElementById('link')
        var h3 = document.querySelector('h3')
        var img = document.getElementById('img')
        var data = JSON.parse(xhr.response)
        console.log(data)
        img.setAttribute('src',data.meals[0].strMealThumb)
        h3.textContent = data.meals[0].strArea+" "+data.meals[0].strCategory
        mealTitle.textContent = data.meals[0].strMeal
        instruction.textContent = data.meals[0].strInstructions
        link.setAttribute('href',data.meals[0].strYoutube)
        link.style.color = 'yellow'
        link.textContent = data.meals[0].strYoutube
       var obj = Object.values(data.meals[0])
        for(var i=9; i<=28; i++)
        {
            if(obj[i]){
                var p = document.createElement('p')
            p.textContent = count+" "+obj[i]
            ing.append(p)
            count++
            }
        }
        for(var j=29; j<=48; j++)
        {
            if(obj[j]){
                var p = document.createElement('p')
                p.textContent = obj[j]
                param.append(p)
                
            }
        }

    }
}