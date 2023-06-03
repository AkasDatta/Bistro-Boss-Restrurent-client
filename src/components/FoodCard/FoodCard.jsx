import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    const {user} = useContext(authContext);
    const navigate = useNavigate();
    const handleAddToCart = item => {
        console.log*(item)
        if(user){
            fetch('http://localhost:5000/carts')
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
              })
        }
    }
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
                        <button onClick={() => handleAddToCart(item)} className="btn btn-ghost text-yellow-600 border-b-4 px-6 border-yellow-700 hover:bg-black hover:text-yellow-600">
                        ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;