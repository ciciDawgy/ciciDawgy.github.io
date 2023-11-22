const rocket = document.querySelector('.rocket');
const active = document.querySelector('.active');
var modal = document.querySelector('.modal');
const removeModal = document.querySelector('.fa-solid');
const planets = document.querySelectorAll('.planet');
const Neptune = document.querySelector('.neptune');
/*var elementClassName = e.target.className;*/


function showRocket() {
    rocket.classList.add('show');
}

setTimeout(showRocket, 18000);


/*
planets.forEach(planet => {
    planet.addEventListener('click', () => {
        removeActiveClasses()
        modal.classList.add('active');
    })
})

function removeActiveClasses() {
    planets.forEach(planet => {
        planet.classList.remove('active')
    })
}

removeModal.addEventListener('click', () => {
    modal.classList.remove('active');
})

const para = document.createElement('p');
para.textContent = "Neptune is the eighth and farthest planet from the Sun. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus.";
Neptune.append('para'); */
