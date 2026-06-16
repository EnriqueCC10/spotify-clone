// Datos simulados de la app. Las portadas son gradientes CSS

export const tracks = [
  { id: 1, title: 'Luces de Lima', artist: 'Nova Andina', album: 'Capital', duration: 213, cover: 'linear-gradient(135deg, #ff6f61, #d72660)' },
  { id: 2, title: 'Costa Verde', artist: 'Marea Sur', album: 'Litoral', duration: 187, cover: 'linear-gradient(135deg, #1db954, #0a8f4a)' },
  { id: 3, title: 'Neón Nocturno', artist: 'CyberCriollo', album: 'Synthwave PE', duration: 244, cover: 'linear-gradient(135deg, #6a11cb, #2575fc)' },
  { id: 4, title: 'Madrugada', artist: 'Sol Naciente', album: 'Amanecer', duration: 198, cover: 'linear-gradient(135deg, #f7971e, #ffd200)' },
  { id: 5, title: 'Cumbia Espacial', artist: 'Los Astros', album: 'Galaxia', duration: 231, cover: 'linear-gradient(135deg, #e94057, #8a2387)' },
  { id: 6, title: 'Ritmo de Barranco', artist: 'Bohemia 7', album: 'Distritos', duration: 176, cover: 'linear-gradient(135deg, #11998e, #38ef7d)' },
  { id: 7, title: 'Latido', artist: 'Pulso', album: 'Corazón', duration: 205, cover: 'linear-gradient(135deg, #fc466b, #3f5efb)' },
  { id: 8, title: 'Niebla', artist: 'Garúa', album: 'Invierno', duration: 222, cover: 'linear-gradient(135deg, #485563, #29323c)' },
]

// Tarjetas de la grilla principal (estilo "Hecho para ti")
export const playlists = [
  { id: 'p1', title: 'Éxitos Perú', subtitle: 'Lo más sonado del mes', cover: 'linear-gradient(135deg, #1db954, #155724)' },
  { id: 'p2', title: 'Indie Nacional', subtitle: 'Bandas emergentes', cover: 'linear-gradient(135deg, #6a11cb, #2575fc)' },
  { id: 'p3', title: 'Para Concentrarse', subtitle: 'Sonidos tranquilos', cover: 'linear-gradient(135deg, #00b4db, #0083b0)' },
  { id: 'p4', title: 'Cumbia Total', subtitle: 'Para no parar', cover: 'linear-gradient(135deg, #e94057, #f27121)' },
  { id: 'p5', title: 'Clásicos', subtitle: 'Los de siempre', cover: 'linear-gradient(135deg, #c31432, #240b36)' },
  { id: 'p6', title: 'Workout', subtitle: 'Energía al máximo', cover: 'linear-gradient(135deg, #f7971e, #ffd200)' },
]

// Atajos de la parte superior del Home
export const quickPicks = [
  { id: 'q1', title: 'Tus me gusta', cover: 'linear-gradient(135deg, #450af5, #c4efd9)' },
  { id: 'q2', title: 'Descubrimiento semanal', cover: 'linear-gradient(135deg, #1db954, #0a8f4a)' },
  { id: 'q3', title: 'Mix diario 1', cover: 'linear-gradient(135deg, #e94057, #8a2387)' },
  { id: 'q4', title: 'Novedades', cover: 'linear-gradient(135deg, #f7971e, #ffd200)' },
  { id: 'q5', title: 'Top 50 Perú', cover: 'linear-gradient(135deg, #6a11cb, #2575fc)' },
  { id: 'q6', title: 'Recién escuchado', cover: 'linear-gradient(135deg, #11998e, #38ef7d)' },
]

// Convierte segundos a formato m:ss
export const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}
