import Sidebar from './conponents/Sidebar'
import Posts from './conponents/Posts'
import Footer from './conponents/Footer';
import Middle from './conponents/Middle';
import './App.css'
import { post1, post2, post3 } from './assets';
import ProfileHeader from './conponents/ProfileHeader';

function App() {

  return (
    <>
    <Sidebar/>
    

    <div className = "profile">
      <ProfileHeader/>
    </div>

    <Middle/>
    
    <div className = "post-grid">
      <Posts name = {post1} />
      <Posts name = {post2} />
      <Posts name = {post3}/>
    </div>

    <Footer/>
    </>
  )
}

export default App
