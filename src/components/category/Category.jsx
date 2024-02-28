import "./categoryStyles.css"
import {IconButton, InputAdornment } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { useDispatch } from "react-redux";
import {openModal} from "../../redux/index";
import CategoryList from "../categoryList/CategoryList";

function Category (){

    const [isActive,setIsActive] = useState(false);
    
    const dispatch = useDispatch();
    
    const handleClick = ()=>{
        setIsActive(!isActive);
    }

    const handleOpenModal = (modalName,type) => {
      dispatch(
        openModal({
          name: modalName,
          type:type
        })
      );
    };

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
            {/* ***********Categori List Component is here********** */}
            <CategoryList />
            <li className="menu__item menu__button_absalute">
                <span 
                  className="menu__button"
                  onClick={()=>handleOpenModal("newMenuCategory")}
                >
                  Добавить 
                  <InputAdornment position="end">
                    <IconButton>
                      <AddIcon style={{color:"#5B7E9A"}}/>
                    </IconButton>
                  </InputAdornment>
                </span>
            </li>
         </ul>
      </div>
   )
}

export default Category;