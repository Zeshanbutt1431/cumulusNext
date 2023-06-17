import {AiOutlineSearch} from 'react-icons/ai'

const HeaderSearch = () => {
  return (

    <div className="col-lg-3 col-md-3 col-sm-9 col-8 header-actions p-0">
          <div className="search 'd-flex justify-content-center w-100">
            <input type="text" className="search-input" aria-label="Search" />
            <button className="btn-search" name="search button" title="Search" aria-label="Search-button">
              <AiOutlineSearch className="search-icon"/>
            </button>
          </div>
    </div>

  );
}

export default HeaderSearch