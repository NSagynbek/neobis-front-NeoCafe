import { Provider,useSelector} from "react-redux";
import store from './redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PrivateRoute from "./components/privateRoute/PrivateRoute"
import RootLayout from "./layouts/rootLayout/RootLayout";
import DynamicModal from "./modalwindows/DynamicModal";
import AdminPage from "./pages/adminPage/AdminPage";
import Login from "./pages/login/Login"
import Content from "./components/content/Content";
import ContentLayout from "./components/contentLayout/ContentLayout";

  
function App() {
   const isOpen = useSelector((state) => state.isOpen);
   const modalData = useSelector((state) => state.modalData);
  
  return (
    <Provider store={store}>
    <Router>

      <Routes>
        <Route path="/" element={<RootLayout/>}>
          
      <Route element={<PrivateRoute/>}>       
        <Route path="/admin-page" element={<AdminPage/>}/>
      </Route>

       <Route path="/" element={<Login/>}/>
      
      </Route>

        

      </Routes>
      <DynamicModal isOpen={isOpen} modalData={modalData}/>
    </Router>
    </Provider>
  );
  

}

export default App