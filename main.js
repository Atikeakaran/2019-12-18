

// STRİNG METHODS
//----------------------------------------

//.lenght  bir stringin uzunluğunu verir
var name = "Ali'nin arabası";
console.log(name);
console.log(name.length);

var nameUzunluk = name.length;
console.log(nameUzunluk);

//.indexof("text",başlangıç noktası verilebilir)   --->   -1  veya index numarası ekrana gelir

var sehirBul = "İstanbul Türkiye'de bir sehir olup Türkiye'de metropol olarak anılır."
console.log(sehirBul);
console.log(sehirBul.indexOf('sehir'));
console.log(sehirBul.indexOf('Ankara'));
console.log(sehirBul.indexOf('Tü'));
console.log(sehirBul.indexOf('Türkiye'));
console.log(sehirBul.indexOf('Türkiye', 15)); //15. indexten sonrasındakini bul
console.log(sehirBul.indexOf('Türkiye', 45)); //45. indexten sonrasındakini bul

//.search("text"), ikinci başlangıç noktası parametresi ALMAZ.
console.log(sehirBul.search('Türkiye'));

//------------------------------------------------------------
//slice(start, end)         ----> start dahil, end hariç
//substring(start,end)      ----> start dahil, end hariç
//substr(start,length)      ----> start dahil, uzunluk olarak belirtilir.

var meyveler = "muz kivi kiraz elma";
var x = meyveler.slice(4, 8);
var y = meyveler.substring(4, 14);
var t = meyveler.substr(9, 5);
console.log(x);
console.log(y);
console.log(t);
console.log(meyveler);

var z = meyveler.slice(-4) //- değerde sondan başlar
var u = meyveler.slice(-10, -5);
console.log(z);
console.log(u);

//------------------------------------------------------------
//replace() bir text i başka bir text içine yerleştiriyor.
//aynı eleman 2 tane olsada ilkini değiştirir.

//meyvelerde kivi yerine portakal yerleştirmek için
console.log(meyveler.replace('kivi', 'portakal'));
var newMyveler = meyveler.replace('muz', 'armut');
console.log(meyveler);
console.log(newMyveler);

//------------------------------------------------------------
//toUpperCase()
//toLowerCase()

var text = "Hello World";
console.log(text.toUpperCase());

var text1 = text.toUpperCase();
var text2 = text.toLowerCase();
console.log(text);
console.log(text1);
console.log(text2);

//------------------------------------------------------------
//concat() strinkleri birleştirir.

var text5 = "Merhaba";
var text6 = "Dünya";
var text7 = text5.concat(text6);

var text8 = text5.concat(" ", text6);

console.log(text7);
console.log(text8);
console.log(text5 + " " + text6);

//------------------------------------------------------------
//trim()      ---> yazıların başı ve sonundaki boşlukları kaldırır.
//                  aradaki boşluklara dokunmaz.

var text10 = "   Hello    World   ";
console.log(text10.trim());

//split()       bir string ifadeyi array a çevirir.

var text11 = "  Merhaba  Dünya  ";
var text12 = text11.split(" ");
console.log(text12);
console.log(text11.trim( ).split(" "));


//-------------------------------------------------------
//charAt (position)         -----> bir string ifadeiçerisindeki index numaralı karakteriverir
//charCodCat (position)     -----> istenen index numarasındaki karakterin ASCII kodunu verir

var text15 = "Istanbul";
console.log(text15.charAt(5));

console.log(text15.charCodeAt(5));







//UYGULAMA 
//-------------------------------------------------------
//1- verilen string ifadeyi array e atacak fonksiyonu yazmak 

function strToArr() {
    var text20 = "hamburg köln frankfurt berlin";
    text20.trim().split(' ');
}
console.log(strToArr());

var text20 = "hamburg köln frankfurt berlin";
console.log(text20.trim().split(' '));

//return olmadan hiç birşey sunmaz(fonction)

function strToArr1() {
    var text21 = "hamburg köln frankfurt berlin";
    return text21.trim().split(' ');
}
console.log(strToArr1());

//parametresizfonksiyon
function strToArr2() {
    var text22 = "hamburg köln frankfurt berlin";
    var textsonuc = text22.trim().split(' ');
    return textsonuc;
}
console.log(strToArr2());





function strToArr3(str3, degisken) {
    var textsonuc3 = str3.trim().split(degisken);
    return textsonuc3;
}
var text22 = "hamburg;köln;frankfurt;berlin";
console.log(strToArr3(text22, ';'));
console.log(strToArr3(text22, 'a'));


//2.  VERİLEN 3KELİMEDEN OLUŞAN STRİNG İFADE DE İLK KELİMENİN 
//İLK HARFİ BÜYÜK OLACAK DİĞER HARFLER KÜÇÜK OLARAK MUHAFAZA EDİLECEK.


var ankara = function (str) {
    //return str.charAt(0).toUpperCase() + str.Slice(1);
    return (str.charAt(0).toUpperCase()).concat(str.slice(1));
}
console.log(ankara("javascript string dersi"));



// 3- text = "javascript string dersi"  ----> javascriptStringDersi
//kelimeden oluşan string ifadeyi tek kelime olarak camelCase e çevirme



function strToCamel(str, degisken) {
    var Arr = str.split(degisken);
    var newArray = [];

    for(var i = 0; i<Arr.length; i++){
        if( i=== 0 ){
            newArray.push(Arr[i].toLowerCase());
        } else{
            var newText = '';
            newText = Arr[i].charAt(0).toUpperCase().concat(Arr[i].slice(1));
            newArray.push(newText);
        }
        
    }
    return newArray.join('');
}
var text = 'javascript string dersi';
console.log(strToCamel(text, ' '));