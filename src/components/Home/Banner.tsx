import { ReceiveSquare } from 'iconsax-react';
import styles from '@/styles/banner.module.scss';
import { Icon, Link } from '../uikit';

const HomeBanner = () => {
  console.log();

  return (<DefaultBanner />);
  // return (<MajorReportBanner />);
};

export default HomeBanner;

const DefaultBanner = () => {
  return (
    <section aria-label="مقدمه" className={`${styles.hero} full-width flex a-center`}>
      <div className="flex column max-width--page ">
        <p className={styles.websiteTitle}>۱۰۰۰۰روز</p>
        <p className={styles.bannerFirstSentence}>۴۰ سال، هر سال ۵۲ هفته، هر هفته ۵ روز</p>
        <p className={styles.bannerSecondSentence}>
          هر کدام از ما حدوداً ۱۰۰۰۰ روز از عمرمان را مشغول کار کردن هستیم.
          پروژه ۱۰۰۰۰روز تلاشی است برای بهتر زندگی کردن این بخش از عمرمان!
        </p>
      </div>
    </section>
  );
};

export const MajorReportBanner = () => {
  return (
    <Link href="/surveys/major">
      <section aria-label="مقدمه" className={`${styles.hero} full-width flex j-center a-center major-cat-clr`}>
        <div className={`${styles.banner} 'flex column gap--xl max-width--page width--100 padding--l border-radius `}>
          {/* <h1 className={`${styles.websiteTitle, 'sr-only')}>۱۰۰۰۰روز</h1> */}
          {/* <p className={styles.bannerFirstSentence}>گزارش نظرسنجی انتخاب رشته منتشر شد!</p> */}
          <div className={`${styles.wrapper} 'flex j-space-between a-center gap--s`}>
            <div className="width--100">
              <p className={styles.title}>
                <span className="font-size--xl font-weight--800">
                  گزارش نظرسنجی
                </span>
                <span className="font-weight---900 ">
                  انتخاب رشته
                </span>
                <span className="font-size--xl font-weight--800">
                  منتشر شد!
                </span>
              </p>
              <div className={`${styles.button} flex j-center a-center gap--s margin-top--xxl`}>
                <Icon icon={ReceiveSquare} alt="" />
                دانلود رایگان گزارش
              </div>
            </div>
            <div className={`${styles.graphShape}  flex desktop-only`} aria-hidden>
              <img src="/images/sample-graph.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};
