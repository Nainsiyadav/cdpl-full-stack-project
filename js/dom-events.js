const form = document.querySelectore("#signup-form");
const errorBox = document.querySelectore("#error-text");

form.addEventListener("submit", (event)=>{

    const fullname = document.querySelectore("#fullname").value.trim();
    const username = document.querySelectore("#username").value.trim();
    const email = document.querySelectore("#email").value.trim();

    console.log( username, fullname, email);
    
})