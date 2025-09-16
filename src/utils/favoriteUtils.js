export const getFavorites = () => {
  const stored = localStorage.getItem("favorites");
  return stored ? JSON.parse(stored) : [];
};

export const toggleFavorite = (song) => {
  const current = getFavorites();
  const exists = current.find((s) => s.id === song.id);
  let updated;

  if (exists) {
    updated = current.filter((s) => s.id !== song.id);
  } else {
    updated = [...current, song];
  }

  localStorage.setItem("favorites", JSON.stringify(updated));
  return updated;
};

export const isFavorite = (songId) => {
  return getFavorites().some((s) => s.id === songId);
};
