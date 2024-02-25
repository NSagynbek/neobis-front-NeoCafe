import "./adminPage.css";
import { useState } from "react";
import Content from "../../components/content/Content";
import SideBar from "../../components/sideBar/SideBar";
import Header from "../../components/header/Header";


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