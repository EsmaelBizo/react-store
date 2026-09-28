import { useState } from "react";
import defaultImg from "../../assets/default-product-image.jpg";
import Loading from "../loading/loading";
import useDeleteProduct from "../../hooks/use-delete-product";
import { Link } from "react-router";

function ProductCard({ product, products, setProducts }) {
  const [operationInProgress, setOperationInProgress] = useState("");
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { handleDelete } = useDeleteProduct({
    products,
    setProducts,
    setOperationInProgress,
    setIsLoading,
  });

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md">
      {isLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-surface/85 backdrop-blur-sm">
          <Loading text={operationInProgress} />
        </div>
      )}

      {!isLoading && (
        <>
          <div className="relative aspect-4/3 overflow-hidden bg-surface-2">
            {!isImgLoaded && (
              <img
                src={defaultImg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}

            <img
              src={product.images?.[0] || defaultImg}
              alt={product.name || "Product"}
              onLoad={() => setIsImgLoaded(true)}
              className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                !isImgLoaded ? "opacity-0" : "opacity-100"
              }`}
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />

            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold tracking-wide text-text capitalize shadow-sm backdrop-blur-md">
              {product.category || "general"}
            </span>
          </div>

          <div className="p-4 sm:p-5">
            <div className="min-w-0">
              <h3 className="line-clamp-1 text-lg font-bold tracking-tight text-text">
                {product.title}
              </h3>

              <p className="mt-2 line-clamp-3 min-h-16.5 text-sm leading-6 text-muted">
                {product.description || "No description available."}
              </p>
            </div>

            <div className="mt-5 border-t border-border pt-4">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="block text-xs font-medium uppercase tracking-wide text-muted">
                    Price
                  </span>

                  <span className="mt-0.5 block text-2xl font-black tracking-tight text-text">
                    ${product.price}
                  </span>
                </div>

                <div className="flex w-full items-center gap-2 sm:w-auto">
                  <Link
                    to={`/edit/${product.id}`}
                    className="inline-flex h-10 flex-1 items-center justify-center rounded-xl border border-border bg-surface px-3 text-sm font-bold text-text transition-colors hover:bg-surface-2 focus:outline-none focus:ring-2 focus:ring-primary/30 sm:flex-none sm:px-4"
                  >
                    Edit
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleDelete(product.id)}
                    className="inline-flex h-10 flex-1 items-center justify-center rounded-xl bg-danger-soft px-3 text-sm font-bold text-danger transition-colors hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500/20 sm:flex-none sm:px-4"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </article>
  );
}

export default ProductCard;
