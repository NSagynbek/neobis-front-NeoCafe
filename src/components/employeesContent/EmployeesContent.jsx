import "./employeesContent.css";
import Employees from "./Employees";
import { useSelector } from "react-redux";


function EmployeesContent () {
    const isSchedule = useSelector((state)=>state.isSchedule)
   
    return (
        <>
          {isSchedule?<EmployeesSchedule/>:<Employees/>}
        </>       
    );
}

export default EmployeesContent;
