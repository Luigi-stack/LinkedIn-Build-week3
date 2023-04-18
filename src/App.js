import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/Store/store';
import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Footer />
    </div>
    </Provider>
  );
}

export default App;
