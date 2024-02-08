function capitalizeFirstLetter(string) {
    const translations = {
        "menu": "Меню",
        "warehouse": "Склад",
        "branches": "Филиалы",
        "employees": "Сотрудники"
    };

    return translations[string] || null;
}



export{capitalizeFirstLetter}