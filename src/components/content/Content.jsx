  import "./content.css";
import MenuContent from '../menuContent/MenuContent';
import WarehouseContent from '../wareHousecontent/WarehouseContent';
import BranchesContent from '../branchesContent/BranchesContent';
import EmployeesContent from '../employeesContent/EmployeesContent';

const Content = ({selectedMenuItem}) => {
  
  switch (selectedMenuItem) {
    case 'menu':
      return <MenuContent />;
    case 'warehouse':
      return <WarehouseContent />;
    case 'branches':
      return <BranchesContent />;
    case 'employees':
      return <EmployeesContent />;
    default:
      return null;
  }
};

export default Content;
