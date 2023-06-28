import './sidebar.css';
import './main.css'
import './footer.css'

const Sidebar = () => {
  return (
    <>
    <body>
    <div className="sidebar">
      <div className="sidebar-container">

        <div className="main-container">
          <main className="main-content">
            <h2>Main Display</h2>
          </main>
        </div>
        
      </div>
    </div>
    </body>
    
    <div>
      <footer className="footer">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </footer>
    </div>
    
    
    </>
  );
};

export default Sidebar;


