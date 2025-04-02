import styles from "./product-item.module.css"
function ButtonComponent(){
    return <button className={styles.buttonStyle}>Click here</button>
}

function ProductItem(props){
    const {itemName, key} = props
    return( 
    <div className={styles.productTitle} key={key}>
        {itemName}
        <ButtonComponent/>
    </div>
    );
}

export default ProductItem;