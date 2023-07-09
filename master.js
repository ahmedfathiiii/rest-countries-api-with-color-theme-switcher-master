// `
//             <a href="./country.html?name=${d.name}">
//             <img src="${d.flag}">
//         <div class="inform">
//             <h3>${d.name}</h3>
//             <p class="bold">Population: <span>${d.population}</span></p>
//             <p class="bold reg">Region: <span>${d.region}</span></p>
//             <p class="bold">Capital: <span>${d.capital}</span></p>
//         </div>
//         </a>`
async function fetchCountries() {
    let response = await fetch('https://restcountries.com/v3.1/all');
    let data = await response.json();
    console.log(data);
    displayCountries()
    function displayCountries() {
        data.forEach(d => {
            let cards = document.querySelector(".cards")
            let card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML = `
            <a href="./country.html?name=${d.name.common}">
            <img src="${d.flags.png}">
        <div class="inform">
            <h3>${d.name.common}</h3>
            <p class="bold">Population: <span>${d.population}</span></p>
            <p class="bold reg">Region: <span>${d.region}</span></p>
            <p class="bold">Capital: <span>${d.capital}</span></p>
        </div>
        </a>
`
            cards.appendChild(card)
        })
    }
};




fetchCountries()
// Region filter
let regionFilters = document.querySelectorAll('li')
regionFilters.forEach(nation => {
    nation.addEventListener("click", () => {
        let regions = document.querySelectorAll(".inform .reg span")
        regions.forEach(reg => {
            if (reg.innerHTML.includes(nation.innerHTML)) {
                reg.parentElement.parentElement.parentElement.parentElement.style.display = "flex"
            } else {
                reg.parentElement.parentElement.parentElement.parentElement.style.display = "none"
            }
        })

    })
});

// Region Btn
let dropdown = document.querySelector("#filter")
let regionsul = document.querySelector(".dropdown")
dropdown.addEventListener("click", () => {
    regionsul.classList.toggle("open")
})

// Dark Mode Btn
function darkmodeswitch() {
    let darkbtn = document.querySelector(".darkmode")
    let bodyEl = document.querySelector("body")
    darkbtn.addEventListener("click", () => {
        bodyEl.classList.toggle("dark")
    })
}
darkmodeswitch()

// Search
function searchcountry() {
    let searchEl = document.querySelector(".search input")
    searchEl.addEventListener("input", (e) => {
        let { value } = e.target
        let countryname = document.querySelectorAll(".inform h3")
        countryname.forEach(name => {
            if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
                name.parentElement.parentElement.parentElement.style.display = "flex"
            } else {
                name.parentElement.parentElement.parentElement.style.display = "none"
            }
        })
    })
}

searchcountry()

// Country Details 
function showDetails(country) {


}

