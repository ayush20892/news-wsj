import './App.css';
import { Header } from "./components/header/header"
import { MainContent } from "./components/mainContent/mainContent"

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <MainContent />
    </div>
  );
}

export default App;
