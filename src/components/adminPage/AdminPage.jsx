import "./adminPage.css";
import { useState } from "react";
import Content from "../content/Content";
import SideBar from "../sideBar/SideBar";
import Header from "../header/Header";

function AdminPage (){
    const [selectMenuItem,setSelectMenuItem]=useState("menu");

    const handleMenuClick = (menuItem)=>{
        setSelectMenuItem(menuItem);
    };

    return (
        <main className="admin-page">
        <aside>
            <SideBar/>
        </aside>

        <section>
            <Header/>
            <Content/>
        </section>

        </main>
    )
}

export default AdminPage;