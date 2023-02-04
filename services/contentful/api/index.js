import { aboutPageQuery } from '../queries/about-us'
import getData from './get-data'

export const getAbousUsPageData = async () => {
  return await getData(aboutPageQuery)
}
