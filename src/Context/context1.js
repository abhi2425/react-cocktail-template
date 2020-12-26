import React, { useContext, useState } from 'react'
import Axios from "axios"
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext()

export const FeaturesProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('a')
    const [cocktails, setCocktails] = useState([])
    const [error, setError] = useState(false)

    const fetchCocktailList = async () => {
        setLoading(true)
        try {
            const response = await Axios.get(url + searchTerm)
            console.log(response.data)
        } catch (error) {
            setLoading(false)
            setError(true)
            console.log(error)
        }
    }
    useEffect(() => {
        fetchCocktailList()
    }, [searchTerm])

    return (
        <AppContext.Provider
            value={
                {
                    searchTerm,
                    cocktails,
                    error,
                    loading,
                    setSearchTerm
                }
            }
        >
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => useContext(AppContext)
