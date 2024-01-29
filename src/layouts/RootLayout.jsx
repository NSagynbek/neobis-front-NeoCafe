import {Outlet} from "react-router-dom"


export default function RootLayout (){
    return(
        <div className="rootLayout">

            <main className="main">
                <Outlet/>
            </main>
        
        </div>
    )
}