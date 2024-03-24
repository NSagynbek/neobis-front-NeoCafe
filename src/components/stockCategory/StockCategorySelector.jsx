import "./styles.css";
import { InputAdornment, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DoneIcon from '@mui/icons-material/Done';
import { useState} from "react";

function StockCategorySelector ({setStockItems,select,name,categories}){

    const [isActive,setIsActive] = useState(false);
    const [selection,setSelection]=useState("");
    const [activeSection, setActiveSection] = useState(null);


    const handleClick = ()=>{
        setIsActive(!isActive);
      }

    const handleSelection=(productType,section)=>{
      setSelection(productType);
      if(setStockItems){setStockItems((prev)=>({...prev,["type"]:productType==="Готовая продукция"?"Готовое":productType}))}
      setActiveSection(section === activeSection ? null : section);
    }

    const isActiveSection = (section) => section === activeSection;
  
    return (
      <div className="stock-category-section-container">
        <label htmlFor="" className="newStock">
          {select}
        </label>
      <div className="stock-category-selector">
        <div className={`stock-category-header ${isActive ? 
                       ("stock-category-header-active") : ("")}`}>
          <p>
            {activeSection&&selection!==""?selection:name}
          </p>
          <InputAdornment 
            position="end" 
            className="stock-icon-button"
            onClick={handleClick}
          >
            <IconButton>
              {isActive ? (
                <KeyboardArrowUpIcon style={{ color: "#2A3440" }} />
              ) : (
                <KeyboardArrowDownIcon style={{ color: "#2A3440" }} />
              )}                   
            </IconButton>
          </InputAdornment>
        </div>
    
        <ul 
          className={`stock-category-list ${isActive ? 
                    "active-stock-category" : ""}`}
        >
          <li 
            className="stock-category-item"
            onClick={()=>handleSelection(categories.position1,"redyProduct")}
          >
            {categories.position1}

            {isActiveSection("redyProduct")?(
              <InputAdornment 
              position="end" className="stock-icon-done-button"
            >
              <IconButton>
                <DoneIcon style={{ color: "#2A3440" }} />
              </IconButton>
            </InputAdornment>

            ):(
              ""
            )}
            
          </li>
          <li 
            className="stock-category-item"
            onClick={()=>handleSelection(categories.position2,"rawProduct")}
          >
            {categories.position2}
            {isActiveSection("rawProduct")?(
              <InputAdornment 
              position="end" className="stock-icon-done-button"
            >
              <IconButton>
                <DoneIcon style={{ color: "#2A3440" }} />
              </IconButton>
            </InputAdornment>

            ):(
              ""
            )}
          </li>
        </ul>
      </div>
    </div>
    
    )
}

export default StockCategorySelector;