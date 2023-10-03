const ALMOSSAR_TIMES = {
  PREPARING: 10,
  SERVING: 11,
  ENDING: 13,
  ENDED: 14,
};

export const getStatusText = (hours: number, minutes: number): string => {
  console.log(hours, minutes)
  if (hours === ALMOSSAR_TIMES.PREPARING) {
    return "tá preparando ainda, calmai 👨‍🍳👨‍🍳👨‍🍳";
  }
  if (hours === ALMOSSAR_TIMES.SERVING && minutes >= 30 || hours === 12) {
    return "agora jah pod al-mossar";
  }
  if (hours >= ALMOSSAR_TIMES.ENDING) {
    return "ainda dá pra al-mossar, mas tá acabando";
  }
  if (hours >= ALMOSSAR_TIMES.ENDED) {
    return "vacilou amigo, acabou o al-mosso, volte amanhã";
  }
  if (hours > 16) {
    return `já acabou o al-mosso doidão, tá querendo al-mossar às ${hours}h ? 😤😠`;
  }
};