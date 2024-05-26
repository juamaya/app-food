import React from 'react'
import { useNavigate } from 'react-router-dom'

const MealItem = ({ data }) => {
    // console.log(data)
    let navigate = useNavigate()
    return (
        <>
            {
                (!data) ? "Not Found" : data.map(item => {
                    // console.log(item.idMeal)
                    return (
                        <div className="card" key={item.idMeal} onClick={()=>{navigate(`/food/${item.idMeal}`)}}>
                            <img src={item.strMealThumb} alt="imagen" />
                            <h3>{item.strMeal}</h3>
                        </div>

                    )
                })
            }
        </>
    )
}

export default MealItem