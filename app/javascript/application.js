// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.onload = function(){
  console.log("Hello World")
  var a = document.getElementById("order_pay_type")
  a.classList.add("btn");
  a.classList.add("select")
}

var a = document.getElementById("order_pay_type")
a.classList.add("btn");
a.classList.add("select")