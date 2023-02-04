import createClient from './client'

const getData = async query => {
  let data = null
  let error = null

  try {
    const client = createClient()
    const result = await client.request(query)
    data = result !== null ? Object.values(result).flat()[0] : null
  } catch (err) {
    error = err
  }
  // console.log('DATA', data, 'ERROR', error)

  return { data, error }
}

export default getData
