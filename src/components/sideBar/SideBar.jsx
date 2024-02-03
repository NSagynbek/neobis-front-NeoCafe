import "./sideBar.css";

function SideBar(){
    return (
        <main className="sideBar">
          
            <header className="sideBar__logo-text">
              <span className="sideBar-neo">neo</span>
              <span className="cafe">cafe</span>
            </header>
          

          <section className="admin-sections">
            <button onClick={() => onSelect('menu')}>Menu</button>
            <button onClick={() => onSelect('warehouse')}>Warehouse</button>
            <button onClick={() => onSelect('branches')}>Branches</button>
            <button onClick={() => onSelect('employees')}>Employees</button>
          </section>
        </main>
    )
}

export default SideBar;