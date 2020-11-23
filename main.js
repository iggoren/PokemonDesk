function $getElById(Id) {
    return document.getElementById(Id);
}
const $btn = $getElById('btn-kick');
const $btnStrong = $getElById('btn-strong');
const character = {
    name: 'Pikachu',
    hp: { 
        current: 100,
        total: 100,
        },
    elHP: $getElById('health-character'),
    elProgressbar: $getElById('progressbar-character'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPlife: renderHPlife,
    renderProgressbarHP: renderProgressbarHP,
    }
const enemy = {
    name: 'Charmander',
    hp: { 
        current: 100, 
        total: 100,
        },
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
    this.elHP.innerText = this.hp.current + '/' + this.hp.total;
}

function renderProgressbarHP(person) {
    this.elProgressbar.style.width = this.hp.current + '%';

}
function changeHP(count,person) {
    this.hp.current -= count;
    console.log(count)
    const log = this === enemy? generateLog(this, character): generateLog(this, enemy);
    const $p = document.createElement('p');
    $p.innerText = log;
    const $logs = document.querySelector('#logs');
    $logs.insertBefore($p, $logs.children[0]);

    if (this.hp.current <= 0) {
        this.hp.current = 0;
        alert('Бедный ' + this.name + ' проиграл бой');
        $btn.disabled = true;
    }
    
        this.renderHP();
}
function random(num) {
    return Math.ceil(Math.random() * num);
}

function generateLog (firstPerson, secondPerson){
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага.[${firstPerson.hp.current}/${firstPerson.hp.total}]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил.[${firstPerson.hp.current}/${firstPerson.hp.total}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар.[${firstPerson.hp.current}/${firstPerson.hp.total}]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника.[${firstPerson.hp.current}/${firstPerson.hp.total}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар.[${firstPerson.hp.current}/${firstPerson.hp.total}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар.[${firstPerson.hp.current}/${firstPerson.hp.total}]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника[${firstPerson.hp.current}/${firstPerson.hp.total}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника.[${firstPerson.hp.current}/${firstPerson.hp.total}]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику.[${firstPerson.hp.current}/${firstPerson.hp.total}]`
    ];

    return logs[random(logs.length) - 1];
}


init();
