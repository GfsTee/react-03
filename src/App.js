import logo from './logo.svg';
import './App.css';
import ComponentWithState from './components/ComponentWithState';
import HalloWelt from './components/HalloWelt';
import ToggleBox from './components/ToggleBox';
import SortMe from './components/SortMe';

function App() {
  return (
    <main>
      <HalloWelt />
      <ComponentWithState />
      <ToggleBox test="Mein Test" />
      <SortMe />
    </main>
  );
}

export default App;
