import "./categoryListStyles.css";
import {IconButton, InputAdornment } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {openModal} from "../../redux/index";
import {useState,useEffect} from "react";
import { getMenuCategories } from "../../api";
import {useSelector,useDispatch } from "react-redux";


function CategoryList (){ 
    
    const [menuCategories,setMenuCategories]=useState([]);
    
    const rerender = useSelector((state)=>state.rerender)

    const dispatch = useDispatch();

    useEffect(()=>{
      const menuCategory = async ()=>{
        try{
          const res = await getMenuCategories()
          setMenuCategories(res)      
        }catch(error){
          console.log(error)
        }
      }
      menuCategory()
    },[rerender])

    const handleOpenModal = (modalName,type,details) => {
        dispatch(
          openModal({
            name: modalName,
            type:type,
            details:details
          })
        );
      };
    

    return (
        <>
        {menuCategories && menuCategories.length > 0 ? (
            menuCategories.map((category, index) => (
              <li className="menu__item" key={index}>
                {category.name}
                <InputAdornment 
                  position="end" 
                  id="menu__item_icon"
                  onClick={() => handleOpenModal("deleteMenuCategory", "deleteCategory",{name:category.name,id:category.id,deleteType:"category"})}
                >
                  <IconButton>
                    <DeleteOutlineIcon style={{ color: "#F45656" }} />
                  </IconButton>
                </InputAdornment>
              </li>
            ))
          ) : (
            <></> 
          )}
          
    </>
    )
}

export default CategoryList;