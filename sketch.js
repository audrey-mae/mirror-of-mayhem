let capture
let tracker
let previous_positions
let img 
let img2 
let img3 
let img4
let img5 
let img6 
let img7 
let img8
let img9
let img10
let img11
let img12
let img13
let img14
let img15
let img16
let img17
let img18
let img19
let img20
let img21
let img22
let img23
let img24
let img25
let img26
let img27
let img28
let img29
let img30
let img31
let img32
let img33
let img34
let img35
let img36
let img37
let img38
let img39
let img40
let img41
let img42
let img01
let img02
let img03
let img04
let img05
let img06
let img07
let img08
let img09
let img010
let img011
let img012
let img013
let img014
let img015
let img016
let img017
let img018
let img019
let img020
let img021
let img022
let img023
let img024
let img025 
let img026
let img027
let img028
let img029
let img030
let img031
let img032
let img033
let img034
let img035
let img036
let img037
let img038
let img039
let img040
let img041
let img042
let img043
let img044
let img045
let img046
let img047
let img048
let img049
let img050
let img051
let img052
let img053
let img054 

function preload() {
img = loadImage("cocacola.jpg")
img2 = loadImage("kroger.jpeg")
img3 = loadImage('trumpsmile.jpeg')
img4 = loadImage('pollutedbaby.jpg')
img5 = loadImage('walmart.jpeg')
img6 = loadImage('apocalypse.jpeg')
img7 = loadImage('wave.jpg')
img8 = loadImage('mcvegan.jpeg')
img9 = loadImage('gucciguilty.jpeg')
img10 = loadImage('factoryworkers.jpeg')
img11 = loadImage('faceid.jpeg')
img12 = loadImage('netflix.jpeg')
img13 = loadImage('burningamazon.jpeg')
img14 = loadImage('bigcar.jpeg')
img15 = loadImage('apps.jpeg')
img16 = loadImage('exxonmobil.jpeg')
img17 = loadImage('ronald.jpeg')
img18 = loadImage("trashisland.jpeg")
img19 = loadImage('adfunnel.jpeg')
img20 = loadImage('pigs.jpg')
img21 = loadImage('cvs.jpeg')
img22 = loadImage('prius.jpeg')
img23 = loadImage('sadduck.jpeg')
img24 = loadImage('disney.jpeg')
img25 = loadImage('bomb.jpeg')
img26 = loadImage('hoot.jpeg')
img27 = loadImage('airpods.jpg')
img28 = loadImage('shoppin.jpg')
img29 = loadImage('hulu.png')
img30 = loadImage('factories.jpeg')
img31 = loadImage('dior.jpeg')
img32 = loadImage('heinz.jpg')
img33 = loadImage('pollutionmask.jpeg')
img34 = loadImage('refugees.jpeg')
img35 = loadImage('water.jpeg')
img36 = loadImage('flag.jpg')
img37 = loadImage('modernity.jpeg')
img38 = loadImage('juicy.jpeg')
img39 = loadImage('climateprotest.jpeg')
img40 = loadImage('blackfriday.jpg')
img41 = loadImage('eyeball.jpeg')
img42 = loadImage('dollar.jpeg')

//face
img01 = loadImage('face_1.png')
img02 = loadImage('face_2.jpeg')
img03 = loadImage('face_3.jpeg')
img04 = loadImage('face_4.jpeg')
img05 = loadImage('face_5.jpeg')
img06 = loadImage('face_6.jpeg')
img07 = loadImage('face_7.jpeg')
img08 = loadImage('face_8.jpeg')
img09 = loadImage('face_9.jpeg')
img010 = loadImage('face_10.jpeg')
img011 = loadImage('face_11.jpeg')
img012 = loadImage('face_12.jpeg')
img013 = loadImage('face_13.jpeg')
img014 = loadImage('face_14.jpeg')
img015 = loadImage('face_15.jpeg')
img016 = loadImage('face_16.jpeg')
img017 = loadImage('face_17.jpeg')
img018 = loadImage('face_18.jpeg')
img019 = loadImage('face_19.jpeg')
img020 = loadImage('face_20.jpeg')
img021 = loadImage('face_21.jpeg')
img022 = loadImage('face_22.jpeg')
img023 = loadImage('face_23.jpg')
img024 = loadImage('face_24.jpeg')  
img025 = loadImage('face_25.jpg')
img026 = loadImage('face_26.jpeg')
img027 = loadImage('face_27.jpeg')
img028 = loadImage('face_28.jpeg')
img029 = loadImage('face_29.jpeg')
img030 = loadImage('face_30.jpeg')
img031 = loadImage("face_31.jpeg")
img032 = loadImage('face_32.jpeg')
img033 = loadImage('face_33.jpeg')
img034 = loadImage('face_34.jpeg')
img035 = loadImage('face_35.jpeg')
img036 = loadImage('face_36.jpeg')
img037 = loadImage('face_37.jpeg')
img038 = loadImage('face_38.jpeg')
img039 = loadImage('face_39.jpeg')
img040 = loadImage('face_40.jpeg')
img041 = loadImage('face_41.jpeg')
img042 = loadImage('face_42.jpeg')
img043 = loadImage('face_43.jpeg')
img044 = loadImage('face_44.jpeg')
img045 = loadImage('face_45.jpeg')
img046 = loadImage('face_46.jpeg')
img047 = loadImage('face_47.jpeg')
img048 = loadImage('face_48.jpeg')
img049 = loadImage('face_49.jpeg')
img050 = loadImage('face_50.jpeg')
img051 = loadImage('face_51.jpeg')
img052 = loadImage('face_52.jpeg')
img053 = loadImage('face_53.jpeg')
img054 = loadImage('face_54.jpeg')
} 


function setup() {

    createCanvas(800, 600, WEBGL); 

    capture = createCapture(VIDEO)
    capture.size(800, 600)
    capture.hide()

    tracker = new clm.tracker()
    tracker.init()
    tracker.start(capture.elt) 

}    


