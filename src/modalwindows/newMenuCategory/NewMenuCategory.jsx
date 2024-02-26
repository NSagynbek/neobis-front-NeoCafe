import "./newMenuCategory.css";
import { InputAdornment,IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { closeModal } from "../../redux";
import { addMenuCategory } from "../../api";
import { toast } from 'react-toastify';
import {useDispatch } from "react-redux";
import { updateMenuCategory } from "../../redux";


function NewMenuCategory (){

    const dispatch = useDispatch();
    
    const [newCategory,setNewCategory]=useState("");
    const [activeSection, setActiveSection] = useState(null);

    const handleButtonClick = (section) => {
      setActiveSection(section === activeSection ? null : section);
    };
    
    const isActive = (section) => section === activeSection;

    const handleCloseModal = ()=>{
        dispatch(closeModal())   
    }

    const handleChange = (e)=>{
      setNewCategory(e.target.value)
    }

    const newMenuCategory = async ()=>{
      try{
        const payload = {
          name:newCategory
        }
        const response = await addMenuCategory(payload);
        dispatch(updateMenuCategory(response))
        showToast(`Новая категория ${response.name} успешно добавлено!`)
      }catch(error){
        console.log(error)
      }
    }

    const showToast = (msg) => {
      toast.success(msg);
    };
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
              onChange={handleChange}
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
              onClick={()=>{
                handleButtonClick("add")
                newMenuCategory()
              }}
            >
              Добавить
            </button>
          </div>
        </div>
    )
}

export default NewMenuCategory;