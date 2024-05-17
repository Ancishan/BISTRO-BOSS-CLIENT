

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-3/12 mt-8">
            <p className="text-yellow-700 text-center pb-2 text-xl">---- {subHeading} ----</p>
            <h3 className="text-4xl uppercase border-y-4 py-4 text-center mb-6">{heading}</h3>
        </div>
    );
};

export default SectionTitle;