import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/Store/store';
import MyNav from './Components/MyNav';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <MyNav/>
    </div>
    </Provider>
  );
}

export default App;
