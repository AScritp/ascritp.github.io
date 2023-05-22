/* Scripts del header INICIO*/

let nabvar= document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick= () =>{
    nabvar.classList.toggle("active");
    cartItem.classList.remove("active");
    search.classList.remove("active");
}

let cartItem= document.querySelector(".container-items");

document.querySelector("#cart-btn").onclick= () =>{
    cartItem.classList.toggle("active");
    nabvar.classList.remove("active");
    search.classList.remove("active");
}

let search= document.querySelector(".search-form");

document.querySelector("#search-btn").onclick= () =>{
    search.classList.toggle("active");
    nabvar.classList.remove("active");
    cartItem.classList.remove("active");

}

window.onscroll=()=>{
    nabvar.classList.remove("active");
    cartItem.classList.remove("active");
    search.classList.remove("active");
}

/* Scripts del header FIN*/
