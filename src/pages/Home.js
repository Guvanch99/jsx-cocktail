import React,{useState} from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

 const Home = () => {
     const [loading, setloading] = useState(false)
     const [searchTerm, setsearchTerm] = useState('d')
     const [cocktails, setcocktails] = useState([])
     React.useEffect(()=>{
         async function getDrinks(){
             setloading(true)
             try {
                const response= await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
                const data=await response.json();
                const {drinks}=data
                if(drinks){
                    const newCocktails=drinks.map(item=>{
                     const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=item;
                     return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass}
                    })
                    setcocktails(newCocktails)
                } else{
                    setcocktails([])
                }
             }catch(error){

             }
           setloading(false)
         }
        
        getDrinks();
    },[searchTerm])
    return (
      
        <>
            <SearchForm setsearchTerm={setsearchTerm}/>
            <CocktailList loading={loading} cocktails={cocktails}/>
        </>
    )
}
export default Home