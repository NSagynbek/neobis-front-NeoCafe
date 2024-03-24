import "./editBranchStyles.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeModal, refreshStockItems } from "../../redux";
import { cloudUpload } from "../../assets/index";
import { useSelector} from "react-redux";
import {getBranchById,editBranch} from "../../api";
import { toast } from 'react-toastify';
import { Bars } from 'react-loader-spinner'
import TimeTable from "../../components/timeTable/TimeTable";


function EditBranch(){

  
  const modalData = useSelector((state) => state.modalData);

  const [activeSection, setActiveSection] = useState(null);
  const [isImageDrag, setIsImageDrag] = useState(false);
  const[loading,setLoading]=useState(false)

  // Стейты для отправки 
  const [files, setFiles] = useState(null);
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

  console.log(dataObject)
 
  useEffect(()=>{
    const getPrefillBranchData = async ()=>{
        try{
            const response = await getBranchById(modalData.details.id)
            setDataObject(response)
            console.log(response)
        }catch(error){
            console.log(error)
        }       
    }
    getPrefillBranchData()
  },[])

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

   data.append('image',files);
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


}, [dataObject,files]);


 //Запрос на добовление нового филиала
const submitData = async ()=>{
  setLoading(true)
  try{
    const response = await editBranch(dataObject.id,formData)
    showToast(`Обновили Филиал ${response.branch_name}`);
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
      onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e)}
    >
      <div 
        className={`menu-add-new-item-image-dashed 
          ${isImageDrag ? "image-upload-active" : ""}
          `}
      >
        <p className="menu-add-new-item-image-title">
          Добавьте фотографию филиала
        </p>
        <label htmlFor="menu-add-new-item-image">
          <div className="menu-add-new-item-image-subContainer">
            <img 
              src={files ? URL.createObjectURL(files) : 
             (dataObject.image?dataObject.image : cloudUpload)} 
              alt="cloud upload image" 
            />
          </div>
          <p className="menu-add-new-item-image-text">
            Перетащите изображение для изменения или 
            <span>обзора</span>
          </p>
        </label>
        <input 
          id="menu-add-new-item-image" 
          type="file" 
          onChange={handleFileInputChange} 
        />
      </div>
    </div>

    <div className="add-new-branch-content-container">
      <p className="add-menu-new-item__name_price-text">
        Название и адрес
      </p>
      <label htmlFor="branch-name" className="item-name__label branch">
        Название кофейни
        <input 
          id="branch-name" 
          className="branch-text-input"
          type="text"
          name="branch_name" 
          onChange={getItemNAme} 
          placeholder="Название филиала" 
          value={dataObject?.branch_name}
        />
      </label>

      <label htmlFor="branch-description" className="item-name__label branch">
        Описание кофейни
        <input 
          id="branch-description" 
          className="branch-text-input"
          type="text"
          name="description" 
          onChange={getItemNAme} 
          placeholder="Название филиала" 
          value={dataObject?.description}
        />
      </label>
      
      <label htmlFor="address" className="item-name__label branch">
        Адрес
        <input 
          id="address" 
          className="branch-text-input"
          type="text" 
          name="address"
          onChange={getItemNAme} 
          placeholder="Адрес нового филиала" 
          value={dataObject?.address}
        />
      </label>
      
      <label htmlFor="branch-phone" className="item-name__label branch">
        Номер телефона
        <input 
          id="branch-phone" 
          className="branch-text-input"
          type="text" 
          name="phone_number"
          onChange={getItemNAme} 
          placeholder="Введите номер телефона" 
          value={dataObject?.phone_number}
        />
      </label>
      
      <label htmlFor="branch-2giz" className="item-name__label branch">
        Ссылка на 2ГИС
        <input 
          id="branch-2giz" 
          className="branch-text-input"
          type="text" 
          name="link_2gis"
          onChange={getItemNAme} 
          placeholder="Вставьте ссылку на 2ГИС" 
          value={dataObject?.link_2gis}
        />
      </label>
      
      <label htmlFor="branch-table" className="item-name__label branch">
        Количество столиков
        <input 
          id="branch-table" 
          className="branch-text-input"
          type="text" 
          name="table_quantity"
          onChange={getItemNAme} 
          placeholder="Введите количество столиков" 
          value={dataObject?.table_quantity}
        />
      </label>
    </div>

    <div className="branch-schedule-container">
      <p className="menu-add-new-item-title">График работы</p>
      <div className="schedule-header">
        <p className="schedule-header-title">День недели</p>
        <p className="schedule-header-title">Время работы</p>
      </div>

      <TimeTable 
        setDataObject={setDataObject}
        dataObject={dataObject}
      />
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

export default EditBranch;