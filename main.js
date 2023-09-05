const lunchVariants = [
  'Jah pode Al mossar?', 'Pod al Mossar?', 'ao mossar?', 'Mossar?'
]

const okAnswers = ['Jah pod', 'Liberado', 'Tá liberado', 'pod Al mossar']
const notOkAnswers = ['Ainda não', 'Não pode', 'Espere mais', 'Não pod Al mossar']

//-----------Var Inits--------------
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cx = ctx.canvas.width / 2;
cy = ctx.canvas.height / 2;

let confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
{ front: 'red', back: 'darkred' },
{ front: 'green', back: 'darkgreen' },
{ front: 'blue', back: 'darkblue' },
{ front: 'yellow', back: 'darkyellow' },
{ front: 'orange', back: 'darkorange' },
{ front: 'pink', back: 'darkpink' },
{ front: 'purple', back: 'darkpurple' },
{ front: 'turquoise', back: 'darkturquoise' }];


//-----------Functions--------------
resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cx = ctx.canvas.width / 2;
  cy = ctx.canvas.height / 2;
};

randomRange = (min, max) => Math.random() * (max - min) + min;

initConfetti = () => {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      color: colors[Math.floor(randomRange(0, colors.length))],
      dimensions: {
        x: randomRange(10, 20),
        y: randomRange(10, 30) },

      position: {
        x: randomRange(0, canvas.width),
        y: canvas.height - 1 },

      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1 },

      velocity: {
        x: randomRange(-25, 25),
        y: randomRange(0, -50) } });


  }
};

//---------Render-----------
render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((confetto, index) => {
    let width = confetto.dimensions.x * confetto.scale.x;
    let height = confetto.dimensions.y * confetto.scale.y;

    // Move canvas to position and rotate
    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);

    // Apply forces to velocity
    confetto.velocity.x -= confetto.velocity.x * drag;
    confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

    // Set position
    confetto.position.x += confetto.velocity.x;
    confetto.position.y += confetto.velocity.y;

    // Delete confetti when out of frame
    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

    // Loop confetto x position
    if (confetto.position.x > canvas.width) confetto.position.x = 0;
    if (confetto.position.x < 0) confetto.position.x = canvas.width;

    // Spin confetto by scaling y
    confetto.scale.y = Math.cos(confetto.position.y * 0.1);
    ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

    // Draw confetti
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });

  // Fire off another round of confetti
  if (confetti.length <= 10) initConfetti();

  window.requestAnimationFrame(render);
};

//---------Execution--------
initConfetti();
render();

//----------Resize----------
window.addEventListener('resize', function () {
  resizeCanvas();
});

//------------Click------------
window.addEventListener('click', function () {
  initConfetti();
});

const randomIndex = Math.floor(Math.random() * lunchVariants.length);

const randomAnswerIndex = Math.floor(Math.random() * okAnswers.length);
const randomIndexRejectIndex = Math.floor(Math.random() * notOkAnswers.length);

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
} 

const lunchButton = document.getElementById("lunchButton")
lunchButton.textContent = lunchVariants[randomIndex]

const getLunchImgPath = (key) => {
  const options = {
    early: './assets/cooking1.jpg',
    almost: './assets/cooking1.png',
    ready: './assets/ready1.jpg',
    keep_eating: './assets/ready1.jpg',
    finished: './assets/finished1.png',
    not_yet: './assets/notReady1.png'
  }

  return options[key]
}


function resetState() {
  const buttonReset = document.getElementById('resetButton')
  buttonReset.classList.add('hidden')
  const lunchButton = document.getElementById("lunchButton")
  lunchButton.classList.remove('hidden')
  console.log
  lunchButton.textContent = lunchVariants[Math.floor(Math.random() * lunchVariants.length)]
  const divImg = document.getElementById('imgResult')
  divImg.style.display = 'none'
  const canvas = document.getElementById('canvas')
  canvas.classList.add('hidden')
  const textSpam = document.getElementById("textResult")
  textSpam.textContent = ''
}

const getResult = () => {
  const currentHour = new Date().getHours()

  const currentPeriod = (hour) => ({
    early: hour === 10,
    almost: hour === 11,
    ready: hour === 12,
    keep_eating: hour === 13,
    finished: hour => 14 && hour <= 18,
    not_yet: hour >= 18 && hour <= 10
  })

  let imgPath;
  let backgroundColor;
  let text;
  if (currentPeriod(currentHour).early) {
    imgPath = getLunchImgPath('early')
    backgroundColor = 'red'
    text = notOkAnswers[Math.floor(Math.random() * notOkAnswers.length)]
  } else if(currentPeriod(currentHour).almost) {
    imgPath = getLunchImgPath('almost')
    backgroundColor = 'red'
    text = Preparando
  } else if(currentPeriod(currentHour).ready) {
    imgPath = getLunchImgPath('ready')
    backgroundColor = 'green'
    text = okAnswers[Math.floor(Math.random() * okAnswers.length)]
  } else if(currentPeriod(currentHour).keep_eating) {
    imgPath = getLunchImgPath('keep_eating')
    backgroundColor = 'green'
    text = 'Ainda pod'
  } else if(currentPeriod(currentHour).finished) {
    console.log('cai aqui')
    imgPath = getLunchImgPath('finished')
    backgroundColor = 'red'
    text = 'Não, acabou'
  } else {
    imgPath = getLunchImgPath('not_yet')
    backgroundColor = 'red'
    text = notOkAnswers[Math.floor(Math.random() * notOkAnswers.length)]
  }

  return { img: imgPath, backgroundColor, text}
}

const jahPodeAlmossar = async () => {
  
  const button = document.getElementById("lunchButton")
  
  button.classList.add('hidden')
  const spamElement = document.createElement('spam')
  spamElement.classList.add('fade-in', 'spam-load')
  spamElement.textContent = 'Verificando o Al mosso'
  const divLoadDots = document.getElementById('load')
  divLoadDots.style.display = 'block'
  divLoadDots.insertBefore(spamElement, divLoadDots.firstChild)

  await timeout(3000);
  divLoadDots.style.display = 'none'
  
  const divImg = document.getElementById('imgResult')
  divImg.style.display = 'flex'
  divLoadDots.removeChild(spamElement)
  const canvas = document.getElementById('canvas')
  
  const buttonReset = document.getElementById('resetButton')
  const result = getResult()
  if(result.backgroundColor === 'green')
  canvas.classList.remove('hidden')

  divImg.style.backgroundColor = result.backgroundColor
  buttonReset.classList.remove('hidden')
  buttonReset.addEventListener('click', resetState)
  
  const textSpam = document.getElementById("textResult")
  textSpam.textContent = result.text
  const lunchImage = document.getElementById("lunchImg")
  lunchImage.src = result.img
}

lunchButton.addEventListener('click', jahPodeAlmossar);