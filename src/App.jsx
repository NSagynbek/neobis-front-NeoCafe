import { Provider,useSelector} from "react-redux";
import store from './redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PrivateRoute from "./components/privateRoute/PrivateRoute"
import RootLayout from "./layouts/RootLayout";
import Login from "./components/login/Login"
import DynamicModal from "@components/modals/DynamicModal";
import CodeConfirmation from "./components/codeConfirmation/Codeconfirmation";
import AdminPage from "./components/adminPage/AdminPage";
  
function App() {
  // const isOpen = useSelector((state) => state.isOpen);
  // const modalData = useSelector((state) => state.modalData);
  
  return (
    <Provider store={store}>
    <Router>

      <Routes>
        <Route path="/" element={<RootLayout/>}>
          
      <Route element={<PrivateRoute/>}>       
        <Route path="/admin-page" element={<AdminPage/>}/>
      </Route>

       <Route path="/" element={<Login/>}/>
       <Route path="/code" element={<CodeConfirmation/>}/>    
        </Route>

        

      </Routes>
      {/* <DynamicModal isOpen={isOpen} modalData={modalData} /> */}
    </Router>
    </Provider>
  );
  

}

export default App