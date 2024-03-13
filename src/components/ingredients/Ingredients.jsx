import "./ingredients.css";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectIngredients } from "../../redux";
import MeasurementSelector from "../measurementSelector/MeasurementSelector";

function Ingredients ({el,setMenuItem}){

    const dispatch = useDispatch();
    
    const [ingredient,setIngredient] = useState("");
    const [amount,setAmount]=useState(null)
    const [measurement,setMeasurement]=useState(["ml","мл"]);

    useEffect(() => {
      if (ingredient && amount) {
        dispatch(selectIngredients({ name: ingredient, amount, measurement: measurement[1] }));
      }
    }, [measurement, dispatch]);
    

   
   




    //Получение данных из инпутов
    const ingredientTitle = (e) => {
      const updatedTitle = e.target.value;
      setIngredient(e.target.value);
       if(setMenuItem){
         setMenuItem(prev => {
           // Find the index of the item you want to update
           const index = prev.ingredients.findIndex(item => item.id === el.id);
           if (index !== -1) {
             // If the item exists in the array, update it
             const updatedIngredients = [...prev.ingredients];
             updatedIngredients[index] = { ...updatedIngredients[index], name: updatedTitle };
             return { ...prev, ingredients: updatedIngredients };
           }
           // If the item does not exist in the array, return the previous state unchanged
           return prev;
         });

       }
      
    };
    

    const ingredientAmount = (e)=>{
      const updatedAmount = e.target.value
      setAmount(updatedAmount)
      if(setMenuItem){
        setMenuItem(prev => {
          // Find the index of the item you want to update
          const index = prev.ingredients.findIndex(item => item.id === el.id);
          if (index !== -1) {
            // If the item exists in the array, update it
            const updatedIngredients = [...prev.ingredients];
            updatedIngredients[index] = { ...updatedIngredients[index], quantity: updatedAmount};
            return { ...prev, ingredients: updatedIngredients };
          }
          // If the item does not exist in the array, return the previous state unchanged
          return prev;
        });
      }
    

    }


    
    
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
              value={el?.name || ingredient}
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
             value={el?.quantity || amount}
            />
         </div>

         <MeasurementSelector 
           el={el} 
           setMenuItem={setMenuItem}
           setMeasurement={setMeasurement}
         />
        </div>
    )
}

export default Ingredients;