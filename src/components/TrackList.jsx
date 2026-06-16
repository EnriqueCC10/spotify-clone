import { PlayIcon, PauseIcon } from './Icons.jsx'
import { tracks, formatTime } from '../data/tracks.js'
import './TrackList.css'

// Lista de canciones tipo tabla. Marca la que está sonando y avisa al padre
// (App) cuál reproducir mediante onPlayTrack.
function TrackList({ onPlayTrack, currentTrack, isPlaying }) {
  return (
    <div className="tracklist">
      <div className="tracklist__head">
        <span className="tracklist__col tracklist__col--index">#</span>
        <span className="tracklist__col">Título</span>
        <span className="tracklist__col tracklist__col--album">Álbum</span>
        <span className="tracklist__col tracklist__col--time">⏱</span>
      </div>

      {tracks.map((track, i) => {
        const isCurrent = currentTrack.id === track.id
        return (
          <div
            key={track.id}
            className={`tracklist__row ${isCurrent ? 'tracklist__row--active' : ''}`}
            onClick={() => onPlayTrack(track)}
          >
            <span className="tracklist__col tracklist__col--index">
              <span className="tracklist__number">{i + 1}</span>
              <span className="tracklist__rowPlay">
                {isCurrent && isPlaying ? <PauseIcon size={16} /> : <PlayIcon size={16} />}
              </span>
            </span>

            <span className="tracklist__col tracklist__titleCell">
              <span className="tracklist__cover" style={{ background: track.cover }} />
              <span className="tracklist__titleText">
                <span className={`tracklist__name ${isCurrent ? 'tracklist__name--active' : ''}`}>
                  {track.title}
                </span>
                <span className="tracklist__artist">{track.artist}</span>
              </span>
            </span>

            <span className="tracklist__col tracklist__col--album">{track.album}</span>
            <span className="tracklist__col tracklist__col--time">{formatTime(track.duration)}</span>
          </div>
        )
      })}
    </div>
  )
}

export default TrackList
