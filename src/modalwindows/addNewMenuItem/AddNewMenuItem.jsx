import "./addNewMenuItem.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux";
import { cloudUpload } from "../../assets/index";
import { useSelector } from "react-redux";
import Ingredients from "../../components/ingredients/Ingredients";
import MenuCategorySelector from "../../components/menuCategorySelector/MenuCategorySelector";

function AddNewMenuItem() {
  const modalData = useSelector((state) => state.modalData);
  const [activeSection, setActiveSection] = useState(null);
  const [files, setFiles] = useState(null);
  const [isImageDrag, setIsImageDrag] = useState(false);
  const [ingredientsList, setIngredientsList] = useState([]);

  const dispatch = useDispatch();

  const handleButtonClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  const isActive = (section) => section === activeSection;

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsImageDrag(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFiles(e.dataTransfer.files[0]);
    setIsImageDrag(false);
  };

  const handleFileInputChange = async (e) => {
    setFiles(e.target.files[0]);
  };

  const addIngredients = () => {
    setIngredientsList(
      [...ingredientsList, 
      <Ingredients key={ingredientsList.length} />
    ]);
  };

  return (
    <div className="add-menu-new-item-container">
      <div className="menu-add-new-item-header">
        {modalData.type === "createMenu" && 
        <p className="menu-add-new-item-title">Новая позиция</p>}
        {modalData.type === "editMenu" && 
        <p className="menu-add-new-item-title">Редактирование</p>}
        <InputAdornment 
          position="end" 
          className="menu-category-add-close-icon" 
          onClick={handleCloseModal}>
          <IconButton>
            <CloseIcon style={{ color: "#2A3440" }} />
          </IconButton>
        </InputAdornment>
      </div>

      <div 
        className="menu-add-new-item-image-container" 
        onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e)}>
        <div 
          className={`menu-add-new-item-image-dashed 
          ${isImageDrag ? "image-upload-active" : ""}`}>
          <p className="menu-add-new-item-image-title">
            Добавьте фото к позиции
          </p>
          <label htmlFor="menu-add-new-item-image">
            <div className="menu-add-new-item-image-subContainer">
              <img 
                src={files ? URL.createObjectURL(files) : 
                   (cloudUpload)} alt="cloud upload image" 
              />
            </div>
            <p className="menu-add-new-item-image-text">
              Перетащите изображение для изменения или <span>обзора</span>
            </p>
          </label>
          <input 
            id="menu-add-new-item-image" 
            type="file" 
            onChange={handleFileInputChange} />
        </div>
      </div>

      <div className="add-menu-new-item__name_price-container">
        <p 
          className="add-menu-new-item__name_price-text">
          Наименование, категория и стоимость
        </p>
        <label 
          htmlFor="item-name" 
          className="item-name__label">
          Наименование
        </label>
        <input id="item-name" type="text" />
        <div className="text-text">
          <label 
            htmlFor="item-description" 
            className="item-name__label">
            Описание
          </label>
          <textarea 
            id="item-description" 
            name="myTextArea" 
            rows="1" 
            cols="50">
          </textarea>
        </div>
        <div className="add-menu-new-item-content-container">
          <div className="add-menu-new-item-category-container">
            <MenuCategorySelector />
            <div className="add-menu-new-item-price-container">
              <label 
                htmlFor="add-menu-new-item-price-item" 
                className="add-menu-new-item-price-item">
                Стоимость
              </label>
              <input 
                id="add-menu-new-item-price-item" 
                type="text" 
              />
            </div>
          </div>
          <div className="add-menu-new-ingredients-container">
            <p 
              className="add-menu-new-item__name_price-text">
              Состав блюда и граммовка
            </p>
            <Ingredients />
            {ingredientsList.map((ingredient, index) => (
              <div key={index}>{ingredient}</div>
            ))}
          </div>

          <div className="test-btn">
            <button 
              className="add-more-menu-items-btn" 
              onClick={addIngredients}>
              Добавить еще +
            </button>
          </div>

          <div className="menu-add-new-item-btns-container">
            <button
              className={`new-menu-category-modal__cancel-button 
              ${isActive("cancel") ? "menu-category-btn-active" : ""}`}
              onClick={() => handleButtonClick("cancel")}
            >
              Сохранить
            </button>
            <button
              className={`new-menu-category-modal__add-button 
              ${isActive("add") ? "menu-category-btn-active" : ""}`}
              onClick={() => {
                handleButtonClick("add");
                handleCloseModal();
              }}
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AddNewMenuItem;
