
let questions = [
  {
    id: 1,
    question: " What does HTML stand for ?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
  {
    id: 2,
    question: "What are the ways to integrate CSS in a web page ?",
    answer: "Above all",
    options: [
      "Inline CSS",
      "Internal CSS",
      "External CSS",
      "Above all"
    ]
  },
  
  {  id: 3,
    question: "In HTML onblur and onfocus are ?",
    answer: "Event attributes",
    options: [
      "Style attributes",
      "Event attributes",
      "HTML elements",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "The Bootstrap grid system is based on how many columns ?",
    answer: "12",
    options: [
      "8",
      "10",
      "6",
      "12"
    ]
  },
  {
    id: 5,
    question: "Which component is used to cycle through elements like a slideshow?",
    answer: "Carousel",
    options: [
      "Slideshow",
      "Scrollspy",
      "Carousel",
      "orbit"
    ]
  },
  {
    id: 6,
    question: "In HTML which attribute is used to specify an input field must be filled out ?",
    answer: "required",
    options: [
      "validate",
      "placeholder",
      "formvalidate",
      "required"
    ]
  },
  {
    id: 7,
    question: "Which button class is used to create a large button ?",
    answer: ".btn-lg",
    options: [
      ".btn-l2",
      ".btn-lg",
      ".btn-l",
      ".btn-large"
    ]
  },
  {
    id: 8,
    question: "Which CSS property is used to change the text color of an element ?",
    answer: "color",
    options: [
      "text-color",
      "color",
      "fgcolor",
      "none of these"
    ]
  },
  {
    id: 9,
    question: "Which CSS property is used to make the text bold ?",
    answer: "font-weight:bold",
    options: [
      "style:bold",
      "font:bold",
      "font-weight:bold",
      "none of these "
    ]
  },
  {
    id: 10,
    question: "Which class provides a responsive fixed width container ?",
    answer: ".container",
    options: [
      ".container",
      ".container-fixed",
      ".container-responsive",
      ".container-fluid"
    ]
  }
];


let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {
   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
