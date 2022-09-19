let sayi1=document.getElementById("numberSayi1").value;
let sayi2=document.getElementById("numberSayi2").value;
let girilenSayi1=document.getElementById("girilenSayi1");
let girilenSayi2=document.getElementById("girilenSayi2");
let sonuc1=document.getElementById("sonuc1");
let sonuc2=document.getElementById("sonuc2");
let gir=document.getElementById("btnGir");
let rastgele1=Math.floor(Math.random()*20);
let rastgele2=Math.floor(Math.random()*20);

gir.addEventListener("click", ()=>{
    girilenSayi1.innerHTML=sayi1;
    console.log(sayi1);
    sonuc1.innerHTML=rastgele1;
    console.log(rastgele1);

    girilenSayi2.innerHTML=sayi2;
    console.log(sayi2);
    sonuc2.innerHTML=rastgele2;
    console.log(rastgele2);
})
