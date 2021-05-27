menu_list_array = ["Veg Margherita Pizza",
                    "chicken Tandoori Pizza",
                    "Veg supreme Pizza",
                    "Paneer Tikka Pizza",
                    "Deluxe Veggie Pizza",
                    "Veg Extravaganza Pizza"
                   ];

function getmenu() {
    console.log(menu_list_array[i]);
var htmldata;
htmldata="<ol class='menulist'>";
menu_list_array.sort();
for (var i= 0; i< menu_list_array.length; i++) {
    console.log(menu_list_array[i]);
    htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>';
}
htmldata=htmldata+"</ol>";
document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='card'>"
for (var i= 0;i<menu_list_array.length; i++) {
    htmldata=htmldata+'<div class="card">'
     +'<img src="images/pizzaImg.png">'
      +menu_list_array[i] + '</div>'
}
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata ;
}
function add_top(){
var item = document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}
function sorting(){
    menu_list_array.sort();
    document.getElementById("display_menu").innerHTML=menu_list_array
}