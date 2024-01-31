export const genres = ["chinese", "fantasy", "japanese"] as const;
type Genre = typeof genres[number];

export default Genre;
