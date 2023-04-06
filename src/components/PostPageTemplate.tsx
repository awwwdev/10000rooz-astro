import { NextSeo } from 'next-seo';
import { useMDXComponent } from 'next-contentlayer/hooks';

const PostPage = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description || undefined}
      />
      <div className="rtl max-width--article padding--page layout-stack-all">
        <h1>{post.title}</h1>
        {/* <p className="fa-num">
          زمان خواندن:
          {' '}
          {Math.floor(post.readingTime.minutes)}
          {' '}
          دقیقه
        </p> */}
        <p>
          دسته‌بندی:
          {' '}
          {post.categories && post.categories.length > 0 && post.categories.map((cat) => { return cat; })}
        </p>
        <MDXContent />
      </div>
    </>
  );
};

export default PostPage;
