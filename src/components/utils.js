function capitalizeFirstLetter(string) {
    const translations = {
        "menu": "Меню",
        "warehouse": "Склад",
        "branches": "Филиалы",
        "employees": "Сотрудники"
    };

    return translations[string] || null;
}


const stateMap = {
    isOpen:"isOpen",
    isOpen1:"isOpen1",
    isOpen2:"isOpen2",
    isOpen3:"isOpen3",
    isOpen4:"isOpen4",
    isOpen5:"isOpen5",
    isOpen6:"isOpen6", 
}

const addIconStyles = { 
    color:"white", 
    width:"40px", 
    height:"40px", 
  }

  const notificationIconStyles = { 
    background:"#35536B", 
    color:"white", 
    width:"40px", 
    height:"40px", 
    padding:"5px", 
    borderRadius:"30px" 
  }

  const editDeleteIconsStyles = {color: "#2A3440"}
  const sideBarIconsStyles = { color: "white" }

// import {openModal} from "../../redux/index";
// import DynamicModal from "../modals/DynamicModal";
// import { Provider,useSelector,useDispatch } from "react-redux";
// const handleOpenModal = () => {
//     dispatch(
//       openModal({
//         name: "menuEditDelete",
//         props: {
//           onchange: () => {},
//           onSubmit: () => {},
//           title: "Change phone number",
//         },
//       })
//     );
//   };

// const isOpen = useSelector((state) => state.isOpen);
// const modalData = useSelector((state) => state.modalData);
// const dispatch = useDispatch();



export{
    capitalizeFirstLetter,
    stateMap,
    addIconStyles,
    notificationIconStyles,
    editDeleteIconsStyles,
    sideBarIconsStyles,
}