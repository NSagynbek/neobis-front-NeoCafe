import {useDispatch } from "react-redux";
import modalMap from "./modalMap";
import {closeModal} from "../redux/index";
import "./modals.css";

const DynamicModal = ({ isOpen, modalData}) => {
  const dispatch = useDispatch();
  const dispatchCloseModal = ()=>{
    dispatch(closeModal())
  }
  if (!isOpen) return null;

  const { name, props } = modalData;
  const CurrentModalComponent = modalMap[name];

  return (
    <div className="dynamic-modal-container">
      <CurrentModalComponent {...props} />
      {/* <button onClick={dispatchCloseModal}>Close Modal</button> */}
    </div>
  );
};



export default DynamicModal