let animalArray = [{ 'leopard': 'guess_1_2' }, { 'gekoo': 'guess_2_1' }, { 'Bison': 'guess_3_1' }, { 'Tortoise': 'guess_4_1' }, { 'Hare': 'guess_5_1' }, { 'Sea lion': 'guess_6_2' }, { 'Bee': 'guess_7_2' }, { 'Toad': 'guess_8_1' }, { 'Butterfly': 'guess_9_2' }, { 'Crocodile': 'guess_10_2' }];
let WrongAnimal = ['Cheetah', 'Lizard', 'Gaur', 'Turtle', 'Rabbit', 'Seal', 'Wasp', 'Frog', 'Moth', 'Aligator'];

const iterator = animalArray[Symbol.iterator]();
let f = (e) => document.getElementById(e);

f('list').innerHTML = Object.keys(animalArray[0]).toString();
f('animal_img1').addEventListener("click", clickedImage);
f('animal_img2').addEventListener("click", clickedImage);
let imageCounter = 1;
let score = 0;

function clickedImage(e) {
    console.log(e);
    let lastWords ='';
    try {
         lastWords = e.srcElement.currentSrc.substring(e.srcElement.currentSrc.lastIndexOf('/') + 1)

    } catch (error) {
        console.log(error);
        
    }
    lastWords = lastWords.split('.')[0];
    const first = iterator.next().value;

    if (imageCounter <= animalArray.length && first != undefined) {
        if (Object.values(first).toString() === lastWords) {
            alert('correct');
            score++;                
        } else {
            alert(`Wrong  It is ${WrongAnimal[imageCounter - 1]}`);
        }
    }
    if (imageCounter < animalArray.length) {
        f('list').innerHTML = Object.keys(animalArray[imageCounter]).toString();
        imageCounter++;
        document.querySelector("#animal_img1 > img").src = `assets/images/guess_${imageCounter}_1.jpg`;
        document.querySelector("#animal_img2 > img").src = `assets/images/guess_${imageCounter}_2.jpg`;
    } else if (imageCounter === animalArray.length) {
        f('list').innerHTML = '';
        f('help').innerHTML = '';
        f('reset_page').innerHTML = 
        `Your score  - ${score}
          <button onclick="reload()">Replay</button>`;
    }
}
function reload(){
    window.location.reload();
}

