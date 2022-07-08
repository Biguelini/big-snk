import logo from './logo.svg'
import './App.css'
import J1 from './j1.mp4'

function App() {
    return (
        <>
            <video autoPlay loop muted className="video">
                <source src={J1} type="video/mp4" />
            </video>



            <div className="container">
              <h2>Jordan 1</h2>
              <img src="https://dev-ace1-app-storage.s3.us-west-2.amazonaws.com/images/sneakers/555088%20105/original/png/mimified/1649673386679.png" alt="" />
              <button>Comprar</button>
              
            </div>
        </>
    )
}

export default App
