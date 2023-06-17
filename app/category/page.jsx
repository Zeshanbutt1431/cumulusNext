import Breadcrumbs from "../components/category/Breadcrumbs"
import ProductsArea from "../components/category/ProductsArea"
import Sidenav from "../components/category/Sidenav"
import "./module.category.css"

const page = () => {
    return (
        <div>
            <Breadcrumbs />
            <div className="row">
                <div className="col-lg-2">
                    <Sidenav />
                </div>
                <div className="col-lg-10">
                    <ProductsArea />
                </div>
            </div>
        </div>
    )
}

export default page