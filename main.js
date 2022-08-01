//DONE
//generate a new activity when "generate activity" button is pressed
//make light/dark theme button work

//TO DO
//add activities to favorites bar
//make buttons change color on hover
//add array iteration somewhere

const apiData = {
    url: 'https://www.boredapi.com/api/',
    type:'activity',
}

const {url, type, key} = apiData
const apiUrl = `${url}${type}`

fetch(apiUrl)
    .then( (data) => data.json())
    .then(activity => generateHtml(activity))

const generateHtml = (data) => {
    console.log(data)
    const html =  `<div class = 'new-activity'> ${data.activity}</div>`
    
    const activityDiv = document.querySelector('.activity')
    activityDiv.innerHTML = html
}

const generateNewActivity = document.getElementById('create-activity')
generateNewActivity.addEventListener('click', () => {
    window.location.reload();
})

const themeChange = document.getElementById('theme-change')
themeChange.addEventListener('click', () =>{
    var element = document.body;
    element.classList.toggle('dark-mode')
})


const addToFavorites = document.getElementById('favorite')
addToFavorites.addEventListener('click', ()=> {
    const activity = document.getElementById('generate-activity')
    console.log(activity.textContent)
})
