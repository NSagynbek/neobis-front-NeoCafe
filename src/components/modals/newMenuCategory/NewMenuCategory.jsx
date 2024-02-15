import "./newMenuCategory.css";
import { InputAdornment,IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { closeModal } from "../../../redux";
import {useDispatch } from "react-redux";

function NewMenuCategory (){
    const dispatch = useDispatch();
    const [activeSection, setActiveSection] = useState(null);
    const handleButtonClick = (section) => {
      setActiveSection(section === activeSection ? null : section);
    };

    const isActive = (section) => section === activeSection;

    const handleCloseModal = ()=>{
        dispatch(closeModal())   
    }

    return (
        <div 
        className="new-menu-category-modal"
        >
          <div 
            className="new-menu-category-modal__category-container"
          >
            <p 
              className="new-menu-category-modal__category-title"
            >
              Новая категория
            </p>
            <div className="new-menu-category-modal__icon-container">
              <InputAdornment 
                position="end"
                className="new-menu-category-modal__icon-position"
                onClick={handleCloseModal}
              >
                <IconButton>
                  <CloseIcon style={{color:"#2A3440"}}/>
                </IconButton>
              </InputAdornment>
            </div>
          </div>
          <div 
            className="new-menu-category-modal__input-container"
          >
            <p 
              className="new-menu-category-modal__input-label"
            >
              Название
            </p>
            <input 
              type="text" 
              className="new-menu-category-modal__input-field" 
            />
          </div>
          <div className="new-menu-category-modal__button-container">
            <button 
              className={`new-menu-category-modal__cancel-button 
                   ${isActive("cancel")?"menu-category-btn-active":""}`}
              onClick={()=>handleButtonClick("cancel")}
            >
              Отмена
            </button>
            <button 
              className={`new-menu-category-modal__add-button 
                   ${isActive("add")?"menu-category-btn-active":""}`}
              onClick={()=>handleButtonClick("add")}
            >
              Добавить
            </button>
          </div>
        </div>
    )
}

export default NewMenuCategory;