function capitalizeFirstLetter(string) {
    const translations = {
        "menu": "Меню",
        "warehouse": "Склад",
        "branches": "Филиалы",
        "employees": "Сотрудники"
    };

    return translations[string] || null;
}


const stateMap = {
    isOpen:"isOpen",
    isOpenFirst:"isOpenFirst",
    isOpenSecond:"isOpenSecond",
    isOpenThird:"isOpenThird",
    isOpenFourth:"isOpenFourth",
    isOpenFifth:"isOpenFifth",
    isOpenSixth:"isOpenSixth", 
}

const setState = {
  isOpen:false,
  isOpenFirst:false,
  isOpenSecond:false,
  isOpenThird:false,
  isOpenFourth:false,
  isOpenFifth:false,
  isOpenSixth:false, 
}

const addIconStyles = { 
    color:"white", 
    width:"25px", 
    height:"25px", 
  }

  const notificationIconStyles = { 
    background:"#35536B", 
    color:"white", 
    width:"40px", 
    height:"40px", 
    padding:"5px", 
    borderRadius:"30px" 
  }

  const menuItemDeleteIconStyle = {
    color:"#F45656"
  }

  const editDeleteIconsStyles = {color: "#2A3440"}
  const sideBarIconsStyles = { color: "white" }
  const menuCategoryArrowIconStyles = {color:"#5B7E9A"}


 

 


  


export{
    capitalizeFirstLetter,
    stateMap,
    addIconStyles,
    notificationIconStyles,
    editDeleteIconsStyles,
    sideBarIconsStyles,
    menuCategoryArrowIconStyles,
    setState,
    menuItemDeleteIconStyle,
}