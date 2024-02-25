import "./categoryStyles.css"
import {IconButton, InputAdornment } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from "react";

function Category (){
    const [isActive,setIsActive] = useState(false);
    
    const handleClick = ()=>{
        setIsActive(!isActive);
    }
    return (
      <div className={`menu ${isActive?"menu_active":""}`}>
         <div className="menu__category">
           <p className={`menu__category-title 
              ${isActive?("menu__category-title_active"):("")}`}
           >
            Категория
          </p>
           <InputAdornment 
             position="end" 
             className="menu__category_icon"
             onClick={handleClick}
           >
             <IconButton>
                {isActive?<KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>}              
             </IconButton>
           </InputAdornment>
         </div>
         <ul className={`menu__list ${isActive ? "" : "menu__list_active" }`}>
            <li className="menu__item">
              Кофе
              <InputAdornment position="end" className="menu__item_icon">
                <IconButton>
                  <DeleteOutlineIcon style={{color:"#F45656"}}/>
                </IconButton>
              </InputAdornment>
            </li>
            <li className="menu__item">
                Десерты
                <InputAdornment position="end" className="menu__item_icon">
                <IconButton>
                  <DeleteOutlineIcon style={{color:"#F45656"}}/>
                </IconButton>
              </InputAdornment>
            </li>
            <li className="menu__item">
                Коктейли
                <InputAdornment position="end" className="menu__item_icon">
                <IconButton>
                  <DeleteOutlineIcon style={{color:"#F45656"}}/>
                </IconButton>
              </InputAdornment>
            </li>
            <li className="menu__item">
                Выпечка
                <InputAdornment position="end" className="menu__item_icon">
                <IconButton>
                  <DeleteOutlineIcon style={{color:"#F45656"}}/>
                </IconButton>
              </InputAdornment>
            </li>
            <li className="menu__item">
               Чай
               <InputAdornment position="end" className="menu__item_icon">
                <IconButton>
                  <DeleteOutlineIcon style={{color:"#F45656"}}/>
                </IconButton>
              </InputAdornment>
             </li>
            <li className="menu__item">
                <button class="menu__button">Добавить +</button>
            </li>
         </ul>
      </div>
   )
}

export default Category;