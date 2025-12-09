import React, { useState, useEffect } from 'react';
import './App.css';

const MUSICAS_INICIAIS = [
  { id: 1, titulo: "A Banda", album: "Chico Buarque de Hollanda", artista: "Chico Buarque", duracao: "2:11" },
  { id: 2, titulo: "Cities In Dust", album: "Tinderbox", artista: "Siouxsie and the Banshees", duracao: "3:51" },
  { id: 3, titulo: "Crazy On You", album: "Dreamboat Annie", artista: "Heart", duracao: "4:53" },
  { id: 4, titulo: "Death on Two Legs", album: "A Night at The Opera", artista: "Queen", duracao: "3:43" },
  { id: 5, titulo: "Have a Cigar", album: "Wish You Were Here", artista: "Pink Floyd", duracao: "5:07" },
  { id: 6, titulo: "I Wanna Be Sedated", album: "Road to Ruin", artista: "Ramones", duracao: "2:29" },
  { id: 7, titulo: "Kashmir", album: "Physical Graffiti", artista: "Led Zeppelin", duracao: "8:37" },
  { id: 8, titulo: "Preciso Dizer Que Te Amo", album: "Red Hot & Rio", artista: "Cazuza", duracao: "4:41" },
  { id: 9, titulo: "Uncle Remus", album: "Apostrophe", artista: "Frank Zappa", duracao: "2:49" },
  { id: 10, titulo: "Zoio Eu Te Desafio - Versão Piseiro", album: "Só as Melhores de Belfordroxo 2018", artista: "Ludwig van Beethoven", duracao: "2:05" },
  { id: 11, titulo: "Amor e Sexo", album: "Balacobaco", artista: "Rita Lee", duracao: "3:38" },
  { id: 12, titulo: "Homem-Aranha", album: "Elo", artista: "Jorge Vercillo", duracao: "4:35" },
];

const timeToSeconds = (timeStr) => {
  const [min, sec] = timeStr.split(':').map(Number);
  return min * 60 + sec;
};

const secondsToTime = (seconds) => {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
};

