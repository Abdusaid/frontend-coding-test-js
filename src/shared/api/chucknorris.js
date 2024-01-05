import axios from '../plugins/axios'

const PATH = '/jokes'

export const getCategories = async () => {
  const { data } = await axios.get(`${PATH}/categories`)

  return {
    ...data,
  }
}

export const getJoke = async (query) => {
  const { data } = await axios.get(`${PATH}/search?query=${query}`)
  return {
    ...data,
  }
}

export const getRandomJoke = async (category) => {
  const { data } = await axios.get(`${PATH}/random?category=${category}`)
  return {
    ...data,
  }
}
