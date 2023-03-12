import "./components/StickyHeaderTable/StickyHeaderTable";
import BookLibrary from './views/BookLibrary/BookLibrary';
import MainContainer from './components/MainContainer/MainContainer';
import "./App.scss";

function App() {
  return (
      <MainContainer>
        <BookLibrary/>
      </MainContainer>
  );
}

export default App;
