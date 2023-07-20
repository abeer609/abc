const createQuiz = (apiObjectData) => {
  // Global variables
  let questionCount = 0;
  let isClock = true;
  let score = 0;
  let m = 0;
  let s = 0;

  // All reference here
  const question = document.getElementById("question");
  const options1 = document.getElementById("option1");
  const options2 = document.getElementById("option2");
  const options3 = document.getElementById("option3");
  const options4 = document.getElementById("option4");
  const button = document.getElementById("submit-button");
  const inputs = document.querySelectorAll(".answer");
  const hiddenDiv = document.getElementById("hiddenDiv");
  const timeZoneDiv = document.querySelector(".time");
  const clickSound = new Audio("./audio/click.mp3");
  const winSound = new Audio("./audio/win.mp3");
  const lostSound = new Audio("./audio/lost.mp3");
  const scoreWinSound = new Audio("./audio/scoreWin.mp3");

  // adding question and answer form api
  const addQueFormApi = () => {
    let apiQuestion = apiObjectData[questionCount];
    question.innerText = apiQuestion.question;
    options1.innerText = apiQuestion.a;
    options2.innerText = apiQuestion.b;
    options3.innerText = apiQuestion.c;
    options4.innerText = apiQuestion.d;
  };

  addQueFormApi();

  // creating a function for time running
  setInterval(() => {
    if (s >= 60) {
      s = 0;
    }
    s++;

    if (s >= 60) {
      m = m + 1;
    }
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
  }, 1000);

  // Checking answer form question
  const getCheckAnswer = () => {
    let answer;
    inputs.forEach((element) => {
      if (element.checked) {
        answer = element.id;
      }
    });
    return answer;
  };

  // creating deselectElement function
  const deselectElement = () => {
    inputs.forEach((element) => {
      element.checked = false;
    });
  };

  // creating The main logic
  const getAllLogic = () => {
    let checkedAnswer = getCheckAnswer();

    if (checkedAnswer === apiObjectData[questionCount].ans) {
      winSound.play();
      score++;
    } else {
      lostSound.play();
    }
    questionCount++;

    deselectElement();

    if (questionCount < apiObjectData.length) {
      addQueFormApi();
    } else {
      scoreWinSound.play();
      hiddenDiv.innerHTML = `
                <h3> Your Score ${score}/${apiObjectData.length} </h3>
                <button class= "btn"> Play Again </button>
            `;

      // play again button adding event listener
      document.querySelector(".btn").addEventListener("click", () => {
        clickSound.play();
        location.reload();
      });
      hiddenDiv.classList.remove("show");

      button.style.display = "none";
      // timeZoneDiv.style.display = "none";
      document.querySelector(".resultTime").style.display = "block";
      document.getElementById("rminute").innerText = m;
      document.getElementById("rsecond").innerText = s;
    }
  };

  button.addEventListener("click", () => {
    clickSound.play();
    getAllLogic();
  });
};
