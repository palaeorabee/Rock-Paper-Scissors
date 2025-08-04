function comp() {
    let play=Math.floor(Math.random()*3);
    if (play === 0) {
        let ans="rock";
        console.log(" ======== Computer played :",ans, "========");
        return ans
        
    } else if (play === 1) {
        let ans="paper";
        console.log(" ======== Computer played :",ans,"=========");
        return ans

    } else if (play === 2) {
        let ans="scissors";
        console.log(" ======== Computer played : ",ans,"=========");
        return ans

    }
    
}

function human() {
    var play=prompt("rock, paper or scissors?");
    console.log (" ======== You played :", play, "========");
    return play;
    
}

function outcome(com,hum) {
    if (com===hum) {
        return 0;
    } else if (com === "rock" && hum === "paper"|| hum === "scissors" && com === "paper" || hum === "rock" && com === "scissors") {
        return 1;
    } else {
        return 2;
    }
}
    
function rps() {
    console.log(" ==============ʀᴏᴄᴋ, ᴘᴀᴘᴇʀ, ꜱᴄɪꜱꜱᴏʀꜱ!================")
    var HS=0;
    var CS=0;
    while (HS!=5 && CS!=5) {
        
        let pro=human();
        let opp=comp();
        let result = outcome(opp,pro);
        if (result===1) {
            HS++;
        } else if (result===2) {
            CS++;
        } else if (result===0) {
            console.log("Tie");
        }
        console.log("You =",HS,"|| Computer =",CS)
    }
    if (HS===5) {
        console.log("==========Congratulations! You Win============");
    } else if (CS===5) {
        console.log("========You Lose. Better Luck Next Time!============");
    }
    let again=prompt("Do you wish to restart? yes/no?")
    if (again.toLowerCase()==="yes") {
        rps()
    } else if (again.toLowerCase()==="no") {
        alert("Thanks for playing!")
    }
}
rps()
