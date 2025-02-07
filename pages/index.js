import BlogPostSmall from "@/blocks/blogpost-small";
import Main from "@/layout/main";
import { getHomePageData } from "@/services/contentful/api";

const Home = ({ data }) => {
  console.log("D", data);
  return (
    <Main>
      {data.map(({ image, title, introduction, slug, sys }, index) => (
        <BlogPostSmall
          key={index}
          image={image}
          title={title}
          introduction={introduction}
          slug={slug}
          publishedAt={sys.publishedAt}
        />
      ))}
    </Main>
  );
};

export async function getStaticProps() {
  const { data, error } = await getHomePageData();
  return {
    props: {
      data: data.items,
      error,
    },
    revalidate: 60,
  };
}

export default Home;
