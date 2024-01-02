class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getPG() {
    if (this.rating === "PG") {
      return this;
    } else {
      return null;
    }
  }
}

let casinoRoyale = new Movie("Casino Royale", "Eon", "PG-13");

let moviesArray = [
  new Movie("Movie 1", "Studio A", "PG"),
  new Movie("Movie 2", "Studio B", "R"),
  casinoRoyale,
];

let pgMovies = [];
for (let movie of moviesArray) {
  let pgMovie = movie.getPG();
  if (pgMovie != null) {
    pgMovies.push(pgMovie);
  }
}

console.log(pgMovies);