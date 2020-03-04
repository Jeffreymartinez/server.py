let cnv;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;

let x;
let y;
let z;
let a;
let b;
let c;
let d;
let e;
let f;
let g;
let h;
let i;
let j;
let k;
let l;
let m;
let n;
let w;
let data;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseWheel(changeSize); // attach listener for
  // activity on canvas only
  img1 = loadImage('sun.png');
  img2 = loadImage('mercury.png');
  img3 = loadImage('venus.png');
  img4 = loadImage('earth.png');
  img5 = loadImage('mars.png');
  img6 = loadImage('ceres.png');
  img7 = loadImage('jupiter.png');
  img8 = loadImage('saturn.png');
  img9 = loadImage('uranus.png');
  img10 = loadImage('neptune.png');
  img11 = loadImage('pluto.png');
  img12 = loadImage('haumea.png');
  img13 = loadImage('makemake.png');
  img14 = loadImage('eris.png');

  x = 210;
  y = 375;
  z = 35;
  a = .001;
  b = .000000001;
  c = .000000000000001;
  d = .000000000000000000001;
  e = .0000000000000000000000001;
  f = .000000000000000000000000000001;
  g = .00000000000000000000000000000000001;
  h = .0000000000000000000000000000000000000001;
  i = .000000000000000000000000000000000000000000001;
  j = .00000000000000000000000000000000000000000000000001;
  k = .0000000000000000000000000000000000000000000000000000001;
  l = .000000000000000000000000000000000000000000000000000000000001;
  m = .00000000000000000000000000000000000000000000000000000000000000001;
  n = .0000000000000000000000000000000000000000000000000000000000000000000001;
  w = .00000000000000000000000000000000000000000000000000000000000000000000000001;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  data = loadJSON("data.json5");
}


