var numbers_array = [1,2,3,4,5,6,7,8,9,0];
var lowerCase_array=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase_array =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacters_array = ['!','@','#','$','%'];
var num_box=document.getElementById('numbers');
var lowercase_box=document.getElementById('lowerCase');
var uppercase_box = document.getElementById('upperCase');
var special_box = document.getElementById('specialCharacters');
var password_length = document.getElementById("password-length");


document.getElementById('range').oninput = function () {

    password_length.innerHTML= this.value;
};
document.getElementById('generator').onclick = generatePass;

function generatePass() {
    var multy_array=[];
    if(num_box.checked){
        multy_array=multy_array.concat(numbers_array);
    }
    if(lowercase_box.checked){
        multy_array=multy_array.concat(lowerCase_array);
    }
    if(uppercase_box.checked){
        multy_array=multy_array.concat(upperCase_array);
    }
    if(special_box.checked){
        multy_array=multy_array.concat(specialCharacters_array);
    }

    multy_array.sort(compareRandom);
    console.log(multy_array);
    var pass ="";
    var range = parseInt(document.getElementById('range').value);
    for (var i =0; i<range; i++) {
        pass+=multy_array[randomInteger(0, multy_array.length-1)];
    }
    console.log(pass);
    document.getElementById('out').innerHTML = '<p>'+ pass+'</p>';
}

function compareRandom(a,b) {
    return Math.random() - 0.5;

}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}