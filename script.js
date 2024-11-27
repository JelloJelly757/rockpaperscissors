const rockbutton = document.querySelector('.buttonrock'); 
const paperbutton = document.querySelector('.buttonpaper');
const scissorsbutton = document.querySelector('.buttonscissors');
const resetbutton = document.querySelector('.buttonreset');
let playerscoreContainer = document.getElementById('playerscorecont2');
let computerscoreContainer = document.getElementById('computerscorecont2');
let tiescoreContainer = document.getElementById('tiescorecont2');
let wolContainer = document.getElementById('wol'); 
let playerscore = 0;
let computerscore = 0;
let tiescore = 0;

let rockFunction = () =>{
    rockbutton.addEventListener('click', () => {
        let playerChoice = 1; // Rock
        let computerChoice = Math.floor(Math.random() * 3) + 1;
        
        // Compare choices and update score
        if (playerChoice === computerChoice) {
            let playermessageContainer = document.getElementById('playermessage2');
            playermessageContainer.textContent = "PLAYER PICKED: ROCK";
            let computermessageContainer = document.getElementById('computermessage2');
            computermessageContainer.textContent = "COMPUTER PICKED: ROCK";
            let wltmessageContainer = document.getElementById('wltmessage2');
            wltmessageContainer.textContent = "TIE";
            tiescore +=1; 
            let imageElement = document.querySelector('.imgleft img');
            imageElement.src = 'https://static.vecteezy.com/system/resources/previews/012/484/724/non_2x/rock-stone-cartoon-cobblestones-of-various-shapes-rocks-and-debris-of-the-mountain-vector.jpg';
            imageElement.style.display = 'block';
            let imageContainer = document.querySelector('.imgright img');
            imageContainer.src = 'https://static.vecteezy.com/system/resources/previews/012/484/724/non_2x/rock-stone-cartoon-cobblestones-of-various-shapes-rocks-and-debris-of-the-mountain-vector.jpg';
            imageContainer.style.display = 'block';
            // It's a tie
        } else if ((playerChoice === 1 && computerChoice === 3)) {
            let playermessageContainer = document.getElementById('playermessage2');
            playermessageContainer.textContent = "PLAYER PICKED: ROCK";
            let computermessageContainer = document.getElementById('computermessage2');
            computermessageContainer.textContent = "COMPUTER PICKED: SCISSORS";
            let wltmessageContainer = document.getElementById('wltmessage2');
            wltmessageContainer.textContent = "WIN";
            let imageElement = document.querySelector('.imgleft img');
            imageElement.src = 'https://static.vecteezy.com/system/resources/previews/012/484/724/non_2x/rock-stone-cartoon-cobblestones-of-various-shapes-rocks-and-debris-of-the-mountain-vector.jpg';
            imageElement.style.display = 'block';
            let imageContainer = document.querySelector('.imgright img');
            imageContainer.src = 'https://t4.ftcdn.net/jpg/07/80/54/37/360_F_780543719_D9YH6luHUErUXVjEndUyX8WIkImZQMTs.jpg';
            imageContainer.style.display = 'block';
            // Player wins
            playerscore += 1;
            if (playerscore === 3){
                document.getElementById('wol').innerText = "YOU WIN OVERALL!"; 
            }
        } else {
            // Computer wins
            let playermessageContainer = document.getElementById('playermessage2');
            playermessageContainer.textContent = "PLAYER PICKED: ROCK";
            let computermessageContainer = document.getElementById('computermessage2');
            computermessageContainer.textContent = "COMPUTER PICKED: PAPER";
            let wltmessageContainer = document.getElementById('wltmessage2');
            wltmessageContainer.textContent = "LOSS";
            let imageElement = document.querySelector('.imgleft img');
            imageElement.src = 'https://static.vecteezy.com/system/resources/previews/012/484/724/non_2x/rock-stone-cartoon-cobblestones-of-various-shapes-rocks-and-debris-of-the-mountain-vector.jpg';
            imageElement.style.display = 'block';
            let imageContainer = document.querySelector('.imgright img');
            imageContainer.src = 'https://t4.ftcdn.net/jpg/03/06/05/69/360_F_306056903_CPckusg6Tp8fkHpGJC3IwsTQGyYBE9IG.webp';
            imageContainer.style.display = 'block';
            computerscore +=1; 
            if (computerscore === 3){
                document.getElementById('wol').innerText = "YOU LOSE OVERALL :("; 
            }
        }
        
        playerscoreContainer.textContent = "PLAYER SCORE: " + playerscore;
        computerscoreContainer.textContent = "COMPUTER SCORE: " + computerscore;
        tiescoreContainer.textContent = "TIE SCORE: " + tiescore;

    });
}

rockFunction(); 

