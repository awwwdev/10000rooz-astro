import { NextSeo } from 'next-seo';
import { useMDXComponent } from 'next-contentlayer/hooks';

const PageTemplate = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description || undefined}
      />
      <div className="rtl max-width--article padding--page layout-stack-all">
        <h1>{post.title}</h1>
        <MDXContent />
      </div>
    </>
  );
};

export default PageTemplate;
