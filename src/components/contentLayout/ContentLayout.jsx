import "./contentLayout.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { InputAdornment,IconButton } from "@mui/material";
import { MenuEditDelete } from "../modals";
import { useState } from "react";


function ContentLayout (){

  const [isOpen,setIsOpen] = useState(false);
  const [isOpen1,setIsOpen1] = useState(false);
  const [isOpen2,setIsOpen2] = useState(false);
  const [isOpen3,setIsOpen3] = useState(false);
  const [isOpen4,setIsOpen4] = useState(false);
  const [isOpen5,setIsOpen5] = useState(false);
  const [isOpen6,setIsOpen6] = useState(false);


  const handleModal = (event)=>{
    event.stopPropagation();
    setIsOpen(!isOpen);
  }
  const handleModal1 = (event)=>{
    event.stopPropagation();
    setIsOpen1(!isOpen1);
  }
  const handleModal2 = (event)=>{
    event.stopPropagation();
    setIsOpen2(!isOpen2);
  }
  const handleModal3 = (event)=>{
    event.stopPropagation();
    setIsOpen3(!isOpen3);
  }
  const handleModal4 = (event)=>{
    event.stopPropagation();
    setIsOpen4(!isOpen4);
  }
  const handleModal5 = (event)=>{
    event.stopPropagation();
    setIsOpen5(!isOpen5);
  }
  const handleModal6 = (event)=>{
    event.stopPropagation();
    setIsOpen6(!isOpen6);
  }

  const closeAllModals = ()=>{
    setIsOpen(false);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
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
                onClick={handleModal}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
              {isOpen?<MenuEditDelete/>:null}
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
                onClick={handleModal1}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
              {isOpen1?<MenuEditDelete/>:null}
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
                onClick={handleModal2}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
              {isOpen2?<MenuEditDelete/>:null}
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
                onClick={handleModal3}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
              {isOpen3?<MenuEditDelete/>:null}
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
                onClick={handleModal4}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
              {isOpen4?<MenuEditDelete/>:null}
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
                onClick={handleModal5}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
              {isOpen5?<MenuEditDelete/>:null}
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
                onClick={handleModal6}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
              {isOpen6?<MenuEditDelete/>:null}
            </div>
          </section>

          <fotter className="menu-footer">
            <Stack spacing={2}>
              <Pagination count={10} variant="outlined" shape="rounded" />
            </Stack>
          </fotter>
    
        </main>
    )
}

export default ContentLayout;