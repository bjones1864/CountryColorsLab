class Country {
    constructor(name, lang, greeting, colors, flag) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }

    displayColors(){
        document.querySelector("#Color1").style.backgroundColor = this.colors[0];
        document.querySelector("#Color2").style.backgroundColor = this.colors[1];
        document.querySelector("#Color3").style.backgroundColor = this.colors[2];
    }
}
let usa = new Country("USA", "English", "Hello World!", ["red", "white", "blue"], "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png");
let mexico = new Country("Mexico", "Spanish", "¡Hola mundo!", ["red", "white", "green"], "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/800px-Flag_of_Mexico.svg.png");
let algeria = new Country("Algeria", "Arabic and Berber", "مرحبا بالعالم!", ["blue", "yellow", "red"], "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/800px-Flag_of_Algeria.svg.png");
let bulgaria = new Country("Bulgaria", "Bulgarian", "Здравей свят!", ["white", "green", "red"], "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/800px-Flag_of_Bulgaria.svg.png");
let estonia = new Country("Estonia", "Estonian", "Tere, Maailm!", ["blue", "black", "white"], "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/800px-Flag_of_Estonia.svg.png");

function SwitchCountry() {
    let input = document.querySelector("#CountryList").value;
    let country;

    switch(input)
    {
        case "USA":
            country = usa;
            break;
        case "Mexico":
            country = mexico;
            break;
        case "Algeria":
            country = algeria;
            break;
        case "Bulgaria":
            country = bulgaria;
            break;
        case "Estonia":
            country = estonia;
            break;
    }
    ChangeColors(country);
}

function ChangeColors(country)
{
    country.displayColors();
    document.querySelector("#CountryName").innerText = country.name;
    document.querySelector("#OfficialLanguage").innerText = country.lang;
    document.querySelector("#HelloWorld").innerText = country.greeting;
    document.querySelector("#Flag").src = country.flag;
}