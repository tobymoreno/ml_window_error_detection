var screenshot = require('desktop-screenshot');
// var Rx = require('rxjs');
// var ops = require('rxjs/operators');
//var robot = require("robotjs");
var os = require("os");


const tmpdir = os.tmpdir();
var path = `${tmpdir}/${+(new Date)}.tmp`;
screenshot(path, function (error, complete) {
    //console.log(complete)
    if (error)
        console.log("Screenshot failed", error);
    else {
        observer.next(path)
    }

});

const screenshot = require('screenshot-desktop')
 
screenshot({format: 'png'}).then((img) => {
  // img: Buffer filled with png goodness
  // ...
  console.log(img);

}).catch((err) => {
  // ...
})

screenshot.listDisplays().then((displays) => {
    // displays: [{ id, name }, { id, name }]
    console.log(displays.length)
    // screenshot({ screen: displays[displays.length - 1].id })
    //   .then((img) => {
    //     // img: Buffer of screenshot of the last display
    //   });
  })


var screenshot = require('desktop-screenshot');

screenshot("screenshot.png", {width: 400}, function(error, complete) {
    if(error)
        console.log("Screenshot failed", error);
    else
        console.log("Screenshot succeeded");
});


var robot = require("robotjs")

var img = robot.screen.capture(0, 0, 1024, 768);

var fs = require('fs');
var wstream = fs.createWriteStream('pix.png');
// creates random Buffer of 100 bytes
wstream.write(img.image);
wstream.end();

new Jimp({data: img, width, height}, (err, image) => {
  image.write(fileName);
});




//const img = robot.screen.capture(0, 0, width, height).image;

var robot = require("robotjs");
let Jimp = require('jimp')
width=1150
height=768

let imagepath = 'pix.png'

var img = robot.screen.capture(0, 0, width, height);

var jimg = new Jimp(width, height);
for (var x=0; x<width; x++) {
    for (var y=0; y<height; y++) {
        var index = (y * img.byteWidth) + (x * img.bytesPerPixel);
        var r = img.image[index];
        var g = img.image[index+1];
        var b = img.image[index+2];
        var num = (r*256) + (g*256*256) + (b*256*256*256) + 255;
        jimg.setPixelColor(num, x, y);
    }
}

jimg.write(imagepath)


const { spawn } = require('child_process');
app = spawn('ls', []);

app.stdout.on('data', (data) => {
  console.log(data.toString('utf8'));
});

app.stderr.on('data', (data) => {
  console.log(data.toString('utf8'));
});

app.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

app.on('exit', (code) => {
  console.log(`exit call`);
});


