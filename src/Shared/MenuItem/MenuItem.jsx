
const MenuItem = ({item}) => {
    const {name, price, image, recipe, category} = item;
    return (
        <div className="flex space-x-4 text-black">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase font-bold">{name}------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;