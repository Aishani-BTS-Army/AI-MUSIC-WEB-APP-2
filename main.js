song1 = "";
song2 = "";

function preload()
{
	song1 = loadSound("Rover kai - Exo.mp3");
	song2 = loadSound("Maknae On Top - Stray Kids ! Korean Song.mp3");
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

    video = createCapture(VIDEO);
	video.hide();
}

function draw() {
	image(video, 0, 0, 600, 500);
}

