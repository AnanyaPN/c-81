canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

color="red"

ctx.beginPath()
ctx.strokeStyle ="grey"
ctx.lineWidth=2
ctx.rect(158,143,438,200)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle ="blue"
ctx.lineWidth=8
ctx.arc(270,200,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle ="black"
ctx.lineWidth=8
ctx.arc(380,200,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle ="red"
ctx.lineWidth=8
ctx.arc(490,200,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle ="yellow"
ctx.lineWidth=8
ctx.arc(325,240,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle ="green"
ctx.lineWidth=8
ctx.arc(435,240,40,0,2*Math.PI)
ctx.stroke()

