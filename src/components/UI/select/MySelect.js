import React from 'react'

function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled={true} value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default MySelect

/* В этом компоненте необходимо реализовать двустороннее связывание и сделать этот компонент управлямым. Пропсами принимаем value={value} и функцию onChange={} для того,чтобы следить за изменением значения внутри Select. В функцию onChange мы будем передавать не сам event, а сразу значение, которое выбрал пользователь, его достаем из поля taregt поля value */
