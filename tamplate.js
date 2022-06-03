var password1,password2;

password1=prompt("Lütfen şifrenizi giriniz");
password2=prompt("Lütfen şifrenizi tekrar giriniz");

function passwordCheck() {

while(password1!==password2){
alert( "Şifreler eşleşmiyor")

password1=prompt("Lütfen şifrenizi giriniz");
password2=prompt("Lütfen şifrenizi tekrar giriniz");
}
    while(password1.length<6 || password2.length<6){
alert("Şifre en az 6 haneli olmalıdır.")
password1=prompt("Lütfen şifrenizi giriniz");
password2=prompt("Lütfen şifrenizi tekrar giriniz");
    }
alert("Tebrikler")    
}
passwordCheck();

