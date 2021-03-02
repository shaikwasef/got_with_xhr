// Import stylesheets
import "./style.css";

// Write Javascript code!
var appDiv = document.getElementById("app");
var input_text = document.getElementById("input");
var submit = document.getElementById("submit");

submit.addEventListener("click", request_data);

function request_data() {
   var request = new XMLHttpRequest();
   var url = "https://www.anapioficeandfire.com/api/characters/?name=" + input.value.replaceAll(" ","%20");
   request.open('GET',url,true);
   request.onload = () => {
     var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400){
      console.log(data[0].name);
      console.log(data[0].born);
      console.log(data[0].gender);
    };
}
}
