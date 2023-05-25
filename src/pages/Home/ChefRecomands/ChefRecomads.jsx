import cardImage1 from '../../../assets/menu/salad-bg.jpg';
import cardImage2 from '../../../assets/menu/pizza-bg.jpg';
import cardImage3 from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ChefRecomads = () => {
    return (
        <section>
            <SectionTitle 
                subHeading={"---Should Try---"}
                heading={"CHEF RECOMMENDS"}>
            </SectionTitle>
            <div className="flex justify-center">
                <div className="card w-96 bg-gray-100 m-4 rounded-none lg:mr-20">
                <figure className="rounded-none">
                    <img src={cardImage1} alt="Salad" className="" />
                </figure>
                    <div className="card-body items-center text-center text-black">
                        <h2 className="card-title">Caesar Salad</h2>
                        <p className='mb-4'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className="btn btn-ghost text-yellow-600 border-b-4 px-6 border-yellow-700 hover:bg-black hover:text-yellow-600">
                            ADD TO CART
                        </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-gray-100 m-4 rounded-none">
                <figure className="rounded-none">
                    <img src={cardImage2} alt="Pizza" className="rounded-none" />
                </figure>
                    <div className="card-body items-center text-center text-black">
                        <h2 className="card-title">Italien  Pizza</h2>
                        <p className='mb-4'>
                            Dough, Cheese, Tomato Sauce, Toppings.
                        </p>
                        <div className="card-actions">
                        <button className="btn btn-ghost text-yellow-600 border-b-4 px-6 border-yellow-700 hover:bg-black hover:text-yellow-600">
                            ADD TO CART
                        </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-gray-100 m-4 rounded-none lg:ml-20">
                <figure className="rounded-none">
                    <img src={cardImage3} alt="Salad" className="" />
                </figure>
                    <div className="card-body items-center text-center text-black">
                        <h2 className="card-title">Thai Soup</h2>
                        <p className='mb-4'>
                            Broth, Vegetables, Herbs, Seasonings.
                        </p>
                        <div className="card-actions">
                        <button className="btn btn-ghost text-yellow-600 border-b-4 px-6 border-yellow-700 hover:bg-black hover:text-yellow-600">
                            ADD TO CART
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecomads;
