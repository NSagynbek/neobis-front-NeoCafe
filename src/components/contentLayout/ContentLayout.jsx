import "./contentLayout.css"
import Pagination from '@mui/material/Pagination';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import { InputAdornment,IconButton } from "@mui/material";
import MenuEditDelete  from "../../modalwindows/menuEditDelete/MenuEditDelete";
import {stateMap,setState} from "../../utils";
import { useState,useEffect } from "react";
import {openModal} from "../../redux/index";
import {useDispatch } from "react-redux";
import { getMenuItems } from "../../api";
import axios, { Axios } from "axios";
import Category from "../category/Category";

 
function ContentLayout(){
  const [menuItems,setMunuItems] = useState([])
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  console.log(menuItems)

 useEffect(()=>{
  const getMenuData = async ()=>{
    try{
      const response = await axios.get("https://tokyo-backender.org.kg/menu/item/all/")
      setMunuItems(response.data)
    }catch(error){
      console.log(error)
    }
  }
  getMenuData()
 },[])

  const dispatch = useDispatch();

  const handleOpenModal = (modalName,type) => {
    dispatch(
      openModal({
        name: modalName,
        type:type
      })
    );
  };

   
   const handleModal = (event, modalName) => {
     event.stopPropagation();
     setModalStates(prev => ({
       ...setState,
       [modalName]: !prev[modalName]
     }));
   };



   const handleClick = (index) => {
    setActiveRowIndex(activeRowIndex === index ? null : index);
  };

 

     return (



    <table 
      className="menu-table"
    >
      <thead>
        <tr>
          <th className="menu-table-id">№</th> 
          <th className="menu-table-title">Наименование</th>
          <th className="menu-table-category"><Category/></th>
          <th className="menu-table-ingredients">
            Состав блюда и граммовка
          </th>
          <th>Стоимость</th>
        </tr>
      </thead>
      <tbody>
        {menuItems.map((item, index) => (
         <tr key={index}>
         <td className="menu-table-id">{item.id}</td>
         <td>{item.name}</td>
         <td>{item.category}</td>
         <td>
             {item.ingredients.map((ingredient, idx) => (
               <span key={idx}>
                 {ingredient.name}&nbsp; 
                 {ingredient.quantity}&nbsp;
                 {ingredient.measurement_unit}&nbsp;
               </span>
             ))}
         </td>
         <td className="menu-table-price">{item.price_per_unit}
           <InputAdornment 
             position="end" 
             className="menu-more-icon"
             onClick={() => handleClick(index)}
             >
             <IconButton>
              <MoreVertIcon/>
             </IconButton>
           </InputAdornment>
           {activeRowIndex === index && <MenuEditDelete />}
         </td>
       </tr>
       
        ))}
      </tbody>
    </table>
  );
}



export default ContentLayout;