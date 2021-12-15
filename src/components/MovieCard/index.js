import './index.css'

const MoviesCard = props => {
  const {cardData} = props
  const {Title, ReleaseDate, IMDBRating, IMDBVotes} = cardData
  return (
    <li className="movie-card">
      <h1 className="title">Name: {Title}</h1>
      <p className="content">Release Date: {ReleaseDate}</p>
      <p className="content">Rating: {IMDBRating}</p>
      <p className="content">Votes: {IMDBVotes} </p>
    </li>
  )
}

export default MoviesCard
