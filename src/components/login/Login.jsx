
import "./login.css";
import { useDispatch } from "react-redux";
import {openModal} from "../../redux/index";
import { toast } from 'react-toastify';

function Login() {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(
      openModal({
        name: "notification",
        props: {
          onchange: () => {},
          onSubmit: () => {},
          title: "Change phone number",
        },
      })
    );
  };


  const showToast = () => {
    toast.success('This is a success message');
  };

  return (
    <div>
      <h1 className="login">Login Page</h1>
      <button onClick={handleOpenModal}>Button</button>
      <button onClick={showToast}>Toast</button>
    </div>
  );
}

export default Login;
