const Names = ['arun','bala','chinna','devit','bharathi','vicky','ansari','mohammed']


export const getSuggestion = async(searchText) =>{
    return Names.filter((name)=>name.indexOf(searchText)!== -1)
}