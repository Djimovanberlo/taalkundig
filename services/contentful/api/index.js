import { aboutPageQuery } from '../queries/about-us'
import { blogPostCollectionSlugs, blogPostDetailQuery } from '../queries/blog-post'
import { homePageQuery } from '../queries/home-page'
import getData from './get-data'

export const getHomePageData = async () => {
  return await getData(homePageQuery)
}

export const getBlogPostSlugData = async () => {
  return await getData(blogPostCollectionSlugs)
}

export const getBlogPostDetailData = async slug => {
  return await getData(blogPostDetailQuery(slug))
}

export const getAbousUsPageData = async () => {
  return await getData(aboutPageQuery)
}