function draw() { 
  background(255)

  translate(-width/2, -height/2)


 //image(capture, 0, 0, capture.width, capture.height)

    let positions = tracker.getCurrentPosition()

    if (positions.length == 0) {
        positions = previous_positions
    }

    if (positions.length > 0) {
        previous_positions = positions 

   stroke(255)

   //stroke(random(0, 255))
   
  strokeWeight(1)

//nose
    line(positions[41][0], positions[41][1], positions[62][0], positions[62][1])
    line(positions[39][0], positions[39][1], positions[62][0], positions[62][1])
    line(positions[35][0], positions[35][1], positions[62][0], positions[62][1])
    line(positions[37][0], positions[37][1], positions[62][0], positions[62][1])
    line(positions[36][0], positions[36][1], positions[62][0], positions[62][1])
    line(positions[38][0], positions[38][1], positions[62][0], positions[62][1])
    line(positions[33][0], positions[33][1], positions[41][0], positions[41][1])

//eyes

fill(255)

beginShape()
    vertex(positions[30][0], positions[30][1])
    vertex(positions[68][0], positions[68][1])
    vertex(positions[29][0], positions[29][1])
    vertex(positions[67][0], positions[67][1])
    vertex(positions[28][0], positions[28][1])
    vertex(positions[70][0], positions[70][1])
    vertex(positions[31][0], positions[31][1])
    vertex(positions[69][0], positions[69][1])
    vertex(positions[30][0], positions[30][1])
endShape()

beginShape()   
    vertex(positions[25][0], positions[25][1])
    vertex(positions[65][0], positions[65][1])
    vertex(positions[26][0], positions[26][1])
    vertex(positions[66][0], positions[66][1])
    vertex(positions[23][0], positions[23][1])
    vertex(positions[63][0], positions[63][1])
    vertex(positions[24][0], positions[24][1])
    vertex(positions[64][0], positions[64][1])
    vertex(positions[25][0], positions[25][1])
endShape()



push() // left nose plane? 
texture(img017) //64x68
    beginShape()
    vertex(positions[33][0], positions[33][1], 64, 0)
    vertex(positions[62][0], positions[62][1], 64, 68)
    vertex(positions[35][0], positions[35][1], 0, 68)
    vertex(positions[34][0], positions[34][1], 0, 0)
endShape()
pop()

push()
texture(img015) //right nose plane 
beginShape() //130x214
    vertex(positions[33][0], positions[33][1], 0, 0)
    vertex(positions[62][0], positions[62][1], 0, 214)
    vertex(positions[39][0], positions[39][1], 130, 214)
    vertex(positions[40][0], positions[40][1], 130, 0)
endShape()
pop()

push() //right nose bottom
texture(img04)//151x185
beginShape()
    vertex(positions[62][0], positions[62][1], 0, 0)
    vertex(positions[39][0], positions[39][1], 151, 0)
    vertex(positions[38][0], positions[38][1], 151, 185)
    vertex(positions[37][0], positions[37][1], 0, 185)
endShape()
pop()

push() //left nose bottom
texture(img016) //196x205
beginShape()
    vertex(positions[62][0], positions[62][1], 196, 0)
    vertex(positions[35][0], positions[35][1], 0, 0)
    vertex(positions[36][0], positions[36][1], 0, 205)
    vertex(positions[37][0], positions[37][1], 196, 205)
endShape()
pop()

push() //le cupids bow
texture(img05) //184x96
beginShape()
    vertex(positions[37][0], positions[37][1], 184, 0)
    vertex(positions[48][0], positions[48][1], 184, 96)
    vertex(positions[47][0], positions[47][1], 0, 96)
    vertex(positions[46][0], positions[46][1], 0, 0)
endShape()
pop()

push()//mustache place right
texture(img07) //837x552
    beginShape()
    vertex(positions[37][0], positions[37][1], 0, 0)
    vertex(positions[38][0], positions[38][1], 837, 0)
    vertex(positions[49][0], positions[49][1], 837, 552)
    vertex(positions[48][0], positions[48][1], 0, 552)
endShape()
pop()

push() //mustache place left 
texture(img06) //156x198
beginShape()
    vertex(positions[37][0], positions[37][1], 156, 0)
    vertex(positions[46][0], positions[46][1], 156, 198)
    vertex(positions[45][0], positions[45][1], 0, 198)
    vertex(positions[36][0], positions[36][1], 0, 0)
endShape()
pop()

push() // top lip left
texture(img09)
beginShape() //229x48
    vertex(positions[44][0], positions[44][1], 0, 48)
    vertex(positions[46][0], positions[46][1], 0, 0)
    vertex(positions[47][0], positions[47][1], 229, 0)
    vertex(positions[60][0], positions[60][1], 229, 48)
endShape()
pop()

push()//top lip right
texture(img010) //382x166
beginShape()
    vertex(positions[47][0], positions[47][1], 0, 0)
    vertex(positions[48][0], positions[48][1], 382, 0)
    vertex(positions[50][0], positions[50][1], 382, 166)
    vertex(positions[60][0], positions[60][1], 0, 166)
endShape()
pop()

push()  //bottom lip left 
texture(img08) //806x195
beginShape()
    vertex(positions[44][0], positions[44][1], 0, 0)
    vertex(positions[57][0], positions[57][1], 806, 0)
    vertex(positions[53][0], positions[53][1], 806, 195)
    vertex(positions[54][0], positions[54][1], 0, 195)
endShape()
pop()

push() //bottom lip right
texture(img011) //566x268
beginShape()    
    vertex(positions[57][0], positions[57][1], 0, 0)
    vertex(positions[50][0], positions[50][1], 566, 0)
    vertex(positions[52][0], positions[52][1], 566, 268)
    vertex(positions[53][0], positions[53][1], 0, 268)
endShape()
pop()

push() //mouth fill
texture(img012) //115x117
    beginShape()
    vertex(positions[44][0], positions[44][1], 0, 58.5)
    vertex(positions[60][0], positions[60][1], 57.5, 0)
    vertex(positions[50][0], positions[50][1], 115, 58.5)
    vertex(positions[57][0], positions[57][1], 57.5, 117)
endShape()
pop()

push() //top lip skin left
texture(img018) //281x154
beginShape()
    vertex(positions[46][0], positions[46][1], 281, 0)
    vertex(positions[3][0], positions[3][1], 0, 0)
    vertex(positions[4][0], positions[4][1], 0, 154)
    vertex(positions[44][0], positions[44][1], 281, 154)
endShape()
pop()

push() //left nose cheek
texture(img019) //210x385
beginShape()
    vertex(positions[3][0], positions[3][1], 0, 0)
    vertex(positions[35][0], positions[35][1], 210, 0)
    vertex(positions[36][0], positions[36][1], 210, 385)
    vertex(positions[46][0], positions[46][1], 0, 385)
endShape()
pop()

push() //left mid cheek
texture(img021) //98x79
beginShape()
    vertex(positions[3][0], positions[3][1], 0, 79)
    vertex(positions[35][0], positions[35][1], 98, 79)
    vertex(positions[34][0], positions[34][1], 98, 0)
    vertex(positions[2][0], positions[2][1], 0, 0)
endShape()
pop()

push() //left top cheek
texture(img020) // 65x42
beginShape()
    vertex(positions[1][0], positions[1][1], 0, 0)
    vertex(positions[65][0], positions[65][1], 65, 0)
    vertex(positions[34][0], positions[34][1], 65, 42)
    vertex(positions[2][0], positions[2][1], 0, 42)
endShape()
pop()

push()  //between eyebvrows 
texture(img032) //320x213
beginShape()
    vertex(positions[25][0], positions[25][1], 0, 213)
    vertex(positions[33][0], positions[33][1], 160, 213)
    vertex(positions[30][0], positions[30][1], 320, 213)
    vertex(positions[18][0], positions[18][1], 320, 0)
    vertex(positions[22][0], positions[22][1], 0, 0)
endShape()
pop()

push() //left eye corner
texture(img022) //480x276
beginShape()
    vertex(positions[65][0], positions[65][1], 0, 276)
    vertex(positions[25][0], positions[25][1], 0, 0)
    vertex(positions[33][0], positions[33][1], 480, 0)
    vertex(positions[34][0], positions[34][1], 480, 276)
endShape()
pop()
 
push() //the triangle above that^^ 
texture(img023) //103x92
beginShape()
    vertex(positions[64][0], positions[64][1], 0, 0)
    vertex(positions[33][0], positions[33][1], 103, 0)
    vertex(positions[25][0], positions[25][1], 103, 92)
endShape()
pop()

push() //inner corner eye skin 
texture(img024) //57x54
beginShape()
    vertex(positions[64][0], positions[64][1], 0, 0)
    vertex(positions[65][0], positions[65][1], 57, 0)
    vertex(positions[25][0], positions[25][1], 57, 54)
endShape()
pop()

push() //to the left of the left eye 
texture(img025) //142x131
beginShape()
    vertex(positions[65][0], positions[65][1], 0, 0)
    vertex(positions[23][0], positions[23][1], 0, 131)
    vertex(positions[0][0], positions[0][1], 142, 131)
    vertex(positions[1][0], positions[1][1], 142, 0)
endShape()
pop()

push() // left eye 
texture(img013)//248x138
beginShape()
    vertex(positions[63][0], positions[63][1], 0, 0)
    vertex(positions[24][0], positions[24][1], 124, 0)
    vertex(positions[64][0], positions[64][1], 248, 0)
    vertex(positions[65][0], positions[65][1], 248, 138)
    vertex(positions[26][0], positions[26][1], 124, 138)
    vertex(positions[66][0], positions[66][1], 0, 138)
endShape()
pop()

push() //outer corner left eye skin
texture(img024) //57x54
beginShape()
    vertex(positions[23][0], positions[23][1], 0, 0)
    vertex(positions[63][0], positions[63][1], 57, 0)
    vertex(positions[66][0], positions[66][1], 57, 54)
endShape()
pop()

push() //left of left eye, top
texture(img026) //189x92 
beginShape() 
    vertex(positions[23][0], positions[23][1], 0, 92)
    vertex(positions[63][0], positions[63][1], 189, 92)
    vertex(positions[19][0], positions[19][1], 189, 0)
    vertex(positions[0][0], positions[0][1], 0, 0)
endShape()
pop()

push() //top left eye 2 
texture(img027) //199x92 
beginShape()
    vertex(positions[63][0], positions[63][1], 0, 92)
    vertex(positions[19][0], positions[19][1], 0, 0)
    vertex(positions[20][0], positions[20][1], 199, 0)
    vertex(positions[24][0], positions[24][1], 199, 92)
endShape()
pop()

push() //top left eye 3 
texture(img028)//438x456
beginShape()
    vertex(positions[24][0], positions[24][1], 0, 456)
    vertex(positions[20][0], positions[20][1], 438, 0)
    vertex(positions[19][0], positions[19][1], 0, 0)
    vertex(positions[63][0], positions[63][1], 438, 456)
endShape()
pop()

push() //top left eye 4 
texture(img029) //597x222
beginShape()
    vertex(positions[20][0], positions[20][1], 597, 0)
    vertex(positions[21][0], positions[21][1], 597, 222)
    vertex(positions[64][0], positions[64][1], 0, 222)
    vertex(positions[24][0], positions[24][1], 0, 0)
endShape()
pop()

push() //top left eye 5
texture(img030) //157x94
beginShape()
    vertex(positions[21][0], positions[21][1], 0, 0)
    vertex(positions[22][0], positions[22][1], 157, 0)
    vertex(positions[25][0], positions[25][1], 157, 94)
    vertex(positions[64][0], positions[64][1], 0, 94)
endShape()
pop()

push()  //left eyebrow 
texture(img053)//130x33
beginShape()
    vertex(positions[20][0], positions[20][1], 0, 0)
    vertex(positions[21][0], positions[21][1], 130, 0)
    vertex(positions[22][0], positions[22][1], 130, 33)
    vertex(positions[19][0], positions[19][1], 0, 33)
endShape()
pop()


push() //under right eye triangle 
texture(img033)//105x80
beginShape()
    vertex(positions[69][0], positions[69][1], 105, 80)
    vertex(positions[30][0], positions[30][1], 105, 0)
    vertex(positions[33][0], positions[33][1], 0, 0)
    vertex(positions[40][0], positions[40][1], 0, 80)
endShape()
pop()



push() //above right eye 1 
texture(img036) //464x220
beginShape()
    vertex(positions[18][0], positions[18][1], 0, 0)
    vertex(positions[17][0], positions[17][1], 464, 0)
    vertex(positions[68][0], positions[68][1], 464, 220)
    vertex(positions[30][0], positions[30][1], 0, 220)
endShape()
pop()

push() //above right eye 2 
texture(img037)//140x81
beginShape()
    vertex(positions[17][0], positions[17][1],  0, 0)
    vertex(positions[16][0], positions[16][1], 140, 0)
    vertex(positions[29][0], positions[29][1], 140, 81)
    vertex(positions[68][0], positions[68][1], 0, 81)
endShape()
pop()

push() //above right eye 3
texture(img038) //90x151
beginShape()
    vertex(positions[16][0], positions[16][1], 0, 0)
    vertex(positions[15][0], positions[15][1], 90, 0)
    vertex(positions[67][0], positions[67][1], 90, 151)
    vertex(positions[29][0], positions[29][1], 0,  151)
endShape()
pop()

push() //above  right eye 4 
texture(img039)  //200x117
beginShape()
    vertex(positions[15][0], positions[15][1], 0, 0)
    vertex(positions[14][0], positions[14][1], 200, 0)
    vertex(positions[28][0], positions[28][1], 200, 117)
    vertex(positions[67][0], positions[67][1],0, 117)
endShape()
pop()

push() //inner corner right eye
texture(img040) // 90x84
beginShape()
    vertex(positions[30][0], positions[30][1], 0, 0)
    vertex(positions[68][0], positions[68][1], 90, 0)
    vertex(positions[69][0], positions[69][1], 90, 84)
endShape()
pop()

push() //little triangle above that^
texture(img034) //117x148
beginShape()
    vertex(positions[33][0], positions[33][1], 0, 0)
    vertex(positions[30][0], positions[30][1], 117, 0)
    vertex(positions[68][0], positions[68][1], 117, 148)
endShape()
pop()

push() //right eyebrow
texture(img054) //118x41
beginShape()
    vertex(positions[18][0], positions[18][1], 0, 41)
    vertex(positions[17][0], positions[17][1], 0, 0)
    vertex(positions[16][0], positions[16][1], 118, 0)
    vertex(positions[15][0], positions[15][1], 118, 41)
endShape()
pop()

push() //outer corner right eye
texture(img041) //97x71
beginShape()
    vertex(positions[67][0], positions[67][1], 0, 0)
    vertex(positions[28][0], positions[28][1], 97, 0)
    vertex(positions[70][0], positions[70][1], 97, 71)
endShape()
pop()

push() //right temple 
texture(img042) //716x526
beginShape()
    vertex(positions[14][0], positions[14][1], 716, 0)
    vertex(positions[28][0], positions[28][1], 0, 0)
    vertex(positions[70][0], positions[70][1], 0, 526)
    vertex(positions[13][0], positions[13][1], 716, 526)
endShape()
pop()

push() //right top cheek
texture(img043)//734x733
beginShape()
    vertex(positions[70][0], positions[70][1], 734, 0)
    vertex(positions[13][0], positions[13][1], 734, 733)
    vertex(positions[12][0], positions[12][1], 0, 733)
    vertex(positions[69][0], positions[69][1], 0, 0)
endShape()
pop()

push() //right eye 
texture(img014) //411x240 
beginShape()
    vertex(positions[68][0], positions[68][1], 0, 0)
    vertex(positions[29][0], positions[29][1], 205, 0)
    vertex(positions[67][0], positions[67][1], 411, 0)
    vertex(positions[70][0], positions[70][1], 411, 240)
    vertex(positions[31][0], positions[31][1], 205, 240)
    vertex(positions[69][0], positions[69][1], 0, 240)
endShape()
pop()

push() //right cheek
texture(img044)//744x368
beginShape()
    vertex(positions[69][0], positions[69][1], 744, 0)
    vertex(positions[40][0], positions[40][1], 0, 0)
    vertex(positions[11][0], positions[11][1], 0, 368)
    vertex(positions[12][0], positions[12][1], 744, 368)
endShape()
pop()

push() //right cheek lower
texture(img045) //390x242
beginShape()
    vertex(positions[40][0], positions[40][1], 390, 0)
    vertex(positions[39][0], positions[39][1], 0, 0)
    vertex(positions[10][0], positions[10][1], 0, 242)
    vertex(positions[11][0], positions[11][1], 390, 242)
endShape()
pop()

push() //right upper lip cheek thing 
texture(img046) //168x84
beginShape()
    vertex(positions[39][0], positions[39][1], 168, 0)
    vertex(positions[38][0], positions[38][1], 0, 0)
    vertex(positions[48][0], positions[48][1], 0, 84)
    vertex(positions[50][0], positions[50][1], 168, 84)
    vertex(positions[10][0], positions[10][1], 168, 84)
endShape()
pop()

push() //right chin
texture(img047)//800x480
beginShape()
    vertex(positions[50][0], positions[50][1], 800, 0)
    vertex(positions[9][0], positions[9][1], 800, 480)
    vertex(positions[8][0], positions[8][1], 0, 480)
    vertex(positions[52][0], positions[52][1], 0, 0)
endShape()
pop()

push() //right chin
texture(img048) //504x532
beginShape()
    vertex(positions[10][0], positions[10][1], 504, 0)
    vertex(positions[9][0], positions[9][1], 504, 532)
    vertex(positions[50][0], positions[50][1], 0, 0)
endShape()
pop()

push() //bottom right chin triangle
texture(img049) //270x187
beginShape()
    vertex(positions[52][0], positions[52][1], 0, 0)
    vertex(positions[8][0], positions[8][1], 270, 0)
    vertex(positions[7][0], positions[7][1], 270, 187)
endShape()
pop()

push() //bottom chin
texture(img050) //218x118
beginShape()
    vertex(positions[54][0], positions[54][1], 0, 0)
    vertex(positions[52][0], positions[52][1], 218, 0)
    vertex(positions[7][0], positions[7][1], 218, 118)
    vertex(positions[6][0], positions[6][1], 0, 118)
endShape()
pop()

push() //bottom left chin
texture(img051) //203x90
beginShape()
    vertex(positions[44][0], positions[44][1], 0, 0)
    vertex(positions[54][0], positions[54][1], 203, 0)
    vertex(positions[6][0], positions[6][1], 203, 90)
    vertex(positions[5][0], positions[5][1], 0, 90)
endShape()
pop()

push() //left chin
texture(img052)//1048x747
beginShape()
    vertex(positions[44][0], positions[44][1], 1048, 0)
    vertex(positions[4][0], positions[4][1], 0, 0)
    vertex(positions[5][0], positions[5][1], 0, 747)
endShape()
pop()

//mouth

    line(positions[44][0], positions[44][1], positions[60][0], positions[60][1])
    line(positions[50][0], positions[50][1], positions[60][0], positions[60][1])
    line(positions[53][0], positions[53][1], positions[60][0], positions[60][1])
    line(positions[47][0], positions[47][1], positions[60][0], positions[60][1])

//mouth

    line(positions[49][0], positions[49][1], positions[57][0], positions[57][1])
    line(positions[54][0], positions[54][1], positions[57][0], positions[57][1])
    line(positions[52][0], positions[52][1], positions[57][0], positions[57][1])
    line(positions[45][0], positions[45][1], positions[57][0], positions[57][1])

//top face fill
fill(0, 0, 0) 

push()
texture(img) //1920x887
beginShape()
    vertex(0, 0, 0, 0)
    vertex(positions[0][0], positions[0][1], 1920, 887)
    vertex(positions[19][0], positions[19][1], 1920, 0)
    vertex(60, 0, 0, 887)
endShape()
pop()

push()
texture(img2) //275x183
beginShape()
    vertex(60, 0, 0, 183)
    vertex(positions[19][0], positions[19][1], 275, 183)
    vertex(positions[20][0], positions[20][1], 275, 0)
    vertex(120, 0, 0, 0)
endShape()
pop()

push()
texture(img3) //318x159
beginShape()
    vertex(120, 0, 0, 159)
    vertex(positions[20][0], positions[20][1], 318, 159)
    vertex(positions[21][0], positions[21][1], 318, 0)
    vertex(180, 0, 0, 0)
endShape()
pop()

push()
texture(img4) //960x640
beginShape()
    vertex(180, 0, 0, 640)
    vertex(positions[21][0], positions[21][1], 960, 640)
    vertex(positions[22][0], positions[22][1], 960, 0)
    vertex(250, 0, 0, 0)
endShape()
pop()

push()
texture(img5) //1400x824
beginShape()
    vertex(250, 0, 0, 824)
    vertex(positions[22][0], positions[22][1], 1400, 824)
    vertex(positions[18][0], positions[18][1], 1400, 0)
    vertex(300, 0, 0, 0)
endShape()
pop()

push()
texture(img6) //618x410
beginShape()
    vertex(300, 0, 0, 410)
    vertex(positions[18][0], positions[18][1], 618, 410)
    vertex(positions[17][0], positions[17][1], 618, 0)
    vertex(360, 0, 0, 0)
endShape()
pop()

push()
texture(img7) //1900x1068
beginShape()
    vertex(360, 0, 0, 1068)
    vertex(positions[17][0], positions[17][1], 1900, 1068)
    vertex(positions[16][0], positions[16][1], 1900, 0)
    vertex(420, 0, 0, 0)
endShape()
pop()

push()
texture(img8) //1068x601
beginShape()
    vertex(width-60, 0, 1068, 601)
    vertex(positions[16][0], positions[16][1], 0, 601)
    vertex(positions[17][0], positions[17][1], 0, 0)
    vertex(width-120, 0, 1068, 0)
endShape()
pop()

push()
texture(img9) //614x817
beginShape()
    vertex(width-120,  0, 614, 0)
    vertex(positions[17][0], positions[17][1],614, 817)
    vertex(positions[18][0], positions[18][1], 0, 817)
    vertex(width-180, 0, 0, 0)
endShape()
pop()

push()
texture(img10) // 1540x800
beginShape()
    vertex(width-180, 0, 1540, 800)
    vertex(positions[18][0], positions[18][1], 0, 800)
    vertex(positions[22][0], positions[22][1], 0, 0)
    vertex(width-240, 0, 1540, 0)
endShape()
pop()

push()
texture(img11) //1560x600
beginShape()
    vertex(width-240, 0, 1560, 600)
    vertex(positions[22][0], positions[22][1], 0, 600)
    vertex(positions[21][0], positions[21][1], 0, 0)
    vertex(width-300,  0, 1560, 0)
endShape()
pop()

push()
texture(img12)//1280x720
beginShape()
    vertex(width-300, 0, 0, 0)
    vertex(positions[21][0], positions[21][1], 1280, 0)
    vertex(positions[20][0], positions[20][1], 1280, 720)
    vertex(width-360,  0, 0,  720)
endShape()
pop()

push()
texture(img13) //955x500
beginShape()
    vertex(width-360, 0, 955, 500)
    vertex(positions[20][0], positions[20][1], 955, 0)
    vertex(positions[19][0], positions[19][1], 0, 0)
    vertex(width-420, 0, 0, 500)
endShape()
pop()

//bottom face fill

push()
texture(img32) // 600x842
beginShape()
    vertex(0, height, 0, 0)
    vertex(positions[5][0], positions[5][1], 600, 0)
    vertex(positions[6][0], positions[6][1], 600, 842)
    vertex(80, height, 0, 842)
endShape()
pop()

push()
texture(img33) //1000x1000
beginShape()
    vertex(80, height, 0, 0)
    vertex(positions[6][0], positions[6][1], 1000, 0)
    vertex(positions[7][0], positions[7][1], 1000, 1000)
    vertex(160, height, 0, 1000)
endShape()
pop()

push()
texture(img34) //310x162
beginShape()
    vertex(160, height, 310, 162)
    vertex(positions[7][0], positions[7][1], 0, 162)
    vertex(positions[8][0], positions[8][1], 0, 0)
    vertex(240, height, 310, 0)
endShape()
pop()

push() //1200x1200
texture(img35)
beginShape()
    vertex(240, height, 0, 1200)
    vertex(positions[8][0], positions[8][1], 0, 0)
    vertex(positions[9][0], positions[9][1], 1200, 0)
    vertex(320, height, 1200, 1200)
endShape()
pop()

push()
texture(img8)//1068x601
beginShape()
    vertex(320, height, 0, 0)
    vertex(positions[9][0], positions[9][1], 1068, 0)
    vertex(positions[10][0], positions[10][1], 1068, 601)
    vertex(400, height, 0, 601)
endShape()
pop()

push()
texture(img36) //425x276
beginShape()
    vertex(width, height, 425, 0)
    vertex(positions[10][0], positions[10][1], 0, 0)
    vertex(positions[9][0], positions[9][1], 0, 276)
    vertex(width-80, height, 425, 276)
endShape()
pop()

push()
texture(img37) //275x183
beginShape()
    vertex(width-80, height, 275, 0)
    vertex(positions[9][0], positions[9][1], 0, 0)
    vertex(positions[8][0], positions[8][1], 0, 183)
    vertex(width-160, height, 275, 183)
endShape()
pop()

push()
texture(img38)//266x150
beginShape()
    vertex(width-160, height, 266, 0)
    vertex(positions[8][0], positions[8][1], 0, 0)
    vertex(positions[7][0], positions[7][1], 0, 150)
    vertex(width-240, height, 266,  150)
endShape()
pop()

push()
texture(img39)//276x183
beginShape()
    vertex(width-240, height, 276, 0)
    vertex(positions[7][0], positions[7][1], 0, 0)
    vertex(positions[6][0], positions[6][1], 0, 183)
    vertex(width-320, height, 276, 183)
endShape()
pop()

push()
texture(img40) //300x168
beginShape()
    vertex(width-320, height, 0, 168)
    vertex(positions[6][0], positions[6][1], 300, 168)
    vertex(positions[5][0], positions[5][1], 300, 0)
    vertex(width-400, height, 0, 0)
endShape()
pop()


//left face

    push()
    texture(img7) //1900x1068
    beginShape()
        vertex(0, 180, 1900, 1068)
        vertex(positions[3][0], positions[3][1], 0, 1068)
        vertex(positions[4][0], positions[4][1], 0, 0)
        vertex(0, 240, 1900, 0)
    endShape()
    pop()

    push()
    texture(img14)//1280x720
    beginShape()
        vertex(0, 120, 0, 0)
        vertex(positions[2][0], positions[2][1], 1280, 0)
        vertex(positions[3][0], positions[3][1], 1280, 720)
        vertex(0, 180, 0, 720)
    endShape()
    pop()

    push()
    texture(img15) //2322x1306
    beginShape()
        vertex(0, 60, 0, 0)
        vertex(positions[1][0], positions[1][1], 2322, 0)
        vertex(positions[2][0], positions[2][1], 2322, 1306)
        vertex(0, 120, 0, 1306)
    endShape()
    pop()

    push()
    texture(img16)//2469x1422
    beginShape()
        vertex(0, 0, 0 ,0)
        vertex(positions[0][0], positions[0][1], 2469, 0)
        vertex(positions[1][0], positions[1][1], 2469,  1422)
        vertex(0, 60, 0, 1422)
    endShape()
    pop()

    push()
    texture(img17)//220x230
    beginShape()
        vertex(0, height-120, 0, 0)
        vertex(positions[3][0], positions[3][1], 220, 0)
        vertex(positions[4][0], positions[4][1], 220, 230)
        vertex(0, height-60, 0, 230)
    endShape()
    pop()

    push()
    texture(img22) //623x807
    beginShape()
        vertex(0, height-60, 0, 807)
        vertex(positions[4][0], positions[4][1], 0, 0)
        vertex(positions[5][0], positions[5][1], 623, 0)
        vertex(0, height, 623, 807)
    endShape()
    pop()

    push()
    texture(img18)//1280x720
    beginShape()
        vertex(0, height-180, 0,0)
        vertex(positions[2][0], positions[2][1], 1280, 0)
        vertex(positions[3][0], positions[3][1], 1280, 720)
        vertex(0, height-120, 0, 720)
    endShape()
    pop()

    push()
    texture(img19) //311x162
    beginShape()
        vertex(0, height-240, 311, 162)
        vertex(positions[1][0], positions[1][1],0, 162)
        vertex(positions[2][0], positions[2][1], 0, 0)
        vertex(0, height-180, 311, 0)
    endShape()
    pop()

    push()
    texture(img20) //1200x800
    beginShape()
        vertex(0, height-300, 0, 0)
        vertex(positions[0][0], positions[0][1], 1200, 0)
        vertex(positions[1][0], positions[1][1], 1200, 800)
        vertex(0, height-240, 0, 800)
    endShape()
    pop()

    push()
    texture(img21) //1600x900
    beginShape()    
        vertex(0, 240, 1600, 900)
        vertex(positions[19][0], positions[19][1], 0, 900)
        vertex(positions[0][0], positions[0][1], 0, 0)
        vertex(0, 300, 1600, 0)
    endShape()
    pop()

    line(0, 120, positions[2][0], positions[2][1])
    line(0, height-180, positions[2][0], positions[2][1])

    line(0, 60, positions[1][0], positions[1][1])
    line(0, height-240, positions[1][0], positions[1][1])

    line(0, 0, positions[0][0], positions[0][1])
    line(0, height-300, positions[0][0], positions[0][1])
  
    line(0, 180, positions[3][0], positions[3][1])
    line(0, height-120, positions[3][0], positions[3][1])

    line(0, 240, positions[4][0], positions[4][1])
    line(0, height-60, positions[4][0], positions[4][1])

//right face  

    push()
    texture(img23) //194x259
    beginShape()
        vertex(width, height, 0, 259)
        vertex(positions[10][0], positions[10][1], 0, 0)
        vertex(positions[11][0], positions[11][1], 194, 0)
        vertex(width, height-60, 194, 259)
    endShape()
    pop()

    push()
    texture(img24)//1366x768
    beginShape()
        vertex(width, height-60, 1366, 768)
        vertex(positions[11][0], positions[11][1], 0, 768)
        vertex(positions[12][0], positions[12][1], 0, 0)
        vertex(width, height-120, 1366, 0)
    endShape()
    pop()

    push()
    texture(img25) //265x191
        beginShape()
        vertex(width, height-120, 0, 0)
        vertex(positions[12][0], positions[12][1], 265, 0)
        vertex(positions[13][0], positions[13][1], 265, 191)
        vertex(width, height-180, 0, 191)
    endShape()
    pop()

    push()
    texture(img7) //1900x1068
    beginShape()
        vertex(width, height-180, 1900, 1068)
        vertex(positions[13][0], positions[13][1], 0, 1068)
        vertex(positions[14][0], positions[14][1], 0, 0)
        vertex(width, height-240, 1900, 0)
    endShape()
    pop()

    push()
    texture(img7) //1900x1068
    beginShape()
        vertex(width, height-240, 1900, 1068)
        vertex(positions[14][0], positions[14][1], 0, 1068)
        vertex(positions[15][0], positions[15][1], 0, 0)
        vertex(width, height-300, 1900, 0)
    endShape()
    pop()

    push()
    texture(img26) //1024x683
    beginShape()
        vertex(width, height-240, 1024, 682)
        vertex(positions[10][0], positions[10][1], 0, 683)
        vertex(positions[11][0], positions[11][1], 0, 0)
        vertex(width, 300, 1024, 0)
    endShape()
    pop()

    push()
    texture(img27) //4947x2783
    beginShape()
        vertex(width, 300, 4947, 2783)
        vertex(positions[11][0], positions[11][1], 0, 2783)
        vertex(positions[12][0], positions[12][1], 0, 0)
        vertex(width, 240, 4947, 0)
    endShape()
    pop()

    push()
    texture(img28) //400x267
    beginShape()
        vertex(width, 240, 0, 0)
        vertex(positions[12][0], positions[12][1], 400, 0)
        vertex(positions[13][0], positions[13][1], 400, 267)
        vertex(width, 180, 0, 267)
    endShape()
    pop()

    push()
    texture(img29)//1000x563
    beginShape()
        vertex(width, 180, 1000, 563)
        vertex(positions[13][0], positions[13][1], 0, 563)
        vertex(positions[14][0], positions[14][1], 0, 0)
        vertex(width, 120, 1000,  0)
    endShape()
    pop()

    push()
    texture(img30)//678x381
    beginShape() 
        vertex(width, 120, 678, 381)
        vertex(positions[14][0], positions[14][1], 0, 381)
        vertex(positions[15][0], positions[15][1], 0, 0)
        vertex(width, 60, 678, 0)
    endShape()
    pop()

    push()
    texture(img31) //279x181
    beginShape()
        vertex(width, 60, 279, 181)
        vertex(positions[15][0], positions[15][1], 0, 181)
        vertex(positions[16][0], positions[16][1], 0, 0)
        vertex(width-60, 0, 279, 0)
        vertex(width, 0, 279, 90.5)
    endShape()
    pop()

    line(width, height-60, positions[11][0], positions[11][1])
    line(width, 300, positions[11][0], positions[11][1])

    line(width, height-120, positions[12][0], positions[12][1])
    line(width, 240, positions[12][0], positions[12][1])

    line(width, height, positions[10][0], positions[10][1])
    line(width, 360, positions[10][0], positions[10][1])

    line(width, height-180, positions[13][0], positions[13][1])
    line(width, 180, positions[13][0], positions[13][1])

    line(width, height-240, positions[14][0], positions[14][1])
    line(width, 120, positions[14][0], positions[14][1])

    line(width, height-300, positions[15][0], positions[15][1])
    line(width, 60, positions[15][0], positions[15][1])

//top face

    line(60, 0, positions[19][0], positions[19][1])
    line(width-420, 0, positions[19][0], positions[19][1])

    line(120, 0, positions[20][0], positions[20][1])
    line(width-360, 0, positions[20][0], positions[20][1])

    line(180, 0, positions[21][0], positions[21][1])
    line(width-300, 0, positions[21][0], positions[21][1])

    line(250, 0, positions[22][0], positions[22][1])
    line(width-240, 0, positions[22][0], positions[22][1])

    line(300, 0, positions[18][0], positions[18][1])
    line(width-180, 0, positions[18][0], positions[18][1])

    line(360, 0, positions[17][0], positions[17][1])
    line(width-120, 0, positions[17][0], positions[17][1])

    line(420, 0, positions[16][0], positions[16][1])
    line(width-60, 0, positions[16][0], positions[16][1])


//bottom face 
    line(0, height, positions[5][0], positions[5][1])
    line(width-400, height, positions[5][0], positions[5][1])

    line(80, height, positions[6][0], positions[6][1])
    line(width-320, height, positions[6][0], positions[6][1])

    line(160, height, positions[7][0], positions[7][1])
    line(width-240, height, positions[7][0], positions[7][1])

    line(240, height, positions[8][0], positions[8][1])
    line(width-160, height, positions[8][0], positions[8][1])

    line(320, height, positions[9][0], positions[9][1])
    line(width-80, height, positions[9][0], positions[9][1])

//face contour
    //eyes
    line(positions[33][0], positions[33][1], positions[25][0], positions[25][1])
    line(positions[33][0], positions[33][1], positions[30][0], positions[30][1])
    line(positions[22][0], positions[22][1], positions[25][0], positions[25][1])
    line(positions[22][0], positions[22][1], positions[33][0], positions[33][1])
    line(positions[18][0], positions[18][1], positions[33][0], positions[33][1])
    line(positions[18][0], positions[18][1], positions[30][0], positions[30][1])
    line(positions[17][0], positions[17][1], positions[68][0], positions[68][1])
    line(positions[16][0], positions[16][1], positions[29][0], positions[29][1])
    line(positions[15][0], positions[15][1], positions[67][0], positions[67][1])
    line(positions[14][0], positions[14][1], positions[28][0], positions[28][1])
    line(positions[64][0], positions[64][1], positions[21][0], positions[21][1])
    line(positions[19][0], positions[19][1], positions[63][0], positions[63][1])
    line(positions[14][0], positions[14][1], positions[28][0], positions[28][1])
    line(positions[0][0], positions[0][1], positions[23][0], positions[23][1])
    line(positions[1][0], positions[1][1], positions[23][0], positions[23][1])
    line(positions[26][0], positions[26][1], positions[2][0], positions[2][1])
    line(positions[3][0], positions[3][1], positions[65][0], positions[65][1])
    line(positions[4][0], positions[4][1], positions[25][0], positions[25][1])
    line(positions[28][0], positions[28][1], positions[13][0], positions[13][1])
    line(positions[31][0], positions[31][1], positions[12][0], positions[12][1])
    line(positions[69][0], positions[69][1], positions[11][0], positions[11][1])
    line(positions[30][0], positions[30][1], positions[10][0], positions[10][1])
    line(positions[20][0], positions[20][1], positions[24][0], positions[24][1])
    line(positions[20][0], positions[20][1], positions[22][0], positions[22][1])
    line(positions[18][0], positions[18][1], positions[16][0], positions[16][1])
    line(positions[33][0], positions[33][1], positions[64][0], positions[64][1])
    line(positions[33][0], positions[33][1], positions[68][0], positions[68][1])


    line(positions[0][0], positions[0][1], positions[63][0], positions[63][1])
    line(positions[14][0], positions[14][1], positions[67][0], positions[67][1])
    line(positions[0][0], positions[0][1], positions[20][0], positions[20][1])
    line(positions[16][0], positions[16][1], positions[14][0], positions[14][1])
    line(positions[19][0], positions[19][1], positions[22][0], positions[22][1])
    line(positions[18][0], positions[18][1], positions[15][0], positions[15][1])


    //nose
    line(positions[33][0], positions[33][1], positions[34][0], positions[34][1])
    line(positions[33][0], positions[33][1], positions[40][0], positions[40][1])
    line(positions[34][0], positions[34][1], positions[41][0], positions[41][1])
    line(positions[40][0], positions[40][1], positions[41][0], positions[41][1])
    line(positions[34][0], positions[34][1], positions[62][0], positions[62][1])
    line(positions[40][0], positions[40][1], positions[62][0], positions[62][1])
    line(positions[42][0], positions[42][1], positions[37][0], positions[37][1])
    line(positions[43][0], positions[43][1], positions[37][0], positions[37][1])
    line(positions[35][0], positions[35][1], positions[42][0], positions[42][1])
    line(positions[34][0], positions[34][1], positions[41][0], positions[41][1])
    line(positions[43][0], positions[43][1], positions[39][0], positions[39][1])
    line(positions[35][0], positions[35][1], positions[36][0], positions[36][1])
    line(positions[39][0], positions[39][1], positions[38][0], positions[38][1])
    line(positions[37][0], positions[37][1], positions[46][0], positions[46][1])
    line(positions[37][0], positions[37][1], positions[48][0], positions[48][1])

    line(positions[33][0], positions[33][1], positions[2][0], positions[2][1])
    line(positions[33][0], positions[33][1], positions[12][0], positions[12][1])
    line(positions[34][0], positions[34][1], positions[3][0], positions[3][1])
    line(positions[40][0], positions[40][1], positions[11][0], positions[11][1])
    line(positions[39][0], positions[39][1], positions[14][0], positions[14][1])
    line(positions[35][0], positions[35][1], positions[0][0], positions[0][1])
    line(positions[44][0], positions[44][1], positions[5][0], positions[5][1])
    line(positions[50][0], positions[50][1], positions[9][0], positions[9][1])
    line(positions[35][0], positions[35][1], positions[5][0], positions[5][1])
    line(positions[39][0], positions[39][1], positions[9][0], positions[9][1])
    line(positions[34][0], positions[34][1], positions[2][0], positions[2][1])
    line(positions[40][0], positions[40][1], positions[12][0], positions[12][1])
    line(positions[35][0], positions[35][1], positions[4][0], positions[4][1])
    line(positions[39][0], positions[39][1], positions[10][0], positions[10][1])
    line(positions[25][0], positions[25][1], positions[41][0], positions[41][1])
    line(positions[30][0], positions[30][1], positions[41][0], positions[41][1])
    line(positions[36][0], positions[36][1], positions[1][0], positions[1][1])
    line(positions[38][0], positions[38][1], positions[13][0], positions[13][1])
    line(positions[15][0], positions[15][1], positions[12][0], positions[12][1])
    line(positions[19][0], positions[19][1], positions[2][0], positions[2][1])
    line(positions[12][0], positions[12][1], positions[28][0], positions[28][1])
    line(positions[2][0], positions[2][1], positions[23][0], positions[23][1])
    line(positions[65][0], positions[65][1], positions[34][0], positions[34][1])
    line(positions[40][0], positions[40][1], positions[69][0], positions[69][1])
    line(positions[33][0], positions[33][1], positions[44][0], positions[44][1])
    line(positions[50][0], positions[50][1], positions[33][0], positions[33][1])
    line(positions[23][0], positions[23][1], positions[44][0], positions[44][1])
    line(positions[50][0], positions[50][1], positions[28][0], positions[28][1])
    line(positions[34][0], positions[34][1], positions[22][0], positions[22][1])
        line(positions[40][0], positions[40][1], positions[18][0], positions[18][1])


    //mouth

    line(positions[45][0], positions[45][1], positions[36][0], positions[36][1])
    line(positions[49][0], positions[49][1], positions[38][0], positions[38][1])
    line(positions[36][0], positions[36][1], positions[46][0], positions[46][1])
    line(positions[38][0], positions[38][1], positions[48][0], positions[48][1])
    line(positions[46][0], positions[46][1], positions[47][0], positions[47][1])
    line(positions[47][0], positions[47][1], positions[48][0], positions[48][1])
    line(positions[44][0], positions[44][1], positions[3][0], positions[3][1])
    line(positions[50][0], positions[50][1], positions[11][0], positions[11][1])
    line(positions[55][0], positions[55][1], positions[4][0], positions[4][1])
    line(positions[51][0], positions[51][1], positions[10][0], positions[10][1])
    line(positions[54][0], positions[54][1], positions[5][0], positions[5][1])
    line(positions[52][0], positions[52][1], positions[9][0], positions[9][1])
    line(positions[53][0], positions[53][1], positions[6][0], positions[6][1])
    line(positions[53][0], positions[53][1], positions[8][0], positions[8][1])
    line(positions[45][0], positions[45][1], positions[2][0], positions[2][1])
    line(positions[49][0], positions[49][1], positions[12][0], positions[12][1])

    line(positions[44][0], positions[44][1], positions[56][0], positions[56][1])
    line(positions[56][0], positions[56][1], positions[57][0], positions[57][1])
    line(positions[57][0], positions[57][1], positions[58][0], positions[58][1])
    line(positions[58][0], positions[58][1], positions[50][0], positions[50][1])
    line(positions[54][0], positions[54][1], positions[52][0], positions[52][1])
    line(positions[54][0], positions[54][1], positions[4][0], positions[4][1])
    line(positions[52][0], positions[52][1], positions[10][0], positions[10][1])

    line(positions[3][0], positions[3][1], positions[6][0], positions[6][1])
    line(positions[11][0], positions[11][1], positions[8][0], positions[8][1])
    line(positions[2][0], positions[2][1], positions[5][0], positions[5][1])
    line(positions[12][0], positions[12][1], positions[9][0], positions[9][1])
    line(positions[6][0], positions[6][1], positions[8][0], positions[8][1])
    line(positions[6][0], positions[6][1], positions[54][0], positions[54][1])
    line(positions[52][0], positions[52][1], positions[8][0], positions[8][1])
    line(positions[5][0], positions[5][1], positions[9][0], positions[9][1])
    line(positions[11][0], positions[11][1], positions[49][0], positions[49][1])
    line(positions[3][0], positions[3][1], positions[45][0], positions[45][1])
    line(positions[55][0], positions[55][1], positions[54][0], positions[54][1])
    line(positions[52][0], positions[52][1], positions[51][0], positions[51][1])
    line(positions[36][0], positions[36][1], positions[49][0], positions[49][1])
    line(positions[38][0], positions[38][1], positions[45][0], positions[45][1])
    line(positions[53][0], positions[53][1], positions[7][0], positions[7][1])
    line(positions[7][0], positions[7][1], positions[54][0], positions[54][1])
    line(positions[7][0], positions[7][1], positions[52][0], positions[52][1])
    line(positions[50][0], positions[50][1], positions[5][0], positions[5][1])
    line(positions[44][0], positions[44][1], positions[9][0], positions[9][1])



}

    
}
