import logo from './logo.svg';
import './App.css';
import "./components/StickyHeaderTable";
import StickyHeadTable from './components/StickyHeaderTable';

function App() {
  return (
    <div className="App">
      <div className="container row">
        <div className=".col-xs-6 .col-md-4">
          <StickyHeadTable/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
