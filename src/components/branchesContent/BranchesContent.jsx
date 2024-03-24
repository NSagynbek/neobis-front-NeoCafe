import "./branchesContent.css";
import MenuEditDelete from "../../modalwindows/menuEditDelete/MenuEditDelete";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { InputAdornment, IconButton } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from "react";
import { Bars } from 'react-loader-spinner';
import { getBranches } from "../../api";
import { useSelector } from "react-redux";

function BranchesContent() {
  
  const refreshStock = useSelector((state)=>state.refreshStock)

  const [allBranches, setAllBranches] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  const [page, setPage] = useState(1);
console.log(allBranches)

  useEffect(() => {
    const branch = async () => {
      try {
        const response = await getBranches();
        setAllBranches(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    branch();
  }, [page,refreshStock]);

  const pageControll = (event, p) => {
    setPage(p);
  };

  const handleClick = (index) => {
    setActiveRowIndex(activeRowIndex === index ? null : index);
  };


  
  const formatSchedule = (schedules) => {
    let weekdays = '';
    let weekend = '';
    
    schedules.forEach((schedule) => {
      const startTime = schedule.start_time.substring(0, 5);
      const endTime = schedule.end_time.substring(0, 5);
      if (schedule.day === 'Пн') weekdays = 'Пн';
      if (schedule.day === 'Пт') weekdays += '-Чт';
      if (schedule.day === 'Сб') weekend = 'Сб';
      if (schedule.day === 'Вс') weekend = 'Сб-Вс';
    });
  
    return [
      {
        days: weekdays,
        start_time: '08:00',
        end_time: '20:00',
      },
      {
        days: weekend,
        start_time: '10:00',
        end_time: '20:00',
      },
    ];
  };
  
  return (
    <div className="menu-table-container">
      <div className="menu-table-subContainer">
        {loading ? (
          <div className="loader-container">
            <Bars
              height="60"
              width="60"
              color="gray"
            />
          </div>
        ) : (
          <table className="menu-table">
            <thead>
              <tr>
                <th className="menu-table-id">№</th>
                <th>Название кофейни</th>
                <th>Адрес</th>
                <th colSpan={3} className="schedule">Время работы</th>
              </tr>
            </thead>
            <tbody>
              {allBranches ? (
                allBranches.map((item, index) => (
                  <tr key={index}>
                    <td className="menu-table-id">{item.id}</td>
                    <td className="branch-table-name">{item.branch_name}</td>
                    <td className="branch-table-address">{item.address}</td>
                    <td className="branch-table-schedule">
                      {formatSchedule(item.schedules).map((schedule, index) => (
                        <span key={index}>
                          {schedule.days}&nbsp;
                          с {schedule.start_time}&nbsp;
                          до {schedule.end_time}&nbsp;&nbsp;
                        </span>
                      ))}
                      <InputAdornment
                        position="end"
                        className="beanches-menu-more-icon"
                        onClick={() => handleClick(index)}
                      >
                        <IconButton>
                          <MoreVertIcon style={{ color: "#5B7E9A" }} />
                        </IconButton>
                      </InputAdornment>
                      {activeRowIndex === index && 
                      <MenuEditDelete 
                        id={item.id} 
                        name={item.branch_name} 
                        section={"branch"}
                      />
                      }
                    </td>
                  </tr>
                ))
              ) : (
                <></>
              )}
            </tbody>
          </table>
        )}
      </div>
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
  );
}

export default BranchesContent;

