// import { useRouter } from 'next/router';
// import styles from '@/styles/timeline.module.scss';
// import { Link } from './uikit';

const MajorArticleTimeline = ({ children = null }) => {
  return (
    <div className="timeline-wrapper">
      <h3 className='clr-white'>سری مقاله‌های انتخاب رشته</h3>
      <ul className="timeline">
        <ListItem link='/choose-major'>چجوری انتخاب رشته کنم که پشیمون نشم؟</ListItem>
        <ListItem link='/surveys/major'>نگاهی داده‌محور به مسئلهٔ انتخاب رشته</ListItem>
        <ListItem link='/posts/get-help-with-choosing-major'>چگونه برای انتخاب رشته از دیگران اطلاعات بگیریم؟</ListItem>
        <ListItem link='/posts/research-majors'>چگونه یک رشته را بهتر بشناسیم؟</ListItem>
        <ListItem link='/posts/admission-mechanism'>چگونه رشته‌ها در فرم انتخاب رشته بچینیم؟</ListItem>
        <ListItem link='/posts/comparing-universities'>
          مقایسهٔ انواع دانشگاه‌‌های ایران و نکاتی که بهتر است دربارهٔ هرکدام بدانید
        </ListItem>
        {children}
      </ul>
    </div>
  );
};

export default MajorArticleTimeline;

const ListItem = ({ link, children }) => {
  // const router = useRouter();

  return (
    // <li className={`${styles.item}
    //  ${router.asPath === link && styles.currentPage}`}>
    <li className={`${styles.item}`}>
      <a href={link}>{children}</a>
    </li>
  );
};
