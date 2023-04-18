import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/Store/store';
import Footer from './Components/Footer';
import MyNav from './Components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfileJumbotron from './Components/ProfileJumbotron';
import Prova from './Components/Prova';

import MessageBox from './Components/MeesageBox';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Prova />
     <MyNav/>
     <ProfileJumbotron/>
     <MessageBox/>
      <Footer />
    </div>
    </Provider>
)
}

export default App;
