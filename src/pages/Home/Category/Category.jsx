import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
      <section >
          <SectionTitle 
          subHeading={<i>---From 11.00am to 10.00pm---</i>}
          heading={"Order Online"}>
          </SectionTitle>
          <div className="max-w-screen-xl mx-auto">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-16"
          >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h6 className="text-4xl uppercase text-center -mt-16 mb-16 text-white">Salads</h6>
                </SwiperSlide>
                <SwiperSlide className="md:ml-3">
                    <img src={slide2} alt="" />
                    <h6 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h6>
                </SwiperSlide>
                <SwiperSlide className="md:ml-3">
                    <img src={slide3} alt="" />
                    <h6 className="text-4xl uppercase text-center -mt-16 text-white">soups</h6>
                </SwiperSlide>
                <SwiperSlide className="md:ml-3">
                    <img src={slide4} alt="" />
                    <h6 className="text-4xl uppercase text-center -mt-16 text-white">desserts</h6>
                </SwiperSlide>
                <SwiperSlide className="md:ml-3">
                    <img src={slide5} alt="" />
                    <h6 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h6>
                </SwiperSlide>
          </Swiper>      
        </div>
      </section>
    );
};

export default Category;


