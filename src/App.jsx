import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import MainContent from './components/MainContent.jsx'
import Player from './components/Player.jsx'
import { tracks } from './data/tracks.js'
import './App.css'

function App() {
  // ===== ESTADO PRINCIPAL DE LA APP =====
  // currentTrack: la canción que se está reproduciendo (empieza en la primera)
  // isPlaying: true si está sonando, false si está en pausa
  const [currentTrack, setCurrentTrack] = useState(tracks[0])
  const [isPlaying, setIsPlaying] = useState(false)

  // Al hacer clic en una canción de la lista: la selecciona y la pone a sonar.
  const handlePlayTrack = (track) => {
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  // Botón play/pausa del reproductor: alterna el estado.
  const togglePlay = () => setIsPlaying((prev) => !prev)

  // Cambiar a la canción anterior o siguiente respetando el orden de la lista.
  const playNext = () => {
    const index = tracks.findIndex((t) => t.id === currentTrack.id)
    const next = tracks[(index + 1) % tracks.length]
    setCurrentTrack(next)
    setIsPlaying(true)
  }

  const playPrev = () => {
    const index = tracks.findIndex((t) => t.id === currentTrack.id)
    const prev = tracks[(index - 1 + tracks.length) % tracks.length]
    setCurrentTrack(prev)
    setIsPlaying(true)
  }

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <MainContent
          onPlayTrack={handlePlayTrack}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
        />
      </div>
      <Player
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        onNext={playNext}
        onPrev={playPrev}
      />
    </div>
  )
}

export default App
