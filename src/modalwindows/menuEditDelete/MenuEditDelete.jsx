import "./menuEditDelete.css";
import {InputAdornment,IconButton} from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { editDeleteIconsStyles } from "../../utils";
import {openModal} from "../../redux/index";
import {useDispatch } from "react-redux";

function MenuEditDelete ({id,name}){

  const dispatch = useDispatch();

  const handleOpenModal = (modalName,type,details) => {
    dispatch(
      openModal({
        name: modalName,
        type:type,
        details:details
      })
    );
  };
    return (
        <div className="menu-edit-delete-container">
            <div className="menu-edit__container">
                <InputAdornment position="end" className="menu-edit__icon">
                  <IconButton>
                    <EditIcon style={editDeleteIconsStyles}/>
                  </IconButton>
                </InputAdornment>
                <button 
                  className="menu-edit__btn"
                  onClick={()=>handleOpenModal("edditMenuItem","editMenu",{id:id})}
                >
                  Редактировать
                </button>
            </div>
            <div className="menu-delete__container">
              <InputAdornment position="end" className="menu-delete__icon">
                <IconButton>
                  <DeleteOutlineIcon style={editDeleteIconsStyles}/>
                </IconButton >
               </InputAdornment>
               <button 
                 className="menu-delete__btn"
                 onClick={()=>handleOpenModal("deleteMenuCategory","deleteMenu",{id:id,name:name,deleteType:"menu"})}
               >
                Удалить
               </button>
            </div>
        </div>
    )
}

export default MenuEditDelete;