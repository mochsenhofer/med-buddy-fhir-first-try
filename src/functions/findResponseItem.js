export function findResponseItem(linkId, items) {
  for (const item of items) {
    if (item.linkId === linkId) {
      return item;
    }
    if (item.item) {
      const foundItem = findResponseItem(linkId, item.item);
      if (foundItem) {
        return foundItem;
      }
    }
  }
  return null;
}
