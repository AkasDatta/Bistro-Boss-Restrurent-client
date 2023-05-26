import { Carousel } from "react-responsive-carousel";
import chefService from '../../../assets/home/chef-service.jpg';

const BistroBoss = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="relative">
        <img src={chefService} alt="Chef Service" className="hidden sm:block mx-auto" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center bg-white p-4 lg:p-10 mx-4 lg:mx-20 sm:mx-8 sm:p-6">
            <h3 className="text-2xl lg:text-4xl font-semibold text-black">Bistro Boss</h3>
            <p className="mt-2 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BistroBoss;
