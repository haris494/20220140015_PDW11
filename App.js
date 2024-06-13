import thLogo from './th.jpeg'; 
import './App.css';


const wikipediaUrl = "https://id.wikipedia.org/wiki/Kesehatan";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={thLogo} className="App-logo" alt="logo" />
        <p>
           <code></code> Kesehatan.
        </p>

        <a
          className="App-link"
          href={wikipediaUrl} 
          target="_blank"
          rel="noopener noreferrer"
        >
          Temukan Lebih Banyak Informasi tentang Kesehatan!
        </a>
      </header>
    </div>
  );
}

export default App;
