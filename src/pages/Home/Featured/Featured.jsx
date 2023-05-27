import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20">
            <SectionTitle 
                subHeading={<i>---Check it out---</i>}
                heading={<span className="text-white">FROM OUR MENU</span>}>
            </SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-600 bg-opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10">
                    <h3>March 20, 2023</h3>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="mt-6 btn btn-ghost text-white border-b-4 px-6 border-white hover:bg-black hover:text-yellow-600">
                            ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;