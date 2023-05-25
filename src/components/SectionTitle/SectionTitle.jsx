
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mx-auto md:w-4/12 my-10">
            <p className="text-yellow-600 mb-4">{subHeading}</p>
            <h3 className="text-black uppercase text-4xl border-y-4 py-3">{heading}</h3>
        </div>
    );
};

export default SectionTitle;