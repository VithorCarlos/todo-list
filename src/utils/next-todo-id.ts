export function nextId(items: Record<"id", number>[]) {
  if (items) {
    const maxId = items.reduce((maxId, item) => Math.max(item.id, maxId), -1);
    return maxId + 1;
  }
  return 0;
}
