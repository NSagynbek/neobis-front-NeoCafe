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
import { useSelector } from "react-redux";

 
const ContentLayout = () => {

  const rerender = useSelector((state)=>state.rerender);
console.log(rerender)
  const [menuItems, setMenuItems] = useState([]);
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageCount,setPageCount]=useState(1)
  
  useEffect(() => {
    const getMenuData = async () => {
      try {
        const response = await getMenuItems(page);
        setMenuItems(response.results.results);
        setPageCount(Math.ceil(response.results.count / 7))
        console.log(response)
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getMenuData();
  }, [page,rerender]);

  const pageControl = (event, p) => {
    setPage(p);
  };

  const handleClick = (index) => {
    setActiveRowIndex(activeRowIndex === index ? null : index);
  };

  return (
    <div className="menu-table-container">
      <div className="menu-table-subContainer">
        {loading ? (
          <div className="loader-container">
            <Bars height="60" width="60" color="gray" />
          </div>
        ) : (
          <table className="menu-table">
            <thead>
              <tr>
                <th className="menu-table-id">№</th>
                <th className="menu-table-title">Наименование</th>
                <th className="menu-table-category"><Category /></th>
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
                    {item.price_per_unit} сом
                    <InputAdornment
                      position="end"
                      className="menu-more-icon"
                      onClick={() => handleClick(index)}
                    >
                      <IconButton>
                        <MoreVertIcon style={{color:"#5B7E9A"}}/>
                      </IconButton>
                    </InputAdornment>
                    {activeRowIndex === index && 
                    <MenuEditDelete 
                      id={item.id} 
                      name={item.name} 
                      section={"menu"} 
                    />
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      
      <div className="pagination-container">
        <Stack spacing={2}>
          <Pagination 
            count={pageCount} 
            variant="outlined" 
            shape="rounded" 
            onChange={pageControl}
          />
        </Stack>
      </div>
    </div>
  );
};

export default ContentLayout;
