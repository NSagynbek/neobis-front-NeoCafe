import { InputAdornment,IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import "./header.css";
import NotificationCenter from "../../modalwindows/notificationCenter/NotificationCenter"
import { useState } from 'react';
import { 
  capitalizeFirstLetter,
  addIconStyles,
  notificationIconStyles, 
} from '../../utils';

import {openModal} from "../../redux/index";
import {useDispatch } from "react-redux";

function Header ({selectedMenuItem}){
  const[isOpen,setIsOpen]=useState(false);
  const dispatch = useDispatch();
 
  const handleClick=()=>{
    setIsOpen(!isOpen)
  }

  const handleOpenModal = (modalName,type) => {
    dispatch(
      openModal({
        name: modalName,
        type:type
      })
    );
  };

    return(
        <header className="header">
          {isOpen?<NotificationCenter handleClick={handleClick} />:null}
            <section className='page-title'>
                <p className='page-title__text'>{capitalizeFirstLetter(selectedMenuItem)}</p>
            </section>

            <section className='header-options'>
                <div className='header-options__input_container'>
                  <input 
                    type="text" 
                    className="header-options__input_search"
                    placeholder="Поиск"
                  />
                  <InputAdornment 
                    className='header-options__icon_search' 
                    position="start"
                  >
                    <IconButton>
                      <SearchIcon/>
                    </IconButton>
                  </InputAdornment>  
                </div>
                <div className='header-options__btn_container'>
                  <button
                  className="header-options__btn_create"
                  onClick={()=>handleOpenModal("addNewMenuItem","createMenu")}
                  >
                    <span>Создать</span>
                  </button>

                  <InputAdornment 
                    className='header-options__icon_add' 
                    position="start"
                    onClick={()=>handleOpenModal("addNewMenuItem","createMenu")}
                  >
                      <IconButton>
                        <AddIcon
                          style={addIconStyles}
                        />
                      </IconButton>
                  </InputAdornment>
                </div>             
                <InputAdornment 
                  className='header-options__icon_notify' 
                  position="start" 
                  onClick={handleClick}
                >
                  <IconButton>
                    <NotificationsIcon 
                      style={notificationIconStyles}/>
                  </IconButton>
                </InputAdornment>       
                <div 
                  className='notification-count-container'
                  onClick={handleClick}
                >
                </div>        
            </section>
        </header>
    )
}

export default Header;