function capitalizeFirstLetter(string) {
    const translations = {
        "menu": "Меню",
        "warehouse": "Склад",
        "branches": "Филиалы",
        "employees": "Сотрудники"
    };

    return translations[string] || null;
}


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



export{capitalizeFirstLetter}