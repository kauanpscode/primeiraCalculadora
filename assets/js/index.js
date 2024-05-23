// function criaCalculadora() {
//   return {
//     display: document.querySelector(".display"),

//     start() {
//       this.buttonClicks();
//       this.pressEnter();
//     },

//     buttonClicks() {
//       document.addEventListener("click", (e) => {
//         const clickEl = e.target;

//         if (clickEl.classList.contains("btnNum")) {
//           this.stopDisplay(clickEl.innerText);
//         }
//         if (clickEl.classList.contains("btnClear")) {
//           this.clearDisplay();
//         }

//         if (clickEl.classList.contains("btnDel")) {
//           this.delNum();
//         }

//         if (clickEl.classList.contains("btnEq")) {
//           this.doCalculate();
//         }
//       });
//     },

//     stopDisplay(valueof) {
//       this.display.value += valueof;
//     },
//     clearDisplay() {
//       this.display.value = "";
//     },
//     delNum() {
//       this.display.value = this.display.value.slice(0, -1);
//     },
//     pressEnter() {
//       document.addEventListener("keypress", (e) => {
//         if (e.key == "Enter") {
//           this.doCalculate();
//           e.preventDefault();
//         }
//       });
//     },
//     doCalculate() {
//       let calculate = this.display.value;
//       try {
//         calculate = eval(calculate);
//         if (!calculate && calculate != "0") {
//           window.alert("Conta inválida.");
//           return;
//         }

//         this.display.value = String(calculate);
//       } catch (e) {
//         window.alert("[Error]");
//       }
//     },
//   };
// }

// const calculadora = criaCalculadora();
// calculadora.start();

function Calculadora() {
  const display = document.querySelector(".display");

  this.addToDisplay = (valueof) => {
    display.value += valueof;
  };

  this.clearButton = (e) => {
    display.value = "";
  };

  this.delButton = (e) => {
    display.value = display.value.slice(0, -1);
  };

  this.buttonEq = (e) => {
    let calculation = display.value;
    try {
      calculation = eval(calculation);
      if (!calculation && calculation != 0) {
      } else {
        display.value = calculation;
      }
    } catch {
      display.value = "";
      alert("erro");
    }
  };

  this.buttonClick = (e) => {
    document.addEventListener("click", (e) => {
      clickedElement = e.target;
      if (clickedElement.classList.contains("btnNum")) {
        this.addToDisplay(clickedElement.innerText);
      }

      if (clickedElement.classList.contains("btnClear")) {
        this.clearButton();
      }

      if (clickedElement.classList.contains("btnDel")) {
        this.delButton();
      }

      if (clickedElement.classList.contains("btnEq")) {
        this.buttonEq();
      }
    });
  };

  this.pressEnter = (e) => {
    document.addEventListener("keydown", (e) => {
      this.buttonEq();
      e.preventDefault();
    });
  };

  this.start = (e) => {
    this.buttonClick();
    this.pressEnter();
  };
}

const calculadora = new Calculadora();
calculadora.start();
