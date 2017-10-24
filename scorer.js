var scoreTable = {
  
  players: [],
  
  addPlayer: function (playerName) {
    "use strict";
    this.players.push({
      name: playerName,
      roundScore: 0,
      score: [],
      totalScore: 0
    });
    view.displayPlayer();
  },
  
  removePlayer: function (position) {
    "use strict";
    this.players.splice(position, 1);
    view.displayPlayer();
  },
  
  addScore: function (playerNumber, score) {
    "use strict";
    this.players[playerNumber].score.push(score);
    this.totalScore();
    view.displayPlayer();
  },
  
//  changeScore: function (playerNumber, roundNumber, newValue) {
//    "use strict";
//    this.players[playerNumber].score[roundNumber] = newValue;
//    view.displayPlayer();
//  },
  
  totalScore: function () {
    "use strict";
    var sum = 0, i = 0, n = 0, player = this.players;
    for (i = 0; i < player.length; i++) {
      sum = 0;
      for (n = 0; n < player[i].score.length; n++) {
        sum += player[i].score[n];
        player[i].totalScore = sum;
      }
    }
  },
  
  resetScore: function () {
    "use strict";
    var i = 0, player = this.players;
    for (i = 0; i < player.length; i++) {
      player[i].score = [];
      player[i].totalScore = 0;
    }
    view.displayPlayer();
  }

};

var handlers = {
  addPlayer: function () {
    "use strict";
    var addPlayerName = document.getElementById('addPlayerValue');
    if (addPlayerName.value === "") {
      scoreTable.addPlayer('player ' + (scoreTable.players.length +1));
    } else { scoreTable.addPlayer(addPlayerName.value);
      }
    document.getElementById(scoreTable.players.length - 1).className += ' slideInAni';
    addPlayerName.value = '';
  },
  
  removePlayer: function (position) {
    "use strict";
    scoreTable.removePlayer(position);
  },
  
  addScore: function () {
    "use strict";
    var addScoreValue = document.getElementById('addScoreValue'),
      addScorePlayerNumber = document.getElementById('addScorePlayerNumber');
    scoreTable.addScore(addScorePlayerNumber.valueAsNumber, addScoreValue.valueAsNumber);
    addScorePlayerNumber.value = '';
    addScoreValue.value = '';
  }
  
//  changeScore: function () {
//    "use strict";
//    var changeScorePlayerNumber = document.getElementById('changeScorePlayerNumber'),
//      changeScoreRoundPosition = document.getElementById('changeScoreRoundPosition'),
//      changeScoreValue = document.getElementById('changeScoreValue');
//    scoreTable.changeScore(changeScorePlayerNumber.valueAsNumber, changeScoreRoundPosition.valueAsNumber, changeScoreValue.valueAsNumber);
//    changeScorePlayerNumber.value = '';
//    changeScoreRoundPosition.value = '';
//    changeScoreValue.value = '';
//  }
};

