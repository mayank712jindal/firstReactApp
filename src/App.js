import './App.css';
import Footer, { LowerFooter } from './Footer';
import Header from './Header';


function App() {
  return (
    <div className="App">
      <h1>
        Hello Mayank
        <Header />
      </h1>
      <Footer name="Mayank" age="18" />
      <LowerFooter />
    </div>
  );
}

export default App;
