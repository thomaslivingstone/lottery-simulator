

class Lottery {

    // takes a list of the teams involved in the lottery
    constructor(teams) {
        this.teams = teams;
    }

    execute() {
        let winner = 0;


        // random num between 0 and 99
        let selector = Math.floor(Math.random() * 100);
        //console.log("selector: " + selector);

        
        let winnerIndex = 0;
        let teamsIndex = 0;

        while (winnerIndex <= selector) {
            
            winnerIndex += this.teams[teamsIndex].odds;
            teamsIndex++;
        }

        winner = teamsIndex-1; 

        return winner;
    }
}

class Team {

    // takes a string of the teams name and the teams odds in the lottery out of 100
    constructor(teamName, odds) {
        this.teamName = teamName;
        this.odds = odds;
    }
}

function simulate(event) {
    event.preventDefault();
    let teams = [];

    teams.push(new Team(document.getElementById("teamName1").value, parseInt(document.getElementById("odds1").value)));
    teams.push(new Team(document.getElementById("teamName2").value, parseInt(document.getElementById("odds2").value)));
    teams.push(new Team(document.getElementById("teamName3").value, parseInt(document.getElementById("odds3").value)));
    teams.push(new Team(document.getElementById("teamName4").value, parseInt(document.getElementById("odds4").value)));
    teams.push(new Team(document.getElementById("teamName5").value, parseInt(document.getElementById("odds5").value)));
    teams.push(new Team(document.getElementById("teamName6").value, parseInt(document.getElementById("odds6").value)));

    let lottery = new Lottery(teams);
    let winnerIndex = lottery.execute();

    // removes winner from array and adds them back at the end so the the array will be sorted
    // from 6th pick to 1st
    let winner = teams.splice(winnerIndex, 1);
    teams.push(winner[0]);

    displayResults(teams);
}

function displayResults(teams) {
    document.getElementById("Setup").classList.add("display-none");
    
    let pickNum = 1;
    for (let i = (teams.length - 1); i >= 0; i--) {
        let pick = document.createElement("div");
        pick.classList.add("teamCard");
        pick.innerHTML = "<h2>" + (pickNum) + ".  " + "</h2>" + "<h3>" + teams[i].teamName + "</h3>";
        document.getElementById("Results").appendChild(pick);
        pickNum++;
    }


}

