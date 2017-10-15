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
    view.displayPlayer();
  },
  
  addScore: function (playerNumber, score) {
    "use strict";
    this.players[playerNumber].score.push(score);
    this.totalScore();
    view.displayPlayer();
  },
  
  changeScore: function (playerNumber, roundNumber, newValue) {
    "use strict";
    this.players[playerNumber].score[roundNumber] = newValue;
    view.displayPlayer();
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
    view.displayPlayer();
  }

};

var handlers = {
  addPlayer: function () {
    "use strict";
    var addPlayerName = window.document.getElementById('addPlayerValue');
    scoreTable.addPlayer(addPlayerName.value);
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
    var i = 0,
      n = 0,
      scoreBox = document.getElementById('scoreBox');
    
    scoreBox.innerHTML = '';
    
    for (i = 0; i < scoreTable.players.length; i++) {
      var createPlayerBox = document.createElement("div"),
        createPlayerTitle = document.createElement("h1"),
        createH2 = document.createElement("h2");
      scoreBox.appendChild(createPlayerBox);
      createPlayerBox.id = 'playerBox' + i;
      document.getElementById('playerBox' + i).appendChild(createPlayerTitle);
      createPlayerTitle.appendChild(document.createTextNode(scoreTable.players[i].name));
      createPlayerTitle.appendChild(this.createDeleteButton());
      createPlayerTitle.id = i;
      
      
      for (n = 0; n < scoreTable.players[i].score.length; n++) {
        var createPlayerScoreUl = document.createElement("ul"),
          createPlayerScoreLi = document.createElement("li");
        document.getElementById('playerBox' + i).appendChild(createPlayerScoreUl);
        createPlayerScoreUl.id = 'playerScoreUl' + i;
        document.getElementById('playerScoreUl' + i).appendChild(createPlayerScoreLi);
        createPlayerScoreLi.innerHTML = scoreTable.players[i].score[n];
        
      }
      
      document.getElementById('playerBox' + i).appendChild(createH2);
      createH2.innerHTML = scoreTable.players[i].totalScore;
      
    }
    
  },
  
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = "remove player";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  
  addEventListener: function () {
    var getScoreBox = document.getElementById('scoreBox');
    getScoreBox.addEventListener ('click', function (event) {
      if (event.target.className === 'deleteButton') {
        handlers.removePlayer(parseInt(event.target.parentNode.id));
      }
    });
  }
  
};

view.addEventListener();