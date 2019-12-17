function preload() {
img = loadImage("kroger.jpeg")

} 

function setup() {

    createCanvas(800, 600, WEBGL); 
}

function draw() {
	texture(img)
	
beginShape()
	vertex(100, 100, 0, 0)
	vertex(100, 150, 0, 183)
	vertex(150, 150, 275, 183)
	vertex(150, 100, 275, 0)
endShape()

}

