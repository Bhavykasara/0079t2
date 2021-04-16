var pizzalist =[
    "Cheese Pizza",
    "Super Large Pizza",
    "Pocket Pizza",
    "Fun Pizza",
    "Party Pizza"
];
var pizza=[
  "Cheese Pizza",
  "Super Large Pizza",
  "Pocket Pizza",
  "Fun Pizza",
  "Party Pizza"
];
var i=5;
function gazab() {
  var ot;
  var adi;
  adi=document.getElementById("add_item").value;
  pizzalist.push(adi);
  pizzalist.sort();
  i=pizzalist.length;
  ot='<section class="secop">'+'<span class="spop">'+'<img class="imgop" style="height: 100px;" src="https://th.bing.com/th/id/R9e63f21deaeb3e22ec1b5e7acb623096?rik=ZhjeUE0h%2b59gkA&riu=http%3a%2f%2fimages.clipartpanda.com%2fpizza-cartoon-xcgK4rKki.png&ehk=4g2%2frLOJ3E3SaYWmWL%2bYMhUyX%2fA0FkSs3vWo90x8qAg%3d&risl=&pid=ImgRaw">'+'<h3>'+document.getElementById("add_item").value+'</h3>'+'</span>'+'</section>';
  document.getElementById("hided"+pizzalist.length).innerHTML=ot;
}
function opgazab() {
  pizza.sort();
   tg='<li>'+pizza[0]+'</li><li>'+pizza[1]+'</li><li>'+pizza[2]+'</li><li>'+pizza[3]+'</li><li>'+pizza[4]+'</li>'
   document.getElementById("suprop").innerHTML=tg;
};