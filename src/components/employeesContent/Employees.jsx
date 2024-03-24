import "./employeesContent.css";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { InputAdornment, IconButton } from "@mui/material";
import MenuEditDelete from "../../modalwindows/menuEditDelete/MenuEditDelete";
import { useState, useEffect } from "react";
import { Bars } from 'react-loader-spinner';
import { getEmployees } from "../../api";
import { employeeContentToggle } from "../../redux";
import { useDispatch } from "react-redux";
import BranchSelector from "../branchSelector/BranchSelector";
import { branchSelectirTypes } from "../../utils";

function Employees() {
    const [employees, setEmployees] = useState([]);
    const [activeRowIndex, setActiveRowIndex] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [isSchedule, setIsSchedule] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const [pageCount,setPageCount]=useState(1)

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await getEmployees(page);
                setEmployees(response.results);
                setPageCount(Math.ceil(response.count / 7))
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchEmployees();
    }, [page]);

    const pageControl = (event, p) => {
        setPage(p);
    };

    const handleClick = (index) => {
        setActiveRowIndex(activeRowIndex === index ? null : index);
    };

    const handleSchedule = () => {
        dispatch(employeeContentToggle());
    };

    const handleButtonClick = (section) => {
        setIsSchedule(!isSchedule);
        setActiveSection(section === activeSection ? null : section);
    };

    const isActive = (section) => section === activeSection;

    return (
        <div className="menu-table-container">
            <div className="menu-table-subContainer employee">
                {loading ? (
                    <div className="loader-container">
                        <Bars height="60" width="60" color="gray" />
                    </div>
                ) : (
                    <table className="menu-table employee-table">
                        <thead>
                            <tr>
                                <th className="employee-name">Имя</th>
                                <th>Должность</th>
                                {/* <th>Логин</th>
                                <th>Пароль</th> */}

                                <th className="employees-email">
                                  <button
                                    className={`employee-email-btn ${isActive("email") ? "activeBtn" : ""} ${isSchedule?"":"activeBtn"}`}
                                    onClick={() => handleButtonClick("email")}
                                  >
                                    Логин
                                  </button>

                                  <button
                                    className={`employee-schedule-btn ${isActive("schedule") ? "activeBtn" : ""}`}
                                    onClick={() => handleButtonClick("schedule")}
                                  >
                                    Пароль
                                  </button>
                                </th>
                                <th className="employees-branch">
                                    <BranchSelector 
                                      type={branchSelectirTypes.employees}
                                    />
                                </th>
                                <th className="employees-email">График работы</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees && employees.length > 0 ? (
                                employees.map((item, index) => (
                                    <tr key={index}>
                                        <td className="employee-name"><p>{item.first_name}</p></td>
                                        <td>{item.user_type}</td>
                                        <td>
                                          {isSchedule ? (
                                            item.password 
                                           ) : (                  
                                            item.username 
                                          )}
                                        </td>

                                        <td>{item.branch_name}</td>
                                        <td>
                                            {
                                                item.employee_schedules.map((schedule, scheduleIndex) => (
                                                    <td colspan={6} className="employee-schedule" key={scheduleIndex}>
                                                        {schedule.day},&nbsp;
                                                    </td>
                                                ))

                                            }
                                        </td>
                                        <td className="employee-schedule-table-data">
                                            <InputAdornment
                                                position="end"
                                                className="employee-more-icon"
                                                onClick={() => handleClick(index)}
                                            >
                                                <IconButton>
                                                    <MoreVertIcon style={{ color: "#5B7E9A" }}/>
                                                </IconButton>
                                            </InputAdornment>
                                            {activeRowIndex === index && <MenuEditDelete />}
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
                        count={pageCount} 
                        variant="outlined" 
                        shape="rounded" 
                        onChange={pageControl}
                    />
                </Stack>
            </div>
        </div>
    );
}

export default Employees;

