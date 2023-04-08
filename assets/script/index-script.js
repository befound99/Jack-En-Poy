// choice buttons
  let userRock = document.querySelector("#userRock"); 
  let userPaper = document.querySelector("#userPaper");
  let userScissors = document.querySelector("#userScissors"); 
  let userChoice;

// reset btn 
  let resetBtn = document.querySelector("#reset");

// buttons event listeners
  userRock.addEventListener("click", chooseRock);
  userPaper.addEventListener("click", choosePaper);
  userScissors.addEventListener("click", chooseScissors)

// choice displays
  // user
  let userDisplayRock = document.querySelector("#userDisplayRock");
  let userDisplayPaper = document.querySelector("#userDisplayPaper");
  let userDisplayScissors = document.querySelector("#userDisplayScissors");

  // ai
  let aiDisplayRock = document.querySelector("#aiDisplayRock");
  let aiDisplayPaper = document.querySelector("#aiDisplayPaper");
  let aiDisplayScissors = document.querySelector("#aiDisplayScissors");

// score 
  let userScore = document.querySelector("#userScore");
  let aiScore = document.querySelector("#aiScore");

// initialize score
  let userScoreValue = 0;
  let aiScoreValue = 0;
  userScore.innerHTML = userScoreValue;
  aiScore.innerHTML = aiScoreValue;

// Match result container
  let matchResult = document.querySelector("#result");

// user chose rock funtion
function chooseRock () {
  // ai choice randomizer where : 0 = rock, 1 = paper, 2 = scissors
  let aiRandom = Math.floor((Math.random() * 3));
  
  // initialize score
  userScore.innerHTML = userScoreValue;
  aiScore.innerHTML = aiScoreValue;
  // makes choice visible
  userDisplayRock.setAttribute('style', 'display: block !important;');
  userDisplayPaper.setAttribute('style', 'display: none !important;');
  userDisplayScissors.setAttribute('style', 'display: none !important;');

  if (aiRandom == 0) {

    aiDisplayRock.setAttribute('style', 'display: block !important;');
    aiDisplayPaper.setAttribute('style', 'display: none !important;');
    aiDisplayScissors.setAttribute('style', 'display: none !important;');

    matchResult.innerHTML = "DRAW";
    matchResult.style.textShadow = "0 0 5px #5ED974"
    matchResult.style.color = "#5ED974"
    return ;
  }else if (aiRandom == 1) {

    aiDisplayPaper.setAttribute('style', 'display: block !important;');
    aiDisplayRock.setAttribute('style', 'display: none !important;');
    aiDisplayScissors.setAttribute('style', 'display: none !important;');

    matchResult.innerHTML = "YOU LOSE";
    matchResult.style.textShadow = "0 0 5px #f04343"
    matchResult.style.color = "#f04343"
    aiScoreValue++;
    
    return;
  }else if (aiRandom == 2) {

    aiDisplayScissors.setAttribute('style', 'display: block !important;');
    aiDisplayPaper.setAttribute('style', 'display: none !important;');
    aiDisplayRock.setAttribute('style', 'display: none !important;');

    matchResult.innerHTML = "YOU WIN!";
    matchResult.style.textShadow = "0 0 5px #5549fd"
    matchResult.style.color = "#5549fd"
    userScoreValue++;
    return; 
  } 
}
function choosePaper (){
  // ai choice randomizer where : 0 = rock, 1 = paper, 2 = scissors
  let aiRandom = Math.floor((Math.random() * 3));
  
  // initialize score
  userScore.innerHTML = userScoreValue;
  aiScore.innerHTML = aiScoreValue;
  // makes choice visible
  userDisplayPaper.setAttribute('style', 'display: block !important;');
  userDisplayRock.setAttribute('style', 'display: none !important;');
  userDisplayScissors.setAttribute('style', 'display: none !important;');

  if (aiRandom == 1) {

    aiDisplayPaper.setAttribute('style', 'display: block !important;');
    aiDisplayRock.setAttribute('style', 'display: none !important;');
    aiDisplayScissors.setAttribute('style', 'display: none !important;');

    matchResult.innerHTML = "DRAW";
    matchResult.style.textShadow = "0 0 5px #5ED974"
    matchResult.style.color = "#5ED974"
    return ;
  }else if (aiRandom == 2) {

    aiDisplayScissors.setAttribute('style', 'display: block !important;');
    aiDisplayPaper.setAttribute('style', 'display: none !important;');
    aiDisplayRock.setAttribute('style', 'display: none !important;');

    matchResult.innerHTML = "YOU LOSE";
    matchResult.style.textShadow = "0 0 5px #f04343"
    matchResult.style.color = "#f04343"
    aiScoreValue++;
    
    return;
  }else if (aiRandom == 0) {

    aiDisplayRock.setAttribute('style', 'display: block !important;');
    aiDisplayScissors.setAttribute('style', 'display: none !important;');
    aiDisplayPaper.setAttribute('style', 'display: none !important;');

    matchResult.innerHTML = "YOU WIN!";
    matchResult.style.textShadow = "0 0 5px #5549fd"
    matchResult.style.color = "#5549fd"
    userScoreValue++;
    return; 
  } 
}
function chooseScissors () {
  // ai choice randomizer where : 0 = rock, 1 = paper, 2 = scissors
  let aiRandom = Math.floor((Math.random() * 3));
  
  // initialize score
  userScore.innerHTML = userScoreValue;
  aiScore.innerHTML = aiScoreValue;
  // makes choice visible
  userDisplayScissors.setAttribute('style', 'display: block !important;');
  userDisplayPaper.setAttribute('style', 'display: none !important;');
  userDisplayRock.setAttribute('style', 'display: none !important;');

  if (aiRandom == 2) {

    aiDisplayScissors.setAttribute('style', 'display: block !important;');
    aiDisplayPaper.setAttribute('style', 'display: none !important;');
    aiDisplayRock.setAttribute('style', 'display: none !important;');

    matchResult.innerHTML = "DRAW";
    matchResult.style.textShadow = "0 0 5px #5ED974"
    matchResult.style.color = "#5ED974"
    return ;
  }else if (aiRandom == 0) {

    aiDisplayRock.setAttribute('style', 'display: block !important;');
    aiDisplayScissors.setAttribute('style', 'display: none !important;');
    aiDisplayPaper.setAttribute('style', 'display: none !important;');

    matchResult.innerHTML = "YOU LOSE";
    matchResult.style.textShadow = "0 0 5px #f04343"
    matchResult.style.color = "#f04343"
    aiScoreValue++;
    
    return;
  }else if (aiRandom == 1) {

    aiDisplayPaper.setAttribute('style', 'display: block !important;');
    aiDisplayRock.setAttribute('style', 'display: none !important;');
    aiDisplayScissors.setAttribute('style', 'display: none !important;');

    matchResult.innerHTML = "YOU WIN!";
    matchResult.style.textShadow = "0 0 5px #5549fd"
    matchResult.style.color = "#5549fd"
    userScoreValue++;
    return; 
  } 
}
function reloadPage(){
  location.reload();
}