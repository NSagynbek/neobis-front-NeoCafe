import "./contentLayout.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { InputAdornment,IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import {openModal} from "../../redux/index";

function ContentLayout (){

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(
      openModal({
        name: "menuEditDelete",
        props: {
          onchange: () => {},
          onSubmit: () => {},
          title: "Change phone number",
        },
      })
    );
  };
    return (
        <main className="menu-mainContainer" >
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
                onClick={handleOpenModal}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
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
                onClick={handleOpenModal}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
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
                onClick={handleOpenModal}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
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
                onClick={handleOpenModal}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
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
                onClick={handleOpenModal}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
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
                onClick={handleOpenModal}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
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
                onClick={handleOpenModal}
              >
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>
              </InputAdornment>
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