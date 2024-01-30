const complimentBtn = document.querySelector("#complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const countryBtn = document.querySelector("#countryButton")
const colorBtn = document.querySelector("#colorButton")
const foodBtn = document.querySelector("#foodButton")
const everythingBtn = document.querySelector("#imgButton")

let restaurant = {
    compliment: "",
    fortune:"",
    color:"",
    country: "",
    meal: ""
};


const getCompliment = () => {
    axios.get("http://localhost:4001/api/compliment/")
        .then(res => {
            const data = res.data;
            restaurant.compliment = data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4001/api/fortune/")
        .then(res => {
            const data = res.data;
            restaurant.fortune = data;
            alert(data);
    });
};

const getColor = () => {
    axios.get("http://localhost:4001/api/color")
    .then(res => {
        const data = res.data;
        restaurant.color = data;
        alert(data);
    })
};

let ctryCode = "";
const getCountry = () => {
    axios.get("http://localhost:4001/api/country/")
    .then(res => {
        const data = res.data.name;
        restaurant.country = data;
        ctryCode = res.data.code;
        alert(data);
    })
};

let mealImg = "";
const getFood = () => {
    axios.get("http://themealdb.com/api/json/v1/1/random.php")
    .then(res => {
        const data = res.data.meals[0].strMeal;
        restaurant.meal = data;
        mealImg = res.data.meals[0].strMealThumb;
        alert(data);
    })
};

const together = () => {
    const {compliment, fortune, color, country, meal} = restaurant;
    document.write(`My compliment to you is: ${compliment} <br> Your fortune is: ${fortune} <br> 
        Your color is: ${color} <br>`);
        
    document.write(`Your country is: ${country} <br>`);
    let imgflag = document.createElement('img');
    imgflag.src = `https://flagsapi.com/${ctryCode}/flat/64.png`;
    document.body.appendChild(imgflag);
    
    document.write(`<br> Your meal is: ${meal} <br>`);
    let imgMeal = document.createElement('img');
    imgMeal.src = mealImg;
    document.body.appendChild(imgMeal);
}

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
colorBtn.addEventListener('click', getColor);
countryBtn.addEventListener('click', getCountry);
foodBtn.addEventListener('click', getFood);
everythingBtn.addEventListener('click', together);

