export function convertToWCType(dic) {
  return Object.keys(dic).map(item => {
    return { value: dic[item], text: item };
  });
}
