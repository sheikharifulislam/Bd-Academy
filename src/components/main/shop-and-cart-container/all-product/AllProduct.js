
import SingleProduct from '../single-product/SingleProduct';
import '../ShopAndCartContainer.css';

const AllProduct = (props) => {
  
  const products = props.products;  

    return (
        <div className="all-products">
           {
               products.map((product) => <SingleProduct
                product = {product}
                key = {product.id}
                handelCart = {props.handelCart}
                ></SingleProduct>)
           }
        </div>
    );
};

export default AllProduct;