import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/Store/store';
import MessageBox from './Components/MeesageBox';
import'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <MessageBox />
    </div>
    </Provider>
  );
}

export default App;
