import "./notification.css";
import CloseIcon from '@mui/icons-material/Close';
import { InputAdornment,IconButton } from "@mui/material";

function Notification (){
  return(
    <div className="notification-content">               
        <InputAdornment position="end" 
          className="notification-content__icon_close"
        >
          <IconButton>
            <CloseIcon style={{color:"black"}}/>
          </IconButton>
        </InputAdornment>

        <p className="notification-contenton__time_text">25.10 &#x2609; 14:09</p>
        <p className="notification-content__title_text">Заканчивается продукт: <span>Молоко</span></p>
        <p className="notification-content__branch_text">Филиал: <span>NeoCafe Dzerzhinka</span></p>
    </div>
  )
}

export default Notification;