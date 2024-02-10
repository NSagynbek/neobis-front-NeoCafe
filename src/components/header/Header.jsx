import { InputAdornment,IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import "./header.css";
import { capitalizeFirstLetter } from '../utils';

function Header ({selectedMenuItem}){

    return(
        <header className="header">
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
                  >
                    <span>Создать</span>
                  </button>

                  <InputAdornment 
                    className='header-options__icon_add' 
                    position="start"
                  >
                      <IconButton>
                        <AddIcon
                          style={{ 
                            color:"white", 
                            width:"40px", 
                            height:"40px", 
                          }}
                        />
                      </IconButton>
                  </InputAdornment>
                </div>             
                <InputAdornment 
                  className='header-options__icon_notify' 
                  position="start" 
                >
                  <IconButton>
                    <NotificationsIcon 
                      style={{ 
                        background:"#35536B", 
                        color:"white", 
                        width:"40px", 
                        height:"40px", 
                        padding:"5px", 
                        borderRadius:"30px" 
                      }}/>
                  </IconButton>
                </InputAdornment>               
            </section>
        </header>
    )
}

export default Header;