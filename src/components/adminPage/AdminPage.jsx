import "./adminPage.css";
import { useState } from "react";
import Content from "../content/Content";
import SideBar from "../sideBar/SideBar";
import Header from "../header/Header";
import NotificationCenter from "../notificationCenter/NotificationCenter"

function AdminPage (){
    
    const [selectedMenuItem,setSelectedMenuItem]=useState("menu");

    const handleMenuClick = (menuItem)=>{
        setSelectedMenuItem(menuItem);
    };

    return (
        <main className="admin-page">
        <aside>
            <SideBar onSelct={handleMenuClick}/>
        </aside>

        <section className="admin-page__content">
            <Header selectedMenuItem={selectedMenuItem}/>
            <Content selectedMenuItem={selectedMenuItem}/>
        </section>

        </main>
    )
}

export default AdminPage;