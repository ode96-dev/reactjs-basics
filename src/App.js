import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ConditionalRendering from './pages/ConditionalRendering';
import Player from './pages/Player';
import Calculator from './pages/Calculator';
import Lists from './pages/Lists';
import Forms from './pages/Forms';
import FeedbackForms from './pages/FeedbackForms';
import Blog from './pages/Blog';


function App() {

  return (
    <div>
      <nav className="nav">
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="about" className='nav-item'>About</Link>
        <Link to="/contact" className='nav-item'>Contact</Link>
        <Link to="/conditional-rendering" className='nav-item'>Conditional Rendering</Link>
        <Link to="/video-player" className='nav-item'>React player</Link>
        <Link to="/calculator" className='nav-item'>Calculator</Link>
        <Link to="/lists" className='nav-item'>Lists</Link>
        <Link to="/forms" className='nav-item'>Forms</Link>
        <Link to="/forms-feedback" className='nav-item'>FeedbackForms</Link>
        <Link to="/blog" className='nav-item'>Blog</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/conditional-rendering' element={<ConditionalRendering />} />
        <Route path='/video-player' element={<Player />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/lists' element={<Lists />} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/forms-feedback' element={<FeedbackForms />} />
        <Route path='/blog' element={
          <Blog />
        } />
      </Routes>

    </div>
  );
}

export default App;
