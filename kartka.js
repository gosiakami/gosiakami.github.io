

// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();


loadSprite("kartka","kartkaswiateczna.png")
loadSprite("balwan","balwan.png")

loadSound("muzyka","dzisiaj_w_betlejem.mp3")

add([
    sprite("kartka")
])

const balwan= add([
    sprite("balwan"),
    pos(50,150)
])

let wprawo=true

onUpdate(()=>{

    if(wprawo && balwan.pos.x<470) balwan.pos.x += 1

   else if(!wprawo &&  balwan.pos.x>0) balwan.pos.x -= 1

   else wprawo ^= true 

})

onMouseRelease(()=>play("muzyka"))