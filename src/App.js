import {Component} from 'react'

import MovieCard from './components/MovieCard'
import './App.css'

const moviesData = [
  {
    Title: 'The Land Girls',
    ReleaseDate: 'Jun 12 1998',
    IMDBRating: 6.1,
    IMDBVotes: 1071,
  },
  {
    Title: 'First Love, Last Rites',
    ReleaseDate: 'Aug 07 1998',
    IMDBRating: 6.9,
    IMDBVotes: 207,
  },
  {
    Title: 'I Married a Strange Person',
    ReleaseDate: 'Aug 28 1998',
    IMDBRating: 6.8,
    IMDBVotes: 865,
  },
  {
    Title: "Let's Talk About Sex",
    ReleaseDate: 'Sep 11 1998',
    IMDBRating: null,
    IMDBVotes: null,
  },
  {
    Title: 'Slam',
    ReleaseDate: 'Oct 09 1998',
    IMDBRating: 3.4,
    IMDBVotes: 165,
  },
  {
    Title: 'Mississippi Mermaid',
    ReleaseDate: 'Jan 15 1999',
    IMDBRating: null,
    IMDBVotes: null,
  },
  {
    Title: 'Following',
    ReleaseDate: 'Apr 04 1999',
    IMDBRating: 7.7,
    IMDBVotes: 15133,
  },
  {
    Title: 'Foolish',
    ReleaseDate: 'Apr 09 1999',
    IMDBRating: 3.8,
    IMDBVotes: 353,
  },
  {
    Title: 'Pirates',
    ReleaseDate: 'Jul 01 1986',
    IMDBRating: 5.8,
    IMDBVotes: 3275,
  },
  {
    Title: 'Duel in the Sun',
    ReleaseDate: 'Dec 31 2046',
    IMDBRating: 7,
    IMDBVotes: 2906,
  },
  {
    Title: 'Tom Jones',
    ReleaseDate: 'Oct 07 1963',
    IMDBRating: 7,
    IMDBVotes: 4035,
  },
  {
    Title: 'Oliver!',
    ReleaseDate: 'Dec 11 1968',
    IMDBRating: 7.5,
    IMDBVotes: 9111,
  },
  {
    Title: 'To Kill A Mockingbird',
    ReleaseDate: 'Dec 25 1962',
    IMDBRating: 8.4,
    IMDBVotes: 82786,
  },
  {
    Title: 'Tora, Tora, Tora',
    ReleaseDate: 'Sep 23 1970',
    IMDBRating: null,
    IMDBVotes: null,
  },
  {
    Title: 'Hollywood Shuffle',
    ReleaseDate: 'Mar 01 1987',
    IMDBRating: 6.8,
    IMDBVotes: 1532,
  },
  {
    Title: 'Over the Hill to the Poorhouse',
    ReleaseDate: 'Sep 17 2020',
    IMDBRating: null,
    IMDBVotes: null,
  },
  {
    Title: 'Wilson',
    ReleaseDate: 'Aug 01 2044',
    IMDBRating: 7,
    IMDBVotes: 451,
  },
  {
    Title: 'Darling Lili',
    ReleaseDate: 'Jan 01 1970',
    IMDBRating: 6.1,
    IMDBVotes: 858,
  },
  {
    Title: "Alexander's Ragtime Band",
    ReleaseDate: 'Dec 31 1937',
    IMDBRating: null,
    IMDBVotes: null,
  },
  {
    Title: 'Alive',
    ReleaseDate: 'Jan 15 1993',
    IMDBRating: 3.2,
    IMDBVotes: 124,
  },
  {
    Title: 'Amen',
    ReleaseDate: 'Jan 24 2003',
    IMDBRating: 7.4,
    IMDBVotes: 5416,
  },
  {
    Title: 'American Graffiti',
    'US Gross': 115000000,
    'Worldwide Gross': 140000000,
    'US DVD Sales': null,
    'Production Budget': 777000,
    'Release Date': 'Aug 11 1973',
    'MPAA Rating': null,
    'Running Time min': null,
    Distributor: 'Universal',
    Source: 'Original Screenplay',
    'Major Genre': 'Comedy',
    'Creative Type': null,
    Director: 'George Lucas',
    'Rotten Tomatoes Rating': 97,
    'IMDB Rating': 7.6,
    'IMDB Votes': 30952,
  },
]

class App extends Component {
  render() {
    return (
      <ul className="App">
        {moviesData.map(eachMovie => (
          <MovieCard cardData={eachMovie} />
        ))}
      </ul>
    )
  }
}

export default App
