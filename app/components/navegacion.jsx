import { Link, useLocation } from "@remix-run/react";

const Navegacion = () => {
  const location = useLocation();

  return (
    <nav className='navegacion'>
      <Link
        to='/index'
        className={location.pathname === "/index" ? "active" : ""}>
        Inicio
      </Link>
      <Link
        to='/nosotros'
        className={location.pathname === "/nosotros" ? "active" : ""}>
        Nosotros
      </Link>
      <Link
        to='/tienda'
        className={location.pathname === "/tienda" ? "active" : ""}>
        Tienda
      </Link>
      <Link
        to='/blog'
        className={location.pathname === "/blog" ? "active" : ""}>
        Blog
      </Link>
    </nav>
  );
};

export default Navegacion;
