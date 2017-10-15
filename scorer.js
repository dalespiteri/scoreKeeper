var scoreTable = {
  
  players: [],
  
  addPlayer: function (playerName) {
    "use strict";
    this.players.push({
      name: playerName,
      score: [],
      totalScore: 0
    });
    view.displayPlayer();
  },
  
  removePlayer: function (position) {
    "use strict";
    this.players.splice(position, 1);
    this.displayScores();
  },
  
  addScore: function (playerNumber, score) {
    "use strict";
    this.players[playerNumber].score.push(score);
    view.displayPlayer();
  },
  
  changeScore: function (playerNumber, roundNumber, newValue) {
    "use strict";
    this.players[playerNumber].score[roundNumber] = newValue;
    this.displayScores();
  },
  
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
    this.displayScores();
  },
  
  displayScores: function () {
    "use strict";
    this.totalScore();
    console.log(this.players);
  }
};

var handlers = {
  addPlayer: function () {
    "use strict";
    var addPlayerName = window.document.getElementById('addPlayerValue');
    scoreTable.addPlayer(addPlayerName.value);
    addPlayerName.value = '';
  },
  
  removePlayer: function () {
    "use strict";
    var removePlayerPosition = document.getElementById('removePlayerPosition');
    scoreTable.removePlayer(removePlayerPosition.valueAsNumber);
    removePlayerPosition.value = '';
  },
  
  addScore: function () {
    "use strict";
    var addScoreValue = document.getElementById('addScoreValue'),
      addScorePlayerNumber = document.getElementById('addScorePlayerNumber');
    scoreTable.addScore(addScorePlayerNumber.valueAsNumber, addScoreValue.valueAsNumber);
    addScorePlayerNumber.value = '';
    addScoreValue.value = '';
  },
  
  changeScore: function () {
    "use strict";
    var changeScorePlayerNumber = document.getElementById('changeScorePlayerNumber'),
      changeScoreRoundPosition = document.getElementById('changeScoreRoundPosition'),
      changeScoreValue = document.getElementById('changeScoreValue');
    scoreTable.changeScore(changeScorePlayerNumber.valueAsNumber, changeScoreRoundPosition.valueAsNumber, changeScoreValue.valueAsNumber);
    changeScorePlayerNumber.value = '';
    changeScoreRoundPosition.value = '';
    changeScoreValue.value = '';
  }
};

var view = {
  displayPlayer: function () {
    "use strict";
    debugger;
    var i = 0,
      n = 0,
      scoreBox = document.getElementById('scoreBox');
    
    scoreBox.innerHTML = '';
    
    for (i = 0; i < scoreTable.players.length; i++) {
      var createPlayerBox = document.createElement("div"),
        createPlayerTitle = document.createElement("h1");
      scoreBox.appendChild(createPlayerBox);
      createPlayerBox.id = 'playerBox' + i;
      document.getElementById('playerBox' + i).appendChild(createPlayerTitle);
      createPlayerTitle.id = 'playerTitle' + i;
      document.getElementById('playerTitle' + i).innerHTML = scoreTable.players[i].name;
      
      for (n = 0; n < scoreTable.players[i].score.length; n++) {
        var createPlayerScoreUl = document.createElement("ul"),
          createPlayerScoreLi = document.createElement("li");
        document.getElementById('playerBox' + i).appendChild(createPlayerScoreUl);
        createPlayerScoreUl.id = 'playerScoreUl' + i;
        document.getElementById('playerScoreUl' + i).appendChild(createPlayerScoreLi);
        createPlayerScoreLi.innerHTML = scoreTable.players[i].score[n];
        
      }
      
    }
    
  }
};