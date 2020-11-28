import Pokemon from "./pokemon.js";
import {pokemons} from "./pokemons.js";

const pikachu = pokemons.find(item => item.name === 'Pikachu');
//console.log(pikachu);
const player1 = new Pokemon ({
       ...pikachu,
       selectors: 'player1',
});
console.log(player1);

const player2 = new Pokemon ({
    name: 'Charmander',
    type: 'fire',
    hp: 450,
    selectors: 'player2',
});


function $getElById(Id) {
    return document.getElementById(Id);
}
const $btn = $getElById('btn-kick');
const $btnStrong = $getElById('btn-strong');

const  countBtnJolt = countClick(6,$btn);
$btn.addEventListener('click', function()  {
    countBtnJolt();
    player1.changeHP(random(60,20),function(count){
        console.log('Some change after change HP', count);
        console.log(generateLog(player1,player2,count));
    });
    player2.changeHP(random(60,20),function(count){
        console.log('Some change after change HP', count);
    }); 

});
const  countBtnStrong = countClick(10,$btnStrong);
$btnStrong.addEventListener('click', function()  {
    countBtnStrong();
    player1.changeHP(random(100));
    player2.changeHP(random(100)); 
     
});

//счетчик кликов
function countClick(count = 6,el) {
    const innerText = el.innerText;
    el.innerText = `${innerText} (${count})`;
     return function() {
         count--;
         if (count === 0) {
             el.disabled = true;
         }
         el.innerText = `${innerText} (${count})`;
              return count};
        
    }; 

function renderHP(){
    this.renderHPlife();
    this.renderProgressbarHP();
}

function renderHPlife(){
    const { elHP,hp:{current,total}} = this;
    this.elHP.innerText = this.hp.current + '/' + this.hp.total;
}

function renderProgressbarHP(){
    const {hp:{current,total}, elProgressbar} = this;
    const procent = current / (total/100);
    this.elProgressbar.style.width = procent + '%';

}
function changeHP(count){
    this.hp.current -= count;
    const log = this === player2? generateLog(this, player1): generateLog(this, player2);
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
function random(max, min = 0) {
    const num = max - min;
    return Math.ceil(Math.random() * num);
};

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

 