var view = {
  displayPlayer: function () {
    "use strict";
    var i = 0,
      n = 0,
      scoreBox = document.getElementById('scoreBox');
    
    scoreBox.innerHTML = '';
    
    for (i = 0; i < scoreTable.players.length; i++) {
      
      var createPlayerBox = document.createElement("div"),
        createPlayerTitle = document.createElement("h1"),
        createScoreButtonDiv = document.createElement("div"),
        createScoreMinus1 = document.createElement("button"),
        createScoreMinus5 = document.createElement("button"),
        createScoreMinus10 = document.createElement("button"),
        createScore0 = document.createElement("button"),
        createScoreAdd1 = document.createElement("button"),
        createScoreAdd5 = document.createElement("button"),
        createScoreAdd10 = document.createElement("button"),
        createScoreAddTotalButton = document.createElement("button"),
        createScoreTotalsDiv = document.createElement("div"),
        createScoreAddTotal = document.createElement("h1"),
        createScoreTotal = document.createElement("h1");
      
      scoreBox.appendChild(createPlayerBox);
      createPlayerBox.id = i;
      createPlayerBox.className = "playerBox"
      var getPlayerBox = document.getElementById(i);
      
      getPlayerBox.appendChild(this.createDeleteButton());
      
      getPlayerBox.appendChild(createPlayerTitle);
      createPlayerTitle.appendChild(document.createTextNode(scoreTable.players[i].name));
      createPlayerTitle.id = 'playerName' + i;
      
      getPlayerBox.appendChild(createScoreButtonDiv);
      createScoreButtonDiv.id = 'scoreButtonDiv' + i;
      createScoreButtonDiv.className = "scoreButtonDiv";
      var getScoreButtonDiv = document.getElementById('scoreButtonDiv' + i);
      
      getScoreButtonDiv.appendChild(createScoreMinus10);
      createScoreMinus10.id = 'scoreMinus10';
      createScoreMinus10.className = "scoreAddButton"
      createScoreMinus10.textContent = "-10";
      
      getScoreButtonDiv.appendChild(createScoreMinus5);
      createScoreMinus5.id = 'scoreMinus5';
      createScoreMinus5.className = "scoreAddButton"
      createScoreMinus5.textContent = "-5";
      
      getScoreButtonDiv.appendChild(createScoreMinus1);
      createScoreMinus1.id = 'scoreMinus1';
      createScoreMinus1.className = "scoreAddButton"
      createScoreMinus1.textContent = "-1";
      
      getScoreButtonDiv.appendChild(createScoreAdd1);
      createScoreAdd1.id = 'scoreAdd1';
      createScoreAdd1.className = "scoreAddButton"
      createScoreAdd1.textContent = "+1";
      
      getScoreButtonDiv.appendChild(createScoreAdd5);
      createScoreAdd5.id = 'scoreAdd5';
      createScoreAdd5.className = "scoreAddButton"
      createScoreAdd5.textContent = "+5";
      
      getScoreButtonDiv.appendChild(createScoreAdd10);
      createScoreAdd10.id = 'scoreAdd10';
      createScoreAdd10.className = "scoreAddButton"
      createScoreAdd10.textContent = "+10";
      
      getPlayerBox.appendChild(createScoreAddTotalButton);
      createScoreAddTotalButton.className = "scoreAddTotalButton";
      createScoreAddTotalButton.textContent = "add score";
      
      getPlayerBox.appendChild(createScoreTotalsDiv);
      createScoreTotalsDiv.id = 'scoreTotalsDiv' + i;
      createScoreTotalsDiv.className = "scoreTotals"
      var getScoreTotalsDiv = document.getElementById('scoreTotalsDiv' + i);
      
      getScoreTotalsDiv.appendChild(createScoreAddTotal);
      createScoreAddTotal.textContent = scoreTable.players[i].roundScore;
      
//      for (n = 0; n < scoreTable.players[i].score.length; n++) {
//        var createPlayerScoreUl = document.createElement("ul"),
//          createPlayerScoreLi = document.createElement("li"),
//          scoreLi = document.createTextNode(scoreTable.players[i].score[n]);
//        createPlayerScoreLi.appendChild(scoreLi);
//        document.getElementById(i).appendChild(createPlayerScoreUl);
//        createPlayerScoreUl.id = 'playerScoreUl' + i;
//        var getPlayerScoreUl = document.getElementById('playerScoreUl' + i);
//        getPlayerScoreUl.insertBefore(createPlayerScoreLi, getPlayerScoreUl.childNodes[0]);
//      }
      
      getScoreTotalsDiv.appendChild(createScoreTotal);
      createScoreTotal.textContent = scoreTable.players[i].totalScore;
      
    }
    
  },
  
  createDeleteButton: function() {
    var deleteButton = document.createElement('div');
    var icon = document.createElement("img");
    icon.setAttribute("src", "images/close.svg");
    icon.setAttribute("alt", "close button icon");
    icon.className = "deleteButtonIcon";
    deleteButton.appendChild(icon);
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  
  addEventListener: function () {
    var getScoreBox = document.getElementById('scoreBox');
    getScoreBox.addEventListener ('click', function (event) {
      
      if (event.target.className === 'deleteButton' || event.target.className === 'deleteButtonIcon') {
        handlers.removePlayer(parseInt(event.target.parentNode.id));
        
      } else if (event.target.id === 'scoreMinus10') {
        scoreTable.players[parseInt(event.target.parentNode.parentNode.id)].roundScore += -10;
        
      } else if (event.target.id === 'scoreMinus5') {
        scoreTable.players[parseInt(event.target.parentNode.parentNode.id)].roundScore += -5;
        
      } else if (event.target.id === 'scoreMinus1') {
        scoreTable.players[parseInt(event.target.parentNode.parentNode.id)].roundScore += -1;
        
      } else if (event.target.id === 'score0') {
        scoreTable.players[parseInt(event.target.parentNode.parentNode.id)].roundScore = 0;
        
      } else if (event.target.id === 'scoreAdd1') {
        scoreTable.players[parseInt(event.target.parentNode.parentNode.id)].roundScore += 1;
        
      } else if (event.target.id === 'scoreAdd5') {
        scoreTable.players[parseInt(event.target.parentNode.parentNode.id)].roundScore += 5;
        
      } else if (event.target.id === 'scoreAdd10') {
        scoreTable.players[parseInt(event.target.parentNode.parentNode.id)].roundScore += 10;
        
      } else if (event.target.className === 'scoreAddTotalButton') {
        scoreTable.addScore(parseInt(event.target.parentNode.id), scoreTable.players[parseInt(event.target.parentNode.id)].roundScore);
        scoreTable.players[parseInt(event.target.parentNode.id)].roundScore = 0;
      }
      
    view.displayPlayer();
      
    });
    
  }
  
};

view.addEventListener();

document.getElementById("addPlayerValue").onkeypress = function(e) {
  if (e.keyCode === 13) {
    handlers.addPlayer();
  }
};