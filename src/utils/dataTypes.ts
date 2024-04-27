export type RootObject = {
	docs: RootObjectDocs[];
	total: number;
	limit: number;
	page: number;
	pages: number;
}
export type RootObjectDocsNames = {
	name: string;
	language: string;
	type: string;
}
export type RootObjectDocsRating = {
	kp: number;
	imdb: number;
	filmCritics: number;
	russianFilmCritics: number;
	await?: any;
}
export type RootObjectDocsVotes = {
	kp: number;
	imdb: number;
	filmCritics: number;
	russianFilmCritics: number;
	await: number;
}
export type RootObjectDocsPoster = {
	url: string;
	previewUrl: string;
}
export type RootObjectDocsBackdrop = {
	url?: any;
	previewUrl?: any;
}
export type RootObjectDocsGenres = {
	name: string;
}
export type RootObjectDocsCountries = {
	name: string;
}
export type RootObjectDocsReleaseYears = {
	start: number;
	end: number;
}
export type RootObjectDocsLogo = {
	url: string;
}
export type RootObjectDocs = {
	id: number;
	name: string;
	alternativeName?: any;
	names: RootObjectDocsNames[];
	type: string;
	typeNumber: number;
	year: number;
	description: string;
	shortDescription?: any;
	status: string;
	rating: RootObjectDocsRating;
	votes: RootObjectDocsVotes;
	movieLength?: any;
	ratingMpaa?: any;
	ageRating: number;
	poster: RootObjectDocsPoster;
	backdrop: RootObjectDocsBackdrop;
	genres: RootObjectDocsGenres[];
	countries: RootObjectDocsCountries[];
	ticketsOnSale: boolean;
	releaseYears: RootObjectDocsReleaseYears[];
	top10?: any;
	top250?: any;
	isSeries: boolean;
	seriesLength: number;
	totalSeriesLength?: any;
	logo: RootObjectDocsLogo;
	enName: string;
}