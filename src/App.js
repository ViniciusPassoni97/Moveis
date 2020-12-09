import './assets/style/globalStyle.css';
import './style.css';
import ellipse1 from './assets/icons/vector1.png';
import ellipse2 from './assets/icons/vector2.png';
import Header from './components/Header/index.js';
import Home from './components/Home/index.js';
import Services from './components/Services/index.js';
import Learn from './components/Learn/index.js';
import Time from './components/Time/index.js';
import Done from './components/Done/index.js';
import Peoples from './components/Peoples/index.js';
import Blog from './components/Blog/index.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Home />
        <div className='services-header-info'>
          <div>
            <p>What we do</p>
            <h1>Our Service</h1>
          </div>
          <div>
            <img src={ellipse1} alt='vector1'  className='image-vector'/>
            <img src={ellipse2} alt='vector2' className='image-vector2'/>
          </div>
        </div>
        <div className='services-app'>
          <Services />
          <Services />
          <Services />
        </div>
        <Learn />
        <Time />
        <Done />
        <Peoples />
      </header>
      <div className='blog-index'>
        <div className='blog-index-div'>
          <Blog />
        </div>
      </div>
      <div className='sign-index'>
        <div className='sign-index-div'>
            
        </div>
      </div>
    </div>
  );
}

export default App;
