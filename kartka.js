import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// add a piece of text at position (120, 80)

loadSprite("Kartka","swieta.png")

loadSound("muzyka","Gdy_sliczna_panna.mp3 ")

add([
    sprite("Kartka"),
    pos(0,0)
])
loadSprite("slimak","slimak.png")

const slimak = add([
    sprite("slimak"),
    pos(100,300)
])

onMouseRelease(()=> play("muzyka")


let lewo=true

onUpdate(()=>{

    if (slimak.pos.x<500 && lewo)

    slimak.pos.x=slimak.pos.x+1

    else if (!lewo && slimak.pos.x > 0)
    
    {
        slimak.pos.x=slimak.pos.x-1
    }

    else if(!lewo && slimak.pos.x <= 0)

    {
        lewo = true
    }

    else

    {
        lewo = false
    }


})
