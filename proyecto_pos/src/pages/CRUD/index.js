import firebase from "../../Components/firebase_config"
import React,{ Fragment,Component } from "react";
import {Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap'

export default class CRUD extends Component {
    state={
        data:[],
        modalInsertar: false,
        modalEditar: false,
        form:{
            nombre: '',
            tipo: '',
            existencia: '',
            descripcion: '',
            precio:''
          },
        id:0
    }
    peticionGet=()=>{
        firebase.child('productos').on('value',producto=>{
            if(producto.val()!=null){
                this.setState({...this.state.data, data:producto.val()})
            }
            else{
                this.setState({data:[]})
            }
        })
    }
    peticionPost=()=>{
        firebase.child('productos').push(this.state.form,error=>{
            if(error)console.log(error)
        })
        this.setState({modalInsertar:false})
    }
    peticionDelete=()=>{ 
        if(window.confirm(`¿Estas seguro de que desea eliminar el producto ${this.state.form && this.state.form.nombre}?`))
        firebase.child(`productos/${this.state.id}`).remove(
            error=>{
              if(error)console.log(error)
            });
            this.setState({modalEditar: false});
    }
    seleccionarCanal=async(producto, id, caso)=>{

        await this.setState({form: producto, id: id});
        (caso==="Editar")?this.setState({modalEditar: true}):
        this.peticionDelete()
      }
    peticionPut=()=>{
        firebase.child(`productos/${this.state.id}`).set(
            this.state.form,
            error=>{
              if(error)console.log(error)
            });
            this.setState({modalEditar: false});
    }
    componentDidMount(){
        this.peticionGet()
    }
    handleChange=(e)=>{
        this.setState({form:{
          ...this.state.form,[e.target.name]: e.target.value
        }})
        console.log(this.state.form);
      }
    render() {
        return (
            <div className="container">
                <button className="m-4 btn btn-success" onClick={()=>this.setState({modalInsertar:true  })}>Añadir producto</button>
                <table className="container-fluid table table-striped">
                    <thead>
                    <tr>
                        <th>nombre</th>
                        <th>tipo</th>
                        <th>existencia</th>
                        <th>descripcion</th>
                        <th>precio</th>
                        <th>acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                         {Object.keys(this.state.data).map(i=>{
                             return<tr key={i}>
                                 <td>{this.state.data[i].nombre}</td>
                                 <td>{this.state.data[i].tipo}</td>
                                 <td>{this.state.data[i].existencia}</td>
                                 <td>{this.state.data[i].descripcion}</td>
                                 <td>{this.state.data[i].precio}</td>
                                 <td>
                                     <button className="m-1 btn btn-primary" onClick={()=>this.seleccionarCanal(this.state.data[i],i,'Editar')}>editar</button>
                                     <button className="m-1 btn btn-danger" onClick={()=>this.seleccionarCanal(this.state.data[i],i,'eliminar')}>eliminar</button>
                                 </td>
                             </tr>
                         })}
                    </tbody>
                </table>


                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>Insertar Registro</ModalHeader>
                    <ModalBody>
                    <div className="form-group">
                        <label>Canal: </label>
                        <br />
                        <input type="text" className="form-control" name="nombre" onChange={this.handleChange}/>
                        <br />
                        <label>País: </label>
                        <br />
                        <input type="text" className="form-control" name="tipo" onChange={this.handleChange}/>
                        <br />
                        <label>Idioma: </label>
                        <br />
                        <input type="text" className="form-control" name="existencia" onChange={this.handleChange}/>
                        <br />
                        <label>Cantidad de Suscriptores (millones): </label>
                        <br />
                        <input type="text" className="form-control" name="descripcion" onChange={this.handleChange}/>
                        <br />
                        <label>Precio: </label>
                        <br />
                        <input type="text" className="form-control" name="precio" onChange={this.handleChange}/>
                    </div>
                    </ModalBody>
                    <ModalFooter>
                    <button className="btn" onClick={()=>this.peticionPost()}>Insertar</button>
                    <button className="btn btn-danger" onClick={()=>this.setState({modalInsertar: false})}>Cancelar</button>
                    </ModalFooter>
                </Modal>



                <Modal isOpen={this.state.modalEditar}>
                    <ModalHeader>Insertar Registro</ModalHeader>
                    <ModalBody>
                    <div className="form-group">
                        <label>Canal: </label>
                        <br />
                        <input type="text" className="form-control" name="nombre" onChange={this.handleChange} value={this.state.form &&  this.state.form.nombre}/>
                        <br />
                        <label>País: </label>
                        <br />
                        <input type="text" className="form-control" name="tipo" onChange={this.handleChange} value={this.state.form &&  this.state.form.tipo}/>
                        <br />
                        <label>Idioma: </label>
                        <br />
                        <input type="text" className="form-control" name="existencia" onChange={this.handleChange} value={this.state.form &&  this.state.form.existencia}/>
                        <br />
                        <label>Cantidad de Suscriptores (millones): </label>
                        <br />
                        <input type="text" className="form-control" name="descripcion" onChange={this.handleChange} value={this.state.form &&  this.state.form.descripcion}/>
                        <br />
                        <label>Precio: </label>
                        <br />
                        <input type="text" className="form-control" name="precio" onChange={this.handleChange} value={this.state.form &&  this.state.form.precio}/>
                    </div>
                    </ModalBody>
                    <ModalFooter>
                    <button className="btn" onClick={()=>this.peticionPut()}>Insertar</button>
                    <button className="btn btn-danger" onClick={()=>this.setState({modalEditar: false})}>Cancelar</button>
                    </ModalFooter>
                </Modal>


            </div>
        )

        


    }
}
