import cardImage1 from '../../../assets/menu/salad-bg.jpg';
import cardImage2 from '../../../assets/menu/pizza-bg.jpg';
import cardImage3 from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ChefRecommends = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-20">
      <SectionTitle
        subHeading={<i>---Should Try---</i>}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <div className="col">
          <div className="card h-full bg-gray-100 rounded-lg">
            <img src={cardImage1} className="card-img-top" alt="Salad" />
            <div className="card-body flex flex-col justify-center items-center text-black">
                <h5 className="card-title">Caesar Salad</h5>
                <p className="card-text text-center">
                    Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                </p>
                <div className="card-actions">
                    <button className="btn btn-ghost text-yellow-600 border-b-4 px-6 border-yellow-700 hover:bg-black hover:text-yellow-600">
                    ADD TO CART
                    </button>
                </div>
            </div>
          </div>
        </div>
        <div className="col">
        <div className="card h-full bg-gray-100 rounded-lg">
            <img src={cardImage2} className="card-img-top" alt="Pizza" />
            <div className="card-body flex flex-col justify-center items-center text-black">
            <h5 className="card-title">Italian Pizza</h5>
            <p className="card-text text-center">Dough, Cheese, Tomato Sauce, Toppings.</p>
            <div className="card-actions">
                <button className="btn btn-ghost text-yellow-600 border-b-4 px-6 border-yellow-700 hover:bg-black hover:text-yellow-600">
                ADD TO CART
                </button>
            </div>
            </div>
        </div>
        </div>

        <div className="col">
        <div className="card h-full bg-gray-100 rounded-lg">
            <img src={cardImage3} className="card-img-top" alt="Soup" />
            <div className="card-body flex flex-col justify-center items-center text-black">
            <h5 className="card-title">Thai Soup</h5>
            <p className="card-text text-center">Broth, Vegetables, Herbs, Seasonings.</p>
            <div className="card-actions">
                <button className="btn btn-ghost text-yellow-600 border-b-4 px-6 border-yellow-700 hover:bg-black hover:text-yellow-600">
                ADD TO CART
                </button>
            </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
