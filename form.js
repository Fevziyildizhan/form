<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
     <link rel="stylesheet" href="form .css">
    <title>FORM</title>

</head>
<body>
    

<div class="container my-5 d-flex justify-content-center" >

   <div class="col-5">
    <div class="card">
        <div class="card-header">Kullanıcı Hesabı</div>
        <div class="card-body">
            <form id="form" novalidate>
            <div class="form-group">
                <label for="username">username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter username">
                <div></div>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" >
                <div></div>
        </div>
        <div class="form-group">
            <label for="number">Telefon</label>
            <input type="number" class="form-control" id="phone" placeholder="Enter phone" >
            <div></div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter password">
            <div></div>
    </div>
    <div class="form-group">
        <label for="repassword">Re-password</label>
        <input type="password" class="form-control" id="repassword" placeholder="Enter Re-password">
        <div></div>
   </div>
      <button type="submit" class="btn btn-primary btn-block ">Register</button>
    </form>
</div>





   


    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
<script src="form.js"></script>
</body>
</html>
// CSS
.card{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

}


//JS
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const repassword = document.getElementById('repassword')

function error(input,messange){
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling
    div.innerText = messange
    div.className = 'invalid-feedback'
}


function success (input){
    input.className = 'form-control is-valid'
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(re.test(input.value)){
       success(input)
   }else{
       error(input,'hatalı bir mail adresi')
   }
}



 function checkRequired(inputs){
     
   
inputs.forEach(function(input) {
    if(input.value ===''){
        error(input,`${input.id} id required`)
    }else{
        success(input)
    }

});

    
 }    


function checkLength(input, min , max){
    if(input.value.length < min){
        error(input,`en az ${min} karakterli olmalıdır`)
    }else if(input.value.length > max){
        error(input,`en fazla ${max} karakterli olmalıdır`)
    }else{
        success(input)
    }
}

function checkPaswords(input1,input2){
     if(input1.value !== input2.value){
         error(input2,'Parolalar eşit değil')
     }
}



function checkPhone(input){
    var exp = /^\d{10}$/
    if(!exp.test(input.value)){
      error(input,'telefon numaranızı giriniz 10 karakterli olmalıdır')
    }else{
        success(input)
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault()

        checkRequired([username,email,password,repassword,phone])
        checkEmail(email);
        checkLength(username,7,15)
        checkLength(password,7,12)
        checkPaswords(password,repassword)
        checkPhone(phone,10)
}) 
