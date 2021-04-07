import {Fragment,Component} from 'react'
import { Switch, Route, Link } from 'react-router-dom';
const Header = () => {
    return (
        <Fragment>
    <div class="navbar fixed-sticky navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
        <img src="ice-cream.png" width="100px" height="100px"/>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">        
        <div className="container">
        <div className="row">
          <div className="col-9"></div>
          <div className="col">
          <ul className="navbar-nav ml-right mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link"to="/">Inicio</Link>
              </li>
              <li>
                <Link className="nav-link" to="/Productos">Productos</Link>
              </li>
              <li>
                <Link className="nav-link" to="/Compras">Compras</Link>
              </li>
              <li>
                <Link className="nav-link" to="/Inventario">Inventario</Link>
              </li>
              <li>
                <Link className="nav-link" to="/Ventas">Ventas</Link>
              </li>
          </ul>
          </div>
        </div>
        </div>
        </div>
        
      </div>
    </div>
        </Fragment>
    );
}
 
export default Header;