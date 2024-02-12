import "./menuEditDelete.css";
import {InputAdornment,IconButton} from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { editDeleteIconsStyles } from "../../utils";
function MenuEditDelete (){
    return (
        <div className="menu-edit-delete-container">
            <div className="menu-edit__container">
                <InputAdornment position="end" className="menu-edit__icon">
                  <IconButton>
                    <EditIcon style={editDeleteIconsStyles}/>
                  </IconButton>
                </InputAdornment>
                <button className="menu-edit__btn">Редактировать</button>
            </div>
            <div className="menu-delete__container">
              <InputAdornment position="end" className="menu-delete__icon">
                <IconButton>
                  <DeleteOutlineIcon style={editDeleteIconsStyles}/>
                </IconButton >
               </InputAdornment>
               <button className="menu-delete__btn">Удалить</button>
            </div>
        </div>
    )
}

export default MenuEditDelete;