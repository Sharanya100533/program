function updateProductInfo(product){
   const{id,name}=product;
   return { ...product,id,name,discount:20,inStock:true};
}

const product = {id: 101, name: 'Laptop', price: 1000, category:'Electronics'};
const updateProduct=updateProductInfo(product);
console.log(updateProduct)