import './App.css';
import NavBar from './components/nav-bar'
import LoginForm from './components/login-form'
import Footer from './components/footer'
import Hero from './components/hero-image'

function App() {
  return <div className="App container-fluid bg-dark min-vh-100 d-inline-block">
    <NavBar/>
    <Hero/>
    <LoginForm/>
    <Footer/>
  </div>
}

export default App;
