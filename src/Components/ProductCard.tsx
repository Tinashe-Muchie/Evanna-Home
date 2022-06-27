interface PROPS_IF {
    name: string;
    price: number;
    image: Array<{ 
        __typename?: 'Asset', 
        id: string, 
        url: string 
    }>
}

export const PRODUCT_CARD = ({name, image, price}:PROPS_IF) => {
    return (
        <div className="product_card_wrapper">
            <div className="image_wrapper">
                <img src={image[0].url} alt="" height={150} width={150} />
            </div>
            <div> {name} </div>
            <div> R {price} </div>
        </div>
    );
}
