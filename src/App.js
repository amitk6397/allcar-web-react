import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './Home/Home'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import Page4 from './Components/Page4'
import Page5 from './Components/Page5'
import Page6 from './Components/Page6'
import Page7 from './Components/Page7'
import Page8 from './Components/Page8'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page1' element={<Page1 Header={<Header />} Navbar={<Navbar />} Footer={<Footer />}/>} />
        <Route path='/page2' element={<Page2 Header={<Header />} Navbar={<Navbar />} Footer={<Footer />}/>} />
        <Route path='/Page3' element={<Page3 Header={<Header />} Navbar={<Navbar />} Footer={<Footer />}/>} />
        <Route path='/Page4' element={<Page4 Header={<Header />} Navbar={<Navbar />} Footer={<Footer />}/>} />
        <Route path='/Page5' element={<Page5 Header={<Header />} Navbar={<Navbar />} Footer={<Footer />}/>} />
        <Route path='/Page6' element={<Page6 Header={<Header />} Navbar={<Navbar />} Footer={<Footer />}/>} />
        <Route path='/Page7' element={<Page7 Header={<Header />} Navbar={<Navbar />} Footer={<Footer />}/>} />
        <Route path='/Page8' element={<Page8 Header={<Header />} Navbar={<Navbar />} Footer={<Footer />}/>} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
