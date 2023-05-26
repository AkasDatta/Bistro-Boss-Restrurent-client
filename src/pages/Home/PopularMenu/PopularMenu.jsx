import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === 'popular');
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto px-4 mb-24">
      <div className="px-4 sm:px-24">
        <div className="flex flex-col items-center sm:items-start">
          <SectionTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}
            subHeadingClassName="text-center sm:text-left"
            headingClassName="text-3xl sm:text-4xl font-semibold"
          ></SectionTitle>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map(item => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <button className="mt-12 btn btn-ghost text-black border-b-4 px-6 border-black hover:bg-black hover:text-yellow-600 uppercase">
            View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
