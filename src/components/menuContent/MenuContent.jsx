import "./menuContent.css";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function MenuContent (){
    return (
        <main className="menu-mainContainer" >
            <section className="menu-gridContainer">
            <div className="item first-row number-title" ><p>№</p> <p>Наименование</p></div>
            <div className="item first-row" >Категория</div>
            <div className="item first-row" >Состав блюда и граммовка</div>
            <div className="item first-row" >Стоимость</div>
            <div className="item first-row" >Филиал</div>
            <div className="item number-title"><p>№</p> <p>Наименование</p></div>
            <div className="item">Кофе</div>
            <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
            <div className="item">140 сом</div>
            <div className="item">NeoCafe Ala-Too Square</div>
            <div className="item number-title"><p>№</p> <p>Наименование</p></div>
            <div className="item">Кофе</div>
            <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
            <div className="item">140 сом</div>
            <div className="item">NeoCafe Ala-Too Square</div>
            <div className="item number-title"><p>№</p> <p>Наименование</p></div>
            <div className="item">Кофе</div>
            <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
            <div className="item">140 сом</div>
            <div className="item">NeoCafe Ala-Too Square</div>
            <div className="item number-title"><p>№</p> <p>Наименование</p></div>
            <div className="item">Кофе</div>
            <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
            <div className="item">140 сом</div>
            <div className="item">NeoCafe Ala-Too Square</div>
            <div className="item number-title"><p>№</p> <p>Наименование</p></div>
            <div className="item">Кофе</div>
            <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
            <div className="item">140 сом</div>
            <div className="item">NeoCafe Ala-Too Square</div>
            <div className="item number-title"><p>№</p> <p>Наименование</p></div>
            <div className="item">Кофе</div>
            <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
            <div className="item">140 сом</div>
            <div className="item">NeoCafe Ala-Too Square</div>
            <div className="item number-title"><p>№</p> <p>Наименование</p></div>
            <div className="item">Кофе</div>
            <div className="item">Молоко (70мл), Эспрессо (50мл)</div>
            <div className="item">140 сом</div>
            <div className="item">NeoCafe Ala-Too Square</div>
            
    
            </section>
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
        </main>
    )
}

export default MenuContent;