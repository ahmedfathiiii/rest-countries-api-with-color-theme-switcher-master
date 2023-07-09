let countryname = new URLSearchParams(location.search).get("name")



async function fetchcountry() {
    await fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`)
        .then((res) => res.json())
        .then(([d]) => {
            console.log(d)
            let flagImg = document.querySelector(".flagImg")
            let mainName = document.querySelector(".mainname")
            let natName = document.querySelector(".natname")
            let popuName = document.querySelector(".popuname")
            let regName = document.querySelector(".regname")
            let subName = document.querySelector(".subname")
            let capName = document.querySelector(".capname")
            let topName = document.querySelector(".topname")
            let curName = document.querySelector(".curname")
            let langName = document.querySelector(".langname")
            let borderCountries = document.querySelector(".border .bold")


            flagImg.src = `${d.flags.svg}`
            mainName.innerHTML = `${d.name.common}`
            natName.innerHTML = `${Object.values(d.name.nativeName)[0].common}`
            popuName.innerHTML = `${d.population}`
            if (d.region) {
                regName.innerHTML = `${d.region}`
            }
            if (d.subregion) {
                subName.innerHTML = `${d.subregion}`
            }
            capName.innerHTML = `${d.capital}`
            topName.innerHTML = `${d.tld[0]}`
            curName.innerHTML = `${Object.values(d.currencies)[0].name}`
            langName.innerHTML = `${Object.values(d.languages).join(', ')}`

            if (d.borders) {
                d.borders.forEach(bord => {
                    fetch(`https://restcountries.com/v3.1/alpha/${bord}`)
                        .then((res) => res.json())
                        .then(([borderCountry]) => {
                            console.log(borderCountry)
                            let borderCountryTag = document.createElement('a')
                            borderCountryTag.innerText = borderCountry.name.common
                            borderCountryTag.href = `country.html?name=${borderCountry.name.common}`
                            borderCountries.append(borderCountryTag)
                        })


                })
            }
            else {
                borderCountries.textContent = "Border Countries: None"
            }

        })
}
fetchcountry()

let backbtn = document.querySelector(".backbtn")
backbtn.addEventListener("click", () => {
    history.back()
})

// Dark Mode Btn
function darkmodeswitch() {
    let darkbtn = document.querySelector(".darkmode")
    let bodyEl = document.querySelector("body")
    let darkmodeicn = document.querySelector(".darkmode i")
    darkbtn.addEventListener("click", () => {
        bodyEl.classList.toggle("dark")
        darkmodeicn.classList.replace("fa-regular fa-moon fa-l", "fa-solid fa-moon fa-xl")
    })
}
darkmodeswitch()