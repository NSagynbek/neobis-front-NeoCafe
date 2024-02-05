import "./adminPage.css";
import { useState } from "react";
import Content from "../content/Content";
import SideBar from "../sideBar/SideBar";
import Header from "../header/Header";
import NotificationCenter from "../notificationCenter/NotificationCenter"

function AdminPage (){
    
    const [selectMenuItem,setSelectMenuItem]=useState("menu");

    const handleMenuClick = (menuItem)=>{
        setSelectMenuItem(menuItem);
    };

    return (
        <main className="admin-page">
        <aside>
            <SideBar onSeelct= {handleMenuClick}/>
        </aside>

        <section className="admin-page__content">
            <Header/>
            <Content onSeelct= {handleMenuClick}/>
        </section>

        </main>
    )
}

export default AdminPage;