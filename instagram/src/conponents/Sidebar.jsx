import "./Sidebar.css";
import igName from '../assets/igName.png';

function Sidebar(){
    return(
        <>
    <div className="sidebar">
        <div className = "sidebar-item">
            <img src= {igName} />
        </div>
        <div className="sidebar-item">
            <i className="fa-solid fa-house"></i>
            <h2>Home</h2>
        </div>
        <div className="sidebar-item">
            <i className="fa-solid fa-search"></i>
            <h2>Search</h2>
        </div>
        <div className="sidebar-item">
            <i className="fa-solid fa-compass"></i>
            <h2>Explore</h2>
        </div>
        <div className="sidebar-item">
            <i className="fa-solid fa-video"></i>
            <h2>Reels</h2>
        </div>
        <div className="sidebar-item">
            <i class="fa-solid fa-message"></i>
            <h2>Messages</h2>
        </div>
        <div className="sidebar-item">
            <i class="fa-solid fa-heart"></i>
            <h2>Notifications</h2>
        </div>
        <div className="sidebar-item">
            <i className="fa-solid fa-plus-square"></i>
            <h2>Create</h2>
        </div>
        <div className="sidebar-item">
            <i className="fa-solid fa-user"></i>
            <h2>Profile</h2>
        </div>
</div>
        </>
    )
}

export default Sidebar;