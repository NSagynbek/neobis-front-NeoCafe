import "./styles.css";
import { InputAdornment, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from "react";

function MeasurementSelector (
  {el,setMenuItem,setMeasurement,setStockItems,stockItems}
  ){

    const defaultMeasureUnit = ["ml", "мл"]; 
    const [isMeasure,setIsMeasure]=useState(false);
    const [measureUnit, setMeasureUnit] = useState(stockItems && stockItems.measurement_unit ? stockItems.measurement_unit : defaultMeasureUnit);
    
    
    const handleMeasurement = (measure)=>{      
      
        setMeasureUnit(measure);
        setIsMeasure(!isMeasure);
        if(setMeasurement){setMeasurement(measure)};
        if(setStockItems){setStockItems((prev)=>({...prev,["measurement_unit"]:measure[1]}))};

        if(setMenuItem){
          setMenuItem(prev => {
            // Find the index of the item you want to update
            const index = prev.ingredients.findIndex(item => item.id === el.id);
            if (index !== -1) {
              // If the item exists in the array, update it
              const updatedIngredients = [...prev.ingredients];
              updatedIngredients[index] = { ...updatedIngredients[index], measurement_unit:measure[1]};
              return { ...prev, ingredients: updatedIngredients };
            }
            // If the item does not exist in the array, return the previous state unchanged
            return prev;
          });

        }
       
    }

    const handleIsMeasure=()=>{
      setIsMeasure(!isMeasure);
    }


    return ( 
        <div className={`menu-new-ingredients-subContainer 
           ${isMeasure ? 
           ("menu-new-ingredients-subContainer-transform") : ("")}`}
         >
           <div>
             <p className="measurement-text">
             {el?.measurement_unit || (stockItems?stockItems.measurement_unit:measureUnit[1])}
             </p>
           </div>

           <InputAdornment
             position="end"
             className="menu-new-ingredients-dropdown-icons"
             onClick={handleIsMeasure} 
           >
             <IconButton>
               {isMeasure ?
                 (<KeyboardArrowUpIcon style={{ color: "#5B7E9A" }} />):                 
                 (<KeyboardArrowDownIcon style={{ color: "#5B7E9A" }} />)
               }
             </IconButton>
           </InputAdornment>

            <ul className={`menu-new-ingredients-list 
                ${isMeasure ? "" : "toggleMeasurement"}`}
            >
              <li  
                className="menu-new-ingredients-item"
                onClick={()=>handleMeasurement(["gr","гр"])}
                name="measurement_unit"
              >
                гр
              </li>
              <li 
                className="menu-new-ingredients-item" 
                onClick={()=>handleMeasurement(["ml","мл"])}
                name="measurement_unit"
              >
                мл
              </li>
              <li 
                  className="menu-new-ingredients-item" 
                  onClick={()=>handleMeasurement(["l","л"])}
                  name="measurement_unit"
              >
                л
              </li >
              <li 
                className="menu-new-ingredients-item"
                onClick={()=>handleMeasurement(["kg","кг"])}
                name="measurement_unit"
              >
                кг
              </li>
            </ul>
          </div>

    )
}

export default MeasurementSelector;