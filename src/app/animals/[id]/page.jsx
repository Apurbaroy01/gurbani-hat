

const AnimalsDetails = async ({params}) => {
    const {id} = await params;

    return (
        <div>
            this is animals details page for animal with ID: {id}
        </div>
    );
};

export default AnimalsDetails;