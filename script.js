"use strict";
//js exercise
// const sentence = "the quick brown fox jumps over the lazy dog";
// const reversSentence = sentence.split("").reverse().join("");
// console.log(reversSentence);

/**
 *
 *
 *
 *
 */
const recommendMovies1 = ["inception", "the matrix", "interstellar", "memento"];
const recommendMovies2 = ["the matrix", "avatar", "inception", "titanic"];
const merge = recommendMovies1.concat(recommendMovies2);
const deleteMovie = merge.filter(
  (movie, index) => merge.indexOf(movie) === index
);
const reverse = deleteMovie.reverse().join("|");
// const result=reverse.
console.log(reverse);
