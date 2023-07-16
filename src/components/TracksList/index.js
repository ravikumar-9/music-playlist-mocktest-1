import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const TracksList = props => {
  console.log(props)

  const {trackDetails, onDeleteTrack} = props

  const {id, name, imageUrl, genre, duration} = trackDetails

  const deleteTrack = () => {
    onDeleteTrack(id)
  }

  return (
    <li className="track-card">
      <div className="image-genre-container">
        <img src={imageUrl} alt="track" className="track-image" />
        <div>
          <p className="track-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-container">
        <p className="duration">{duration}</p>
        <button
          className="delete-button"
          type="button"
          onClick={deleteTrack}
          data-testid="delete"
        >
          <AiOutlineDelete color="white" className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default TracksList
