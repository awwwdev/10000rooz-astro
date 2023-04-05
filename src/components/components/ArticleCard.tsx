import styles from '@/styles/article-card.module.scss';
import { Link } from './uikit';

const ArticleCard = ({
  slug = '', excerpt = '', title, className = '', link = null, tags = null, features = null, categories = null,
}) => {
  return (
    <Link href={link || `/posts/${slug}`} className="card padding flex column gap">
      <h3 className="card-title  font-size--xl">{title}</h3>
      <p className={styles.excerpt}>{excerpt}</p>
    </Link>
  );
};

const ArticleCard2 = ({
  slug = '', excerpt = '', title, className = '', link = null, image, tags = null, features = null, categories = null,
}) => {
  return (
    <Link href={link || `/posts/${slug}`} className="my-card flex gap">
      <div>

        <h3 className="card-title  font-size--xl">{title}</h3>
        {/* <p className={styles.excerpt}>{excerpt}</p> */}
        <ul>
          {features.map((feature) => {
            return (<li>{feature}</li>);
          })}
        </ul>
        <ul className="flex gap">
          {tags.map((tag) => {
            return (<li>{translateToFarsi(tag)}</li>);
          })}
        </ul>
      </div>
      <img src={`images/post-images/${image}.jpg`} alt={title} />
    </Link>
  );
};

export default ArticleCard;

const Tag = ({ tag }) => {
  if (tag === 'major') return <li className="tag">انتخاب رشته</li>;
  if (tag === 'major') return <li className="tag">انتخاب رشته</li>;
  if (tag === 'major') return <li className="tag">انتخاب رشته</li>;
  if (tag === 'major') return <li className="tag">انتخاب رشته</li>;
  if (tag === 'major') return <li className="tag">انتخاب رشته</li>;
  if (tag === 'major') return <li className="tag">انتخاب رشته</li>;
  return null;
};
const translateToFarsi = ({ tag }) => {
  if (tag === 'major') return ' انتخاب رشته';
  return null;
};
