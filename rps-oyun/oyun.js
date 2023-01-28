const oyuncu_skor=document.getElementsByClassName("oyuncu_skor")[0]; 
const bilgisayar_skor=document.getElementsByClassName("bilgisayar_skor")[0]; 
const tas=document.getElementById("tas");
const kagit=document.getElementById("kagit");
const makas=document.getElementById("makas");
const oyuncu_secimi=document.getElementById("oyuncu_secimi");
const bilgisayar_secimi=document.getElementById("bilgisayar_secimi");
const mesaj=document.getElementsByClassName("mesaj")[0];
let oyuncu=0;
let bilgisayar=0;


function bilgisayarSecim(){ 
    const secim =["tas","kagit","makas"]; 
    const rastgeleSayi= Math.floor(Math.random()*3); 
    bilgisayar_secimi.setAttribute("src",`res/${secim[rastgeleSayi]}.png`); 
    return secim[rastgeleSayi]; 
}
function eventListeners(){  
    tas.addEventListener("click",function(){
        oyuncu_secimi.setAttribute("src",`res/tas.png`);
        let bil_secim = bilgisayarSecim();
         return sonuc("tas",bil_secim);
    });
    kagit.addEventListener("click",function(){
        oyuncu_secimi.setAttribute("src",`res/kagit.png`);
        let bil_secim = bilgisayarSecim();
         return sonuc("kagit",bil_secim);
    });
    makas.addEventListener("click",function(){
        oyuncu_secimi.setAttribute("src",`res/makas.png`);
        let bil_secim = bilgisayarSecim();
         return sonuc("makas",bil_secim);
    });

}
eventListeners();
function sonuc(oyuncu,bilgisayar){

    switch(oyuncu+bilgisayar){
        case "tasmakas": kazan();
        break;
        case "kagittas":kazan();
        break;
        case "makaskagit":kazan();
        break;
       
        break; 
        case "taskagit":kaybet();
        break;
        case "kagitmakas":kaybet();
        break;
        case "makastas":kaybet();
        break;
            
         break;
        case "tastas": berabere();
        break;
        case "kagitkagit": berabere();
        break;
        case "makasmakas": berabere();
           
            break;
            default:"hata";
            break;
    }
}
function kazan(){
    oyuncu=oyuncu+1; 
    mesaj.innerHTML="Tebrikler kazandın";
    oyuncu_skor.innerHTML=oyuncu.toString();
}
function kaybet(){
    bilgisayar=bilgisayar+1; 
    mesaj.innerHTML="Bilgisayar kazandı";
    bilgisayar_skor.innerHTML=bilgisayar.toString();
}
function berabere(){
    mesaj.innerHTML="Berabere";
}

