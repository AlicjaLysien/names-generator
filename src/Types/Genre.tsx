const genres = ["chinese", "fantasy", "japanese"] as const;
type Genre = typeof genres[number];

export function isGenre(string: string): string is Genre {
	return genres.indexOf(string as Genre) != -1;
}

export default Genre;
