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

