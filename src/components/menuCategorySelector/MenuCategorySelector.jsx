import "./menuCategorySelector.css";
import { InputAdornment, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import { selectMenuCategory } from "../../redux/actions&reducers/actions";

function MenuCategorySelector() {

    const [category,setCategory] = useState(null);
    const [isClicked,setIsClicked] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
      if (category !== null) {
        dispatch(selectMenuCategory(category[1]));
      }
    }, [category]);
    
    
    
    const handleCategory = (category)=>{      
        setCategory(category)
        setIsClicked(!isClicked);
    }

    const handleToggle = () => {
        setIsClicked(!isClicked);
    };
    
    return (
      <div 
        className="add-menu-new-item-category-subContainer-container"
      >
        <p className="item-name__label">Категория</p>
        <div className="add-menu-new-item-dropdown-container">
          <div 
            className={`add-menu-new-item-dropdown-subContainer 
                      ${isClicked ? "transform" : ""}`}>
            <p className="add-menu-new-item-dropdown-title">
              {category ? category[1] : "Выберите категорию"}
            </p>
            <InputAdornment 
              position="end" 
              className="add-menu-new-item-dropdown-icons" 
              onClick={handleToggle}>
              <IconButton>
                {isClicked ? (
                  <KeyboardArrowUpIcon style={{ color: "#5B7E9A" }} />
                ) : (
                  <KeyboardArrowDownIcon style={{ color: "#5B7E9A" }} />
                )}
              </IconButton>
            </InputAdornment>
          </div>
          <ul 
            className=
              {`add-menu-new-item-dropdown-categries 
              ${isClicked ? "add-menu-new-item-dropdown-toggle" : ""}`}>
            <li 
              className="add-menu-new-item-dropdown-item" 
              onClick={() => handleCategory(["coffee", "Кофе"])}>
              Кофе
            </li>
            <li 
              className="add-menu-new-item-dropdown-item" 
              onClick={() => handleCategory(["desserts", "Десерты"])}>
              Десерты
            </li>
            <li 
              className="add-menu-new-item-dropdown-item" 
              onClick={() => handleCategory(["bakery", "Выпечка"])}>
              Выпечка
            </li>
            <li 
              className="add-menu-new-item-dropdown-item" 
              onClick={() => handleCategory(["coktail", "Коктейли"])}>
              Коктейли
            </li>
            <li 
              className="add-menu-new-item-dropdown-item" 
              onClick={() => handleCategory(["tea", "Чай"])}>
              Чай
            </li>
          </ul>
        </div>
      </div>
    );
  }

  export default MenuCategorySelector;
  