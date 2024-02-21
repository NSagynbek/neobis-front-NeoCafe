import "./addNewMenuItem.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux";
import { cloudUpload } from "../../assets/index";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useSelector } from "react-redux";


function AddNewMenuItem() {
    const modalData = useSelector((state)=>state.modalData);

    const [activeSection, setActiveSection] = useState(null);
    const[files,setFiles] = useState(null);
    const [isClicked,setIsClicked] = useState(false);
    const [category,setCategory] = useState(null);
    const [measurement,setMeasurement]=useState(["ml","мл"]);
    const [isMeasure,setIsMeasure]=useState(false);
    const [isImageDrag,setIsImageDrag]=useState(false);
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
        setIsImageDrag(true);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setFiles(e.dataTransfer.files[0]);
        setIsImageDrag(false);
      
    };

    const handleFileInputChange = async (e) => {
        setFiles(e.target.files[0])
    };

    const handleToggle = () => {
        setIsClicked(!isClicked);
    };
    
    const handleCategory = (category)=>{      
        setCategory(category)
        setIsClicked(!isClicked);
    }

    const handleMeasurement = (measure)=>{      
        setMeasurement(measure)
        setIsMeasure(!isMeasure);
    }
    return (
        <div className="add-menu-new-item-container">
            <div className="menu-add-new-item-header">
              {modalData.type==="createMenu"&&<p className="menu-add-new-item-title">Новая позиция</p>}
              {modalData.type==="editMenu"&&<p className="menu-add-new-item-title">Редактирование</p>}
                
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
               
              <div className={`menu-add-new-item-image-dashed 
                ${isImageDrag ? "image-upload-active" : ""}`}>          
                <p
                    className="menu-add-new-item-image-title"
                >
                    Добавьте фото к позиции
                </p>
                <label htmlFor="menu-add-new-item-image">
                    <div 
                      className="menu-add-new-item-image-subContainer"
                      
                    >        
                      <img src={files ? URL.createObjectURL(files):
                         (cloudUpload) } alt="cloud upload image"/>           
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
                  rows="1" cols="50">
                </textarea>
                </div>
                
                <div className="add-menu-new-item-content-container">
                    <div className="add-menu-new-item-category-container">
                        <div className="add-menu-new-item-category-subContainer-container">
                            <p className="item-name__label">Категория</p>
                            <div className="add-menu-new-item-dropdown-container">
                                <div 
                                  className={`add-menu-new-item-dropdown-subContainer 
                                  ${isClicked?("transform") : 
                                  ("")}`}  
                                >
                                    <p
                                        className="add-menu-new-item-dropdown-title">
                                        {category?category[1]:"Выберите категорию"}
                                    </p>
                                    <InputAdornment
                                        position="end"
                                        className="add-menu-new-item-dropdown-icons"
                                        onClick={handleToggle} 
                                    >
                                        <IconButton>
                                            {isClicked ?
                                              (<KeyboardArrowUpIcon style={{ color: "#5B7E9A" }} />):                          
                                              (<KeyboardArrowDownIcon style={{ color: "#5B7E9A" }} />)
                                            }
                                        </IconButton>
                                    </InputAdornment>
                                </div>
                                <ul className={`add-menu-new-item-dropdown-categries 
                                             ${isClicked?"add-menu-new-item-dropdown-toggle":""}`}>
                                    <li 
                                      className="add-menu-new-item-dropdown-item"
                                      onClick={()=>handleCategory(["coffee","Кофе"])}
                                    >
                                      Кофе
                                    </li>
                                    <li 
                                      className="add-menu-new-item-dropdown-item"
                                      onClick={()=>handleCategory(["desserts","Десерты"])}
                                    >
                                      Десерты
                                    </li>
                                    <li 
                                      className="add-menu-new-item-dropdown-item"
                                      onClick={()=>handleCategory(["bakery","Выпечка"])}
                                    >
                                      Выпечка
                                    </li>
                                    <li 
                                      className="add-menu-new-item-dropdown-item"
                                      onClick={()=>handleCategory(["coktail","Коктейли"])}
                                    >
                                      Коктейли
                                    </li>
                                    <li 
                                      className="add-menu-new-item-dropdown-item"
                                      onClick={()=>handleCategory(["tea","Чай"])}
                                    >
                                      Чай
                                    </li>
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
                        <p className="add-menu-new-item__name_price-text">
                          Состав блюда и граммовка
                        </p>
                        <div className="add-menu-new-ingredients-subContainer">
                            <div className="add-menu-new-title-container">
                                <label
                                    htmlFor="menu-ingredient-name"
                                    className="item-name__label"
                                >  Наименование
                                </label>
                                <input id="menu-ingredient-name" type="text"/>
                            </div>

                            <div className="menu-new-ingredients-container">
                                <label htmlFor="menu-ingredient-amount"
                                    className="item-name__label"
                                >   
                                  Кол-во (в гр, мл, л, кг)
                                </label>
                                <input id="menu-ingredient-amount" type="text" />
                            </div>

                            <div className={`menu-new-ingredients-subContainer 
                            ${isMeasure ? "menu-new-ingredients-subContainer-transform" : ""}`}
                            >
                                <div>
                                    <p className="measurement-text">
                                        {measurement[1]||measurement[1]}
                                    </p>
                                </div>

                                <InputAdornment
                                        position="end"
                                        className="menu-new-ingredients-dropdown-icons"
                                        onClick={handleMeasurement} 
                                    >
                                        <IconButton>
                                            {isMeasure ?
                                               (<KeyboardArrowUpIcon style={{ color: "#5B7E9A" }} />):                 
                                               (<KeyboardArrowDownIcon style={{ color: "#5B7E9A" }} />)
                                            }
                                        </IconButton>
                                    </InputAdornment>
                                <ul className={`menu-new-ingredients-list 
                                  ${isMeasure ? "" : "toggleMeasurement"}`}
                                >
                                    <li  
                                      className="menu-new-ingredients-item"
                                      onClick={()=>handleMeasurement(["gr","гр"])}
                                    >
                                      гр
                                    </li>
                                    <li 
                                      className="menu-new-ingredients-item" 
                                      onClick={()=>handleMeasurement(["ml","мл"])}
                                    >
                                      мл
                                    </li>
                                    <li 
                                      className="menu-new-ingredients-item" 
                                      onClick={()=>handleMeasurement(["l","л"])}
                                    >
                                      л
                                    </li >
                                    <li 
                                      className="menu-new-ingredients-item"
                                      onClick={()=>handleMeasurement(["kg","кг"])}
                                    >
                                      кг
                                    </li>
                                </ul>
                            </div>
                        </div>                      
                    </div>
                 
                    <div className="test-btn">
                      <button className="add-more-menu-items-btn">
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
                        handleButtonClick("add")
                        handleCloseModal()
                        }}
                      >
                        Отмена
                      </button>
                    </div>
                </div>
            </div>          
        </div>
    )
}

export default AddNewMenuItem;