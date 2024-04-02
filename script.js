var circle1 = document.querySelector("#circle-1") 
var circle2 = document.querySelector("#circle-2") 
var circle3 = document.querySelector("#circle-3") 
var circle4 = document.querySelector("#circle-4") 
var inside = document.querySelector("#inside")
var width = inside.getBoundingClientRect().width
var height = inside.getBoundingClientRect().height

inside.addEventListener("mouseenter",move(),{})

function move(){
    inside.addEventListener("mousemove",function(dets){
        console.log((dets.x - (width/2))/(width/100))
        console.log(((dets.y -300) - (140/2))/(2.84)/2)
        circle1.style.transform = `translate(${(dets.x - (width/2))/(width/100)}%,${((dets.y -300) - (140/2))/(2.84)/2}%)`
        circle2.style.transform = `translate(${-(dets.x - (width/2))/(width/100)}%,${-((dets.y -300) - (140/2))/(2.84)/2}%)`
        circle3.style.transform = `translate(${-(dets.x - (width/2))/(width/100)}%,${((dets.y -300) - (140/2))/(2.84)/2}%)`
        circle4.style.transform = `translate(${(dets.x - (width/2))/(width/100)}%,${-((dets.y -300) - (140/2))/(2.84)/2}%)`
    })
}