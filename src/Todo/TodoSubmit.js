import React from 'react'
import PropTypes from 'prop-types'


function TodoSubmit(props) {
  
  const handleSubmit = () => {
    const itemsToBuy = props.todos.filter(t => !t.completed)
    .map(t => t.title).join(', ');
    
    alert(`Надо купить: ${itemsToBuy}`);
  };
  return (
    
      <form >
      <button type='button' onClick={handleSubmit}>Отправить</button>
      </form>
    );
}
TodoSubmit.propTypes = {
   state: PropTypes.func.isRequired
  };


export default TodoSubmit;
