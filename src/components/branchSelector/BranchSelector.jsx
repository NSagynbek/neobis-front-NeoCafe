import "./branchSelectorStyles.css";
import { InputAdornment, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import { selectMenuCategory } from "../../redux/actions&reducers/actions";
import { getBranches } from "../../api";

function BranchSelector({color,setStockItems}) {

    const [branch,setBranch] = useState(null);
    const [backgroundColor,setbackgroundColor]=useState(color)
    const [allBranches,setAllBranches]=useState(null)
    const [isClicked,setIsClicked] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
      if (branch !== null) {
        dispatch(selectMenuCategory(branch));
      }
    }, [branch]);

    useEffect(()=>{
      const getBranch = async ()=>{
        try{
          const response = await getBranches()
          setAllBranches(response)
        }catch(error){
          console.log(error)
        }
      }
      getBranch()
    },[])
    
    
    
    const handleCategory = (branch,id)=>{      
        setBranch(branch)
        if(setStockItems){setStockItems((prev)=>({...prev,["branch"]:id}))}
        setIsClicked(!isClicked);
    }

    const handleToggle = () => {
        setIsClicked(!isClicked);
    };
    
    return (
      <div 
        className={
          `add-menu-new-item-category-subContainer-container branch 
          ${backgroundColor?"stock":""}`
        }
      >
        <div className="add-menu-new-item-dropdown-container">
          <div 
            className={
              `add-menu-new-item-dropdown-subContainer branchSubcontainer 
              ${isClicked ? "transform branchTransform" : ""}`
            }
          >
            <p className="add-menu-new-item-dropdown-title branch-title">
              {branch ? branch : "Филиал"}
            </p>
            <InputAdornment 
              position="end" 
              className="add-menu-new-item-dropdown-icons" 
              onClick={handleToggle}
            >
              <IconButton>
                {isClicked ? (
                  <KeyboardArrowUpIcon style={{ color: "#5B7E9A" }} />
                ) : (
                  <KeyboardArrowDownIcon style={{ color: "#5B7E9A" }} />
                )}
              </IconButton>
            </InputAdornment>
          </div>
          <ul 
            className={
              `add-menu-new-item-dropdown-categries branch-list 
              ${isClicked ? "add-menu-new-item-dropdown-toggle" : ""}`
            }
          >
            {allBranches && allBranches.length > 0 ? (
              allBranches.map((item, index) => (
                <li 
                  key={index} 
                  className="add-menu-new-item-dropdown-item branch-item" 
                  onClick={() => handleCategory(item.branch_name,item.id)}
                >
                  {item.branch_name}
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    );
 }    

  export default BranchSelector;