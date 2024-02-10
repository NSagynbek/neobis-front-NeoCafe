import "./contentLayout.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { InputAdornment,IconButton } from "@mui/material";
import { MenuEditDelete } from "../modals";
import { useState } from "react";
import { stateMap } from "../utils";

function ContentLayout (){


  const [modalStates,setModalStates]=useState({
    isOpen:false,
    isOpen1:false,
    isOpen2:false,
    isOpen3:false,
    isOpen4:false,
    isOpen5:false,
    isOpen6:false, 
  })

  
  const handleModal = (event, modalName) => {
    event.stopPropagation();
    setModalStates(prev => ({
      ...prev,
      [modalName]: !prev[modalName]
    }));
  };
  

  const closeAllModals = ()=>{
    setModalStates({
    isOpen:false,
    isOpen1:false,
    isOpen2:false,
    isOpen3:false,
    isOpen4:false,
    isOpen5:false,
    isOpen6:false,
    })
  }

  



    return (
        <main 
          className="menu-mainContainer"
          onClick={closeAllModals}
        >
          <section className="menu-gridContainer">
            <div 
              className="item first-row number-title"
            >
              <p className="number">№</p>
              <p>Наименование</p>
            </div>
            <div className="item first-row category">Категория</div>
            <div className="item first-row" >Состав блюда и граммовка</div>
            <div className="item first-row price" >Стоимость</div>
            <div className="item first-row" >Филиал</div>
            <div className="item number-title">
              <p className="number">№</p> 
              <p>Наименование</p>
            </div>
            <div className="item category">Кофе</div>
            <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
            <div className="item price">140 сом</div>
            <div className="item more">
              NeoCafe Ala-Too Square
              <InputAdornment 
                className="menu-more-icon"
                onClick={(event)=>handleModal(event,stateMap.isOpen)}
                position="end"
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
              {modalStates.isOpen?<MenuEditDelete/>:null}
            </div>
            <div className="item number-title">
              <p className="number">№</p> 
              <p>Наименование</p>
            </div>
            <div className="item category">Кофе</div>
            <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
            <div className="item price">140 сом</div>
            <div className="item more">
              NeoCafe Ala-Too Square
              <InputAdornment 
                position="end"
                className="menu-more-icon"
                onClick={(event)=>handleModal(event,stateMap.isOpen1)}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
              {modalStates.isOpen1?<MenuEditDelete/>:null}
            </div>
            <div className="item number-title">
              <p className="number">№</p> 
              <p>Наименование</p>
            </div>
            <div className="item category">Кофе</div>
            <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
            <div className="item price">140 сом</div>
            <div className="item more">
              NeoCafe Ala-Too Square
              <InputAdornment 
                className="menu-more-icon" 
                position="end"
                onClick={(event)=>handleModal(event,stateMap.isOpen2)}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
              {modalStates.isOpen2?<MenuEditDelete/>:null}
              </div>
            <div className="item number-title">
              <p className="number">№</p> 
              <p>Наименование</p>
            </div>
            <div className="item category">Кофе</div>
            <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
            <div className="item price">140 сом</div>
            <div className="item more">
              NeoCafe Ala-Too Square
              <InputAdornment 
                className="menu-more-icon" 
                position="end"
                onClick={(event)=>handleModal(event,stateMap.isOpen3)}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
              {modalStates.isOpen3?<MenuEditDelete/>:null}
            </div>
            <div className="item number-title">
              <p className="number">№</p> 
              <p>Наименование</p>
            </div>
            <div className="item category">Кофе</div>
            <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
            <div className="item price">140 сом</div>
            <div className="item more">
              NeoCafe Ala-Too Square
              <InputAdornment 
                className="menu-more-icon" 
                position="end"
                onClick={(event)=>handleModal(event,stateMap.isOpen4)}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
              {modalStates.isOpen4?<MenuEditDelete/>:null}
            </div>
            <div className="item number-title">
              <p className="number">№</p> 
              <p>Наименование</p>
            </div>
            <div className="item category">Кофе</div>
            <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
            <div className="item price">140 сом</div>
            <div className="item more">
              NeoCafe Ala-Too Square
              <InputAdornment 
                className="menu-more-icon" 
                position="end"
                onClick={(event)=>handleModal(event,stateMap.isOpen5)}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
              {modalStates.isOpen5?<MenuEditDelete/>:null}
            </div>
            <div className="item number-title">
              <p className="number">№</p> 
              <p>Наименование</p>
            </div>
            <div className="item category">Кофе</div>
            <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
            <div className="item price">140 сом</div>
            <div className="item more">
              NeoCafe Ala-Too Square
              <InputAdornment 
                className="menu-more-icon" 
                position="end"
                onClick={(event)=>handleModal(event,stateMap.isOpen6)}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
              {modalStates.isOpen6?<MenuEditDelete/>:null}
            </div>
          </section>

          <div className="menu-footer">
            <Stack spacing={2}>
              <Pagination count={10} variant="outlined" shape="rounded" />
            </Stack>
          </div>
    
        </main>
    )
}

export default ContentLayout;