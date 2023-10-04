const ALMOSSAR_TIMES = {
  PREPARING: 10,
  SERVING: 11,
  ENDING: 13,
  ENDED: 14,
  NOTIME: 16
};

const statusTexts = [
  {
    key: "PREPARING",
    texts: [
      "Enquanto você vê se o al-mosso liberou, por que não já cozinhar? 🍽️👨‍🍳",
      "O al-mosso está esquentando, calmaê! 🍲🔥",
      "Al-mosso quase liberado, cozinhando ainda 🍽️👨‍🍳",
    ],
  },
  {
    key: "SERVING",
    texts: [
      "Al-mosso is on the table my friend! 🍴🥘",
      "Agora jah pod al-mossar! 🍽️🚀",
      "Corre, que o al-mosso liberou! 🏃‍♂️🍛",
    ],
  },
  {
    key: "ENDING",
    texts: [
      "Ainda dá pra al-mossar, mas vá rápido! 🍽️🚨",
      "Última chamada pro al-mosso! 📢🍛",
      "Pega logo seu al-mosso antes que suma! 🍛🏃‍♀️",
    ],
  },
  {
    key: "ENDED",
    texts: [
      "Vacilou mamou. Já acabou o al-mosso. 😕🕒",
      "A cozinha fechou para al-mossos, volte amanhã! 🍔🌙",
      "O al-mosso acabou, hora de pensar em jan-tah? 🌆",
    ],
  },
  {
    key: "NOTIME",
    texts: [
      "Já era, meu chapa! Vendo se dá pra al-mossar a essa hora? Que vergonha. 😤",
      "Preciso te falar que acho meio estranho você entrar no site a essa hora pra ver se pode al-mossar? Doido. 🤔",
    ]
  },
];

const getRandomText = (texts: any) => {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
};

export const getStatusText = (hours: number, minutes: number) => {

  for (const status of statusTexts) {
    const { key, texts } = status;

    switch (key) {
      case "PREPARING":
        if (hours === ALMOSSAR_TIMES[key] || (hours === 11 && minutes <= 30)) {
          return getRandomText(texts);
        }
        break;
      case "SERVING":
        if (
          (hours === ALMOSSAR_TIMES[key] && minutes >= 30) ||
          hours === 12
        ) {
          return getRandomText(texts);
        }
        break;
      case "ENDING":
        if (hours >= ALMOSSAR_TIMES[key] && hours <= 14) {
          return getRandomText(texts);
        }
        break;
      case "ENDED":
        if (hours >= ALMOSSAR_TIMES[key] && hours <= 16) {
          return getRandomText(texts);
        }
        break;
      case "NOTIME":
        if (hours > ALMOSSAR_TIMES[key]) {
          return getRandomText(texts);
        }
        break;
    }
  }

  return undefined;
};