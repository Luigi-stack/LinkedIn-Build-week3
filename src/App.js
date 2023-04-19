import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/Store/store';
import MyNav from './Components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfileJumbotron from './Components/ProfileJumbotron';
import MessageBox from './Components/MeesageBox';
import MyFooter from './Components/MyFooter';
import PostBox from './Components/PostBox';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <PostBox />
    </div>
    </Provider>
)
}

export default App;
