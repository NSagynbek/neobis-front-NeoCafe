import "./branchesContent.css";
import MenuEditDelete  from "../../modalwindows/menuEditDelete/MenuEditDelete";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { InputAdornment,IconButton } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getStock } from "../../api";
import { useState,useEffect } from "react";
import { Bars } from 'react-loader-spinner'
import { getBranches } from "../../api";

function BranchesContent (){

    const[allBranches,setAllBranches]=useState(null)
    const [loading, setLoading] = useState(true);
    const [activeRowIndex, setActiveRowIndex] = useState(null);
    const [page,setPage]=useState(1); 

    
    useEffect(()=>{
        const branch = async ()=>{
            try{
                const response = await getBranches();
                console.log(response)
                setAllBranches(response)
                setLoading(false)
            }catch(error){
                setLoading(false)
            }
            
        }
        branch()
    },[page])

    const pageControll = (event,p)=>{
        setPage(p)
      }

    const handleClick = (index) => {
      setActiveRowIndex(activeRowIndex === index ? null : index);
    }; 

    const formatSchedule = (schedules) => {
        // Initialize variables for grouping days with the same working hours
        let currentStartTime = null;
        let currentEndTime = null;
        let currentDay = null;
        let groupedSchedule = [];
      
        // Iterate through each schedule item
        schedules.forEach((schedule, index) => {
          // If the working hours are different from the current grouping, start a new group
          if (
            schedule.start_time !== currentStartTime ||
            schedule.end_time !== currentEndTime
          ) {
            // If there was a previous group, add it to the grouped schedule
            if (currentDay !== null) {
              groupedSchedule.push({
                days: currentDay,
                start_time: currentStartTime,
                end_time: currentEndTime,
              });
            }
            // Start a new group with the current working hours
            currentDay = schedule.day;
            currentStartTime = schedule.start_time;
            currentEndTime = schedule.end_time;
          } else {
            // If the working hours are the same, add the current day to the current group
            currentDay += `-${schedule.day}`;
          }
      
          // If this is the last schedule item, add the current group to the grouped schedule
          if (index === schedules.length - 1) {
            groupedSchedule.push({
              days: currentDay,
              start_time: currentStartTime,
              end_time: currentEndTime,
            });
          }
        });
      
        return groupedSchedule;
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
            <th >№</th>
            <th >Название кофейни</th>
            <th >Адрес</th>
            <th  >Время работы</th>
          </tr>
        </thead>
        <tbody>
          {allBranches?(
            allBranches.map((item,index)=>(
                <tr key={index}>
                <td className="menu-table-id">{item.id}</td>
                <td className="branch-table-name">{item.branch_name}</td>
                <td className="branch-table-address">{item.address}</td>
                <td className="branch-table-schedule">   
                {formatSchedule(item.schedules).map((schedule, index) => (
                  <p key={index}>  {schedule.days}  с {schedule.start_time}
                    до {schedule.end_time}
                  </p>
                 ))}                
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

            ))
            

          ):(
            <></>
          )}
           
       
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

export default BranchesContent;