import "./ingredients.css";
import { InputAdornment, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectIngredients } from "../../redux";

function Ingrediens (){

    const dispatch = useDispatch();
    //стейт для контроля сэлектором
    const [isMeasure,setIsMeasure]=useState(false);
    // стейты для отправки
    const [measurement,setMeasurement]=useState(["ml","мл"]);
    const [ingredient,setIngredient] = useState("");
    const [amount,setAmount]=useState(null)

    const handleMeasurement = (measure)=>{      
        setMeasurement(measure)
        setIsMeasure(!isMeasure);
    }

    //Получение данных из инпутов

    const ingredientTitle = (e)=>{
      setIngredient(e.target.value)
    }

    const ingredientAmount = (e)=>{
      setAmount(e.target.value)
    }

    useEffect(() => {
      if (ingredient !== "" || amount !== null || (measurement && measurement[0])) {
        const newData = [];
    
        if (ingredient !== "") {
          newData.push(ingredient);
        }
    
        if (amount !== null) {
          newData.push(amount);
        }
    
        if (measurement && measurement[1]) {
          newData.push(measurement[1]);
        }
    
        if (newData.length >= 3) {
          dispatch(selectIngredients(newData));
        }
      }
    }, [ingredient, amount, measurement, dispatch]);
    
    
    return (
        <div className="add-menu-new-ingredients-subContainer">
          <div className="add-menu-new-title-container">
            <label
              htmlFor="menu-ingredient-name"
              className="item-name__label"
            >  
              Наименование
            </label>
            <input 
              id="menu-ingredient-name" 
              type="text"
              onChange={ingredientTitle}
            />
          </div>

         <div className="menu-new-ingredients-container">
           <label htmlFor="menu-ingredient-amount"
             className="item-name__label"
           >   
             Кол-во (в гр, мл, л, кг)
           </label>
           <input 
             id="menu-ingredient-amount" 
             type="text" 
             onChange={ingredientAmount}
            />
         </div>

         <div className={`menu-new-ingredients-subContainer 
           ${isMeasure ? 
          ("menu-new-ingredients-subContainer-transform") : ("")}`}
         >
           <div>
             <p className="measurement-text">
               {measurement[1]||measurement[1]}
             </p>
           </div>

           <InputAdornment
             position="end"
             className="menu-new-ingredients-dropdown-icons"
             onClick={handleMeasurement} 
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
              >
                гр
              </li>
              <li 
                className="menu-new-ingredients-item" 
                onClick={()=>handleMeasurement(["ml","мл"])}
              >
                мл
              </li>
              <li 
                  className="menu-new-ingredients-item" 
                  onClick={()=>handleMeasurement(["l","л"])}
              >
                л
              </li >
              <li 
                className="menu-new-ingredients-item"
                onClick={()=>handleMeasurement(["kg","кг"])}
              >
                кг
              </li>
            </ul>
          </div>
        </div>
    )
}

export default Ingrediens;