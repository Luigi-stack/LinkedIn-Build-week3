import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/Store/store';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfileJumbotron from './Components/ProfileJumbotron';
import Prova from './Components/Prova';


function App() {
  return (
    <Provider store={store}>
    <div className="App">

    <ProfileJumbotron/>
    <Prova />
    </div>
    </Provider>
  );
}

export default App;
