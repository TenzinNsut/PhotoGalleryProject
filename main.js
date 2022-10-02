// create a div and assign it an id = "lightbox"
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
// Now add this at the end of the body
document.body.appendChild(lightbox)



const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img) 
    }) 
})

lightbox.addEventListener('click', e => {
    if(e.target !== e.currentTarget ) return
    lightbox.classList.remove('active')
})



// Navigation Bar


const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})
