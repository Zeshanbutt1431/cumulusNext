import Link from 'next/link'
const Navbar = (props) => {
  let taxonomy = props.taxonomy
  taxonomy.length = 10
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button title="toggle" name="toggle button" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {
              taxonomy.map((nav) => {
                let deptName = ''
                try { deptName = nav.Dept.DEPT } catch (err) { }
                return (
                  <li className="nav-item dropdown" key={`dep_${deptName}`}>
                    <Link title={deptName} name="toggle" className="nav-link dropdown-toggle" href="#" key={`id_${deptName}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {deptName}
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown" key={`list_${deptName}`}>
                      {nav.Type?.map((t) => (
                        <li key={`li_id_${t.TYPE}`}><Link className="dropdown-item" href="#" key={t.TYPE} title={t.TYPE}>{t.TYPE} {t.SubType ? <i className="fa-solid fa-circle-chevron-right"></i> : ""}</Link>
                          <ul className="dropdown-submenu">
                            {t.SubType?.map((st, i) => (<li key={`d_id_${t.TYPE + i}`}><Link className="dropdown-item" href="#" key={`id_${st.SUBTYP}`} title={st.SUBTYPE}>{st.SUBTYPE}</Link></li>))}
                          </ul>
                        </li>))}
                    </ul>
                  </li>)
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
