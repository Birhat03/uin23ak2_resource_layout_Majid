const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]


const HTMLresources = resources.filter((html) => html.category === "HTML")

const CSSresources = resources.filter((css) => css.category === "CSS")

const JSresources = resources.filter((js) => js.category === "JavaScript")

const ReactResources = resources.filter((react) => react.category === "React")

const SanityResources = resources.filter((sanity) => sanity.category === "Sanity and headless CMS")

const menu = document.getElementById("menu")
const HTMLbtn = document.getElementById("HTMLbtn")
const CSSbtn = document.getElementById("CSSbtn")
const JSbtn = document.getElementById("JSbtn")
const ReactBtn = document.getElementById("ReactBtn")
const SanityBtn = document.getElementById("SanityBtn")


HTMLbtn.classList.add("active");

function HTMLmap(){

    HTMLresources.map((html) => {
        
        let links = ``;
        html.sources.map((link) => {
            links += `
            <li><a target="blank" href="${link.url}">${link.title}</a></li>
            `;
        });

        menu.innerHTML = `
    <h2>${html.category}</h2>
    <p>${html.text}</p>
    <ul>
        ${links}
    </ul>
    
    `})

    HTMLbtn.classList.add("active");

    CSSbtn.classList.remove("active");
    JSbtn.classList.remove("active");
    ReactBtn.classList.remove("active");
    SanityBtn.classList.remove("active");

}


function CSSmap(){

    CSSresources.map((css) => {
        
        let links = ``;
        css.sources.map((link) => {
            links += `
            <li><a target="blank" href="${link.url}">${link.title}</a></li>
            `;
        });

        menu.innerHTML = `
    <h2>${css.category}</h2>
    <p>${css.text}</p>
    <ul>
        ${links}
    </ul>
    
    `})

    CSSbtn.classList.add("active");

    HTMLbtn.classList.remove("active");
    JSbtn.classList.remove("active");
    ReactBtn.classList.remove("active");
    SanityBtn.classList.remove("active");
}


function JSmap(){
    JSresources.map((js) => {
        
        let links = ``;
        js.sources.map((link) => {
            links += `
            <li><a target="blank" href="${link.url}">${link.title}</a></li>
            `;
        });

        menu.innerHTML = `
    <h2>${js.category}</h2>
    <p>${js.text}</p>
    <ul>
        ${links}
    </ul>
    
    `})

    JSbtn.classList.add("active");

    HTMLbtn.classList.remove("active");
    CSSbtn.classList.remove("active");
    ReactBtn.classList.remove("active");
    SanityBtn.classList.remove("active");
}

function ReactMap(){
    ReactResources.map((react) => {
        
        let links = ``;
        react.sources.map((link) => {
            links += `
            <li><a target="blank" href="${link.url}">${link.title}</a></li>
            `;
        });

        menu.innerHTML = `
    <h2>${react.category}</h2>
    <p>${react.text}</p>
    <ul>
        ${links}
    </ul>
    
    `})

    ReactBtn.classList.add("active");

    HTMLbtn.classList.remove("active");
    CSSbtn.classList.remove("active");
    JSbtn.classList.remove("active");
    SanityBtn.classList.remove("active");
}

function SanityMap(){
    SanityResources.map((sanity) => {
        
        let links = ``;
        sanity.sources.map((link) => {
            links += `
            <li><a target="blank" href="${link.url}">${link.title}</a></li>
            `;
        });

        menu.innerHTML = `
    <h2>${sanity.category}</h2>
    <p>${sanity.text}</p>
    <ul>
        ${links}
    </ul>
    
    `})

    SanityBtn.classList.add("active");

    HTMLbtn.classList.remove("active");
    CSSbtn.classList.remove("active");
    JSbtn.classList.remove("active");
    ReactBtn.classList.remove("active");
}

HTMLmap()
