const foodContainer = document.querySelector(".foodList")

function createFoodHTML(foodObj) {

    // "id": 1,
    //         "name": "Linguine",
    //         "category": "pasta",
    //         "ethnicity": "italian"
    //         "restaurantId": 

    return `
    <section>
    <h3>Name: ${foodObj.name}</h3>
    <p>Category: ${foodObj.category}</p>
    <p>Ethnicity: ${foodObj.ethnicity}</p>
    </section>
    `
}



function addFoodtoDom(htmlFood) {
    foodContainer.innerHTML += htmlFood;
}

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.log("parsedFoods", parsedFoods)
        parsedFoods.forEach(item => {
            const foodAsHTML = createFoodHTML(item)
            addFoodtoDom(foodAsHTML)
        })
        console.table(parsedFoods)
    })