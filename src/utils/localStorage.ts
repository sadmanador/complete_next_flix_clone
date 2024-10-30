import { MediaItem } from "@/types";

export default function handleAddToLocalStorage(item: MediaItem) {
  const existingItems: MediaItem[] = JSON.parse(
    localStorage.getItem("favoriteItems") || "[]"
  );

  const isAlreadyInList = existingItems.some(
    (existingItem) =>
      existingItem.id === item.id && existingItem.type === item.type
  );

  if (!isAlreadyInList) {
    existingItems.push(item);
    localStorage.setItem("favoriteItems", JSON.stringify(existingItems));
  }
}

export function handleRemoveFromLocalStorage(item: MediaItem) {
  const existingItems: MediaItem[] = JSON.parse(
    localStorage.getItem("favoriteItems") || "[]"
  );

  const updatedItems = existingItems.filter(
    (existingItem) =>
      existingItem.id !== item.id || existingItem.type !== item.type
  );

  localStorage.setItem("favoriteItems", JSON.stringify(updatedItems));
}

export function isItemInLocalStorage(id: number, type: string): boolean {
  const existingItems: MediaItem[] = JSON.parse(
    localStorage.getItem("favoriteItems") || "[]"
  );

  return existingItems.some(
    (existingItem) => existingItem.id === id && existingItem.type === type
  );
}
