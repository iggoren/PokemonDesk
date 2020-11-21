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
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPlife: renderHPlife,
    renderProgressbarHP: renderProgressbarHP,
    }
const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: $getElById('health-enemy'),
    elProgressbar: $getElById('progressbar-enemy'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPlife: renderHPlife,
    renderProgressbarHP: renderProgressbarHP,
}

$btn.addEventListener('click', function()  {
    //concole.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));  
});

$btnStrong.addEventListener('click', function()  {
  
    enemy.changeHP(random(30)); 
    $btnStrong.disabled = true;   //Отключение кнопки  
});


function init() {
    //concole.log('Start game!');
    
    character.renderHP();
    enemy.renderHP();
}
function renderHP(){
    this.renderHPlife();
    this.renderProgressbarHP();
}

function renderHPlife(person) {
    this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
}

function renderProgressbarHP(person) {
    this.elProgressbar.style.width = this.damageHP + '%';

}
function changeHP(count,person) {
    this.damageHP -= count;

    if (this.damageHP <= 0) {
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой');
        $btn.disabled = true;
    }
    
        this.renderHP();
}
function random(num) {
        return Math.ceil(Math.random() * num)//
}

init();
