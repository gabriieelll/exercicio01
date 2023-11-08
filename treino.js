
const nome = "Gabriel";

function getEventoAleatorio() {
  const numeroAleatorio = Math.floor(Math.random() * 3); 

  if (numeroAleatorio === 0) {
    return "Maratona";
  } else if (numeroAleatorio === 1) {
    return "Triathlon";
  } else {
    return "Pentathlon";
  }
}


function getDiasTreino(evento) {
  if (evento === "Maratona") {
    return 50;
  } else if (evento === "Triathlon") {
    return 100;
  } else {
    return 200;
  }
}

function logEvento(nome, evento) {
  console.log(`${nome} vai participar do evento de ${evento}`);
}

function logTempo(nome, dias) {
  console.log(`${nome} vai treinar por ${dias} dias`);
}


const seuEvento = getEventoAleatorio();
const diasTreino = getDiasTreino(seuEvento);

logEvento(nome, seuEvento);
logTempo(nome, diasTreino);