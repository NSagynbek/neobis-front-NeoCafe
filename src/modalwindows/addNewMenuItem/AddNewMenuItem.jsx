import "./addNewMenuItem.css";
import { useState,useEffect } from "react";
import { useSelector} from "react-redux";
import { getMenuItemDetails } from "../../api";
import AddNewMenuItemContent from "./addNewMenuItemContent";

function AddNewMenuItem() {
 

  return (
    <AddNewMenuItemContent/>
  );
}


export default AddNewMenuItem;
