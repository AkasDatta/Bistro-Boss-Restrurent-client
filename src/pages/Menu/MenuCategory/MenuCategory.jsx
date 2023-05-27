import { Link } from 'react-router-dom';
import Cover from '../../../Shared/Cover/Cover';
import MenuItem from '../../../Shared/MenuItem/MenuItem';

const MenuCategory = ({items, title, img}) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 max-w-screen-xl mx-auto mt-20 mb-16' >
                {
                    items.map(item => (<MenuItem
                        key={item._id} 
                        item={item} />
                    ))
                }
            </div>
            <div className='text-center mb-12'>
                <Link to={`/order/${title}`}>
                    <button className="btn btn-ghost text-black border-b-4 px-6 border-black hover:bg-black hover:text-yellow-600 uppercase">
                        Order your favorite food
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;