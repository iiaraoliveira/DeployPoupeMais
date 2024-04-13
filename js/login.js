const form = document.getElementById("login-form")

async function login(event){
    event.preventDefault();//para q ñ fique 
    let token = "";
    const user =  document.getElementById("user").value
    const email = document.getElementById("email").value
    console.log(user, email)

    if(user === "" || email === ""){
        console.log("email ou senha vazio")
        return;
    }

    const formData = {
        username: user,
        email:email,
    }
    await fetch("https://poupe-mais-api.vercel.app/user/sign-in",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },    
        body:JSON.stringify(formData),
    })
    .then(function(response){
        if(!response.ok){ throw new Error("Nenhum dado retornado!")}
        return response.json();
    })
    .then(function(data){
        console.log(data.body)
        const {username, email, token} = data.body;
        sessionStorage.setItem("username", username);
        sessionStorage. setItem("monthlyIncome", email);
        sessionStorage.setItem("token", token);

        window.location.href="dashboard.html";
    })//executado quandp der certo
    .catch(function(error){
        console.error(error);
    })//executado quando ocorrer erro
}
form.addEventListener("submit",login)//escutador de evento, ou seja, td vez que acontecer alguma coisa, vai acontecer uma ação, nesse caso, submit

