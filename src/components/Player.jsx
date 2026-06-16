import { useState, useEffect } from 'react'
import {
  PlayIcon, PauseIcon, PrevIcon, NextIcon,
  ShuffleIcon, RepeatIcon, VolumeIcon, HeartIcon,
} from './Icons.jsx'
import { formatTime } from '../data/tracks.js'
import './Player.css'

function Player({ currentTrack, isPlaying, onTogglePlay, onNext, onPrev }) {
  // progress = segundos transcurridos de la canción actual.
  const [progress, setProgress] = useState(0)

  // Cada vez que cambia la canción, reiniciamos la barra a 0.
  useEffect(() => {
    setProgress(0)
  }, [currentTrack])

  // Mientras isPlaying sea true, un intervalo suma 1 segundo cada segundo.
  // Cuando termina la canción, pasa automáticamente a la siguiente.
  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + 1 >= currentTrack.duration) {
          onNext()
          return 0
        }
        return prev + 1
      })
    }, 1000)

    // Limpiamos el intervalo al pausar o desmontar.
    return () => clearInterval(timer)
  }, [isPlaying, currentTrack, onNext])

  const percent = (progress / currentTrack.duration) * 100

  // Permite saltar a un punto de la canción haciendo clic en la barra.
  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    setProgress(Math.floor(ratio * currentTrack.duration))
  }

  return (
    <footer className="player">
      {/* Izquierda: info de la canción */}
      <div className="player__left">
        <span className="player__cover" style={{ background: currentTrack.cover }} />
        <div className="player__info">
          <p className="player__title">{currentTrack.title}</p>
          <p className="player__artist">{currentTrack.artist}</p>
        </div>
        <button className="player__heart" aria-label="Me gusta">
          <HeartIcon size={18} />
        </button>
      </div>

      {/* Centro: controles + barra de progreso */}
      <div className="player__center">
        <div className="player__controls">
          <button className="player__ctrl" aria-label="Aleatorio"><ShuffleIcon /></button>
          <button className="player__ctrl" onClick={onPrev} aria-label="Anterior"><PrevIcon /></button>
          <button className="player__play" onClick={onTogglePlay} aria-label={isPlaying ? 'Pausar' : 'Reproducir'}>
            {isPlaying ? <PauseIcon size={20} /> : <PlayIcon size={20} />}
          </button>
          <button className="player__ctrl" onClick={onNext} aria-label="Siguiente"><NextIcon /></button>
          <button className="player__ctrl" aria-label="Repetir"><RepeatIcon /></button>
        </div>

        <div className="player__progress">
          <span className="player__time">{formatTime(progress)}</span>
          <div className="player__bar" onClick={handleSeek}>
            <div className="player__barFill" style={{ width: `${percent}%` }}>
              <span className="player__barKnob" />
            </div>
          </div>
          <span className="player__time">{formatTime(currentTrack.duration)}</span>
        </div>
      </div>

      {/* Derecha: volumen */}
      <div className="player__right">
        <VolumeIcon />
        <div className="player__volume">
          <div className="player__volumeFill" />
        </div>
      </div>
    </footer>
  )
}

export default Player
