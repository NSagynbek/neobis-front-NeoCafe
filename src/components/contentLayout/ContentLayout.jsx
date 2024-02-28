import "./contentLayout.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { InputAdornment,IconButton } from "@mui/material";
import MenuEditDelete  from "../../modalwindows/menuEditDelete/MenuEditDelete";
import { useState,useEffect } from "react";
import { getMenuItems} from "../../api";
import Category from "../category/Category";
import { Bars } from 'react-loader-spinner'

 
function ContentLayout() {


  const [menuItems, setMenuItems] = useState([]);
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page,setPage]=useState(1); 

  useEffect(() => {
    const getMenuData = async () => {
      try {
        const response = await getMenuItems(page)
        setMenuItems(response.results.results);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    };
    getMenuData();
  }, [page]);

  const pageControll = (event,p)=>{
    setPage(p)
  }


  const handleClick = (index) => {
    setActiveRowIndex(activeRowIndex === index ? null : index);
  };

  return (
    <div className="menu-table-container">
      {loading?(
        <div className="loader-container">
         <Bars
         height="60"
         width="60"
         color="gray"
       />
       </div>
      ):(
        <table className="menu-table">
        <thead>
          <tr>
            <th className="menu-table-id">№</th>
            <th className="menu-table-title">Наименование</th>
            <th className="menu-table-category"><Category/></th>
            <th className="menu-table-ingredients">Состав блюда и граммовка</th>
            <th>Стоимость</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, index) => (
            <tr key={index}>
              <td className="menu-table-id">{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category.name}</td>
              <td>
                {item.ingredients.map((ingredient, idx) => (
                  <span key={idx}>
                    {ingredient.name}&nbsp;
                    {ingredient.quantity}&nbsp;
                    {ingredient.measurement_unit}&nbsp;
                  </span>
                ))}
              </td>
              <td className="menu-table-price">
                {item.price_per_unit}
                <InputAdornment
                  position="end"
                  className="menu-more-icon"
                  onClick={() => handleClick(index)}
                >
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </InputAdornment>
                {activeRowIndex === index && <MenuEditDelete />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      )}
      
      <div className="pagination-container">
        <Stack spacing={2}>
          <Pagination 
            count={4} 
            variant="outlined" 
            shape="rounded" 
            onChange={pageControll}
          />
        </Stack>
      </div>
    </div>
  );
}




export default ContentLayout;