function draw() {
  clear();
  fill("white");
  textSize(z);
  text("Scroll To Begin Your Journey Through The Solar System", x, y);
  textSize(z * .05);
  text("By Jeffrey Martinez", x+500, y+210);
  textSize(a * .21);
  text("Sun", 900, windowWidth/7);
  textSize(a * .21 / 2);
  text("mass: "+data.sun.mass, 900, windowWidth/7 + 30);
  text("radius: "+data.sun.radius, 900, windowWidth/7 + 60);
  text("surface temp: "+data.sun.surfacetemp, 900, windowWidth/7 + 90);
  image(img1, width / 3.5, height / 4, a, a);
  textSize(b * .21);
  text("Mercury", 900, windowWidth/7);
  textSize(b * .21 / 2);
  text("distance from sun: "+data.distance.mercury, 900, windowWidth/7 + 30);
  text("year length in earth days: "+data.year.mercury, 900, windowWidth/7 + 60);
  text("day length in hours: "+data.day.mercury, 900, windowWidth/7 + 90);
  image(img2, width / 3.5, height / 4, b, b);
  textSize(c * .21);
  text("Venus", 900, windowWidth/7);
  textSize(c * .21 / 2);
  text("distance from sun: "+data.distance.venus, 900, windowWidth/7 + 30);
  text("year length in earth days: "+data.year.venus, 900, windowWidth/7 + 60);
  text("day length in hours: "+data.day.venus, 900, windowWidth/7 + 90);
  image(img3, width / 3.5, height / 4, c, c);
  textSize(d * .21);
  text("Earth", 900, windowWidth/7);
  textSize(d * .21 / 2);
  text("distance from sun: "+data.distance.earth, 900, windowWidth/7 + 30);
  text("year length in earth days: "+data.year.earth, 900, windowWidth/7 + 60);
  text("day length in hours: "+data.day.earth, 900, windowWidth/7 + 90);
  image(img4, width / 3.5, height / 4, d, d);
  textSize(e * .21);
  text("Mars", 900, windowWidth/7);
  textSize(e * .21 / 2);
  text("distance from sun: "+data.distance.mars, 900, windowWidth/7 + 30);
  text("year length in earth days: "+data.year.mars, 900, windowWidth/7 + 60);
  text("day length in hours: "+data.day.mars, 900, windowWidth/7 + 90);
  image(img5, width / 3.5, height / 4, e, e);
  textSize(f * .21);
  text("Ceres", 900, windowWidth/7);
  textSize(f * .21 / 2);
  text("distance from sun: "+data.distance.ceres, 900, windowWidth/7 + 30);
  text("year length in earth days: "+data.year.ceres, 900, windowWidth/7 + 60);
  text("day length in hours: "+data.day.ceres, 900, windowWidth/7 + 90);
  image(img6, width / 3.5, height / 4, 1.4 * f, f);
  textSize(g * .21);
  text("Jupiter", 900, windowWidth/7);
  textSize(g * .21 / 2);
  text("distance from sun: "+data.distance.jupiter, 900, windowWidth/7 + 30);
  text("year length in earth days: "+data.year.jupiter, 900, windowWidth/7 + 60);
  text("day length in hours: "+data.day.jupiter, 900, windowWidth/7 + 90);
  image(img7, width / 3.5, height / 4, g, g);
  textSize(h * .21);
  text("Saturn", 900, windowWidth/7);
  textSize(h * .21 / 2);
  text("distance from sun: "+data.distance.saturn, 900, windowWidth/7 + 30);
  text("year length in earth days: "+data.year.saturn, 900, windowWidth/7 + 60);
  text("day length in hours: "+data.day.saturn, 900, windowWidth/7 + 90);
  image(img8, width / 3.5, height / 4, 1.7 * h, h);
  textSize(i * .21);
  text("Uranus", 900, windowWidth/7);
  textSize(i * .21 / 2);
  text("distance from sun: "+data.distance.uranus, 900, windowWidth/7 + 30);
  text("year length in earth days: "+data.year.uranus, 900, windowWidth/7 + 60);
  text("day length in hours: "+data.day.uranus, 900, windowWidth/7 + 90);
  image(img9, width / 3.5, height / 4, i, i);
  textSize(j * .21);
  text("Neptune", 900, windowWidth/7);
  textSize(j * .21 / 2);
  text("distance from sun: "+data.distance.neptune, 900, windowWidth/7 + 30);
  text("year length in earth days: "+data.year.neptune, 900, windowWidth/7 + 60);
  text("day length in hours: "+data.day.neptune, 900, windowWidth/7 + 90);
  image(img10, width / 3.5, height / 4, j, j);
  textSize(k * .21);
  text("Pluto", 900, windowWidth/7);
  textSize(k * .21 / 2);
  text("distance from sun: "+data.distance.pluto, 900, windowWidth/7 + 30);
  text("year length in earth days: "+data.year.pluto, 900, windowWidth/7 + 60);
  text("day length in hours: "+data.day.pluto, 900, windowWidth/7 + 90);
  image(img11, width / 3.5, height / 4, k, k);
  textSize(l * .21);
  text("Haumea", 900, windowWidth/7);
  textSize(l * .21 / 2);
  text("distance from sun: "+data.distance.haumea, 900, windowWidth/7 + 30);
  text("year length in earth days: "+data.year.haumea, 900, windowWidth/7 + 60);
  text("day length in hours: "+data.day.haumea, 900, windowWidth/7 + 90);
  image(img12, width / 3.5, height / 4, l, l);
  textSize(m * .21);
  text("Makemake", 900, windowWidth/7);
  textSize(m * .21 / 2);
  text("distance from sun: "+data.distance.makemake, 900, windowWidth/7 + 30);
  text("year length in earth days: "+data.year.makemake, 900, windowWidth/7 + 60);
  text("day length in hours: "+data.day.makemake, 900, windowWidth/7 + 90);
  image(img13, width / 3.5, height / 4, m, m);
  textSize(n * .21);
  text("Eris", 900, windowWidth/7);
  image(img14, width / 3.5, height / 4, n, n);
  textSize(n * .21 / 2);
  text("distance from sun: "+data.distance.eris, 900, windowWidth/7 + 30);
  text("year length in earth days: "+data.year.eris, 900, windowWidth/7 + 60);
  text("day length in hours: "+data.day.eris, 900, windowWidth/7 + 90);

  textSize(w);
  text("Your Journey is Complete! Thank you!", x, y+21);
}

// this function fires with mousewheel movement
// anywhere on screen


// this function fires with mousewheel movement
// over canvas only
function changeSize(event) {
  if (event.deltaY > 0) {
    z = z * .9;
    a = a * .9;
    b = b * .9;
    c = c * .9;
    d = d * .9;
    e = e * .9;
    f = f * .9;
    g = g * .9;
    h = h * .9;
    i = i * .9;
    j = j * .9;
    k = k * .9;
    l = l * .9;
    m = m * .9;
    n = n * .9;
    w = w * .9;
  } else {
    z = z * 1.1;
    a = a * 1.1;
    b = b * 1.1;
    c = c * 1.1;
    d = d * 1.1;
    e = e * 1.1;
    f = f * 1.1;
    g = g * 1.1;
    h = h * 1.1;
    i = i * 1.1;
    j = j * 1.1;
    k = k * 1.1;
    l = l * 1.1;
    m = m * 1.1;
    n = n * 1.1;
    w = w * 1.1;
  }
}