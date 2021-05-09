import { Movie } from './movie-browse/movie-browse.component'

export const movies: Movie[] = [
  {
    id: 1,
    name: 'Bad Boys',
    rating: 'R',
    runtime: '2hr 5min'
  },
  {
    id: 2,
    name: 'Ice Age',
    rating: 'PG',
    runtime: '1hr 54min'
  },
  {
    id: 3,
    name: 'The Town',
    rating: 'R',
    runtime: '2hr 23min'
  },
  {
    id: 4,
    name: 'Frozen',
    rating: 'G',
    runtime: '2hr 12min'
  },
];

export const lists = [
  {
    id: 1,
    name: 'Want to Watch',
    movies: [3, 2]
  },
  {
    id: 2,
    name: 'Watched - Loved',
    movies: [3]
  },
  {
    id: 3,
    name: 'Watched - Meh',
    movies: [4]
  },
  {
    id: 4,
    name: 'Watched - Hated',
    movies: []
  },
];