/* eslint-disable react/prop-types */

const CategoryItem = ({ id, name, onDelete }) => {
  return (
      <div className="col-3">
          <div className="card mb-3 text-center">
              <div className="card-body">    
                <h5 className='card-title'> {name}</h5> 
                <button className="btn btn-danger" onClick={() => onDelete(id)}>Borrar</button>
              </div>
          </div>
      </div>
    
  )
}

export default CategoryItem