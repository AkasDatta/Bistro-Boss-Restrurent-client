
const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="col">
            <div className="card h-full bg-gray-100 rounded-lg">
            <img src={image} className="card-img-top" alt="Salad" />
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 py-1 rounded">${price}</p>    
                <div className="card-body flex flex-col justify-center items-center text-black">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-center">
                       {recipe}
                    </p>
                    <div className="card-actions">
                        <button className="btn btn-ghost text-yellow-600 border-b-4 px-6 border-yellow-700 hover:bg-black hover:text-yellow-600">
                        ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;