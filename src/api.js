const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const nowPlayingUrl = baseUrl + "movie/now_playing?language=ko-KR";
const upComingUrl = baseUrl + "movie/upcoming?language=ko-KR";
const popularUrl = baseUrl + "movie/popular?language=ko-KR";
const trendDayUrl = baseUrl + `trending/movie/day?language=ko-KR`;
const trendWeekUrl = baseUrl + `trending/movie/week?language=ko-KR`;
const topRatedUrl = baseUrl + `movie/top_rated?language=ko-KR`;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGQxOGFkNWQ4YjYzYjNmYjY0NjY2NWNmODc4ZGQ0OSIsInN1YiI6IjY1NGIzYjM2Mjg2NmZhMDBmZTAxNzNkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D3qxPqwPR55bduPDEpwBBz27tng-T9UsVkFnrF6v6Ag",
  },
};

export const nowPlaying = () => {
  return fetch(nowPlayingUrl, options).then((res) => res.json());
};

export const upComing = () => {
  return fetch(upComingUrl, options).then((res) => res.json());
};

export const popular = () => {
  return fetch(popularUrl, options).then((res) => res.json());
};

export const trendDay = () => {
  return fetch(trendDayUrl, options).then((res) => res.json());
};

export const trendWeek = () => {
  return fetch(trendWeekUrl, options).then((res) => res.json());
};

export const topRated = () => {
  return fetch(topRatedUrl, options).then((res) => res.json());
};

export const videoFile = (videoId) => {
  const videoUrl = baseUrl + `movie/${videoId}/videos?language=ko-KR`;
  return fetch(videoUrl, options).then((res) => res.json());
};

export const discover = (genNum) => {
  const discoveractionUrl =
    baseUrl + `discover/movie?language=ko-KR&with_genres=${genNum}`;
  return fetch(discoveractionUrl, options).then((res) => res.json());
};

export const search = (searchQuery) => {
  const searchUrl =
    baseUrl + `search/movie?&query=${searchQuery}?&language=ko-KR`;

  return fetch(searchUrl, options).then((res) => res.json());
};

export const movieDetail = (id) => {
  const detailUrl = baseUrl + `movie/${id}?language=ko-KR`;
  return fetch(detailUrl, options).then((res) => res.json());
};

export const data = [
  {
    id: 0,
    useremail: "cocha@gmail.com",
    userpassword: "123456789!",
  },
];
