export function validateEmptyLengh3 (value) {
  if (!value) {
    return 'Este campo eh obrigatorio'
  }

  if (value.length < 3) {
    return 'Este campo precisa no minimo 3 caracteres'
  }

  return true
}

export function validateEmptyAndEmail (value) {
  if (!value) {
    return 'Este campo eh obrigatorio'
  }

  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(value)
  if (!isValid) {
    return 'Este campo precisa ser um e-mail'
  }

  return true
}
