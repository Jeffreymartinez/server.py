let spaceData;
 let newStuff

function setup() {
  createCanvas(600, 600);

  let baseURL = "http://localhost:8000/scripts/wordScrambler.py?name=";
  newStuff = "hello";
  let fullURL = baseURL.concat(newStuff);

 loadJSON(fullURL, gotData, 'json');
}

function gotData(data) {
  spaceData = data;
}

function draw() {
  background(0);

  fill(255)
  text("This is my sentence that I am scrambling:"+" "+ newStuff, 100,100)
  if (spaceData) {
    text(spaceData.scrambled, 100, 150)
  }

}