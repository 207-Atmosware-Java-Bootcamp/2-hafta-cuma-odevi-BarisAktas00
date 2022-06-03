var password1,password2;

password1=prompt("Lütfen şifrenizi giriniz");
password2=prompt("Lütfen şifrenizi tekrar giriniz");

function passwordCheck() {

    while (password1!==password2 ) {
        
        alert("Şifreler uyuşmuyor.Tekrar deneyin.")
password1=prompt("Lütfen şifrenizi giriniz");
password2=prompt("Lütfen şifrenizi tekrar giriniz");
    }
   if((password1.length)<6 || (password2.length)){

        alert("Şifre en az 6 haneli olmalıdır.")
      password1=prompt("Lütfen şifrenizi giriniz");
      password2=prompt("Lütfen şifrenizi tekrar giriniz");
        }
    return passwordCheck();
    
}


passwordCheck();
