
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import KeyFeatures from './components/KeyFeatures'
import Testimonials from './components/Testimonials'
import Home from './pages/Home'
import { BrowserRouter ,Route,Routes,Outlet} from 'react-router-dom'
import About from './pages/About'
import JoinedEvents from './pages/JoinedEvents'
import Explore from './pages/Explore'
import DashBoard from './pages/DashBoard'
import Profile from './pages/Profile'
import PostEvents from './pages/PostEvents'
function App() {

  return (
   <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path='/about' element={
           <div>
             <About></About>
           </div>

        }></Route>
        <Route path='/joinedevents' element={
          
          <div>
             <Navbar></Navbar>
             <JoinedEvents></JoinedEvents>
           </div>
          
          } ></Route>
        <Route path='/explore' element={ 
         
          <div>
             <Explore></Explore>
           </div>
          
          }></Route>

        <Route path='/dashboard' element={ 
          <div>
            <Navbar></Navbar>
            <DashBoard></DashBoard>
          </div>
          
          }></Route>


        <Route path='/profile' element={ 
          <div>
            <Navbar></Navbar>
            <Profile></Profile>
            
          </div>
        }></Route>


        <Route path='/postevents' element={
          <div>
            <Navbar></Navbar>
            <PostEvents></PostEvents>
          </div>
        }> 
           
        </Route>
     </Routes>
   </BrowserRouter>
  )
}

export default App
