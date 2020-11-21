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
    changeHP.call(character,random(20));
    changeHP.call(enemy,random(20));  
});

$btnStrong.addEventListener('click', function()  {
  
    changeHP.call(enemy,random(30)); 
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
    
    person.elHP.innerText = person.damageHP + '/' + person.defaultHP;

}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';

}
function changeHP(count,person) {
    if(this.damageHP < count) {
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой');
        $btn.disabled = true;
    } else {
        this.damageHP -= count;
    }
    
    renderHP(this);
}
function random(num) {
        return Math.ceil(Math.random() * num)//
}

init();
