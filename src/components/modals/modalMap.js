import { 
  AttentionModal, 
  ExampleModal,
  NotificationCenter,
  MenuEditDelete,
} from "./index";

const modalsMap = {
    attention: AttentionModal,
    example: ExampleModal,
    notification: NotificationCenter,
    menuEditDelete:MenuEditDelete,
  };
  
  export default modalsMap;