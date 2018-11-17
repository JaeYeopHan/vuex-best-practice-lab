export function convertToMapGettersTarget(getters) {
  return Object.keys(getters).reduce((obj, key) => {
    obj[key] = key;

    return obj;
  }, {});
}
