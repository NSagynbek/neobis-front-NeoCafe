import "./deleteMenuCategory.css";
import { InputAdornment,IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import {useDispatch } from "react-redux";
import { closeModal } from "../../redux";
import { useSelector } from "react-redux";
function DeleteMenuCategory(){

    const dispatch = useDispatch();
    const modalData = useSelector((state) => state.modalData);
    const [activeSection, setActiveSection] = useState(null);
    
    const handleButtonClick = (section) => {
      setActiveSection(section === activeSection ? null : section);
    };

    const isActive = (section) => section === activeSection;

    const handleCloseModal = ()=>{
        dispatch(closeModal())   
    }

  return (
    <div className="menu-category-delete-container">
        <div className="menu-category-delete-header">
            <p className="menu-category-delete-title" >Удаление</p>
            <InputAdornment 
              position="end"
              className="menu-category-delete-close-icon"
              onClick={handleCloseModal}
            >
              <IconButton>
                <CloseIcon style={{color:"#2A3440"}}/>
              </IconButton>
            </InputAdornment>
        </div>
        
        {modalData.type === "deleteMenu"&& 
        <p className="menu-category-delete-question">
          Вы действительно хотите удалить позицию
          <span> "Кофе"</span>?      
        </p>}

        {modalData.type === "deleteCategory"&& 
        <p className="menu-category-delete-question">
          Вы действительно хотите удалить категорию
          <span> "Чай"</span>?      
        </p>}
        
        <div className="new-menu-category-modal__button-container">
          <button 
            className={`new-menu-category-modal__cancel-button 
                   ${isActive("cancel")?"menu-category-btn-active":""}`}
            onClick={()=>handleButtonClick("cancel")}
            >
              Да
            </button>
            <button 
              className={`new-menu-category-modal__add-button 
                   ${isActive("add")?"menu-category-btn-active":""}`}
              onClick={()=>{
                handleButtonClick("add")
                handleCloseModal()
              }}
            >
              Нет
            </button>
          </div>
    </div>
  )
}

export default DeleteMenuCategory;