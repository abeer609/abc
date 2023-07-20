// button reference here
const cssBtn = document.getElementById("CSS");
const click = new Audio("./audio/click.mp3");
// const mainDiv = document.querySelector(".main-div");
// const hideContainer = document.getElementById("hiddenDiv");
// const submitBtn = document.getElementById("submit-button");

cssBtn.addEventListener("click", () => {
  click.play();
  timeZone.style.display = "block";
  mainDiv.style.opacity = "1";
  hideDiv.classList.add("show");
  submitButton.style.display = "block";
  let cssApi = [
    {
      question: "Q1: What does CSS stand for?",
      a: "Creative Style Sheets",
      b: "Computer Style Sheets",
      c: "Cascading Style Sheets",
      d: "Colorful Style Sheets",
      ans: "ans3",
    },

    {
      question:
        "Q2: What is the correct HTML for referring to an external style sheet?",
      a: '<style src="mystyle.css">',
      b: "<stylesheet>mystyle.css</stylesheet>",
      c: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
      d: '<style href="mystyle.css">',
      ans: "ans3",
    },

    {
      question:
        "Q3: Where in an HTML document is the correct place to refer to an external style sheet?",
      a: "In the <body> section",
      b: "At the end of the document",
      c: "In the <head> section",
      d: "Footer",
      ans: "ans3",
    },

    {
      question: "Q4: Which HTML tag is used to define an internal style sheet?",
      a: "<style>",
      b: "<css>",
      c: "<script>",
      d: "<head>",
      ans: "ans1",
    },

    {
      question: "Q5: Which HTML attribute is used to define inline styles?",
      a: "style",
      b: "font",
      c: "styles",
      d: "class",
      ans: "ans1",
    },

    {
      question: "Q6: Which is the correct CSS syntax?",
      a: "body {color: black;}",
      b: "{body;color:black;}",
      c: "{body:color=black;}",
      d: "body:color=black;",
      ans: "ans3",
    },

    {
      question: "Q7: How do you insert a comment in a CSS file?",
      a: "// this is a comment //",
      b: "'this is a comment'",
      c: "/* this is a comment */",
      d: "// this is a comment",
      ans: "ans3",
    },

    {
      question: "Q8: Which property is used to change the background color?",
      a: "color",
      b: "bgcolor",
      c: "background-color",
      d: "background=color",
      ans: "ans3",
    },

    {
      question: "Q9: How do you add a background color for all <h1> elements?",
      a: "h1 {background-color:#FFFFFF;}",
      b: "h1.all {background-color:#FFFFFF;}",
      c: "all.h1 {background-color:#FFFFFF;}",
      d: "h1.all (background-color:#FFFFFF;)",
      ans: "ans1",
    },

    {
      question:
        "Q10: Which CSS property is used to change the text color of an element?",
      a: "text-color",
      b: "fgcolor",
      c: "font-color",
      d: "color",
      ans: "ans4",
    },

    {
      question: "Q11: Which CSS property controls the text size?",
      a: "font-size",
      b: "text-style",
      c: "text-size",
      d: "font-style",
      ans: "ans1",
    },

    {
      question:
        "Q12: What is the correct CSS syntax for making all the <p> elements bold?",
      a: '<p style="text-size:bold;">',
      b: '<p style="font-size:bold;">',
      c: "p {font-weight:bold;}",
      d: "p {text-size:bold;}",
      ans: "ans3",
    },

    {
      question: "Q13: How do you display hyperlinks without an underline?",
      a: "a {text-decoration:none;}",
      b: "a {text-decoration:no-underline;}",
      c: "{underline:none;}",
      d: "a {decoration:no-underline;}",
      ans: "ans1",
    },

    {
      question:
        "Q14: How do you make each word in a text start with a capital letter?",
      a: "text-style:capitalize",
      b: "text-transform:capitalize",
      c: "You can't do that with CSS",
      d: "transform:capitalize",
      ans: "ans2",
    },

    {
      question: "Q15: Which property is used to change the font of an element?",
      a: "font-style",
      b: "font-weight",
      c: "font-family",
      d: "font-size",
      ans: "ans3",
    },

    {
      question: "Q16: How do you make the text bold?",
      a: "font-weight:bold;",
      b: "font:bold;",
      c: "style:bold;",
      d: "style:'bold';",
      ans: "ans1",
    },

    {
      question:
        "Q17: How do you display a border like this: (The top border = 10 pixels The bottom border = 5 pixels The left border = 20 pixels The right border = 1pixel?)",
      a: "border-width:10px 5px 20px 1px;",
      b: "border-width:10px 1px 5px 20px;",
      c: "border-width:10px 20px 5px 1px;",
      d: "border-width:5px 20px 10px 1px;",
      ans: "ans2",
    },

    {
      question:
        "Q18: Which property is used to change the left margin of an element?",
      a: "indent",
      b: "margin-left",
      c: "padding-left",
      d: "margin-right",
      ans: "ans2",
    },

    {
      question:
        "Q19: When using the padding property; are you allowed to use negative values?",
      a: "Yes",
      b: "True",
      c: "No",
      d: "False",
      ans: "ans3",
    },

    {
      question:
        "Q20: How do you make a list that lists its items with squares?",
      a: "list-style-type: square;",
      b: "list-type: square;",
      c: "list: square;",
      d: "list-style-type: 'square';",
      ans: "ans1",
    },

    {
      question: "Q21: How do you select an element with id 'demo'?",
      a: "demo",
      b: "#demo",
      c: ".demo",
      d: "*demo",
      ans: "ans2",
    },

    {
      question: "Q22: How do you select elements with class name 'test'?",
      a: "test",
      b: "#test",
      c: ".test",
      d: "*test",
      ans: "ans3",
    },

    {
      question: "Q23: How do you select all p elements inside a div element?",
      a: "div.p",
      b: "div + p",
      c: "div p",
      d: "div,,p",
      ans: "ans3",
    },

    {
      question: "Q24: How do you group selectors?",
      a: "Separate each selector with a space",
      b: "Separate each selector with a plus sign",
      c: "Separate each selector with a comma",
      d: "Separate each selector with a new line",
      ans: "ans3",
    },

    {
      question: "Q25: What is the default value of the position property?",
      a: "static",
      b: "relative",
      c: "absolute",
      d: "fixed",
      ans: "ans1",
    },
  ];

  createQuiz(cssApi);
});
