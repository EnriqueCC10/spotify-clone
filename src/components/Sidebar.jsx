import { SpotifyLogo, HomeIcon, SearchIcon, LibraryIcon, PlusIcon, HeartIcon } from './Icons.jsx'
import { playlists } from '../data/tracks.js'
import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Bloque superior: logo + navegación principal */}
      <nav className="sidebar__top">
        <div className="sidebar__logo">
          <SpotifyLogo size={36} />
          <span>Spotify</span>
        </div>

        <ul className="sidebar__nav">
          <li className="sidebar__navItem sidebar__navItem--active">
            <HomeIcon size={22} />
            <span>Inicio</span>
          </li>
          <li className="sidebar__navItem">
            <SearchIcon size={22} />
            <span>Buscar</span>
          </li>
        </ul>
      </nav>

      {/* Bloque de la biblioteca con las playlists */}
      <div className="sidebar__library">
        <div className="sidebar__libraryHeader">
          <div className="sidebar__libraryTitle">
            <LibraryIcon size={22} />
            <span>Tu biblioteca</span>
          </div>
          <button className="sidebar__addBtn" aria-label="Crear playlist">
            <PlusIcon size={18} />
          </button>
        </div>

        <ul className="sidebar__playlists">
          <li className="sidebar__playlist sidebar__playlist--special">
            <span className="sidebar__likedCover">
              <HeartIcon size={20} />
            </span>
            <div className="sidebar__playlistInfo">
              <p className="sidebar__playlistName">Tus me gusta</p>
              <p className="sidebar__playlistMeta">Playlist · 8 canciones</p>
            </div>
          </li>

          {playlists.map((pl) => (
            <li key={pl.id} className="sidebar__playlist">
              <span className="sidebar__cover" style={{ background: pl.cover }} />
              <div className="sidebar__playlistInfo">
                <p className="sidebar__playlistName">{pl.title}</p>
                <p className="sidebar__playlistMeta">Playlist · {pl.subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
