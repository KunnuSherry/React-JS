import ProductItem from "./components/product-item";
import "./style.css"

function ProductList(props) {
    const { name, age, dummyProduct, flag } = props;
    return (
        <div className="c">
            Hi from product list.
            {/* <ProductItem/> */}
            {flag ? (
                <h4>Hi Name is {name} and age is {age}</h4>
            ) : (<h4> Hello World !</h4>)}

            <ul>
                {dummyProduct.map((item, index) => (
                    <ProductItem itemName={item} key={index} />
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
