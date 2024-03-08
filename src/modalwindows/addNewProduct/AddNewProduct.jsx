import "./addNewProductStyles.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DoneIcon from '@mui/icons-material/Done';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux";
import BranchSelector from "../../components/branchSelector/BranchSelector";

function AddNewproduct() {

  const [isActive,setIsActive] = useState(false);

  const handleClick = ()=>{
    setIsActive(!isActive);
  }
return(
    <main className="add-new-product">
      <div className="stock-header-section">
        <p className="stock-header-section-title">Новая продукция</p>
        <InputAdornment position="end" className="stock-icon-close-button">
          <IconButton>
            <CloseIcon style={{color:"#2A3440"}}/>
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

          <div className="stock-category-section-container">
            <label htmlFor="" className="newStock">
              Категория
            </label>
            <div className="stock-category-selector">
              <div className={`stock-category-header ${isActive?"stock-category-header-active":""}`}>
                <p>Выберите категорию</p>
                <InputAdornment 
                  position="end" 
                  className="stock-icon-button"
                  onClick={handleClick}
                >
                  <IconButton>
                    {isActive?(<KeyboardArrowUpIcon style={{color:"#2A3440"}}/>):(
                       <KeyboardArrowDownIcon style={{color:"#2A3440"}}/>
                    )}                   
                  </IconButton>
                </InputAdornment>
              </div>

              <ul className={`stock-category-list ${isActive?"active-stock-category":""}`}>
                <li className="stock-category-item">
                  Готовая продукция
                  <InputAdornment position="end" className="stock-icon-done-button">
                    <IconButton>
                      <DoneIcon style={{color:"#2A3440"}}/>
                    </IconButton>
                  </InputAdornment>
                </li>
                <li className="stock-category-item">
                  Сырье
                  <InputAdornment position="end" className="stock-icon-done-button">
                    <IconButton>
                      <DoneIcon style={{color:"#2A3440"}}/>
                    </IconButton>
                  </InputAdornment>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="stock-sub-section">
          <div className="stock-input-container">
            <label htmlFor="minLimit" className="input-label">
              Минимальный лимит
            </label>
            <input 
              type="text" 
              id="minLimit"
              className="minLimit-input-field"
            />
          </div>
          <div className="stock-input-container">
            <label htmlFor="incomeDate" className="input-label">
              Дата прихода
            </label>
            <input 
              type="text" 
              id="incomeDate"
              className="stock-date-input-field"
            />
          </div>
          <BranchSelector />
        </div>
      </div>
    </main>
  )
}

export default AddNewproduct;

