import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/Store/store';
import Footer from './Components/Footer';


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
