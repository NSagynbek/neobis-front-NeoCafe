import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App'
import './index.css'
import ToastContainer from "./components/toastContainer/ToastContainer"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
      <ToastContainer/>
    </Provider>
  </React.StrictMode>,
)
