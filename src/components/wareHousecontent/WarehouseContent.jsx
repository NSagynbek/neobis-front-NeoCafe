import "./wareHousecontent.css";
import MenuEditDelete  from "../../modalwindows/menuEditDelete/MenuEditDelete";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { InputAdornment,IconButton } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import 
{ getStock,
  readyStockItems,
  rawStockItems,
  finishingStockItems,
} from "../../api";
import { useState,useEffect } from "react";
import { Bars } from 'react-loader-spinner'
import BranchSelector from "../branchSelector/BranchSelector";
import { useSelector } from "react-redux";
import { branchSelectirTypes } from "../../utils";

function WareHouseContent (){

  const refreshStock = useSelector((state)=>state.refreshStock);
    const[isActive,setIsActive] = useState("")
    const[stock,setStock]=useState(null)
    const [loading, setLoading] = useState(true);
    const [activeRowIndex, setActiveRowIndex] = useState(null);
    const[type,setType]=useState("all")
    const[pageCount,setPageCount]=useState(1)
    const [page,setPage]=useState(
      {all:1,
       ready:1,
       raw:1,
       finishing:1}
       );
  

    const pageControll = (event,p)=>{
        if(type==="all"){
          setPage((prev)=>({...prev,all:p}))
        }
        else if(type==="ready"){
          setPage((prev)=>({...prev,ready:p}))
        }
        else if(type==="raw"){
          setPage((prev)=>({...prev,raw:p}))
        }

        else if(type==="finishing"){
          setPage((prev)=>({...prev,finishing:p}))
        }else{
          setPage((prev)=>({...prev,all:p}))
        }
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

    const handleSwitch =(section,sectionType)=>{
      setIsActive((prev)=>(section=== prev ? null : section))
      setType(sectionType)
    }

    const isSectionActive = (currentSection)=>{
      return currentSection===isActive
    }
    useEffect(() => {
      const fetchStock = async () => {
          try {
              let response;
              switch (type) {
                  case "all":
                      response = await getStock(page.all);
                      break;
                  case "ready":
                      response = await readyStockItems(page.ready);
                      break;
                  case "raw":
                      response = await rawStockItems(page.raw);
                      break;
                  case "finishing":
                      response = await finishingStockItems(page.finishing);
                      break;
                  default:
                      break;
              }
              setStock(response.results);
              setPageCount(Math.ceil(response.count /6))
              setLoading(false);
          } catch (error) {
              setLoading(false);
          }
      };

      fetchStock();
  }, [page, refreshStock, type]);

  
  

  

    return (
        <div className="menu-table-container">
          <div className="menu-table-subContainer">
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
            <th 
              className={`branch-header  ${isSectionActive("Готовая продукция")?"active-section":""}`} 
              colSpan={2}
              onClick={()=>{
                handleSwitch("Готовая продукция","ready")
              }}
            > 
              Готовая продукция
            </th>
            <th 
              className={`branch-header ${isSectionActive("Сырье")?"active-section":""}`}
              colSpan={2}
              onClick={()=>{
                handleSwitch("Сырье","raw")
              }}
            > 
              Сырье
            </th>
            <th 
              className={`branch-header finishing-product ${isSectionActive("Заканчивающиеся продукты")?"finishing-product__active":""}`}  
              colSpan={2}
              onClick={()=>{
                handleSwitch("Заканчивающиеся продукты","finishing")
              }}
            > 
              Заканчивающиеся продукты
            </th>
          </tr>
          <tr>
            <th className="menu-table-id">№</th>
            <th className="menu-table-title stock_title">Наименование</th>
            <th className="menu-table-category stock_qty">Количество</th>
            <th className="stock_limit" >Лимит</th>
            <th >Дата прихода</th>
            <th> 
              <BranchSelector
               type={branchSelectirTypes.stock}
              /> 
            </th>
          </tr>
        </thead>
        <tbody>
          {stock.map((item, index) => (
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
                {activeRowIndex === index && 
                <MenuEditDelete 
                  id={item.id} 
                  name={item.stock_item} 
                  section={"stock"} 
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
            onChange={pageControll}
          />
        </Stack>
      </div>
    </div>
    )
}

export default WareHouseContent;