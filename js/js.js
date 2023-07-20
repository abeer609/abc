// button reference here
const jsButton = document.getElementById("JAVASCRIPT");

const mainDiv = document.querySelector(".main-div");
const hideDiv = document.getElementById("hiddenDiv");
const submitButton = document.getElementById("submit-button");
const timeZone = document.querySelector(".time");
const sound = new Audio("./audio/click.mp3");

jsButton.addEventListener("click", () => {
  sound.play();
  timeZone.style.display = "block";
  mainDiv.style.opacity = "1";
  hideDiv.classList.add("show");
  submitButton.style.display = "block";
  let jsApi = [
    {
      question: "Q1: Inside which HTML element do we put the JavaScript?",
      a: "<javascript>",
      b: "<scripting>",
      c: "<script>",
      d: "<js>",
      ans: "ans3",
    },

    {
      question:
        'Q2: What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>',
      a: 'document.getElement("p").innerHTML = "Hello World!";',
      b: '#demo.innerHTML = "Hello World!";',
      c: 'document.getElementById("demo").innerHTML = "Hello World!";',
      d: 'document.getElementByName("p").innerHTML = "Hello World!";',
      ans: "ans3",
    },

    {
      question: "Q3: Where is the correct place to insert a JavaScript?",
      a: "The <body> section",
      b: "Both the <head> section and the <body> section are correct",
      c: "The <head> section",
      d: "after <html> tag",
      ans: "ans2",
    },

    {
      question:
        'Q4: What is the correct syntax for referring to an external script called "xxx.js"?',
      a: '<script src="xxx.js">',
      b: '<script name="xxx.js">',
      c: '<script href="xxx.js">',
      d: '<script scr:"xxx.js">',
      ans: "ans1",
    },

    {
      question:
        "Q5: The external JavaScript file must contain the <script> tag.",
      a: "True",
      b: "No",
      c: "False",
      d: "Yes",
      ans: "ans3",
    },

    {
      question: 'Q6: How do you write "Hello World" in an alert box?',
      a: 'alert("Hello World");',
      b: 'msgBox("Hello World");',
      c: 'msg("Hello World");',
      d: 'alertBox("Hello World");',
      ans: "ans1",
    },

    {
      question: "Q7: How do you create a function in JavaScript?",
      a: "function:myFunction()",
      b: "function myFunction()",
      c: "function = myFunction()",
      d: 'function = "myFunction()"',
      ans: "ans2",
    },

    {
      question: 'Q8: How do you call a function named "myFunction"?',
      a: "call function myFunction()",
      b: "myFunction()",
      c: "call myFunction()",
      d: "calling myFunction()",
      ans: "ans2",
    },

    {
      question: "Q9: How to write an IF statement in JavaScript?",
      a: "if i = 5 then",
      b: "if i = 5",
      c: "if i == 5 then",
      d: "if (i == 5)",
      ans: "ans4",
    },

    {
      question:
        'Q10: How to write an IF statement for executing some code if "i" is NOT equal to 5?',
      a: "if i =! 5 then",
      b: "if i <> 5",
      c: "if (i!= 5)",
      d: "if (i <> 5)",
      ans: "ans3",
    },

    {
      question: "Q11: How does a WHILE loop start?",
      a: "while i = 1 to 10",
      b: "while (i <= 10)",
      c: "while (i <= 10; i++)",
      d: "while (i = 10)",
      ans: "ans2",
    },

    {
      question: "Q12: How does a FOR loop start?",
      a: "for i = 1 to 5Header",
      b: "for (i = 0; i <= 5)",
      c: "for (i <= 5; i++)",
      d: "for (i = 0; i <= 5; i++)",
      ans: "ans4",
    },

    {
      question: "Q13: How can you add a comment in a JavaScript?",
      a: "<!--This is a comment-->",
      b: "//This is a comment",
      c: "'This is a comment'",
      d: "<This is a comment>",
      ans: "ans2",
    },

    {
      question: "Q14: How to insert a comment that has more than one line?",
      a: "//This comment has more than one line//",
      b: "/*This comment has more than one line*/",
      c: "<!--This comment has more than one line-->",
      d: "<This comment has more than one line>",
      ans: "ans2",
    },

    {
      question: "Q15: What is the correct way to write a JavaScript array?",
      a: 'var colors = (1:"red", 2:"green", 3:"blue")',
      b: 'var colors = "red", "green", "blue"',
      c: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
      d: 'var colors = ["red", "green", "blue"]',
      ans: "ans4",
    },

    {
      question:
        "Q16: How do you round the number 7.25, to the nearest integer?",
      a: "Math.round(7.25)",
      b: "round(7.25)",
      c: "rnd(7.25)",
      d: "Math.rnd(7.25)",
      ans: "ans1",
    },

    {
      question:
        "Q17: How do you find the number with the highest value of x and y?",
      a: "Math.max(x, y)",
      b: "top(x, y)",
      c: "Math.ceil(x, y)",
      d: "ceil(x, y)",
      ans: "ans1",
    },

    {
      question:
        'Q18: What is the correct JavaScript syntax for opening a new window called "w2" ?',
      a: 'w2 = window.new("http://www.w3schools.com");',
      b: 'w2 = window.open("http://www.w3schools.com");',
      c: 'w2 = window.Open("http://www.w3schools.com");',
      d: 'w2 = window.New("http://www.w3schools.com");',
      ans: "ans2",
    },

    {
      question: "Q19: JavaScript is the same as Java.",
      a: "True",
      b: "False",
      c: "No",
      d: "absolutely Not",
      ans: "ans2",
    },

    {
      question: "Q20: How can you detect the client's browser name?",
      a: "browser.name",
      b: "navigator.appName",
      c: "client.navName",
      d: "client.browser",
      ans: "ans2",
    },

    {
      question:
        "Q21: Which event occurs when the user clicks on an HTML element?",
      a: "onmouseover",
      b: "onclick",
      c: "onchange",
      d: "onmouseclick",
      ans: "ans2",
    },

    {
      question: "Q22: How do you declare a JavaScript variable?",
      a: "var carName;",
      b: "carName;",
      c: "v carName;",
      d: "Variable carName;",
      ans: "ans1",
    },

    {
      question: "Q23: Which operator is used to assign a value to a variable?",
      a: "*",
      b: "+",
      c: "=",
      d: "-",
      ans: "ans3",
    },

    {
      question: "Q24: What will the following code return: Boolean(10 > 9)",
      a: "NaN",
      b: "True",
      c: "null",
      d: "False",
      ans: "ans2",
    },

    {
      question: "Q25: Is JavaScript case-sensitive?",
      a: "Yes",
      b: "Not",
      c: "absolutely not",
      d: "yah",
      ans: "ans1",
    },
  ];

  createQuiz(jsApi);
});
