export function convertToWCType(dic) {
  return Object.keys(dic).map(item => {
    return { value: dic[item], text: item };
  });
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
