import "./components/StickyHeaderTable/StickyHeaderTable";
import StickyHeadTable from './components/StickyHeaderTable/StickyHeaderTable';
import MainContainer from './components/MainContainer/MainContainer';
import "./App.scss";

function App() {
  return (
    <div>
      <MainContainer>
        <StickyHeadTable/>
      </MainContainer>
    </div>
  );
}

export default App;
