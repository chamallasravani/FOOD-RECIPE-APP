import React from 'react'

const Products = ({ data }) => {
    return (
        <div>
            <div className="row">
                {data.map(data =>
                    <div className="cards">
                        <div>
                            <img className="card-img-top" src={data.recipe.image} alt="Card image cap" />
                            <div class="card-body">
                                <div className='card-footer'>
                                    <h5 class="card-title">{data.recipe.label}</h5>
                                    <p class="card-text">Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
                                    <button className='btn'>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Products;
