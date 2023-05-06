const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];

keys.forEach(function (key) {
    notes.push(document.getElementById(key))
});

let cKey = document.getElementById('c-key');
let dKey = document.getElementById('d-key');
let eKey = document.getElementById('e-key');
let fKey = document.getElementById('f-key');
let gKey = document.getElementById('g-key');
let aKey = document.getElementById('a-key');
let bKey = document.getElementById('b-key');
let highCKey = document.getElementById('c-sharp-key');
let cSharpKey = document.getElementById('d-sharp-key');
let dSharpKey = document.getElementById('f-sharp-key');
let fSharpKey = document.getElementById('g-sharp-key');
let gSharpKey = document.getElementById('a-sharp-key');
let aSharpKey = document.getElementById('high-c-key');

function keyDown(event) {
    event.target.style.backgroundColor = 'red';
}

function keyUp(event) {
    event.target.style.backgroundColor = '';
}

cKey.addEventListener('mousedown', keyDown);
cKey.addEventListener('mouseup', keyUp);

dKey.addEventListener('mousedown', keyDown);
dKey.addEventListener('mouseup', keyUp);

eKey.addEventListener('mousedown', keyDown);
eKey.addEventListener('mouseup', keyUp);

fKey.addEventListener('mousedown', keyDown);
fKey.addEventListener('mouseup', keyUp);

gKey.addEventListener('mousedown', keyDown);
gKey.addEventListener('mouseup', keyUp);

aKey.addEventListener('mousedown', keyDown);
aKey.addEventListener('mouseup', keyUp);

bKey.addEventListener('mousedown', keyDown);
bKey.addEventListener('mouseup', keyUp);

highCKey.addEventListener('mousedown', keyDown);
highCKey.addEventListener('mouseup', keyUp);

cSharpKey.addEventListener('mousedown', keyDown);
cSharpKey.addEventListener('mouseup', keyUp);

dSharpKey.addEventListener('mousedown', keyDown);
dSharpKey.addEventListener('mouseup', keyUp);

fSharpKey.addEventListener('mousedown', keyDown);
fSharpKey.addEventListener('mouseup', keyUp);

gSharpKey.addEventListener('mousedown', keyDown);
gSharpKey.addEventListener('mouseup', keyUp);

aSharpKey.addEventListener('mousedown', keyDown);
aSharpKey.addEventListener('mouseup', keyUp);

let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

let lastLyric = document.getElementById('column-optional');

nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

nextOne.onclick = function () {
    nextOne.hidden = true;
    nextTwo.hidden = false;
    document.getElementById('letter-note-five').innerHTML = 'D';
    document.getElementById('letter-note-six').innerHTML = 'C';
};

nextTwo.onclick = function () {
    nextTwo.hidden = true;
    nextThree.hidden = false;
    document.getElementById('word-five').innerHTML = 'DEAR';
    document.getElementById('word-six').innerHTML = 'FRI-'
    lastLyric.style.display = 'inline-block';
    document.getElementById('letter-note-three').innerHTML = 'G';
    document.getElementById('letter-note-four').innerHTML = 'E';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('letter-note-six').innerHTML = 'B';
};

nextThree.onclick = function () {
    nextThree.hidden = true;
    startOver.hidden = false;
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('word-six').innerHTML = 'YOU!';
    document.getElementById('letter-note-one').innerHTML = 'F';
    document.getElementById('letter-note-two').innerHTML = 'F';
    document.getElementById('letter-note-three').innerHTML = 'E';
    document.getElementById('letter-note-four').innerHTML = 'C';
    document.getElementById('letter-note-five').innerHTML = 'D';
    document.getElementById('letter-note-six').innerHTML = 'C';
    lastLyric.style.display = 'none';
};

startOver.onclick = function () {
    startOver.hidden = true;
    nextOne.hidden = false;
    document.getElementById('word-six').innerHTML = 'YOU';
    document.getElementById('letter-note-one').innerHTML = 'G';
    document.getElementById('letter-note-two').innerHTML = 'G';
    document.getElementById('letter-note-three').innerHTML = 'A';
    document.getElementById('letter-note-four').innerHTML = 'G';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('letter-note-six').innerHTML = 'B';
};