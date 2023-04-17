import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/Store/store';
import MyNav from './Components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfileJumbotron from './Components/ProfileJumbotron';
import MessageBox from './Components/MeesageBox';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <MyNav/>
     <ProfileJumbotron/>
     <MessageBox/>
    </div>
    </Provider>
)
}

export default App;
