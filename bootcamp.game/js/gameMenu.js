import { startGame } from "./startGame.js"

export const createGameMenu=()=>{
    const btnPrev = document.querySelector('.header__btn-prev');
    btnPrev.style.display = "none";

    const score = document.querySelector('.score');
    let s1=score.textContent;
    console.log(s1);
    score.style.display="none";

    const bestScore = document.querySelector('.best_score');
    if(bestScore.textContent==""){
        bestScore.textContent="1000";
        bestScore.style.visibillity="hidden";
    }
    else{
        if(Number(bestScore.textContent.slice(8,bestScore.textContent.length)) >s1 && flag){
            bestScore.textContent = `Record: ${s1}`;
            bestScore.style.visibillity="visible";
        }
    }

    const title= document.createElement('h2');
    title.classList.add('game-menu__title');
    const gameSection = document.querySelector('.game-section__container');
    gameSection.innerHTML="";

    title.textContent="выбери сложность игры";
    const createMenuButton =(lvl)=>{
        const button = document.createElement('button');
        button.classList.add('game-menu__btn');
        if (lvl==1) lvl='easy' ;
        else if (lvl==2) lvl='средний';
        else if (lvl==3) lvl= 'сложный';
        button.textContent=lvl;
        button.addEventListener('click', ()=> startGame(lvl));
        return button;
    }
    gameSection.append(
        title,
        createMenuButton(1),
        createMenuButton(2),
        createMenuButton(3)

    );
}