let getSpeed
if(screen.width < 800){
    getSpeed = 0
}else{getSpeed = .6}


const tl= gsap.timeline({
    paused:true
})

tl.to("#percent, #bar",{
    duration: .2,
    opacity: 0,
    zIndex: -1
})

tl.to(".progress",{
    duration: .1,
    width: "0%",
})

tl.to(".loader-circle",{
    duration: getSpeed,
    top: "50%",
    left: "80%"
})

tl.to(".loader-circle img",{
    duration: getSpeed,
    width: "250px",
    height: "250px"
    
})


tl.to(".loader",{
    zIndex:0,
})

tl.from(".header, .footer",{
    duration: 1,
    y: "150%",
    x: "-50%",
    opacity: "0",
    stagger: .2
})

tl.from(".content h1, p",{
    duration: .8,
    opacity: 0,
    y: 200,
    skewY: 10,
    stagger: .2,
    ease: "power4.out"
})


let id
let width = 1;

function loading(){
    
   id = setInterval(frame, 25)
    console.log("hola")
    
}

function frame(){
    
    if(width >= 100){
        clearInterval(id)
        tl.play()
        if(screen.width < 800){
            tl.killTweensOf(".loader-circle, .loader-circle img").progress(0)   
            console.log(tl.endTime()) 
        } 
        else{
            console.log(tl.endTime())
        }
       
    }
    else{
        width++ ; 
        document.getElementById("barc").style.width = width + "%";
        document.getElementById("percent").innerHTML = width + "%"
    }
}


