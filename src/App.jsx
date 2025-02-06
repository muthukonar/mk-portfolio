
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Header from './components/Header';
import Footer from './components/Footer';




function App() {
   return (
    <>
    <div className="d-flex flex-column min-vh-100">
    <Header></Header>
      <Nav />
      <main className="flex-grow-1 mx-3">
        <Outlet />
      </main>
      <Footer> </Footer>
      </div>
    </>
  );
}

export default App;