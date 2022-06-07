import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ListCategories from "./components/ListCategories";

const defaultCategories = [
  {id: uuidv4(), name: 'Portátiles'},
  {id: uuidv4(), name: 'Sobremesa'},
  {id: uuidv4(), name: 'Discos duros'}
];

/**
 * 
 * LOCALSTORAGE:
 *    - setItem: Usado para añadir una key: value al Stroage
 *    - getItem: Devuelve un item desde el localstore dado una key
 *    - removeItem: Elimina un item dada una key.
 *    - clear: Elimina todas las instancias del localStore
 *    - key: Devuelve la key dado un número
 * 
 * 
 * 
 * 
 */

const App = () => {
  const [categories, setCategories] = useState(defaultCategories);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories))
  }, [categories])

  // []   Se ejecutará una única vez, al cargar el componente
  // <Nada>   Se ejecutará en cada renderizado del componente
  // [estado]   Se ejecutará en cada cambio que sufra el estado

  const handleDelete = (id) => {
      setCategories(categories.filter((category) => category.id !== id))
  }

  const anadirElemento = () => {
      setCategories([...categories, {id: uuidv4(), name: prompt('Añada su valor', '')}])
  }

  return (
    <div className='container'>
      <h2>Listado de Categorías</h2>
      <hr />
        <button className="btn btn-primary mb-3" onClick={anadirElemento}>Agregar</button>
          <ol>
            <ListCategories categories={categories} setCategories={setCategories} onDelete={handleDelete}/>
          </ol>
    </div>
  );
};

export default App;
