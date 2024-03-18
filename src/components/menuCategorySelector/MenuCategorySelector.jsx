import "./menuCategorySelector.css";
import { InputAdornment, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import { selectMenuCategory } from "../../redux/actions&reducers/actions";
import { getMenuCategories } from "../../api";

function MenuCategorySelector({menuItemCategory,setMenuItem}) {

    const [category,setCategory] = useState(null);
    const [isClicked,setIsClicked] = useState(false);
    const [menuCategories,setMenuCategories]=useState([]);
    
   
  
    const dispatch = useDispatch();

    useEffect(()=>{
      if (category !== null) {
        dispatch(selectMenuCategory(category.id));
      }
    }, [category]);

    useEffect(()=>{
      const menuCategory = async ()=>{
        try{
          const res = await getMenuCategories()
          setMenuCategories(res)      
        }catch(error){
          console.log(error)
        }
      }
      menuCategory()
    },[])
    
    
    
    const handleCategory = (categoryDetails)=>{      
        setCategory(categoryDetails)
        setIsClicked(!isClicked);
        if(setMenuItem){
          setMenuItem((prev)=>({
            ...prev,
            category:{...prev.category,name:categoryName}
          }))
        }
        
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
              {category ? category.name : (menuItemCategory?.name||"Выберите категорию")}
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
              ${isClicked ? "add-menu-new-item-dropdown-toggle" : ""}`}
          >
            {menuCategories && menuCategories.length > 0 ? (
            menuCategories.map((category, index) => (
              <li 
                className="add-menu-new-item-dropdown-item" key={index}
                onClick={()=>handleCategory(category)}
              >
                {category.name}     
              </li>
            ))
            ) : (
              <></> 
            )}
           
          </ul>
        </div>
      </div>
    );
  }

  export default MenuCategorySelector;
  