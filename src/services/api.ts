import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
