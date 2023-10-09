/*const questions = [
  {
    letter: "a",
    answer: "abducir",
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Coders' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
];
const askQuestions = () => {
  const accIncorrect = [];
  const accCorrect = [];
  const accPasapalabra = [];
  const userName = prompt(
    "Bienvenido a 🌐Pasapalabra🌐! introduzca su nombre: "
  );

  for (let i = 0; i < questions.length; i++) {
    let question = prompt(questions[i].question + ". Introduce la respuesta: ");

    if (question === null || question.toLowerCase() === "end") {
      alert("Adios");
      break;
    }
    question = question.toLowerCase();
    if (question === questions[i].answer) {
      alert("Correcto!");
      accCorrect.push(questions[i].answer);
      //console.log(accCorrect);
    } else if (question === "pasapalabra") {
      accPasapalabra.push(questions[i]);
      //console.log(accPasapalabra);
      questions[i].question;
    } else {
      alert("Incorrecto!");
      accIncorrect.push(questions[i].answer);
      //console.log(accIncorrect);
    }
  }
  for (let j = 0; j < accPasapalabra.length; j++) {
    let question = prompt(
      accPasapalabra[j].question + ". Introduce la respuesta: "
    );
    question = question.toLowerCase();
    if (question === accPasapalabra[j].answer) {
      alert("Correcto!");
      accCorrect.push(accPasapalabra[j].answer);
      //console.log(accCorrect);
    } else if (question === "pasapalabra") {
      accPasapalabra.push(accPasapalabra[j]);
      //console.log(accPasapalabra);
      accPasapalabra[j].question;
    } else {
      alert("Incorrecto!");
      accIncorrect.push(accPasapalabra[j].answer);
      //console.log(accIncorrect);
    }
  }

  alert(
    `Has acertado ${accCorrect.length} y has fallado ${accIncorrect.length}`
  );
  const scoreUser = accCorrect.length - accIncorrect.length;
  const users = { user: userName, score: scoreUser };
  console.log(users);

  const accIncorrect2 = [];
  const accCorrect2 = [];
  const accPasapalabra2 = [];
  const userName2 = prompt(
    "Bienvenido a 🌐Pasapalabra🌐! introduzca su nombre: "
  );
  for (let i = 0; i < questions.length; i++) {
    let question = prompt(questions[i].question + ". Introduce la respuesta: ");

    if (question === null || question.toLowerCase() === "end") {
      alert("Adios");
      break;
    }
    question = question.toLowerCase();
    if (question === questions[i].answer) {
      alert("Correcto!");
      accCorrect2.push(questions[i].answer);
      //console.log(accCorrect);
    } else if (question === "pasapalabra") {
      accPasapalabra2.push(questions[i]);
      //console.log(accPasapalabra);
      questions[i].question;
    } else {
      alert("Incorrecto!");
      accIncorrect2.push(questions[i].answer);
      //console.log(accIncorrect);
    }
  }
  for (let j = 0; j < accPasapalabra.length; j++) {
    let question = prompt(
      accPasapalabra2[j].question + ". Introduce la respuesta: "
    );
    question = question.toLowerCase();
    if (question === accPasapalabra2[j].answer) {
      alert("Correcto!");
      accCorrect2.push(accPasapalabra2[j].answer);
      //console.log(accCorrect);
    } else if (question === "pasapalabra") {
      accPasapalabra2.push(accPasapalabra2[j]);
      //console.log(accPasapalabra);
      accPasapalabra2[j].question;
    } else {
      alert("Incorrecto!");
      accIncorrect2.push(accPasapalabra2[j].answer);
      //console.log(accIncorrect);
    }
  }
  alert(
    `Has acertado ${accCorrect2.length} y has fallado ${accIncorrect2.length}`
  );
  const scoreUser2 = accCorrect2.length - accIncorrect2.length;
  const users2 = { user: userName2, score: scoreUser2 };
  console.log(users2);
  alert(
    `La puntuación de ${users.user} es de ${users.score} la puntuacion de ${users2.user} es de ${users2.score}`
  );
  if (users.score < users2.score) {
    alert(`Ha ganado ${users2.user}`);
  }
  if (users2.score < users.score) {
    alert(`Ha ganado ${users.user}`);
  }
};

askQuestions();*/

const appPasaPalabra = () => {
  const starElements = document.querySelector(".star-button");
  starElements.addEventListener("click", startGame);

  const sendAnswerElement = document.querySelector("form");
  sendAnswerElement.addEventListener("submit", sendAnswerElement);

  const pasapalabraElement = document.querySelector("pasapalabra-button");
  pasapalabraElement.addEventListener("click", passWord);
  pasapalabraElement.setAttribute("disabled", "true");
};
