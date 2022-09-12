  //Enemy Properties
  const enemyHP = document.querySelector(".enemyStats").innerText;
  let enemyAttributes = enemyHP.split("\n");
  //Hull
  let enemyAttributes2 = enemyAttributes[0].split(" ");
  let enemyHull = enemyAttributes2[2];
  //Firepower
  let enemyFire = enemyAttributes[1].split(" ");
  let enemyFp = enemyFire[2];
  //Accuracy
  let enemyAc = enemyAttributes[2].split(" ");
  let enemyAcc = enemyAc[2];

  //Player Properties
  const playerHP = document.querySelector(".playerStats").innerText;
  let playerAttributes = playerHP.split("\n");
  //Hull
  let playerHul = playerAttributes[0].split(" ");
  let playerHull = playerHul[2];
  //Firepower
  let playerpow = playerAttributes[1].split(" ");
  let playerPower = playerpow[2];
  //Accuracy
  let playerAc = playerAttributes[2].split(" ");
  let playerAcc = playerAc[2];

  // callprompt() is called when the browser is loaded
  let aliens = [
    "Thunder",
    "Titan",
    "Zion",
    "Elena",
    "Cyclopse",
    "Strike",
  ];
  let max = 6,
    min = 3;
  let randomalist = aliens.slice(
    (Math.floor(Math.random() * (max - min + 1) + min), 1),
    Math.floor(Math.random() * (max - min + 1) + min)
  );
  console.log(randomalist);
  ////////////////////////////////////////////////////////////////////////////////////
  callPrompt();
  function callPrompt() {
  alert(`Are you ready for battle? Select Ok to continue`);
    chooseTarget(randomalist); // call execute function with given input
  }
  ////////////////////////////////////////////////////////////////////////////////////
  function chooseTarget(inputlist) {
  
      let chosenTarget = prompt(
        `With your super targeting power, which alien you would like to target first?\n ${inputlist} \n Enter a number(1,2...)`
      );
      // console.log(aliens[chosenTarget-1])
      executeGame(inputlist[chosenTarget - 1],inputlist);
  }

  ////////////////////////////////////////////////////////////////////////////////////
  function executeGame(target,inputlist) {
    if (target) {
      alert('Hit "Enter" to Attack')
    

      if (playerAcc > Math.random()) {
        console.log("You Attacked your enemy as your accuracy is good!!");
        enemyHull -= playerPower;
        console.log(enemyHull);
        updateEnemyScore(); // Update score Status of enemy as he got hit:
      } else {
        console.log("Enemy attacked you as your accuracy is low!!");
        playerHull -= enemyFp;
        console.log(playerHull);
        updatePlayerScore(); // Update score Status of player you got hit:
      }
    } else {
      setTimeout(() => alert("Invalid Input"), 1000);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    //after one attack it checks for the value hull>0
    if (playerHull > 0 && enemyHull > 0) {
      //if >0 call prompt for next attack.
      setTimeout(() => {
        executeGame(target,inputlist);
      }, 2000);
    } else if (playerHull > 0 && enemyHull <= 0) {
    //if <0 conclude the winner to end the game.
      let remainingShip = inputlist.filter((x) => x !== target);
    console.log(remainingShip)
    alert(` ${target}  is dead!! Choose your next AlienShip!`)
    resetScore();
    
      if (remainingShip.length) {
      setTimeout(() => chooseTarget(remainingShip), 1000);
    }else{
      alert("You destroyed all Alien Ships!!!! You Won the Game!!!!")
    
    }
  } else if (playerHull <= 0) {
      setTimeout(
        () => alert(`You lost  with ${target} \n GAME OVER!!!!!!!`),1000);

        prompt('Press OK to restart the Game?')

        if(true){
          callPrompt();
        }
      return;
    }
  }

  ///////////////////////////////////////////////////////////////////

  function updateEnemyScore() {
    const enemystat = document.querySelector(".enemyStats");
    enemystat.innerText = `Hull : ${enemyHull}\n FirePower : ${enemyFp}\n Accuracy : ${enemyAcc}`;
  }

  function updatePlayerScore() {
    const playerStat = document.querySelector(".playerStats");
    playerStat.innerText = `Hull : ${playerHull}\n FirePower : ${playerPower}\n Accuracy : ${playerAcc}`;
  }

  function resetScore() {
    const enemystat = document.querySelector(".enemyStats");
    enemystat.innerText = `Hull : 6\n FirePower : 3\n Accuracy : .6`;
    enemyHull = 10;
  }
  ////////////////////////////////////////////////////////////////////////////////