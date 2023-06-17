import Pagination from "./Pagination"
import PaginationTop from "./PaginationTop"
import ProductSearch from "./ProductSearch"
import ProductSorting from "./ProductSorting"
import ProductsCards from "./ProductsCards"

const ProductsArea = () => {
  return (
    <div>
        <PaginationTop/>
        <ProductSorting/>
        <ProductSearch/>
        <ProductsCards/>
        <PaginationTop/>
    </div>
  )
}

export default ProductsArea