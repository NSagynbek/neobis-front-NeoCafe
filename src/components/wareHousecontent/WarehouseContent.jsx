import "./wareHousecontent.css";
import MenuEditDelete  from "../../modalwindows/menuEditDelete/MenuEditDelete";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { InputAdornment,IconButton } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getStock } from "../../api";
import { useState,useEffect } from "react";
import { Bars } from 'react-loader-spinner'
import BranchSelector from "../branchSelector/BranchSelector";
import { useSelector } from "react-redux";

function WareHouseContent (){

  const refreshStock = useSelector((state)=>state.refreshStock);

    const[allStock,setAllStock]=useState(null)
    const [loading, setLoading] = useState(true);
    const [activeRowIndex, setActiveRowIndex] = useState(null);
    const [page,setPage]=useState(1); 


    useEffect(()=>{
        const stock = async ()=>{
            try{
                const response = await getStock(page);
                setAllStock(response.results)
                setLoading(false)
            }catch(error){
                setLoading(false)
            }
            
        }
        stock()
    },[page,refreshStock])

    const pageControll = (event,p)=>{
        setPage(p)
      }

    const handleClick = (index) => {
      setActiveRowIndex(activeRowIndex === index ? null : index);
    };  

    const measurementConverter = (unit, measurementUnit) => {
      switch (measurementUnit) {
        case "гр":
        case "мл":
          return unit / 1000
        default:
          return unit;
      }
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
            <th className="branch-header ready-products" colSpan={2}> Готовая продукция</th>
            <th className="branch-header raw-products" colSpan={2}> Сырье</th>
            <th className="branch-header" colSpan={2}> Заканчивающиеся продукты</th>
          </tr>
          <tr>
            <th className="menu-table-id">№</th>
            <th className="menu-table-title stock_title">Наименование</th>
            <th className="menu-table-category stock_qty">Количество</th>
            <th className="stock_limit" >Лимит</th>
            <th >Дата прихода</th>
            <th> <BranchSelector/> </th>
          </tr>
        </thead>
        <tbody>
          {allStock.map((item, index) => (
            <tr key={index}>
              <td className="menu-table-id">{item.id}</td>
              <td>{item.stock_item}</td>
              <td>
                {measurementConverter(item.current_quantity,item.measurement_unit)}&nbsp;
                {item.measurement_unit==="гр"?"кг":"л"}
              </td>
              <td>{measurementConverter(item.minimum_limit,item.measurement_unit)}&nbsp;
                  {item.measurement_unit === "гр"? "кг":"л"}
              </td>
              <td>{new Date(item.restock_date).toLocaleString()}</td>
              <td className="menu-table-price">
                {item.branch_name}                          
                <InputAdornment
                  position="end"
                  className="menu-more-icon"
                  onClick={() => handleClick(index)}
                >
                  <IconButton>
                    <MoreVertIcon style={{color:"#5B7E9A"}}/>
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
            count={100} 
            variant="outlined" 
            shape="rounded" 
            onChange={pageControll}
          />
        </Stack>
      </div>
    </div>
    )
}

export default WareHouseContent;