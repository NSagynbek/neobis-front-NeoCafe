import "./contentLayout.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { InputAdornment,IconButton } from "@mui/material";
import { MenuEditDelete } from "../modals";
import {stateMap,setState,menuItemDeleteIconStyle} from "../utils";
import { useState } from "react";

function ContentLayout (){

   const [isActive,setIsActive] = useState(false);
   const [modalStates,setModalStates]=useState({
     isOpen:false,
     isOpenFirst:false,
     isOpenSecond:false,
     isOpenThird:false,
     isOpenFourth:false,
     isOpenFifth:false,
     isOpenSixth:false, 
   });

  
   const handleModal = (event, modalName) => {
     event.stopPropagation();
     setModalStates(prev => ({
       ...setState,
       [modalName]: !prev[modalName]
     }));
   };
  

   const closeAllModals = ()=>{
     setModalStates({
      isOpen:false,
      isOpenFirst:false,
      isOpenSecond:false,
      isOpenThird:false,
      isOpenFourth:false,
      isOpenFifth:false,
      isOpenSixth:false, 
     })
   }

  
  const handleIsActive = () => {
    setIsActive(!isActive);
  };


     return (
         <main 
           className="menu-mainContainer"
           onClick={closeAllModals}
         >
           <section className="menu-gridContainer">
             <div 
               className="item first-row number-title"
             >
               <p className="number">№</p>
               <p>Наименование</p>
             </div>
             <div className="item first-row category arrow-down">
               <div 
                 className={`category-arrow ${isActive?"category-arrow__active":""}`} 
                 onClick={handleIsActive}
               >
                 <p>Категория</p>
                 <InputAdornment position="end">
                   <IconButton>
                    {isActive ?
                      (<KeyboardArrowUpIcon style={{color:"#5B7E9A"}} />) :
                      (<KeyboardArrowDownIcon style={{color:"#5B7E9A"}} />)
                    }
                   </IconButton>
                 </InputAdornment>
               </div>               
                 <ul className={`menu-category-content ${isActive?"":"hide"}`}>
                   <li 
                     className="menu-category-item"
                   >
                    Кофе
                    <InputAdornment 
                      position="end" 
                      className="menu-category-item-icon"
                    >
                      <IconButton>
                        <DeleteOutlineIcon />
                      </IconButton>
                    </InputAdornment>
                  </li>
                   <li 
                     className="menu-category-item"
                   >
                    Десерты
                    <InputAdornment 
                      position="end"
                      className="menu-category-item-icon"
                    >
                      <IconButton>
                        <DeleteOutlineIcon/>
                      </IconButton>
                    </InputAdornment>
                   </li>
                   <li 
                     className="menu-category-item"
                   >
                    Коктейли
                    <InputAdornment 
                      position="end"
                      className="menu-category-item-icon"
                    >
                      <IconButton>
                        <DeleteOutlineIcon/>
                      </IconButton>
                    </InputAdornment>
                   </li>
                   <li 
                     className="menu-category-item"
                   >
                    Выпечка
                    <InputAdornment 
                      position="end"
                      className="menu-category-item-icon"
                    >
                      <IconButton>
                        <DeleteOutlineIcon/>
                      </IconButton>
                    </InputAdornment>
                   </li>
                   <li 
                     className="menu-category-item"
                   >
                    Чай
                    <InputAdornment 
                      position="end"
                      className="menu-category-item-icon"
                    >
                      <IconButton>
                        <DeleteOutlineIcon/>
                      </IconButton>
                    </InputAdornment>
                   </li>
                   <li className="menu-category-add-container">
                     <button className="menu-category-add-btn">Добавить</button>
                     <InputAdornment position="end" className="menu-category-add-icon">
                       <IconButton>
                         <AddIcon style={{color:"#5B7E9A"}}/>
                       </IconButton>
                     </InputAdornment>
                   </li>
                 </ul>
             </div>
             <div className="item first-row" >Состав блюда и граммовка</div>
             <div className="item first-row price" >Стоимость</div>
             <div className="item first-row" >Филиал</div>
             <div className="item number-title">
               <p className="number">№</p> 
               <p>Наименование</p>
             </div>
             <div className="item category">Кофе</div>
             <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
             <div className="item price">140 сом</div>
             <div className="item more">
               NeoCafe Ala-Too Square
               <InputAdornment 
                 className="menu-more-icon"
                 onClick={(event)=>handleModal(event,stateMap.isOpen)}
                 position="end"
               >
                 <IconButton>
                   <MoreVertIcon/>
                 </IconButton>
               </InputAdornment>
               {modalStates.isOpen?<MenuEditDelete/>:null}
             </div>
             <div className="item number-title">
               <p className="number">№</p> 
               <p>Наименование</p>
             </div>
             <div className="item category">Кофе</div>
             <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
             <div className="item price">140 сом</div>
             <div className="item more">
               NeoCafe Ala-Too Square
               <InputAdornment 
                 position="end"
                 className="menu-more-icon"
                 onClick={(event)=>handleModal(event,stateMap.isOpenFirst)}
               >
                 <IconButton>
                   <MoreVertIcon/>
                 </IconButton>
               </InputAdornment>
               {modalStates.isOpenFirst?<MenuEditDelete/>:null}
             </div>
             <div className="item number-title">
               <p className="number">№</p> 
               <p>Наименование</p>
             </div>
             <div className="item category">Кофе</div>
             <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
             <div className="item price">140 сом</div>
             <div className="item more">
               NeoCafe Ala-Too Square
               <InputAdornment 
                 className="menu-more-icon" 
                 position="end"
                 onClick={(event)=>handleModal(event,stateMap.isOpenSecond)}
               >
                 <IconButton>
                   <MoreVertIcon/>
                 </IconButton>
               </InputAdornment>
               {modalStates.isOpenSecond?<MenuEditDelete/>:null}
               </div>
             <div className="item number-title">
               <p className="number">№</p> 
               <p>Наименование</p>
             </div>
             <div className="item category">Кофе</div>
             <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
             <div className="item price">140 сом</div>
             <div className="item more">
               NeoCafe Ala-Too Square
               <InputAdornment 
                 className="menu-more-icon" 
                 position="end"
                 onClick={(event)=>handleModal(event,stateMap.isOpenThird)}
               >
                 <IconButton>
                   <MoreVertIcon/>
                 </IconButton>
               </InputAdornment>
               {modalStates.isOpenThird?<MenuEditDelete/>:null}
             </div>
             <div className="item number-title">
               <p className="number">№</p> 
               <p>Наименование</p>
             </div>
             <div className="item category">Кофе</div>
             <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
             <div className="item price">140 сом</div>
             <div className="item more">
               NeoCafe Ala-Too Square
               <InputAdornment 
                 className="menu-more-icon" 
                 position="end"
                 onClick={(event)=>handleModal(event,stateMap.isOpenFourth)}
               >
                 <IconButton>
                   <MoreVertIcon/>
                 </IconButton>
               </InputAdornment>
               {modalStates.isOpenFourth?<MenuEditDelete/>:null}
             </div>
             <div className="item number-title">
               <p className="number">№</p> 
               <p>Наименование</p>
             </div>
             <div className="item category">Кофе</div>
             <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
             <div className="item price">140 сом</div>
             <div className="item more">
               NeoCafe Ala-Too Square
               <InputAdornment 
                 className="menu-more-icon" 
                 position="end"
                 onClick={(event)=>handleModal(event,stateMap.isOpenFifth)}
               >
                 <IconButton>
                   <MoreVertIcon/>
                 </IconButton>
               </InputAdornment>
               {modalStates.isOpenFifth?<MenuEditDelete/>:null}
             </div>
             <div className="item number-title">
               <p className="number">№</p> 
               <p>Наименование</p>
             </div>
             <div className="item category">Кофе</div>
             <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
             <div className="item price">140 сом</div>
             <div className="item more">
               NeoCafe Ala-Too Square
               <InputAdornment 
                 className="menu-more-icon" 
                 position="end"
                 onClick={(event)=>handleModal(event,stateMap.isOpenSixth)}
               >
                 <IconButton>
                   <MoreVertIcon/>
                 </IconButton>
               </InputAdornment>
               {modalStates.isOpenSixth?<MenuEditDelete/>:null}
             </div>
           </section>

           <div className="menu-footer">
             <Stack spacing={2}>
               <Pagination count={10} variant="outlined" shape="rounded" />
             </Stack>
           </div>
    
         </main>
     )
}

export default ContentLayout;