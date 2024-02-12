import "./MenuCategories.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {InputAdornment,IconButton} from "@mui/material"
import { useState } from "react";

function MenuCategories (){
    const [isActive,setIsActive] = useState(false);
    
    const handleClick = ()=>{
        setIsActive(!isActive);
    }
    
    return (
        <div className="menu-category-container">
            <div 
              className="menu-category-icon-container"
              onClick={handleClick}
            >
                <p className="menu-category-text">Категория</p>
                <InputAdornment 
                  position="end"
                  className="menu-category-arrow"
                >
                  <IconButton>
                    {isActive?<KeyboardArrowUpIcon style={{color:"#5B7E9A"}}/>:<KeyboardArrowDownIcon style={{color:"#5B7E9A"}}/>}
                  </IconButton>
                </InputAdornment>
            </div>
        </div>
    )
}

export default MenuCategories;