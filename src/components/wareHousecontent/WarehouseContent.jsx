import "./wareHousecontent.css";
import MenuEditDelete  from "../../modalwindows/menuEditDelete/MenuEditDelete";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { InputAdornment,IconButton } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getStock } from "../../api";
import { useState,useEffect } from "react";
import { Bars } from 'react-loader-spinner'

function WareHouseContent (){

    const[allStock,setAllStock]=useState(null)
    const [loading, setLoading] = useState(true);
    const [activeRowIndex, setActiveRowIndex] = useState(null);
    const [page,setPage]=useState(1); 
    console.log(page)

    useEffect(()=>{
        const stock = async ()=>{
            try{
                const response = await getStock(page);
                console.log(response)
                setAllStock(response.results)
                setLoading(false)
            }catch(error){
                setLoading(false)
            }
            
        }
        stock()
    },[page])

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
            <th className="menu-table-category">Количество</th>
            <th >Лимит</th>
            <th >Дата прихода</th>
            <th >Филиал</th>
          </tr>
        </thead>
        <tbody>
          {allStock.map((item, index) => (
            <tr key={index}>
              <td className="menu-table-id">{item.id}</td>
              <td>{item.stock_item}</td>
              <td>{item.current_quantity}</td>
              <td>{item.minimum_limit}</td>
              <td>{item.restock_date}</td>
              <td className="menu-table-price">
                {/* {item.branch} */}
                NeoCafe Ala-Too Square
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
            count={2} 
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