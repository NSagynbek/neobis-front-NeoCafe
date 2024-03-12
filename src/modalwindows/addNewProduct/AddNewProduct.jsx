import "./addNewProductStyles.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import BranchSelector from "../../components/branchSelector/BranchSelector";
import MeasurementSelector from "../../components/measurementSelector/MeasurementSelector";
import StockCategorySelector from "../../components/stockCategory/StockCategorySelector";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux";
import { useState } from "react";


function AddNewproduct() {
  const dispatch = useDispatch();

  const [activeSection, setActiveSection] = useState(null);

  const handleButtonClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  const isActive = (section) => section === activeSection;

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  
return(
  <main className="add-new-product">
  <div className="stock-header-section">
    <p className="stock-header-section-title">Новая продукция</p>
    <InputAdornment 
      position="end" 
      className="stock-icon-close-button"
      onClick={handleCloseModal}
    >
      <IconButton>
        <CloseIcon style={{ color: "#2A3440" }} />
      </IconButton>
    </InputAdornment>
  </div>

  <div className="stock-content-section">
    <p className="stock-section-title">Наименование, категория и стоимость</p>

    <label htmlFor="newStock" className="newStock">
      Наименование
    </label>
    <input 
      type="text" 
      id="newStok"
      className="stock-title-input-field"
    />

    <div className="stock-measurement-section">
      <div className="stock-measurement-container">
        <label htmlFor="newStock-measurement" className="newStock">
          Кол-во (в гр, мл, л, кг)
        </label>
        <input 
          type="text" 
          id="newStock-measurement"
          className="stock-measurement-input-field"
        />
      </div>

      <MeasurementSelector />
      <StockCategorySelector />
    </div>

    <div className="stock-sub-section">
      <div className="stock-minLimitDate-container">
        <div className="stock-input-container">
          <label htmlFor="minLimit" className="newStock">
            Минимальный лимит
          </label>
          <input 
            type="text" 
            id="minLimit"
            className="minLimit-input-field"
          />
        </div>
        <div className="stock-input-container">
          <label htmlFor="incomeDate" className="newStock">
            Дата прихода
          </label>
          <input 
            type="text" 
            id="incomeDate"
            className="stock-date-input-field"
          />
        </div>
      </div>
      <BranchSelector color={"#EBEFF2"} />

      <div className="tes">
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
</main>

  )
}

export default AddNewproduct;

