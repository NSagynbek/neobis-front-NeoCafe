// DynamicModal.js
import { connect, useDispatch } from "react-redux";
import modalMap from "./modalMap";
import { closeModal } from "../../redux/index";


const DynamicModal = ({ isOpen, modalData}) => {
  const dispatch = useDispatch();
  const dispatchCloseModal = ()=>{
    dispatch(closeModal())
  }
  if (!isOpen) return null;

  const { name, props } = modalData;
  const CurrentModalComponent = modalMap[name];

  return (
    <div>
      <CurrentModalComponent {...props} />
      <button onClick={dispatchCloseModal}>Close Modal</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
  modalData: state.modalData,
});


const mapDispatchToProps = {
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(DynamicModal);

