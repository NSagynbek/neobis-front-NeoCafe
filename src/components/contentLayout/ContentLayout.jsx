import "./contentLayout.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { InputAdornment,IconButton } from "@mui/material";
import MenuEditDelete  from "../../modalwindows/menuEditDelete/MenuEditDelete";
import { useState,useEffect } from "react";
import { getMenuItems,getMenuCategories } from "../../api";
import Category from "../category/Category";
import { Bars } from 'react-loader-spinner'
import { updateMenuCategory } from "../../redux";
import { useDispatch } from "react-redux";
 
function ContentLayout() {
  const dispatch = useDispatch();

  const [menuItems, setMenuItems] = useState([]);
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMenuData = async () => {
      try {
        const response = await getMenuItems()
        setMenuItems(response);
        const res = await getMenuCategories()
        dispatch(updateMenuCategory(res))
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    };
    getMenuData();
  }, []);


  const handleClick = (index) => {
    setActiveRowIndex(activeRowIndex === index ? null : index);
  };

  return (
    <div className="menu-table-container">
      {loading?(
        <div className="testt">
         <Bars
         height="100"
         width="100"
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
          <Pagination count={5} variant="outlined" shape="rounded" />
        </Stack>
      </div>
    </div>
  );
}




export default ContentLayout;