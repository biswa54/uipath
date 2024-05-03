let inputtext = document.querySelector("#input");
let heading = document.createElement("h1");
let button = document.querySelector("#button");
let form = document.querySelector("#form");

inputtext.addEventListener("change", (e) => {
    console.log(e.target.value);
    heading.innerText = "Welcome to My Webpage " + e.target.value;
    
});

button.addEventListener("click"  , (e) =>{
    form.after(heading);
} );


