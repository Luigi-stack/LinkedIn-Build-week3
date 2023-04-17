import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/Store/store';
import 'bootstrap/dist/css/bootstrap_min.css'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     
    </div>
    </Provider>
  );
}

export default App;