function App() {
  // Status interface y dados
  const [tema, setTema] = useState('dark');
  const [view, setView] = useState('home');
  const [playlists, setPlaylists] = useState([
    { id: 100, nome: "Minhas Favoritas", musicas: [] }
  ]);
  const [playlistAtiva, setPlaylistAtiva] = useState(null);
  const [termoBusca, setTermoBusca] = useState("");

  // Status do player
  const [musicaAtual, setMusicaAtual] = useState(null);
  const [tocando, setTocando] = useState(false);
  const [progresso, setProgresso] = useState(0);
  const [volume, setVolume] = useState(50);

  // Progresso da musica na barrinha
  useEffect(() => {
    let intervalo;
    if (tocando && musicaAtual) {
      intervalo = setInterval(() => {
        setProgresso((prev) => {
          const total = timeToSeconds(musicaAtual.duracao);
          if (prev >= total) {
            // qnd a musica acaba vai p proxima
            pularFaixa(1);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalo);
  }, [tocando, musicaAtual, playlists, playlistAtiva]);


  // navegacao entre musicas
  const pularFaixa = (direcao) => {
    let listaAtual;
    if (view === 'playlist' && playlistAtiva) {
      listaAtual = playlists.find(p => p.id === playlistAtiva)?.musicas || MUSICAS_INICIAIS;
    } else {
      listaAtual = MUSICAS_INICIAIS;
    }

    if (listaAtual.length === 0) return;

    const currentIndex = listaAtual.findIndex(m => m.id === musicaAtual?.id);
    let nextIndex = currentIndex + direcao;

    if (nextIndex >= listaAtual.length) {
      nextIndex = 0; // volta p começo
    } else if (nextIndex < 0) {
      nextIndex = listaAtual.length - 1; // volta p fim
    }

    setMusicaAtual(listaAtual[nextIndex]);
    setTocando(true);
    setProgresso(0);
  };

  const alternarTema = () => setTema(tema === 'dark' ? 'light' : 'dark');

  const criarPlaylist = () => {
    const nome = prompt("Nome da nova playlist:");
    if (nome) {
      const nova = { id: Date.now(), nome, musicas: [] };
      setPlaylists([...playlists, nova]);
      setView('library');
    }
  };

  const removerPlaylist = (id) => {
    const confirmacao = window.confirm("Tem certeza que deseja remover esta playlist?");
    if (confirmacao) {
      setPlaylists(playlists.filter(pl => pl.id !== id));
      if (playlistAtiva === id) {
        setPlaylistAtiva(null);
        setView('library');
      }
    }
  };

  const adicionarAPlaylist = (musica, playlistId) => {
    const novasPlaylists = playlists.map(pl => {
      if (pl.id === playlistId) {
        if (pl.musicas.find(m => m.id === musica.id)) return pl;
        return { ...pl, musicas: [...pl.musicas, musica] };
      }
      return pl;
    });
    setPlaylists(novasPlaylists);
    alert(`"${musica.titulo}" adicionada!`);
  };

  const tocarMusica = (musica) => {
    if (musicaAtual?.id === musica.id) {
      setTocando(!tocando);
    } else {
      setMusicaAtual(musica);
      setTocando(true);
      setProgresso(0);
    }
  };

  // main content render
  const renderConteudo = () => {
    const listaParaBusca = view === 'home' || view === 'search' ? MUSICAS_INICIAIS : playlists.find(p => p.id === playlistAtiva)?.musicas || [];

    if (view === 'home') {
      return (
        <ListaMusicas
          titulo="Início"
          musicas={MUSICAS_INICIAIS}
          musicaAtual={musicaAtual}
          tocando={tocando}
          onPlay={tocarMusica}
          playlists={playlists}
          onAddToPlaylist={adicionarAPlaylist}
        />
      );
    }
    if (view === 'search') {
      const filtradas = listaParaBusca.filter(m =>
        m.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
        m.artista.toLowerCase().includes(termoBusca.toLowerCase())
      );
      return (
        <div className="view-container">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="O que você quer ouvir?"
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              autoFocus
            />
          </div>
          <ListaMusicas
            titulo={termoBusca ? `Resultados para "${termoBusca}"` : "Navegar por tudo"}
            musicas={filtradas}
            musicaAtual={musicaAtual}
            tocando={tocando}
            onPlay={tocarMusica}
            playlists={playlists}
            onAddToPlaylist={adicionarAPlaylist}
          />
        </div>
      );
    }
    if (view === 'library') {
      return (
        <div className="view-container">
          <h2>Sua Biblioteca</h2>
          <div className="playlist-grid">
            {playlists.map(pl => (
              <div
                key={pl.id}
                className="playlist-card"
              >
                <div className="playlist-cover" onClick={() => { setPlaylistAtiva(pl.id); setView('playlist'); }}>🎵</div>
                <div className="card-info">
                  <h3>{pl.nome}</h3>
                  <p>{pl.musicas.length} músicas</p>
                  <button className="remove-btn" onClick={() => removerPlaylist(pl.id)}>
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (view === 'playlist') {
      const playlist = playlists.find(p => p.id === playlistAtiva);
      if (!playlist) return <div>Playlist não encontrada.</div>;
      return (
        <ListaMusicas
          titulo={`Playlist: ${playlist.nome}`}
          musicas={playlist.musicas}
          musicaAtual={musicaAtual}
          tocando={tocando}
          onPlay={tocarMusica}
          playlists={playlists}
          onAddToPlaylist={adicionarAPlaylist}
        />
      );
    }
  };

  return (
    <div className={`app-container ${tema}`}>
      <div className="main-layout">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="logo">Esporte5Five</div>

          <nav>
            <button className={view === 'home' ? 'active' : ''} onClick={() => setView('home')}>
              🏠 Início
            </button>
            <button className={view === 'search' ? 'active' : ''} onClick={() => setView('search')}>
              🔍 Buscar
            </button>
            <button className={view === 'library' ? 'active' : ''} onClick={() => setView('library')}>
              📚 Biblioteca
            </button>
          </nav>

          <div className="playlists-section">
            <div className="playlists-header">
              <span>SUAS PLAYLISTS</span>
              <button onClick={criarPlaylist} title="Criar Playlist">➕</button>
            </div>
            <ul>
              {playlists.map(pl => (
                <li key={pl.id} onClick={() => { setPlaylistAtiva(pl.id); setView('playlist'); }}>
                  {pl.nome}
                </li>
              ))}
            </ul>
          </div>

          <button className="theme-btn" onClick={alternarTema}>
            {tema === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
          </button>
        </aside>

        {/* AREA PRINCIPAL */}
        <main className="content">
          {renderConteudo()}
        </main>
      </div>

      {/* PLAYER (FOOTER) */}
      <footer className="player-bar">
        <div className="player-left">
          {musicaAtual ? (
            <div className="current-info">
              <h4>{musicaAtual.titulo}</h4>
              <p>{musicaAtual.artista}</p>
            </div>
          ) : (
            <div className="placeholder-info">Escolha uma música</div>
          )}
        </div>

        <div className="player-center">
          <div className="player-controls">
            <button onClick={() => pularFaixa(-1)}>⏮️</button>
            <button className="play-pause-btn" onClick={() => musicaAtual && setTocando(!tocando)}>
              {tocando ? '⏸️' : '▶️'}
            </button>
            <button onClick={() => pularFaixa(1)}>⏭️</button>
          </div>
          <div className="progress-container">
            <span>{secondsToTime(progresso)}</span>
            <input
              type="range"
              min="0"
              max={musicaAtual ? timeToSeconds(musicaAtual.duracao) : 100}
              value={progresso}
              readOnly
            />
            <span>{musicaAtual ? musicaAtual.duracao : "0:00"}</span>
          </div>
        </div>

        <div className="player-right">
          <span>🔊</span>
          <input
            type="range"
            min="0" max="100"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>
      </footer>
    </div>
  );
}

// lista de musicas
const ListaMusicas = ({ titulo, musicas, musicaAtual, tocando, onPlay, playlists, onAddToPlaylist }) => {
  const [menuAbertoId, setMenuAbertoId] = useState(null);

  if (!musicas || musicas.length === 0) {
    return (
      <div className="list-container">
        <h1>{titulo}</h1>
        <p className="empty-msg">Nenhuma música aqui ainda.</p>
      </div>
    );
  }

  return (
    <div className="list-container">
      <h1>{titulo}</h1>
      <div className="table-header">
        <span>#</span>
        <span>TÍTULO</span>
        <span>ÁLBUM</span>
        <span>🕐</span>
        <span></span>
      </div>
      <div className="table-body">
        {musicas.map((musica, index) => {
          const isCurrent = musicaAtual?.id === musica.id;
          return (
            <div
              key={musica.id}
              className={`table-row ${isCurrent ? 'playing' : ''}`}
              onMouseLeave={() => setMenuAbertoId(null)}
            >
              <div className="col-index" onClick={() => onPlay(musica)}>
                {/* Nome da música e artista na área de play/pause */}
                {isCurrent && tocando ? '⏸️' : '▶️'}
              </div>
              <div className="col-title" onClick={() => onPlay(musica)}>
                <span className="song-title">{musica.titulo}</span>
                <span className="song-artist">{musica.artista}</span>
              </div>
              <div className="col-album">{musica.album}</div>
              <div className="col-duration">{musica.duracao}</div>
              <div className="col-actions">
                <button className="more-btn" onClick={() => setMenuAbertoId(menuAbertoId === musica.id ? null : musica.id)}>
                  •••
                </button>
                {/* Menu Dropdown */}
                {menuAbertoId === musica.id && (
                  <div className="dropdown-menu">
                    <div className="menu-header">Adicionar à Playlist:</div>
                    {playlists.map(pl => (
                      <button
                        key={pl.id}
                        onClick={() => { onAddToPlaylist(musica, pl.id); setMenuAbertoId(null); }}
                      >
                        {pl.nome}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;