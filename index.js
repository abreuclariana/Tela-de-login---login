document.getElementById('login-form').addEventListener('submit', function (event){

    event.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value


})

    if(email === 'clariana.abreu@outlook.com' && password === '123'){
        window.location.href = "welcome.html"

    }else{
        alert('os dados estão errados')
    }


   