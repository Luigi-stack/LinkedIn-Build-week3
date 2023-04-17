import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/Store/store';
import MessageBox from './Components/MeesageBox';
import'bootstrap/dist/css/bootstrap.min.css';

import ProfileJumbotron from './Components/ProfileJumbotron';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <MessageBox />

    <ProfileJumbotron/>

    </div>
    </Provider>
  );
}

export default App;
