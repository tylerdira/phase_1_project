//DONE
//generate a new activity when "generate activity" button is pressed
//make light/dark theme button work
//add activities to favorites bar
//make buttons change color on hover

//TO DO
//add array iteration somewhere

//Global Variables
const activityDiv = document.querySelector('.activity')


const apiData = {
    url: 'https://www.boredapi.com/api/',
    type:'activity',
    price: '0'
}

const {url, type, price} = apiData
const apiUrl = `${url}${type}?price=${price}`

const getNewURl = () => {
    fetch(apiUrl)
    .then( (data) => data.json())
    .then(activity => generateHtml(activity))
}

const generateHtml = (data) => {
    console.log(data)
    const html =  `<div class = 'new-activity'> ${data.activity}</div>`
    activityDiv.innerHTML = html
}

const generateNewActivity = document.getElementById('create-activity')
generateNewActivity.addEventListener('click', (e) => {
    getNewURl();
})

const themeChange = document.getElementById('theme-change')
themeChange.addEventListener('click', () =>{
    var element = document.body;
    element.classList.toggle('dark-mode')
})


const addToFavorites = document.getElementById('favorite')
addToFavorites.addEventListener('click', ()=> {
    const favoriteActivity = document.createElement('li')
    const favoriteActivityContainer = document.getElementById('favorites-bar')
    favoriteActivity.textContent = activityDiv.innerText
    favoriteActivityContainer.append(favoriteActivity)
})

