const message = document.getElementById('message')


const addMovie = event => {
    event.preventDefault()
    inputField = document.querySelector('input')

const movie = document.createElement('li')
const movieTitle = document.createElement('span')
movieTitle.textContent = inputField.value
movieTitle.addEventListener('click', crossOffMovie)
movie.appendChild(movieTitle)
const deleteBtn = document.createElement('button')
deleteBtn.textContent = 'x'
deleteBtn.addEventListener('click', deleteMovie)
movie.appendChild(deleteBtn)
const list = document.querySelector('ul')
list.appendChild(movie)
}

const form = document.querySelector('form')
form.addEventListener('submit', addMovie)

const deleteMovie = event => {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}

const crossOffMovie = event => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked') === true){
            message.textContent = 'Movie Watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}




















    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // const movie = document.createElement('li')
// const movieTitle = document.createElement('span')
// movieTitle.textContent = inputField.value
// movie.appendChild(movieTitle)
// const list = document.querySelector('ul')
// list.appendChild(movie)
// }

// const form = document.querySelector('form')
// form.addEventListener('submit', addMovie)


