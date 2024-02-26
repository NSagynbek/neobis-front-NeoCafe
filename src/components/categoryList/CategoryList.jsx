import "./categoryListStyles.css";
import {IconButton, InputAdornment } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch,useSelector } from "react-redux";
import {openModal} from "../../redux/index";


function CategoryList (){
    const menuCategories = useSelector((state)=> state.menuCategory);
    const dispatch = useDispatch();
    
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
                  className="menu__item_icon"
                  onClick={() => handleOpenModal("deleteMenuCategory", "deleteCategory",{id:category.id,name:category.name})}
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