let paperFunction = () =>{
    paperbutton.addEventListener('click', () => {
        let playerChoice = 2; // Paper
        let computerChoice = Math.floor(Math.random() * 3) + 1;
        
        // Compare choices and update score
        if (playerChoice === computerChoice) {
            let playermessageContainer = document.getElementById('playermessage2');
            playermessageContainer.textContent = "PLAYER PICKED: PAPER";
            let computermessageContainer = document.getElementById('computermessage2');
            computermessageContainer.textContent = "COMPUTER PICKED: PAPER";
            let wltmessageContainer = document.getElementById('wltmessage2');
            wltmessageContainer.textContent = "TIE";
            tiescore +=1; 
            let imageElement = document.querySelector('.imgleft img');
            imageElement.src = 'https://t4.ftcdn.net/jpg/03/06/05/69/360_F_306056903_CPckusg6Tp8fkHpGJC3IwsTQGyYBE9IG.webp';
            imageElement.style.display = 'block';
            let imageContainer = document.querySelector('.imgright img');
            imageContainer.src = 'https://t4.ftcdn.net/jpg/03/06/05/69/360_F_306056903_CPckusg6Tp8fkHpGJC3IwsTQGyYBE9IG.webp';
            imageContainer.style.display = 'block';
            // It's a tie
        } else if ((playerChoice === 2 && computerChoice === 1)) {
            let playermessageContainer = document.getElementById('playermessage2');
            playermessageContainer.textContent = "PLAYER PICKED: PAPER";
            let computermessageContainer = document.getElementById('computermessage2');
            computermessageContainer.textContent = "COMPUTER PICKED: ROCK";
            let wltmessageContainer = document.getElementById('wltmessage2');
            wltmessageContainer.textContent = "WIN";
            let imageElement = document.querySelector('.imgleft img');
            imageElement.src = 'https://t4.ftcdn.net/jpg/03/06/05/69/360_F_306056903_CPckusg6Tp8fkHpGJC3IwsTQGyYBE9IG.webp';
            imageElement.style.display = 'block';
            let imageContainer = document.querySelector('.imgright img');
            imageContainer.src = 'https://static.vecteezy.com/system/resources/previews/012/484/724/non_2x/rock-stone-cartoon-cobblestones-of-various-shapes-rocks-and-debris-of-the-mountain-vector.jpg';
            imageContainer.style.display = 'block';
            // Player wins
            playerscore += 1;
            if (playerscore === 3){
                document.getElementById('wol').innerText = "YOU WIN OVERALL!";
            }
        } else {
            // Computer wins
            let playermessageContainer = document.getElementById('playermessage2');
            playermessageContainer.textContent = "PLAYER PICKED: PAPER";
            let computermessageContainer = document.getElementById('computermessage2');
            computermessageContainer.textContent = "COMPUTER PICKED: SCISSORS";
            let wltmessageContainer = document.getElementById('wltmessage2');
            wltmessageContainer.textContent = "LOSS";
            computerscore +=1; 
            if (computerscore === 3){
                document.getElementById('wol').innerText = "YOU LOSE OVERALL :(";
            }
            let imageElement = document.querySelector('.imgleft img');
            imageElement.src = 'https://t4.ftcdn.net/jpg/03/06/05/69/360_F_306056903_CPckusg6Tp8fkHpGJC3IwsTQGyYBE9IG.webp';
            imageElement.style.display = 'block';
            let imageContainer = document.querySelector('.imgright img');
            imageContainer.src = 'https://t4.ftcdn.net/jpg/07/80/54/37/360_F_780543719_D9YH6luHUErUXVjEndUyX8WIkImZQMTs.jpg';
            imageContainer.style.display = 'block';
        }
        
        playerscoreContainer.textContent = "PLAYER SCORE: " + playerscore;
        computerscoreContainer.textContent = "COMPUTER SCORE: " + computerscore;
        tiescoreContainer.textContent = "TIE SCORE: " + tiescore;

    });
}

paperFunction(); 

