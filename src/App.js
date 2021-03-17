import './App.css';
import Navbar from './Navbar';
import 'fontsource-roboto';
import Wrap from './Wrap';

function App() {
  return (
    <div>
      <Navbar />
      {false? <h1 style={{marginTop : '100px'}}>Please Login ...!</h1> : <Wrap />}
    </div>
  );
}

export default App;
