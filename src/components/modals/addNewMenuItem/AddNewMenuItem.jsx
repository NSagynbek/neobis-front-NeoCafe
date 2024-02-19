import "./addNewMenuItem.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux";
import { cloudUpload } from "../../../assets/index";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function AddNewMenuItem() {

    const [activeSection, setActiveSection] = useState(null);
    const[files,setFiles] = useState(null);
    const [isImageIntered,setIsImageIntered]=useState(false);
    const dispatch = useDispatch();

    const handleButtonClick = (section) => {
        setActiveSection(section === activeSection ? null : section);
    };

    const isActive = (section) => section === activeSection;

    const handleCloseModal = () => {
        dispatch(closeModal());
    }

    const handleDragOver = (e) => {
        e.preventDefault();
      };

    const handleDrop = (e) => {
        e.preventDefault();
        setFiles(e.dataTransfer.files[0]);
      
      };

    const handleFileInputChange = async (e) => {
        setFiles(e.target.files[0])
      };

    const handleFiles = () => {
        
      };

    return (
        <div className="add-menu-new-item-container">
            <div className="menu-add-new-item-header">
                <p className="menu-add-new-item-title">Новая позиция</p>
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

            <div className="menu-add-new-item-image-container"
              onDragOver={(e)=>handleDragOver(e)}
              onDrop={(e)=>handleDrop(e)}
            >
               
              <div className="menu-add-new-item-image-test">

             
            
                <p
                    className="menu-add-new-item-image-title"
                >
                    Добавьте фото к позиции
                </p>
                <label htmlFor="menu-add-new-item-image">
                    <div 
                      className="menu-add-new-item-image-subContainer"
                      
                    >
                        {files?(
                          <img src={files ? URL.createObjectURL(files): cloudUpload} alt="cloud upload image"/>
                        ):(
                            <img src={cloudUpload} alt="cloud upload image"/>  
                        )}
                        
                    </div>
                    <p
                        className="menu-add-new-item-image-text"
                    >
                        Перетащите изображение для изменения или
                        <span> обзора</span>
                    </p>
                </label>
                <input
                    id="menu-add-new-item-image"
                    type="file"
                    onChange={handleFileInputChange}
                />


</div>
               
            </div>

            <div className="add-menu-new-item__name_price-container">
                <p
                    className="add-menu-new-item__name_price-text"
                >
                    Наименование, категория и стоимость
                </p>
                <label
                    htmlFor="item-name"
                    className="item-name__label"
                >
                    Наименование
                </label>
                <input id="item-name" type="text" />

                <div className="add-menu-new-item-content-container">
                    <div className="add-menu-new-item-category-container">
                        <div className="add-menu-new-item-category-subContainer-container">
                            <p className="item-name__label">Категория</p>
                            <div className="add-menu-new-item-dropdown-container">
                                <div className="add-menu-new-item-dropdown-subContainer">
                                    <p
                                        className="add-menu-new-item-dropdown-title">
                                        Выберите категорию
                                    </p>
                                    <InputAdornment
                                        position="end"
                                        className="add-menu-new-item-dropdown-icons"
                                    >
                                        <IconButton>
                                            {isActive ?
                                                (<KeyboardArrowUpIcon style={{ color: "#5B7E9A" }} />) :
                                                (<KeyboardArrowDownIcon style={{ color: "#5B7E9A" }} />)
                                            }
                                        </IconButton>
                                    </InputAdornment>
                                </div>
                                <ul className="add-menu-new-item-dropdown-categries">
                                    <li className="add-menu-new-item-dropdown-item">Кофе</li>
                                    <li className="add-menu-new-item-dropdown-item">Десерты</li>
                                    <li className="add-menu-new-item-dropdown-item">Выпечка</li>
                                    <li className="add-menu-new-item-dropdown-item">Коктейли</li>
                                    <li className="add-menu-new-item-dropdown-item">Чай</li>
                                </ul>
                            </div>
                        </div>
                        <div className="add-menu-new-item-price-container">
                            <label
                                htmlFor="add-menu-new-item-price-item"
                                className="add-menu-new-item-price-item"
                            >
                                Стоимость
                            </label>
                            <input id="add-menu-new-item-price-item" type="text" />
                        </div>
                    </div>
                    <div className="add-menu-new-ingredients-container">
                        <p className="add-menu-new-item__name_price-text">Состав блюда и граммовка</p>
                        <div className="add-menu-new-ingredients-subContainer">
                            <div className="add-menu-new-title-container">
                                <label
                                    htmlFor="menu-ingredient-name"
                                    className="item-name__label"
                                >Наименование</label>
                                <input id="menu-ingredient-name" type="text" />
                            </div>

                            <div className="menu-new-ingredients-container">
                                <label htmlFor="menu-ingredient-amount"
                                    className="item-name__label"
                                >Кол-во (в гр, мл, л, кг)</label>
                                <input id="menu-ingredient-amount" type="text" />
                            </div>

                            <div className="menu-new-ingredients-subContainer">
                                <select id="measurement" name="ingredients">
                                    <option value="gram">гр</option>
                                    <option value="ml">мл</option>
                                    <option value="liter">л</option>
                                    <option value="kg">кг</option>
                                </select>
                            </div>
                        </div>
                        <button className="add-more-menu-items-btn">Добавить еще +</button>
                    </div>
                </div>
            </div>

            <div className="new-menu-category-modal__button-container">
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
                        handleButtonClick("add")
                        handleCloseModal()
                    }}
                >
                    Отмена
                </button>
            </div>
        </div>
    )
}

export default AddNewMenuItem;
