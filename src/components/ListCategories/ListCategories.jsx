/* eslint-disable react/prop-types */

import CategoryItem from "../CategoryItem/CategoryItem"

const ListCategories = ({ categories, onDelete }) => {
  return (
    <div className='row'>
        {categories.map((element) => {
            return <CategoryItem key={element.id} id={element.id} name={element.name} onDelete={onDelete}/>
           })}
    </div>
  )
}

ListCategories.propTypes = {
    
}

export default ListCategories