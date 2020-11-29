class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
    }
}
class Pokemon extends Selectors {
    constructor({name, hp, type, selectors,attacks = []}) {
       super(selectors);
        this.name = name;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.type = type;
        this.attacks = attacks;
        this.renderHP();

    }
    renderHP = () => {
        this.renderHPlife();
        this.renderProgressbarHP();
    }
    
    renderHPlife = () => {
        const { elHP,hp:{current,total}} = this;
        this.elHP.innerText = this.hp.current + '/' + this.hp.total;
    }
    
    renderProgressbarHP = () => {
        const {hp:{current,total}, elProgressbar} = this;
        const procent = current / (total/100);
        this.elProgressbar.style.width = procent + '%';
    
    }
    changeHP = (count,cb) => {
        this.hp.current -= count;
         
        if (this.hp.current <= 0) {
            this.hp.current = 0;
            alert('Бедный ' + this.name + ' проиграл бой');
            $btn.disabled = true;
           
        }
        
            this.renderHP();
            cb && cb(count);
    }
}


export default Pokemon;

