function $getElById(Id) {
    return document.getElementById(Id);
}
const $btn = $getElById('btn-kick');
const $btnStrong = $getElById('btn-strong');
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: $getElById('health-character'),
    elProgressbar: $getElById('progressbar-character'),
    }
const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: $getElById('health-enemy'),
    elProgressbar: $getElById('progressbar-enemy'),
}

$btn.addEventListener('click', function()  {
    //concole.log('Kick');
    changeHP(random(20),character);
    changeHP(random(20),enemy);  
});

$btnStrong.addEventListener('click', function()  {
  
    changeHP(random(30),enemy); 
    $btnStrong.disabled = true;   //Отключение кнопки  
});


function init() {
    //concole.log('Start game!');
    
    renderHP(character);
    renderHP(enemy);
}
function renderHP(person){
    renderHPlife(person);
    renderProgressbarHP(person);
}

function renderHPlife(person) {
    const $character = document.getElementById('health-character');
    console.log($character.innerText);
    person.elHP.innerText = person.damageHP + '/' + person.defaultHP;

}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';

}
function changeHP(count,person) {
    if(person.damageHP < count) {
        person.damageHP = 0;
        alert('Бедный ' + person.name + ' проиграл бой');
        $btn.disabled = true;
    } else {
        person.damageHP -= count;
    }
    
    renderHP(person);
}
function random(num) {
        return Math.ceil(Math.random() * num)//
}

init();
