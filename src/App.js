import './App.css';
import TestApp from './components/testing.js'
import Grid from './components/grid.js'
import PlusRows from './components/plusRowButton.js'
import MinusRows from './components/minusRowButton.js'
import PlusCols from './components/plusColButton.js'
import MinusCols from './components/minusColButton.js'

function App() {
  return (
    <div className = 'App'>

    <TestApp/>
    <Grid/>
    </div>
  );
}

export default App;
