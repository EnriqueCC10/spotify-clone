import PlaylistCard from './PlaylistCard.jsx'
import TrackList from './TrackList.jsx'
import { PlayIcon } from './Icons.jsx'
import { playlists, quickPicks, tracks } from '../data/tracks.js'
import './MainContent.css'

// Saludo dinámico según la hora del día.
function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Buenos días'
  if (h < 19) return 'Buenas tardes'
  return 'Buenas noches'
}

function MainContent({ onPlayTrack, currentTrack, isPlaying }) {
  return (
    <main className="main">
      {/* Barra superior con el avatar */}
      <header className="main__topbar">
        <div className="main__nav">
          <button className="main__round" aria-label="Atrás">‹</button>
          <button className="main__round" aria-label="Adelante">›</button>
        </div>
        <button className="main__profile">
          <span className="main__avatar">U</span>
          <span>Usuario</span>
        </button>
      </header>

      <div className="main__content">
        <h1 className="main__greeting">{getGreeting()}</h1>

        {/* Atajos rápidos en grilla */}
        <section className="main__quick">
          {quickPicks.map((item) => (
            <button
              key={item.id}
              className="quick"
              onClick={() => onPlayTrack(tracks[0])}
            >
              <span className="quick__cover" style={{ background: item.cover }} />
              <span className="quick__title">{item.title}</span>
              <span className="quick__play">
                <PlayIcon size={20} />
              </span>
            </button>
          ))}
        </section>

        {/* Sección de tarjetas */}
        <section className="main__section">
          <div className="main__sectionHeader">
            <h2 className="main__sectionTitle">Hecho para ti</h2>
            <button className="main__showAll">Mostrar todo</button>
          </div>
          <div className="main__cards">
            {playlists.map((pl) => (
              <PlaylistCard
                key={pl.id}
                title={pl.title}
                subtitle={pl.subtitle}
                cover={pl.cover}
                onPlay={() => onPlayTrack(tracks[0])}
              />
            ))}
          </div>
        </section>

        {/* Lista de canciones populares */}
        <section className="main__section">
          <div className="main__sectionHeader">
            <h2 className="main__sectionTitle">Canciones populares</h2>
          </div>
          <TrackList
            onPlayTrack={onPlayTrack}
            currentTrack={currentTrack}
            isPlaying={isPlaying}
          />
        </section>
      </div>
    </main>
  )
}

export default MainContent
