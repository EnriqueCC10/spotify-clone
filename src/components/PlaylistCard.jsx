import { PlayIcon } from './Icons.jsx'
import './PlaylistCard.css'


function PlaylistCard({ title, subtitle, cover, onPlay }) {
  return (
    <article className="card">
      <div className="card__coverWrap">
        <span className="card__cover" style={{ background: cover }} />
        <button className="card__play" onClick={onPlay} aria-label={`Reproducir ${title}`}>
          <PlayIcon size={22} />
        </button>
      </div>
      <h3 className="card__title">{title}</h3>
      {subtitle && <p className="card__subtitle">{subtitle}</p>}
    </article>
  )
}

export default PlaylistCard
