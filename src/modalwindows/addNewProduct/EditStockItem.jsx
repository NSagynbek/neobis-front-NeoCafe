import "./addNewProductStyles.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import BranchSelector from "../../components/branchSelector/BranchSelector";
import MeasurementSelector from "../../components/measurementSelector/MeasurementSelector";
import StockCategorySelector from "../../components/stockCategory/StockCategorySelector";
import { useDispatch,useSelector } from "react-redux";
import { closeModal,refreshStockItems } from "../../redux";
import { useState,useEffect } from "react";
import { addStock,getstockItem,editStock } from "../../api";
import { toast } from 'react-toastify';

function EditStockItem() {

    const dispatch = useDispatch();
    const modalData =  useSelector((state)=>state.modalData)
    const [stockItems,setStockItems]=useState(null);

    useEffect(()=>{
        const getSingleStockItem = async()=>{
            const response = await getstockItem(modalData.details.id)
            setStockItems(response);
        }

        getSingleStockItem()
    },[])

 

  console.log("----------------",stockItems)
 
  
  if(modalData.type==="editStock"){
    useEffect(()=>{
      const getSingleStockItem = async ()=>{
        const response = await getstockItem(modalData.details.id)
        setStockItems(response)
      }

      getSingleStockItem()
    },[])
  }

  

  const [activeSection, setActiveSection] = useState(null);

  const handleButtonClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  const isActive = (section) => section === activeSection;

  const handleCloseModal = () => {
    dispatch(closeModal());
  };



  const handleChange = (e) => {
    setStockItems((prev) => {
      const updatedStockItems = { ...prev };
  
      if (e.target.name === "current_quantity" || e.target.name === "minimum_limit") {
        updatedStockItems[e.target.name] = parseInt(e.target.value);
      } else {
        updatedStockItems[e.target.name] = e.target.value;
      }
  
      return updatedStockItems; 
    });
  };
  



  const updateStockItem = async ()=>{
    try{
      const response = await editStock(stockItems.id,stockItems)
      console.log(response)
    showToast(`Обновили сырье ${response.stock_item}`);
      dispatch(closeModal());
      dispatch(refreshStockItems());
    }catch(error){
      console.log(error)
    } 
  }

  const showToast = (msg) => {
    toast.success(msg);
  };



  
return(
    <>
      {stockItems?(
        <main className="add-new-product">
        <div className="stock-header-section">
          <p className="stock-header-section-title">Редактирование</p>
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
            onChange={(e)=>handleChange(e)}
            name="stock_item"
            value={stockItems.stock_item}
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
                onChange={(e)=>handleChange(e)}
                name="current_quantity"
                value={stockItems.current_quantity}
              />
            </div>
      
            <MeasurementSelector 
              setStockItems={setStockItems} 
              stockItems={stockItems}
            />
            <StockCategorySelector 
              setStockItems={setStockItems} 
            />
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
                  onChange={(e)=>handleChange(e)}
                  name="minimum_limit"
                  value={stockItems.minimum_limit}
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
                  onChange={(e)=>handleChange(e)}
                  name="restock_data"
                  value={new Date(stockItems.restock_date).toLocaleString()}
                  disabled
                />
              </div>
            </div>
            <BranchSelector 
              color={"#EBEFF2"} 
              setStockItems={setStockItems} 
            />
      
            <div className="stock-btns-container">
              <div className="menu-add-new-item-btns-container">
                <button
                  className={`new-menu-category-modal__cancel-button 
                  ${isActive("cancel") ? "menu-category-btn-active" : ""}`}
                  onClick={() => { 
                    handleButtonClick("cancel")
                    updateStockItem()
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

      ):(
        <p>...Loading</p>
      )}
    </>
  

  )
}

export default EditStockItem;