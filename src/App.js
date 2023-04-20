import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/Store/store';
import MyNav from './Components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfileJumbotron from './Components/ProfileJumbotron';
import MessageBox from './Components/MeesageBox';
import MyFooter from './Components/MyFooter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import  SectionRight  from './Components/SectionRight';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="App">


     <MyNav/>
     <Routes>
      

            <Route path='/' element={
              <>
                <ProfileJumbotron />
                <MyFooter />
              </>
            }
            />

            <Route path='home' element={
              <>
                <HomePage />
                
              </>
            }
            />


          </Routes>

     <MessageBox/>
 
    </div>
    </Provider>
    </BrowserRouter>
  )
}

export default App;
