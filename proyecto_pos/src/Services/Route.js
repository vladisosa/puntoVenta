import React from 'react';
import Productos from '../pages/CRUD'
import { Switch, Route } from 'react-router-dom'; // import the react-router-dom components

const Main = () => {
    return (
    <main>
        <Switch>
          <Route exact path='/'><h1>Hola</h1></Route>
          <Route exact path='/Productos'><Productos /></Route>
          <Route exact path='/Compras' ></Route>
          <Route exact path='/Inventario'></Route>
          <Route exact path='/Ventas' ></Route>
        </Switch>
      </main>
      );
}
 
export default Main;
