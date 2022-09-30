var sinara = {
  nome: 'Sinara',
  vitorias: 5,
  empates: 5,
  derrotas: 5,
  pontos: 0
}

var claudio = {
  nome: 'Claudio',
  vitorias: 6,
  empates: 5,
  derrotas: 4,
  pontos: 0
}

var dentinho = {
  nome: 'Dentinho',
  vitorias: 4,
  empates: 6,
  derrotas: 5,
  pontos: 0
}

var fuki = {
  nome: 'Fuki',
  vitorias: 1,
  empates: 10,
  derrotas: 4,
  pontos: 0
}


function calcPoints(player) {
  var points = (player.vitorias * 4) + player.empates + player.derrotas

  return points
}


//var resultPoints = calcPoints(claudio)
claudio.pontos = calcPoints(claudio)
dentinho.pontos = calcPoints(dentinho)
fuki.pontos = calcPoints(fuki)
sinara.pontos = calcPoints(sinara)

var players = [sinara, claudio, dentinho, fuki]


//console.log(resultPoints)
console.log(claudio)
console.log(dentinho)

function showPlayers(players) {
  var element = ""
  for (var  i =  0; i < players.length; i++) {
  element += "<tr><td>" + players[i].nome + "</td> "
  element += "<td>" + players[i].vitorias + "</td>"
  element += "<td>" + players[i].empates + "</td>"
  element += "<td>" + players[i].derrotas + "</td>"
  element += "<td>" + players[i].pontos + "</td>"
  element += "<td><button onclick='addWin("+ i + ")'>Vitória</button></td>"
  element += "<td><button onclick='addDraw(" + i + ")'>Emapte</button></td>"
  element += "<td><button onclick='addLose(" + i + ")'>Derrota</button></td>"

  }
  var tablePlayers = document.getElementById("playerTable")
  tablePlayers.innerHTML = element
}

showPlayers(players)

function addWin(i){
  var player = players[i]
  player.vitorias++
  player.pontos = calcPoints(player)

  showPlayers(players)
}

function addDraw(i) {
  var player = players[i]
  player.empates++
  player.pontos = calcPoints(player)
  showPlayers(players)
}

function addLose (i) {
  var player = players[i]
  player.derrotas++
  showPlayers(players)
}

var Trophy = "🏆"



//