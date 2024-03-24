import "./addNewEmployeeStyles.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeModal, refreshStockItems } from "../../redux";
import { useSelector} from "react-redux";
import {addNewBranch} from "../../api";
import { toast } from 'react-toastify';
import { Bars } from 'react-loader-spinner'
import TimeTable from "../../components/timeTable/TimeTable";
import StockCategorySelector from "../../components/stockCategory/StockCategorySelector";
import { 
  employeePositions,
  branchSelectirTypes,
  stockCategoryTypes,
} from "../../utils";
import BranchSelector from "../../components/branchSelector/BranchSelector";


function AddNewEmployee(){

  
  const modalData = useSelector((state) => state.modalData);

  const [activeSection, setActiveSection] = useState(null);
  const[loading,setLoading]=useState(false)

  // Стейты для отправки 
  const [formData,setFormData]=useState(null)
  const [dataObject,setDataObject] = useState({
    branch_name:"",
    address:"",
    phone_number:"",
    link_2gis:"",
    table_quantity:null,
    description:"",
    schedules:[],
  })
 
  

  const dispatch = useDispatch();

  const handleButtonClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  const isActive = (section) => section === activeSection;

  const handleCloseModal = () => {
    dispatch(closeModal());
  };


  //Тостифай для уведомлений
  const showToast = (msg) => {
    toast.success(msg);
  };

  //Получение данных из инпутов и компонентов
  const getItemNAme = (e)=>{
    setDataObject((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }


 
// Отправка Данных
useEffect(() => {
  const data = new FormData();

   
   data.append('branch_name',dataObject.branch_name);
   data.append('address',dataObject.address);
   data.append('phone_number',dataObject.phone_number);
   data.append('link_2gis',dataObject.link_2gis);
   data.append('table_quantity',parseInt(dataObject.table_quantity));
   data.append('description',dataObject.description);

   for(let i = 0; i<dataObject.schedules.length; i++){
    const currentSchedule = dataObject.schedules[i];
    data.append(`schedules[${i}]day`,currentSchedule.day);
    data.append(`schedules[${i}]start_time`,currentSchedule.start_time);
    data.append(`schedules[${i}]end_time`,currentSchedule.end_time);
   }
   


  setFormData(data);


}, [dataObject]);


 //Запрос на добовление нового филиала
const submitData = async ()=>{
  setLoading(true)
  try{
    const response = await addNewBranch(formData)
    showToast(`Добавили новый Филиал ${response.branch_name}`);
    dispatch(closeModal());
    dispatch(refreshStockItems());
    setLoading(false);
  }catch(error){
    console.log(error)
  }
}



return (
  <div className="add-menu-new-item-container">
    <div className="menu-add-new-item-header">
      <p className="menu-add-new-item-title">Новый сотрудник</p>
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

 

    <div className="add-new-branch-content-container">
      <p className="add-menu-new-item__name_price-text">
        Личные данные
      </p>
      <label htmlFor="branch-name" className="item-name__label branch">
        Логин
        <input 
          id="branch-name" 
          className="branch-text-input"
          type="text"
          name="branch_name" 
          onChange={getItemNAme} 
          placeholder="Придумайте логин" 
        />
      </label>

      <label htmlFor="branch-description" className="item-name__label branch">
        Пароль
        <input 
          id="branch-description" 
          className="branch-text-input"
          type="text"
          name="description" 
          onChange={getItemNAme} 
          placeholder="Придумайте пароль" 
        />
      </label>
      
      <label htmlFor="address" className="item-name__label branch">
        Имя
        <input 
          id="address" 
          className="branch-text-input"
          type="text" 
          name="address"
          onChange={getItemNAme} 
          placeholder="Как зовут сотрудника" 
        />
      </label>
      
    <div className="employee-position-selector">
     <StockCategorySelector
       select={"Должность"}
       name={"Выберите должность"}
       categories={employeePositions}
       type={stockCategoryTypes.newEmploye}
     />
   </div>
      
      
      <label htmlFor="branch-2giz" className="item-name__label branch">
        День рождения
        <input 
          id="branch-2giz" 
          className="branch-text-input"
          type="text" 
          name="link_2gis"
          onChange={getItemNAme} 
          placeholder="01.01.1991" 
        />
      </label>
      
      <label htmlFor="branch-table" className="item-name__label branch">
        Номер телефона
        <input 
          id="branch-table" 
          className="branch-text-input"
          type="text" 
          name="table_quantity"
          onChange={getItemNAme} 
          placeholder="Введите номер телефона" 
        />
      </label>

      <div className="employee-branch-selector">
        <BranchSelector
          type={branchSelectirTypes.newEmploye}
        />
      </div>

    </div>

    <div className="branch-schedule-container">
      <p className="menu-add-new-item-title">График работы</p>
      <div className="schedule-header">
        <p className="schedule-header-title">День недели</p>
        <p className="schedule-header-title">Время работы</p>
      </div>

      <TimeTable setDataObject={setDataObject}/>
    </div>

    <div className="add-branch-btns-container">
      <button
        className={`new-menu-category-modal__cancel-button 
        ${isActive("cancel") ? "menu-category-btn-active" : ""}`}
        onClick={() => { 
          handleButtonClick("cancel");
          submitData();
        }}
      >
        {loading ? (
          <Bars
            height="30"
            width="30"
            color="white"
          />
        ) : (
          "Сохранить"
        )}
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
);

}

export default AddNewEmployee;