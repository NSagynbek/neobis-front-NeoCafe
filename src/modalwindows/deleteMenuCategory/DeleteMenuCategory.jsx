import "./deleteMenuCategory.css";
import { InputAdornment,IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import {useDispatch } from "react-redux";
import { closeModal } from "../../redux";
import { useSelector } from "react-redux";
import { deleteMenuCategory } from "../../api";
import { toast } from 'react-toastify';

function DeleteMenuCategory(){

    const showToast = (msg) => {
      toast.error(msg);
    };

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

    const deleteCategory = async ()=>{
      console.log("test")
      try{
        const response = await deleteMenuCategory(modalData.details.id)
        console.log(response)
      }catch(error){
        showToast(error.response.data.detail)  
      }
      

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
          <span> "{modalData.details.name}"</span>?      
        </p>}
        
        <div className="new-menu-category-modal__button-container">
          <button 
            className={`new-menu-category-modal__cancel-button 
                   ${isActive("cancel")?"menu-category-btn-active":""}`}
            onClick={()=>{
              handleButtonClick("cancel")
              deleteCategory()
            }}
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