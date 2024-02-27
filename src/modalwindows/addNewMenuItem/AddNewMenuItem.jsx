import "./addNewMenuItem.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux";
import { cloudUpload } from "../../assets/index";
import { useSelector } from "react-redux";
import Ingredients from "../../components/ingredients/Ingredients";
import MenuCategorySelector from "../../components/menuCategorySelector/MenuCategorySelector";
import { addNewMenuItem } from "../../api";

function AddNewMenuItem() {

  const modalData = useSelector((state) => state.modalData);
  const [activeSection, setActiveSection] = useState(null);
  const [isImageDrag, setIsImageDrag] = useState(false);
  const [ingredientsList, setIngredientsList] = useState([]);
  // Стейты для отправки 
  const [files, setFiles] = useState(null);
  const [menuTitle,setMenuTitle]=useState("");
  const [itemDescription,setItemDescription]=useState("");
  const [itemPrice,setItemPrice]=useState(null);
  const [test,setTest]=useState(null)
  // Функции для функцианала модалки
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

  //Получение данных из инпутов
  const getItemNAme = (e)=>{
    setMenuTitle(e.target.value)
  }

  const getDescription = (e)=>{
    setItemDescription(e.target.value)
  }

  const category = useSelector((state)=>state.category)
  
  const menuPrice = (e)=>{
    setItemPrice(e.target.value)
  }

  const ingredients = useSelector((state)=>state.ingredients)
 console.log(ingredients)
// Отправка Данных

let branch = 6
const categoryy = "Чай"

   useEffect(() => {
     const data = {
       name: menuTitle,
       description: itemDescription,
       item_image: files,
       price_per_unit: parseInt(itemPrice),
       branch:null,
       category:categoryy,
       ingredients: [
         {
           name: ingredients[0], 
           quantity: parseInt(ingredients[1]),
           measurement_unit: ingredients[2]
         }
       ]
     };

     setTest(data)

     // Now you can use `data` for further processing or sending to the server
   }, [menuTitle, itemDescription, files, itemPrice, category, ingredients]);


  
const submitData = async ()=>{
  console.log(test)
  try{
    const response = await addNewMenuItem(test)
    console.log(response)
  }catch(error){
    console.log(error)
  }
}

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
        <input 
          id="item-name" 
          type="text" 
          onChange={getItemNAme}
          />
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
            cols="50"
            onChange={getDescription}
            >
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
                onChange={menuPrice}
              />
            </div>
          </div>
          <div className="add-menu-new-ingredients-container">
            <p 
              className="add-menu-new-item__name_price-text">
              Состав блюда и граммовка
            </p>
            <Ingredients/>
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
              onClick={() => { 
                handleButtonClick("cancel")
                submitData()
              }}
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
