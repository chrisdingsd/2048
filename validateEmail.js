function (email){
  e = document.createElement('input')
  e.type = 'email'
  e.value = email
  return e.validity.valid
}
