let name = "Zsu"
console.log(name+"'s apples")
$("h1").text("We are having a break")
$("p").html("StayAtHome Coding Camp Likes: <strong>13</strong>")
$("strong").css("background", "lime")
$("strong").css("padding", "5px")


$("h2").toggleClass("blue")
$("h2").toggleClass("blue")

$("ul").append("<li>My name is "+name+"</li>");
$("ul").append("<li id='special-item'>Removable "+name+"</li>");

$("#special-item").remove()

let addButtonHandler = () => {
    if ($("li").length < 5) {$("ul").append("<li>My name is "+ name +"</li>")}}

$("#add-button").click(addButtonHandler)
$("#remove-button").click(()=> {
    $("li:last-child").remove()
})

let age = 12

if(age < 18){
    console.log("Not old enough to drink")} else{
        console.log("Old enough to drink")}


let colors = ["orange", "lime", "magenta", "yellow", "blue"]

$("#box-container").append('<div class="box"> </div>')
$('.box:last-child').css('background', colors[0])


$("#box-container").append('<div class="box"> </div>')
$('.box:last-child').css('background', colors[1])
$("#box-container").append('<div class="box"> </div>')
$('.box:last-child').css('background', colors[2])
$("#box-container").append('<div class="box"> </div>')
$('.box:last-child').css('background', colors[3])
$("#box-container").append('<div class="box"> </div>')
$('.box:last-child').css('background', colors[4])

colors.push ('purple')
colors.forEach((color) => {
    $("#box-container").append('<div class="box"> </div>')
$('.box:last-child').css('background', color)
})

for (let i = 0; i < 100; i=i+1) {
    console.log(i);
    }




