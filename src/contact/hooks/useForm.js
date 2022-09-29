import { useState } from 'react'

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm)

  const hadleInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const reset = () => {
    setFormState(initialForm)
  }

  return {
    ...formState,
    formState,
    hadleInputChange,
    reset
  }
}
