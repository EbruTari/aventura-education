
//.com ile bitenler
var div= document.getElementById("website_div");//document erişim ve değişikliği sağlar
var button= document.getElementById("website_button");
var h2Elements=[];
button.addEventListener("click",function(){
  website_div();
});
function website_div(){
  var companiesData = getCompanies();
  
  h2Elements.forEach((h3) => {//Foreach ile bütün nesnelerin üzerinde tek seferde aynı işlem yapılır
    div.removeChild(h3);
  });
  h2Elements = [];
  companiesData.forEach((company) => {
        if (company.website.endsWith(".com")) {
          var h2 = document.createElement("h3");
          h2.textContent = company.companyName;//h2 elementinin içeriği, company objesinin companyName özelliği ile değiştirildi
          div.appendChild(h2);//div elementine h2 ekledik
          h2Elements.push(h2);
        }
      });
    }

//ing ve amerika de faaliyet olmayan
var div = document.getElementById("ing_usa");
var button = document.getElementById("btn_ia");
var h2Elements = [];
button.addEventListener("click", function () {

ing_usa();
});

function ing_usa() {
var companiesData = getCompanies();

h2Elements.forEach((h4) => {
div.removeChild(h4);
});
h2Elements = [];

companiesData.forEach((company) => {
if (!(company.country.includes("United States") || company.country.includes("United Kingdom"))) {
var para = document.createElement("h4"); 
para.textContent = `  ${company.companyName}   , ${company.country}  , ${company.companyPhone}`;//template
div.appendChild(para);
h2Elements.push(para);
}
});
}

//Telefon numarası +44 ile başlayan şirketleri listeleyin ama şirketin resmini ve ülke bayrağını da gösterebileceğiniz bir component olsun.


var div= document.getElementById("resim_div");
var button= document.getElementById("resim_button");

var h2Elements=[];
button.addEventListener("click",function(){
  resim_div();
});
function resim_div(){
  var companiesData= getCompanies();
  var countriesData= getCountries();
  h2Elements.forEach((h3)=>{
    div.removeChild(h3);
  });
  h2Elements=[];
  companiesData.forEach((company)=>{
    if (company.companyPhone.startsWith("+44")) {
      var para = document.createElement("h3");
      para.textContent = ` Şirket ismi: ${company.companyName}   ,Tel-no: ${company.companyPhone}`;

      var img1 = document.createElement("img");
      var country = countriesData.find((country) => country.name === company.country);
      img1.src = country.flag;
      img1.style.width = "100px";
      img1.style.height = "100px";

      var img2 = document.createElement("img");
      img2.src = company.companyPic;
      img2.style.width = "100px";
      img2.style.height = "100px";

      div.appendChild(para);
      div.appendChild(img1);
      div.appendChild(img2);
      h2Elements.push(para);
      h2Elements.push(img1);
      h2Elements.push(img2);
  }
  });
}

//tel 33 ile başlayan
var button = document.getElementById("tel_no");
var div = document.getElementById("tel_no_div");

var h2Elements = [];

button.addEventListener("click", function() {
  var companiesData = getCompanies();
  h2Elements.forEach((h3) => {
  div.removeChild(h3);
  });
  h2Elements = [];
  
  companiesData.forEach((company) => {
  if (company.companyPhone.startsWith("+33")) {
  var para = document.createElement("h3");
  para.textContent = company.companyName;
  
  div.appendChild(para);
  h2Elements.push(para);
  
  } 
  });
  });



// İKİNCİ TASK



// Tüm ürünleri listeleyin
var div = document.getElementById("tum");
var h2Elements = [];

function tum() {
  var productsData = getProducts();

  h2Elements.forEach((h2) => {
    div.removeChild(h2);
  });
  h2Elements = [];

  productsData.forEach((product) => {
    var para = document.createElement("h2");
    para.textContent = product.productName + " " + product.productPrice + " " + product.productAmount;
    div.appendChild(para);
    h2Elements.push(para);
  });
}

document.getElementById("tum-btn").addEventListener("click", tum);
 


document.getElementById("tum-btn").addEventListener("click", tum);
//hata var bakarsın sonra ebruşş


//Ürün miktarı, fiyatına göre sıralama yapın ( azalan fiyat, artan miktar vs.) artan fiyata göre
var div = document.getElementById("artan");
var h2Elements = [];

function artan() {
  var productsData = getProducts();

  productsData.sort((a, b) => a.productPrice.slice(1) - b.productPrice.slice(1));
  //parsefloat

  h2Elements.forEach((h2) => {
    div.removeChild(h2);
  });
  h2Elements = [];

  productsData.forEach((product) => {
    var para = document.createElement("h2");
    para.textContent = product.productName + " " + product.productPrice;
    div.appendChild(para);
    h2Elements.push(para);
  });
}

document.getElementById("artan-btn").addEventListener("click", artan);

//Ürün miktarı, fiyatına göre sıralama yapın ( azalan fiyat, artan miktar vs.) azalan fiyata göre
var div = document.getElementById("azalan");
var h2Elements = [];

function azalan() {
  var productsData = getProducts();
  
  productsData.sort((a, b) => b.productPrice.slice(1) - a.productPrice.slice(1));
  //parsefloat

  h2Elements.forEach((h2) => {
    div.removeChild(h2);
  });
  h2Elements = [];

  productsData.forEach((product) => {
    var para = document.createElement("h2");
    para.textContent = product.productName + " " + product.productPrice;
    div.appendChild(para);
    h2Elements.push(para);
  });
}

document.getElementById("azalan-btn").addEventListener("click", azalan);

//ürün adlarının a-z sıralanması
var div = document.getElementById("sort_prod");
var h2Elements = [];

function sort_prod() {
    var productsData = getProducts();
    productsData.sort((a, b) => a.productName.localeCompare(b.productName));// türkçe sıralama yapmak için localeCompare

    h2Elements.forEach((h3) => {
        div.removeChild(h3);
    });
    h2Elements = [];

    productsData.forEach((product) => {
        var para = document.createElement("h3");
         para.textContent = product.productName ;
        div.appendChild(para);
        h2Elements.push(para);
    });
}

document.getElementById("btn-sort").addEventListener("click", sort_prod);


//Ürün miktarı, fiyatına göre sıralama yapın ( azalan fiyat, artan miktar vs.) azalan fiyata göre
// var div=document.getElementsByClassName("siralama");
// var div=document.getElementsByClassName("list");
// var button= document.getElementById("links-azalan");

// var h2Elements=[];
// button.addEventListener("click",function(){
//   var productsData=getProducts();
//   h2Elements.forEach((h3)=>{
//     div.removeChild(h3);
//   });
//   h2Elements=[];
//   productsData.forEach((product)=>{
//     if(product.productPrice.sort((a,b)=>a.productPrice-b.productPrice)){
//       var para= document.createElement("h3");
//       para.textContent=product.productPrice;
//       div.appendChild(para);
//       h2Elements.push(para);
//     }
//   });
// });

// var div = document.getElementsByClassName("list");
// var div=document.getElementsByClassName("siralama");
// var h2Elements = [];

// function list() {
//   var productsData = getProducts();

//   product.sort((a, b) => a.productPrice - b.productPrice);


//   h2Elements.forEach((h2) => {
//     div.removeChild(h2);
//   });
//   h2Elements = [];

//   list.forEach((product) => {
//     var para = document.createElement("h2");
//     para.textContent = product.name + " - Population: " + product.productPrice;
//     div.appendChild(para);
//     h2Elements.push(para);
//   });
// }

// document.getElementsByClassName("links-azalan").addEventListener("click", list);





















