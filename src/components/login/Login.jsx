
import "./login.css";
import { useDispatch } from "react-redux";
import {openModal} from "../../redux/index";

function Login() {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(
      openModal({
        name: "example",
        props: {
          onchange: () => {},
          onSubmit: () => {},
          title: "Change phone number",
        },
      })
    );
  };

  return (
    <div>
      <h1 className="login">Login Page</h1>
      <button onClick={handleOpenModal}>Button</button>
    </div>
  );
}

export default Login;
