import './App.css';
import Home from './Components/Home';
// import Loading from './Components/Loading';


function App() {
    return (
        <div className="App">
            {/* <Loading></Loading> */}
            <div className="background"></div>
            <div className="content">
                <Home></Home>
            </div>
        </div>
    );
}

export default App;