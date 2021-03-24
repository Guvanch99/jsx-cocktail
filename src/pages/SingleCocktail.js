import React,{useState} from 'react'
import {useParams, Link} from 'react-router-dom'

const SingleCocktail = () => {
    const {id} = useParams();
    const [loading, setloading] = useState(false)
    const [cocktail, setcocktail] = useState(null)
    React.useEffect(()=>{
        async function getCocktail(){
         try {
             const response =await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
             const data=await response.json()
             if(data.drinks){
                 const {strDrink:name,strAlcoholic:info,strDrinkThumb:image,strCategory:category,strGlass:glass,strInstructions:instructions,strIngredients1,strIngredients2,strIngredients3,strIngredients4,strIngredients5}=data.drinks[0]
                  const ingredients=[strIngredients1,strIngredients2,strIngredients3,strIngredients4,strIngredients5]
                  const newCocktail={
                      name,image,category,glass,instructions,ingredients,info
                  }
                  setcocktail(newCocktail)
             }else{
                 setcocktail(null)
             }
         } catch (error) {
            
         }
         setloading(false)
        }
       getCocktail()
    },[id])
    if(loading){
        return <h2 className='section-title'>Loading...</h2>
    }
    if(!cocktail){
        return <h2 className='section-title'>no match</h2>
    }else{
        const {name,image,category,info,glass,instructions,ingredients}=cocktail
        return <section className='section cocktail-section'>
          <Link to='/' className='btn btn-primary'>Back</Link>
          <h2 className='section-title'>{name}</h2>
          <div className='drink'>
              <img src={image} alt={name}/>
              <p>name: {name}</p>
              <p>category: {category}</p>
              <p>info : {info}</p>
              <p>glass: {glass}</p>
              <p>instructions: {instructions}</p>
              <p>
                  ingredients: {' '}
                  {ingredients.map((item,index)=>{
                      return item ? <span key={index}>{item}</span>:null;
                  })}
              </p>

          </div>
        </section>
    }
 
}
export  default SingleCocktail
