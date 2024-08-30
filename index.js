var a = document.querySelectorAll("a");
var locationAdress = location.href;
for(var i =0; i <a.length ;i++){
   if(a[i].href === locationAdress ){
    a[i].style.color ="black";
   }
}


//Auto Slider

var countImage =0;
var autoImg = document.getElementById("autoImg");
var autoImages =["n.jpg","ad2.jpg","hb1.jpg","hb2.jpg"];
setInterval(autoFunc,1000);
function autoFunc(){ 
countImage++;
if(countImage >= autoImages.length){
countImage=0;
autoImg.src=autoImages[countImage];
}else{
autoImg.src=autoImages[countImage];
}

}


//Javascript Clickable slider
var countClick =0;
var clickImg = document.getElementById("clickImg");
var clickImages =["ad1.jpg","ad2.jpg","hb1.jpg","hb2.jpg"];
var next =document.getElementById("next");
var Prev =document.getElementById("Prev");
next.addEventListener("click",function(){
countClick++;
if(countClick>=clickImages.length){
    countClick=0;
    clickImg.src=clickImages[countClick];
}else{
    clickImg.src=clickImages[countClick];
}
});
Prev.addEventListener("click",function(){
countClick--;
if(countClick<=0){
    countClick =3;
    clickImg.src=clickImages[countClick];
}else{
    clickImg.src=clickImages[countClick];
}
});


//about img js

window.addEventListener("scroll",function(){
 var aboutImg = document.getElementById("aboutImg");
 var position = aboutImg.getBoundingClientRect().top;
 var Xposition = window.scrollY;
 console.log(Xposition);
 if(position < Xposition){
    aboutImg.classList.add("aboutImgActive");
 }else{
    aboutImg.classList.remove("aboutImgActive");
 }
 var aboutContent = document.getElementById("aboutContent");
 var contentPosition = aboutContent.getBoundingClientRect().top;
 var scollPositon = window.scrollY;
 if(contentPosition < scollPositon){
    aboutContent.classList.add("contentClass");
 }else{
    aboutContent.classList.remove("contentClass");
 }
});
//About type Efect
var h1 =document.getElementById("h1");
var count =0;
var text ="About Me";
function textType(){
h1.innerHTML=text.slice(0,count++); 
if(count>text.length){
count =0;
}  
}
setInterval(textType,200);


// Clickable Slider type Effect
var cl_h1 = document.getElementById("cl_h1");
var clText ="Clickable Slider";
var clCount =0;
function clFunc (){
cl_h1.innerHTML=clText.slice(0,clCount++);
if(clCount>clText.length){
clCount =0
}
}
setInterval(clFunc,200);


// serching img

function search(){
    var search_Item = document.querySelectorAll(".search_Item");
    var  SearchField =document.getElementById("SearchField").value;   
    for(var i = 0 ; i<search_Item.length;i++){
        search_Item[i].style.display="none";
    }
   for(var j =0 ; j<search_Item.length;j++){
        var titles = search_Item[j].getAttribute("data-title");
        if(SearchField === titles ){
            search_Item[j].style.display = "block";
        }else if(SearchField ===''){
            search_Item[j].style.display = "block";
        }else{
            search_Item[j].style.display = "none";

        }


    }}

    // img zooming
    var mainImg = document.getElementById("mainImg");
    var img1 = document.getElementById("img1");
    img1.addEventListener("click",function(){
        mainImg.src="b1.jpg" ;

    });

    var img2 = document.getElementById("img2");
    img2.addEventListener("click",function(){
        mainImg.src="b2.jpg" ;

    });

    var img3 = document.getElementById("img3");
    img3.addEventListener("click",function(){
        mainImg.src="b3.jpeg" ;

    });

    // navBar 

  
    window.addEventListener("scroll",function(){
        var limitation = window.scrollY;
        var nav = document.querySelector(".nav");
        if(limitation > 300){
            nav.classList.add("navClass");
        }else{
            nav.classList.remove("navClass");

        }
    })


    // social media
    var social_media =document.querySelector(".social_media");

    window.addEventListener("scroll",function(){
        var sLimit = window.scrollY;
        if(sLimit<=100){
            social_media.style.display="none";

        }else if(sLimit > 100 ){
            social_media.style.display="block";


        }
    })
   

    
    // Shooping js
    
function plus(funcplus,prc,itm) {
    var count = document.getElementById(funcplus);
    var item = document.getElementById(itm);
    var price = document.getElementById(prc);      
    var product_amount = document.getElementById("product_amount");
    var charge = document.getElementById("charge");
    var total_amount = document.getElementById("total_amount");
    var cupon_main_Div = document.getElementById("cupon_main_Div");

    if (count.value <5) {
        
        count.value++;
        var itemAdd = parseInt(item.innerHTML) + parseInt(price.innerHTML);
        document.getElementById(itm).innerHTML = itemAdd;

        var productAmount = parseInt(product_amount.innerHTML) + parseInt(price.innerHTML);
        document.getElementById("product_amount").innerHTML = productAmount;

        var totalTk = parseInt(product_amount.innerHTML) + parseInt(charge.innerHTML);
        document.getElementById("total_amount").innerHTML = totalTk;

        if (totalTk > 500) {
            cupon_main_Div.style.display = "block";
        }
    } else {
        alert("Sorry, you can buy only 5 products.");
    }
}
          
function minus(funcplus,prc,itm) {
    var count = document.getElementById(funcplus);
    var item = document.getElementById(itm);
    var price = document.getElementById(prc); 
    var product_amount = document.getElementById("product_amount");
    var charge = document.getElementById("charge");
    var total_amount = document.getElementById("total_amount");

    if (count.value > 0) {
        count.value--;

        var itemAdd = parseInt(item.innerHTML) - parseInt(price.innerHTML);
        document.getElementById(itm).innerHTML = itemAdd;

        var productAmount = parseInt(product_amount.innerHTML) - parseInt(price.innerHTML);
        document.getElementById("product_amount").innerHTML = productAmount;
      
        var totalTk = parseInt(total_amount.innerHTML) - parseInt(price.innerHTML);
        document.getElementById("total_amount").innerHTML = totalTk;
        var cupon_main_Div = document.getElementById("cupon_main_Div");
        
        if(totalTk < 500){
            cupon_main_Div.style.display = "none";
        }



    } else {

        count.value = 0;
        document.getElementById("total_amount").innerHTML = 0;
     
        
     
    }
}
        

        var total_amount = document.getElementById("total_amount");
        var cuponInput = document.getElementById("cuponInput");
        var applyBtn = document.getElementById("applyBtn");
        var cupon_main_Div = document.getElementById("cupon_main_Div");
        applyBtn.addEventListener("click", function() {
        if (cuponInput.value === "Ismail") {
        var cuponTotal = parseInt(total_amount.innerHTML) - 100;
        cupon_main_Div.style.display = "none";
             
           if(cuponTotal < 0 ){
            cuponTotal = 0;
            cupon_main_Div.style.display = "block";
           }
        
        document.getElementById("total_amount").innerHTML = cuponTotal;
    }else if(cuponInput.value ==''){
        alert("Please Enter Code");

    } else {
        alert("Your entered coupon code is not correct");
    }
});

