import './App.css'
import NavbarComponent from './components/Navbar'

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      {/* header */}
      <header>
        <NavbarComponent />
      </header>
      {/* content */}
      <main className="flex-1"></main>
      {/* footer */}
      <footer className=''></footer>
    </div>
  )
}

export default App
