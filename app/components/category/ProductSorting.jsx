import ProductOnPage from "./ProductOnPage"
import SortingSelect from "./SortingSelect"
import View from "./View"
import ViewSelect from "./ViewSelect"

const ProductSorting = () => {
  return (
    <div className="ProductSorting">
        <div className="row">
            <div className="col-3"><SortingSelect/></div>
            <div className="col-3"><ViewSelect/></div>
            <div className="col-3"><ProductOnPage/></div>
            <div className="col-3"><View/></div>
        </div>
    </div>
  )
}

export default ProductSorting