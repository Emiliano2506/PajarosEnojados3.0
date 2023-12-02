//Variables Globales 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
let engine;
let world;
var fondo = "./Imagenes/bg.png";
var fondo_img;
var pisoooo, pisoimg;
var bace, baceDeLaBace;
var caja, caja1, caja2, caja3, caja4;
var palitos, palitos1, palitos2, palitos3, palitos4;
var chancho;
var resortera, resortera2;
var pajaro;

function preload(){
    fondo_img = loadImage(fondo);
    pisoimg = loadImage("./Imagenes/ground.png");
}
function setup(){
    createCanvas(750,540);
    engine = Engine.create()
    world = engine.world;
    bace = new Piso(0,370,200,200);
    pisoooo =new Piso(0,470,950,250);
    caja = new Boxhija(630,420,50,50);
    //palitos = new Palitoshijos(630,420,50,50);
    palitos1 = new Palitoshijos(580,380,20,100,200);
    palitos2 = new Palitoshijos(600,380,20,100,300);
    palitos3 = new Palitoshijos(560,380,20,100,90);
    chancho = new Chancho(642,433,25,25);
    resortera = new Resortera(50,290,50,80);
    pajaro = new Red(68,300,15,15);
}
function draw(){
    //if(fondo)
    background(fondo_img);
    text("pajaros enojados",40,100);
    pisoooo.display();
    bace.display();
    Engine.update(engine);
    caja.display();
    //palitos.display();
    palitos1.display();
    palitos2.display();
    palitos3.display();
    chancho.display();
    resortera.display();
    pajaro.display();
}