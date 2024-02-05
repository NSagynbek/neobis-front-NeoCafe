import { useState } from "react";
import "./sideBar.css";
import { InputAdornment, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InventoryIcon from "@mui/icons-material/Inventory";
import PolylineIcon from "@mui/icons-material/Polyline";
import GroupsIcon from "@mui/icons-material/Groups";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function SideBar({onSelect}) {


  const [activeSection, setActiveSection] = useState(null);

  const handleButtonClick = (section) => {
    onSelect(section);
    setActiveSection(section === activeSection ? null : section);
  };

  const isActive = (section) => section === activeSection;

  const handleClick = ()=>{
    console.log("click")
  }

  return (
    <main className="sideBar">
      <header className="sideBar__logo-text">
        <span className="sideBar-neo">neo</span>
        <span className="cafe">cafe</span>
      </header>

      <section className="admin-sections">
        <div className="admin-sections__container">
          <label htmlFor="menuBtn">
            <button
              onClick={() => handleButtonClick("menu")}
              className={`section-btn ${isActive("menu") ? "active" : ""}`}
              id="menuBtn"
            >
              Меню
            </button>
          </label>
          <InputAdornment 
            className="section-icons" 
            position="start"
          >
            <IconButton onClick={() => handleButtonClick("menu")}>
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
          </InputAdornment>         
        </div>

        <div className="admin-sections__container">
          <label htmlFor="menuBtn">
            <button
              onClick={() => handleButtonClick("warehouse")}
              className={`section-btn ${isActive("warehouse") ? "active" : ""}`}
              id="menuBtn"
            >
              Склад
            </button>
          </label>
          <InputAdornment 
            className="section-icons" 
            position="start"
          >
            <IconButton onClick={() => handleButtonClick("warehouse")}>
              <InventoryIcon style={{ color: "white" }} />
            </IconButton>
          </InputAdornment>
        </div>
        <div className="admin-sections__container">
          <label htmlFor="menuBtn">
            <button
              onClick={() => handleButtonClick("branches")}
              className={`section-btn ${isActive("branches") ? "active" : ""}`}
              id="menuBtn"
            >
              Филиалы
            </button>
          </label>
          <InputAdornment 
            className="section-icons" 
            position="start"
          >
            <IconButton onClick={() => handleButtonClick("branches")} >
              <PolylineIcon style={{ color: "white" }} />
            </IconButton>
          </InputAdornment>
        </div>
        <div className="admin-sections__container">
          <label htmlFor="menuBtn">
            <button
              onClick={() => handleButtonClick("employees")}
              className={`section-btn ${isActive("employees") ? "active" : ""}`}
              id="menuBtn"
            >
              Сотрудники
            </button>
          </label>
          <InputAdornment 
            className="section-icons" 
            position="start"
          >
            <IconButton onClick={() => handleButtonClick("employees")}>
              <GroupsIcon style={{ color: "white" }} />
            </IconButton>
          </InputAdornment>
        </div>

        <footer >
          <div className="exit-icon-container" onClick={handleClick}>             
               <button className="exit-icin__btn" id="exit-icon">
                 Выйти
               </button>           
             <InputAdornment 
               className="exit-icon-icon" 
               position="start"
             >
               <IconButton>
                 <ExitToAppIcon style={{ color: "white" }}/>
               </IconButton>
             </InputAdornment>
           </div>
        </footer>
      </section>
    </main>
  );
}

export default SideBar;