let scissorsFunction = () =>{
    scissorsbutton.addEventListener('click', () => {
        let playerChoice = 3; // Scissors
        let computerChoice = Math.floor(Math.random() * 3) + 1;
        
        // Compare choices and update score
        if (playerChoice === computerChoice) {
            let playermessageContainer = document.getElementById('playermessage2');
            playermessageContainer.textContent = "PLAYER PICKED: SCISSORS";
            let computermessageContainer = document.getElementById('computermessage2');
            computermessageContainer.textContent = "COMPUTER PICKED: SCISSORS";
            let wltmessageContainer = document.getElementById('wltmessage2');
            wltmessageContainer.textContent = "TIE";
            let imageElement = document.querySelector('.imgleft img');
            imageElement.src = 'https://t4.ftcdn.net/jpg/07/80/54/37/360_F_780543719_D9YH6luHUErUXVjEndUyX8WIkImZQMTs.jpg';
            imageElement.style.display = 'block';
            let imageContainer = document.querySelector('.imgright img');
            imageContainer.src = 'https://t4.ftcdn.net/jpg/07/80/54/37/360_F_780543719_D9YH6luHUErUXVjEndUyX8WIkImZQMTs.jpg';
            imageContainer.style.display = 'block';
            tiescore +=1; 
            // It's a tie
        } else if ((playerChoice === 3 && computerChoice === 2)) {
            let playermessageContainer = document.getElementById('playermessage2');
            playermessageContainer.textContent = "PLAYER PICKED: SCISSORS";
            let computermessageContainer = document.getElementById('computermessage2');
            computermessageContainer.textContent = "COMPUTER PICKED: PAPER";
            let wltmessageContainer = document.getElementById('wltmessage2');
            wltmessageContainer.textContent = "WIN";
            let imageElement = document.querySelector('.imgleft img');
            imageElement.src = 'https://t4.ftcdn.net/jpg/07/80/54/37/360_F_780543719_D9YH6luHUErUXVjEndUyX8WIkImZQMTs.jpg';
            imageElement.style.display = 'block';
            let imageContainer = document.querySelector('.imgright img');
            imageContainer.src = 'https://t4.ftcdn.net/jpg/03/06/05/69/360_F_306056903_CPckusg6Tp8fkHpGJC3IwsTQGyYBE9IG.webp';
            imageContainer.style.display = 'block';
            // Player wins
            playerscore += 1;
            if (playerscore === 3){
                document.getElementById('wol').innerText = "YOU WIN OVERALL!";
            }
        } else {
            // Computer wins
            let playermessageContainer = document.getElementById('playermessage2');
            playermessageContainer.textContent = "PLAYER PICKED: SCISSORS";
            let computermessageContainer = document.getElementById('computermessage2');
            computermessageContainer.textContent = "COMPUTER PICKED: ROCK";
            let wltmessageContainer = document.getElementById('wltmessage2');
            wltmessageContainer.textContent = "LOSS";
            let imageElement = document.querySelector('.imgleft img');
            imageElement.src = 'https://t4.ftcdn.net/jpg/07/80/54/37/360_F_780543719_D9YH6luHUErUXVjEndUyX8WIkImZQMTs.jpg';
            imageElement.style.display = 'block';
            let imageContainer = document.querySelector('.imgright img');
            imageContainer.src = 'https://static.vecteezy.com/system/resources/previews/012/484/724/non_2x/rock-stone-cartoon-cobblestones-of-various-shapes-rocks-and-debris-of-the-mountain-vector.jpg';
            imageContainer.style.display = 'block';
            computerscore +=1; 
            if (computerscore === 3){
                document.getElementById('wol').innerText = "YOU LOSE OVERALL :(";
            }
        }
        
        playerscoreContainer.textContent = "PLAYER SCORE: " + playerscore;
        computerscoreContainer.textContent = "COMPUTER SCORE: " + computerscore;
        tiescoreContainer.textContent = "TIE SCORE: " + tiescore;

    });
}

scissorsFunction(); 


let resetFunction = () =>{
    resetbutton.addEventListener('click', () => {
        tiescore = 0;
        playerscore = 0; 
        computerscore = 0; 
        if (playerscore === 0){
                document.getElementById('wol').innerText = "OVERALL WIN OR OVERALL LOSS?";
                let wltmessageContainer = document.getElementById('wltmessage2');
                wltmessageContainer.textContent = "WIN, LOSS OR TIE";
                let playermessageContainer = document.getElementById('playermessage2');
                playermessageContainer.textContent = "PLAYER PICKED:";
                let computermessageContainer = document.getElementById('computermessage2');
                computermessageContainer.textContent = "COMPUTER PICKED:";
                let imageElement = document.querySelector('.imgleft img');
                imageElement.src = 'https://t3.ftcdn.net/jpg/05/41/05/92/360_F_541059290_NjBdaMH5YPkt3uSbNcLLUCG9skkSOr4R.jpg';
                imageElement.style.display = 'block';
                let imageContainer = document.querySelector('.imgright img');
                imageContainer.src = 'https://t3.ftcdn.net/jpg/05/41/05/92/360_F_541059290_NjBdaMH5YPkt3uSbNcLLUCG9skkSOr4R.jpg';
                imageContainer.style.display = 'block';
        }
        if (computerscore === 0){
                document.getElementById('wol').innerText = "OVERALL WIN OR OVERALL LOSS?";
                let wltmessageContainer = document.getElementById('wltmessage2');
                wltmessageContainer.textContent = "WIN, LOSS OR TIE";
                let playermessageContainer = document.getElementById('playermessage2');
                playermessageContainer.textContent = "PLAYER PICKED:";
                let computermessageContainer = document.getElementById('computermessage2');
                computermessageContainer.textContent = "COMPUTER PICKED:";
                let imageElement = document.querySelector('.imgleft img');
                imageElement.src = 'https://t3.ftcdn.net/jpg/05/41/05/92/360_F_541059290_NjBdaMH5YPkt3uSbNcLLUCG9skkSOr4R.jpg';
                imageElement.style.display = 'block';
                let imageContainer = document.querySelector('.imgright img');
                imageContainer.src = 'https://t3.ftcdn.net/jpg/05/41/05/92/360_F_541059290_NjBdaMH5YPkt3uSbNcLLUCG9skkSOr4R.jpg';
                imageContainer.style.display = 'block';
        }

        playerscoreContainer.textContent = "PLAYER SCORE: " + playerscore;
        computerscoreContainer.textContent = "COMPUTER SCORE: " + computerscore;
        tiescoreContainer.textContent = "TIE SCORE: " + tiescore; 
    });
} 

resetFunction(); 
