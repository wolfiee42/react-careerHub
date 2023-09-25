const getStoredItems = () => {
    const storeditems = localStorage.getItem('job-application');
    if (storeditems) {
        return JSON.parse(storeditems)
    }
    return [];
}

const saveItemInStorage = id => {
    const items = getStoredItems();
    const isExist = items.find(item => item === id)
    if (!isExist) {
        items.push(id)
        localStorage.setItem('job-application', JSON.stringify(items))
    }
}

export { getStoredItems, saveItemInStorage }