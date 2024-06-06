let totalRounds;
let roundsPlayed = 0;
let currentRound = 1;

let score1 = 0;
let score2 = 0;
let wins1 = 0;
let wins2 = 0;
let pastFirst=false;
let count =0;
let options=[];
let p1=false;
let p2=false;
let roll1, roll2;
let notDone=true
//document.querySelector(".start").disabled = false;
    document.querySelector(".start").addEventListener("click", function () {
        document.querySelector(".roll1").disabled = false;
        document.querySelector(".roll2").disabled = false;
        if (document.querySelector(".rounds").value == "") {
            document.querySelector(".msg").textContent = "Please enter a number"
        } else {
            let val = Number(document.querySelector(".rounds").value)
            if (val % 2 === 1) {
                document.querySelector(".msg").textContent = ""
                totalRounds = val
                document.getElementById("initial").style.display = "none";
                document.querySelector(".total").textContent = "Total rounds: " +totalRounds;
                document.querySelector(".start").disabled = true;
                document.querySelector(".restart").disabled = false;
            } else {
                document.querySelector(".msg").textContent = "Please enter an odd number";
            }
        }
    });


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

    function compareAndDisplay() {
        if (roll1 !== undefined && roll2 !== undefined) {
            if (roll1 > roll2){
                document.querySelector(".first").textContent = `Player 1 rolled ${roll1}, they go first!`;
                document.querySelector(".roll2").disabled = true;
                document.querySelector(".roll1").disabled = false;
                pastFirst=true;
                document.querySelector(".current").textContent = `Current round: ` + currentRound
                document.querySelector(".who").textContent = ""
            }
            else if (roll2 > roll1){
                document.querySelector(".first").textContent = `Player 2 rolled ${roll2}, they go first!`;
                document.querySelector(".roll1").disabled = true;
                document.querySelector(".roll2").disabled = false;
                pastFirst=true;
                document.querySelector(".current").textContent = `Current round: ` + currentRound
                document.querySelector(".who").textContent = ""
                }
            else{
                document.querySelector(".first").textContent = "Both players rolled the same number, roll again";
                document.querySelector(".roll1").disabled = false;
                document.querySelector(".roll2").disabled = false;
                document.querySelector(".player2").textContent = ``
                document.querySelector(".player1").textContent = ``
                roll1=undefined;
                roll2=undefined; 
                document.querySelector(".current").textContent = `Current round: ` + currentRound
                document.querySelector(".who").textContent = ""
            }
        }
    }
   
    document.querySelector(".roll2").addEventListener("click", function () {
        if (pastFirst===true){
            if (document.querySelector(".roll1").disabled===true){
                document.querySelector(".current").textContent = `Current round: ` + currentRound
            if (count===0){
                document.querySelector(".player1").textContent = ``
                options.push(getRandomInt(1, 6),getRandomInt(1, 6),getRandomInt(1, 6));
                roll2=Math.max(options[0],options[1],options[2]);
                document.querySelector(".player2").textContent = `Player 2 rolled: ` + options [0] + `, ` + options[1] + `, and `+ options[2]+`. ` + roll2 + ` was added`;
                score2+=roll2;
                document.querySelector(".player2-score").textContent=`Player 2's score: ` +score2;
                count++;
            }
            else if (count===1){
                    options.push(getRandomInt(1, 6),getRandomInt(1, 6),getRandomInt(1, 6));
                    roll2=Math.max(options[3],options[4]);
                    document.querySelector(".player2").textContent = `Player 2 rolled: ` +  options[3] + ` and `+ options[4]+`. ` + roll2 + ` was added`;
                    score2+=roll2;
                    document.querySelector(".player2-score").textContent=`Player 2's score: ` +score2;
                    count++;
            }
            else if (count ===2){
                    options.push(getRandomInt(1, 6),getRandomInt(1, 6),getRandomInt(1, 6));
                    roll2=Math.max(options[5]);
                    document.querySelector(".player2").textContent = `Player 2 rolled: ` + options[5]+`. ` + roll2 + ` was added`;
                    score2+=roll2;
                    document.querySelector(".player2-score").textContent=`Player 2's score: ` +score2;
                    count=0;
                    options=[]
                    document.querySelector(".roll1").disabled=false;
                    document.querySelector(".roll2").disabled=true;
                    p2=true;
                    if (p1){
                        document.querySelector(".player1-score").textContent = `Player 1's score: `
                        document.querySelector(".player2-score").textContent = `Player 2's score: `
                        roundsPlayed++;
                        currentRound++;
                        if (score1>score2){
                            wins1++;
                            document.querySelector(".first").textContent=""
                        }
                        else if (score2>score1){
                            wins2++
                            document.querySelector(".first").textContent=""
                        }
                        else{
                            wins1++
                            wins2++
                            document.querySelector(".first").textContent=""
                        }
                        document.querySelector(".player2-wins").textContent=`Player 2's wins: ` +wins2;
                        document.querySelector(".player1-wins").textContent=`Player 1's wins: ` +wins1;
                        document.querySelector(".total").textContent=`Total rounds: ` +totalRounds;
                            
                        score1=0;
                        score2=0;
                        p1=false;
                        p2=false;
                        if (roundsPlayed===totalRounds){
                            if (wins1>wins2){
                                document.querySelector(".first").textContent="The final score is " + wins1 + "-" +wins2+". Player 1 wins!"
                                document.querySelector(".roll1").disabled = true;
                                document.querySelector(".roll2").disabled = true;
                            }
                            else if (wins1<wins2){
                                document.querySelector(".first").textContent="The final score is " + wins1 + "-" +wins2+". Player 2 wins!"
                                document.querySelector(".roll1").disabled = true;
                                document.querySelector(".roll2").disabled = true;
                            }
                            else if (wins1===wins2){
                                document.querySelector(".first").textContent="The final score is " + wins1 + "-" +wins2+". It's a tie!!"
                                document.querySelector(".roll1").disabled = true;
                                document.querySelector(".roll2").disabled = true;
                            }
                        }
                    }
                    else{
                        document.querySelector(".first").textContent="Now it is Player 1's turn."
                    }      


        }}}
        else{
            roll2 = getRandomInt(1, 6);
            document.querySelector(".player2").textContent = `Player 2 rolled: ${roll2}`;
            document.querySelector(".roll2").disabled=true;
            compareAndDisplay();
        }
    })

    document.querySelector(".roll1").addEventListener("click", function () {
        if (pastFirst===true){
            if (document.querySelector(".roll2").disabled===true){
                document.querySelector(".current").textContent = `Current round: ` + currentRound
            if (count===0){
                document.querySelector(".player2").textContent = ``
                options.push(getRandomInt(1, 6),getRandomInt(1, 6),getRandomInt(1, 6));
                roll1=Math.max(options[0],options[1],options[2]);
                document.querySelector(".player1").textContent = `Player 1 rolled: ` + options [0] + `, ` + options[1] + `, and `+ options[2]+`. ` + roll1 + ` was added`;
                score1+=roll1;
                document.querySelector(".player1-score").textContent=`Player 1's score: ` +score1;
                count++;
            }
            else if (count===1){
                    options.push(getRandomInt(1, 6),getRandomInt(1, 6),getRandomInt(1, 6));
                    roll1=Math.max(options[3],options[4]);
                    document.querySelector(".player1").textContent = `Player 1 rolled: ` +  options[3] + ` and `+ options[4]+`. ` + roll1 + ` was added`;
                    score1+=roll1;
                    document.querySelector(".player1-score").textContent=`Player 1's score: ` +score1;
                    count++;
            }
            else if (count ===2){
                    options.push(getRandomInt(1, 6),getRandomInt(1, 6),getRandomInt(1, 6));
                    roll1=Math.max(options[5]);
                    document.querySelector(".player1").textContent = `Player 1 rolled: ` + options[5]+`. ` + roll1 + ` was added`;
                    score1+=roll2;
                    document.querySelector(".player1-score").textContent=`Player 1's score: ` +score1;
                    count=0;
                    options=[]
                    document.querySelector(".roll2").disabled=false;
                    document.querySelector(".roll1").disabled=true;
                    p1=true;
                    if (p2){
                        roundsPlayed++;
                        currentRound++;
                        document.querySelector(".player1-score").textContent = `Player 1's score: `
                        document.querySelector(".player2-score").textContent = `Player 2's score: `
                        if (score1>score2){
                            wins1++;
                            document.querySelector(".first").textContent=""
                        }
                        else if (score2>score1){
                            wins2++
                            document.querySelector(".first").textContent=""
                        }
                        else{
                            wins1++
                            wins2++
                            document.querySelector(".first").textContent=""
                        }
                        document.querySelector(".player2-wins").textContent=`Player 2's wins: ` +wins2;
                        document.querySelector(".player1-wins").textContent=`Player 1's wins: ` +wins1;
                        document.querySelector(".total").textContent=`Total rounds: ` +totalRounds;
                        score1=0;
                        score2=0;
                        p1=false;
                        p2=false;
                        if (roundsPlayed===totalRounds){
                            if (wins1>wins2){
                                document.querySelector(".first").textContent="The final score is " + wins1 + "-" +wins2+". Player 1 wins!"
                                document.querySelector(".roll1").disabled = true;
                                document.querySelector(".roll2").disabled = true;
                            }
                            else if (wins1<wins2){
                                document.querySelector(".first").textContent="The final score is " + wins1 + "-" +wins2+". Player 2 wins!"
                                document.querySelector(".roll1").disabled = true;
                                document.querySelector(".roll2").disabled = true;
                            }
                            else if (wins1===wins2){
                                document.querySelector(".first").textContent="The final score is " + wins1 + "-" +wins2+". It's a tie!!"
                                document.querySelector(".roll1").disabled = true;
                                document.querySelector(".roll2").disabled = true;
                            }
                        }
                    }   
                    else{
                        document.querySelector(".first").textContent="Now it is Player 2's turn."
                    }     

        }}}
        else{
            roll1 = getRandomInt(1, 6);
            document.querySelector(".player1").textContent = `Player 1 rolled: ${roll1}`;
            document.querySelector(".roll1").disabled=true;
            compareAndDisplay();
        }
    
    })
    document.querySelector(".restart").addEventListener("click", function () {
        restart();
    })

function restart(){
        totalRounds;
        roundsPlayed = 0;
        currentRound = 1;

        score1 = 0;
        score2 = 0;
        wins1 = 0;
        wins2 = 0;
        pastFirst=false;
        count =0;
        options=[];
        p1=false;
        p2=false;
        document.getElementById("initial").style.display = "block";
        document.querySelector(".player2-wins").textContent=`Player 2's wins: ` 
        document.querySelector(".player1-wins").textContent=`Player 1's wins: `
        document.querySelector(".total").textContent=`Total rounds: ` 
        document.querySelector(".first").textContent="The game has restarted."
        document.querySelector(".player2").textContent = ``
        document.querySelector(".player1").textContent = ``
        document.querySelector(".player1-score").textContent = `Player 1's score: `
        document.querySelector(".player2-score").textContent = `Player 2's score: `
        document.querySelector(".roll1").disabled = false;
        document.querySelector(".roll2").disabled = false;
        document.querySelector(".start").disabled = false;
        document.querySelector(".restart").disabled = true;
        document.querySelector(".current").textContent = `Current round: ` 
        document.querySelector(".who").textContent = `Who goes first?` 
        roll1=undefined;
        roll2=undefined;
        pastFirst=false;
    }
