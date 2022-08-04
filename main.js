//DONE
//generate a new activity when "generate activity" button is pressed
//make light/dark theme button work
//add activities to favorites bar
//make buttons change color on hover

//TO DO
//add array iteration somewhere

//Global Variables
const activityDiv = document.querySelector('.activity')
const favoriteActivityContainer = document.getElementById('favorites-bar')
plsUserInput = document.getElementById('userInput')
const favorites = []



const apiData = {
    url: 'https://www.boredapi.com/api/',
    type: [],
}

const {url, type} = apiData
const apiUrl = `${url}activity?type=${type}`

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
    // console.log(plsUserInput.value)
    // apiData.type.value = plsUserInput.value
    // console.log(apiData.type)
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
    favoriteActivity.textContent = activityDiv.innerText
    favorites.push(activityDiv.innerText)
    favoriteActivityContainer.append(favoriteActivity)
 })

const sortByAlphabet = document.getElementById('sortByAlphabet')
sortByAlphabet.addEventListener('click', () => {
    favorites.sort()
    favoriteActivityContainer.innerHTML = ""
    favorites.forEach(str => {
        const li = document.createElement("li")
        li.innerText = str
        favoriteActivityContainer.append(li)
    })
})