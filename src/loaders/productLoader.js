import { getShoppingCart } from "../utilities/fakedb";

const productLoader = async ({id}) => {

    const loadedProducts = await fetch('/products.json');
    const products = await loadedProducts.json();
    
    if(products.length){
        const productDetails = products.find(product => product.id === id)
        return productDetails
    }
}

export default productLoader;