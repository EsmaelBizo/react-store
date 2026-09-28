import ProductCard from '../../components/product-card/product-card.jsx'
import Loading from "../../components/loading/loading";
import useGetProducts from "../../hooks/use-get-products.js";
import Container from '../../components/container/container.jsx';

function ProductsPage() {
  const { products, setProducts, isLoading } = useGetProducts();

  return (
    <>
      {isLoading &&
        <Loading text="Loading Products..." className='min-h-96'/>
      }
        {!isLoading && (
          <Container className="my-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products && products.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  products={products}
                  setProducts={setProducts}
                />
              )
            )}
            {products.length === 0 && (
              <div className="col-span-full text-center text-muted">
                Empty Store. Add some products to see them here.
              </div>
            )}
          </Container>
        )}
    </>
  );
}

export default ProductsPage;