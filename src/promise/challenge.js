import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

function fecthData(urlApi) {
  return fetch(urlApi)
}

fecthData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    console.log(products[0])
    return fecthData(`${API}/products/${products[0].id}`)
  })
  .then((response) => response.json())
  .then((product) => {
    console.log(product.title)
    return fecthData(`${API}/categories/${product.category.id}`)
  })
  .then((response) => response.json())
  .then((category) => console.log(category.name))
  .catch((error) => console.log(error))
  .finally(() => console.log('Finally'))