import "../addNewMenuItem/addNewMenuItem.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { cloudUpload } from "../../assets/index";
import { useSelector} from "react-redux";
import Ingredients from "../../components/ingredients/Ingredients";
import MenuCategorySelector from "../../components/menuCategorySelector/MenuCategorySelector";
import {editMenuItem,getMenuItemDetails} from "../../api";
import { toast } from 'react-toastify';
import { 
  updateMenuCategory,
  ingredientsRefresh,
  closeModal  } from "../../redux";
import { Bars } from 'react-loader-spinner'


function EditMenuItem(){
  const dispatch = useDispatch(); 
  
    const modalData = useSelector((state) => state.modalData);

    const [menuItem,setMenuItem] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const [isImageDrag, setIsImageDrag] = useState(false);
    const [ingredientsList, setIngredientsList] = useState([]);
    const [files, setFiles] = useState(null);
    const category = useSelector((state)=>state.category);
    const [formData,setFormData]=useState(null)
    const [loading,setLoading] = useState(false);
   
   
    console.log(menuItem)

      useEffect(()=>{
        const getmenuItem = async ()=>{
          const response = await getMenuItemDetails(modalData.details.id);
          setMenuItem(response)
        }
        getmenuItem();
    
      },[])
   

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
    setMenuItem((prev)=>({
      ...prev,
      item_image:e.dataTransfer.files[0]
    }))
    setIsImageDrag(false);
  };

  const handleFileInputChange = (e) => {
    setFiles(e.target.files[0]);
    setMenuItem((prev) => ({
      ...prev,
      item_image: e.target.files[0],
    }));
  };

  const addIngredients = () => {
    setIngredientsList(
      [...ingredientsList, 
      <Ingredients key={ingredientsList.length} />
    ]);
  };

  //Тостифай для уведомлений
  const showToast = (msg) => {
    toast.success(msg);
  };

  //Получение данных из инпутов и компонентов
  const getItemName = (e)=>{
    const updatedName = e.target.value
    setMenuItem((prev)=>({
      ...prev,
      name:updatedName
    }))
  }

  const getDescription = (e)=>{
    const updatedDescription = e.target.value;
    setMenuItem((prev)=>({
      ...prev,
      description:updatedDescription
    }))
  }

  

  
  const menuPrice = (e)=>{
    const updatedPrice = e.target.value
    setMenuItem((prev)=>({
      ...prev,
      price_per_unit:updatedPrice
    }))
  }

  
// Отправка Данных
useEffect(() => {
  if (menuItem) {
    const data = new FormData();
    data.append('name', menuItem.name || '');
    data.append('description', menuItem.description || '');
    if (menuItem.item_image instanceof File) {
      data.append('item_image', menuItem.item_image);
    } else {
      fetch(menuItem.item_image)
        .then(response => response.blob())
        .then(blob => data.append('item_image', blob, 'image.jpg'));
    }
    data.append('price_per_unit', parseInt(menuItem.price_per_unit));
    data.append('category', category);

    for (let i = 0; i < menuItem.ingredients.length; i++) {
      const currentIngredient = menuItem.ingredients[i];
      data.append(`ingredients[${i}]name`, currentIngredient.name);
      data.append(`ingredients[${i}]quantity`, parseInt(currentIngredient.quantity));
      data.append(`ingredients[${i}]measurement_unit`, currentIngredient.measurement_unit);
    }

    setFormData(data);
    
    
  }

  
}, [menuItem, category]);

 //Запрос на добовление новой пазиции меню
const submitData = async ()=>{
 setLoading(true)
  try{
    const response = await editMenuItem(menuItem.id,formData)
    showToast(`Обновили позицию ${response.name}`);
    dispatch(updateMenuCategory())
    dispatch(closeModal());
    dispatch(ingredientsRefresh());
    setLoading(false)
  }catch(error){
    console.log(error)
  }
}
return (
  <>
    {menuItem && menuItem.category ? (
      <div className="add-menu-new-item-container">
        <div className="menu-add-new-item-header">
          <p className="menu-add-new-item-title">Редактирование</p>
          <InputAdornment
            position="end"
            className="menu-category-add-close-icon"
            onClick={handleCloseModal}
          >
            <IconButton>
              <CloseIcon style={{ color: "#2A3440" }} />
            </IconButton>
          </InputAdornment>
        </div>

        <div
          className="menu-add-new-item-image-container"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e)}
        >
          <div
            className={`menu-add-new-item-image-dashed ${
              isImageDrag ? "image-upload-active" : ""
            }`}
          >
            <p className="menu-add-new-item-image-title">
              Добавьте фото к позиции
            </p>
            <label htmlFor="menu-add-new-item-image">
              <div className="menu-add-new-item-image-subContainer">
                <img
                  src={files ? URL.createObjectURL(files) : (menuItem.item_image?menuItem.item_image:cloudUpload)}
                  alt="cloud upload image"
                />
              </div>
              <p className="menu-add-new-item-image-text">
                Перетащите изображение для изменения или <span>обзора</span>
              </p>
            </label>
            <input id="menu-add-new-item-image" type="file" onChange={handleFileInputChange} />
          </div>
        </div>

        <div className="add-menu-new-item__name_price-container">
          <p className="add-menu-new-item__name_price-text">Наименование, категория и стоимость</p>
          <label htmlFor="item-name" className="item-name__label">
            Наименование
          </label>
          <input id="item-name" 
            type="text" 
            onChange={getItemName} 
            value={menuItem.name} 
          />
          <div className="text-text">
            <label 
              htmlFor="item-description" 
              className="item-name__label"
            >
              Описание
            </label>
            <textarea
              id="item-description"
              name="myTextArea"
              rows="1"
              cols="50"
              onChange={getDescription}
              value={menuItem.description}
            >

            </textarea>
          </div>
          <div className="add-menu-new-item-content-container">
            <div className="add-menu-new-item-category-container">
              <MenuCategorySelector 
                menuItemCategory={menuItem.category} 
                setMenuItem={setMenuItem}
              />
              <div className="add-menu-new-item-price-container">
                <label htmlFor="add-menu-new-item-price-item" className="add-menu-new-item-price-item">
                  Стоимость
                </label>
                <input
                  id="add-menu-new-item-price-item"
                  type="text"
                  onChange={menuPrice}
                  placeholder="сом"
                  value={menuItem.price_per_unit}
                />
              </div>
            </div>
            <div className="add-menu-new-ingredients-container">
              <p className="add-menu-new-item__name_price-text">Состав блюда и граммовка</p>
              {menuItem.ingredients.map((el, index) => (
                <Ingredients 
                  key={index} 
                  el={el} 
                  menuItem={menuItem} 
                  setMenuItem={setMenuItem} 
                />
              ))}

              {ingredientsList.map((ingredient, index) => (
                <div 
                  key={index}
                >
                  {ingredient}
                </div>
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
                className={`new-menu-category-modal__cancel-button ${
                  isActive("cancel") ? "menu-category-btn-active" : ""
                }`}
                onClick={() => {
                  handleButtonClick("cancel");
                  submitData();
                }}
              > 
                {loading?(
                  <Bars
                  height="30"
                  width="30"
                  color="white"
                />
                ):(
                  "Сохранить"
                )}
                
              </button>
              <button
                className={`new-menu-category-modal__add-button ${
                  isActive("add") ? "menu-category-btn-active" : ""
                }`}
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
    ) : (
      <p>Загрузка...</p>
    )}
  </>
);

    
}

export default EditMenuItem;
