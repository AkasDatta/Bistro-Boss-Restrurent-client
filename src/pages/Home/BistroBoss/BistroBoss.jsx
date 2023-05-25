import { Carousel } from "react-responsive-carousel";
import chefService from '../../../assets/home/chef-service.jpg';

const BistroBoss = () => {
  return (
    <div className="container mx-auto px-16 lg:px-24 mb-24">
      <div className="relative">
        <img src={chefService} alt="Chef Service" className="mx-auto" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center bg-white lg:py-24 lg:px-10 mx-10 p-4 lg:mx-20">
            <h3 className="text-2xl lg:text-4xl font-semibold text-black">Bistro Boss</h3>
            <p className="mt-2 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BistroBoss;
