import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import ArticleCard from '@/components/ArticleCard';
import ParkLogo from '@/public/logos/shariftechpark-logo.svg';
import BanaLogo from '@/public/logos/bana-logo.svg';
import DigargoonLogo from '@/public/logos/digargoon-logo.svg';
import KarbonLogo from '@/public/logos/karbon-logo.svg';
import BistTaSiLogo from '@/public/logos/bist-ta-si-logo.svg';
import { allResources } from '@/.contentlayer/generated';
import styles from '@/styles/home.module.scss';
import HomeBanner from '@/components/Home/Banner';

export function getStaticProps() {
  const selectedSlugs = [
    'choose-major',
    'get-help-with-choosing-major',
    'common-mistakes-in-choosing-college-major',
    'get-help-with-choosing-major',
    'admission-mechanism',
    'research-majors',
    'comparing-universities',
    'choose-job',
    'confusion-in-choosing-career',
    'why-mbti-is-bad-for-choosing-job',
    'get-a-job',
    'resume-writing',
    'job-interview',
    'when-passion-leads-to-born-out',
    'job-satisfaction',
    'job-interview',
  ];
  const posts = allResources.filter((p) => { return selectedSlugs.includes(p.slug); }).map((p) => {
    return {
      title: p.title,
      slug: p.slug,
      description: p.description,
      tags: p.tags,
      image: p.image,

    };
  });

  return { props: { posts } };
}

const Home: NextPage = ({ posts }: any) => {
  const getBlogDataBySlug = (slug) => { return posts.find((post) => { return post.slug === slug; }); };

  return (
    <>
      <NextSeo
        title="راهنمای مسیر شغلی"
        description="۱۰۰۰۰روز پروژه‌ای است برای افزایش دانش و آگاهی درباره ساختن زندگی کاری بهتر"
        canonical="https://10000rooz.com/"
      />
      <div className={`${styles.page} max-width--page layout:stack gap--xxl`}>
        <HomeBanner />
        <div className="layout-stack gap--xxl">
          <ArticleSection
            title="انتخاب رشته"
            slugs={[
              'choose-major',
              'get-help-with-choosing-major',
              'common-mistakes-in-choosing-college-major',
              'get-help-with-choosing-major',
              'admission-mechanism',
              'research-majors',
              'comparing-universities',
            ]}
            getBlogDataBySlug={getBlogDataBySlug}
            className="major-cat-clr"
          >
            <ArticleCard
              className={styles.articleCardWP}
              slug="/surveys/major"
              link="/surveys/major"
              excerpt="انتخاب رشته یکی از مهم‌ترین مراحل زندگی ما به حساب می‌آید و بسیار مهم است که با اطلاعات کافی به سراغ آن برویم. این گزارش، ماحصل تجربیات ۲۲۶۹ نفر پاسخ‌دهنده است و مطالعهٔ آن می‌تواند دید بسیار خوبی نسبت به موضوع انتخاب رشته بدهد."
              title="نگاهی داده‌محور به مسئلهٔ انتخاب رشته"

            />
          </ArticleSection>
          <ArticleSection
            title="انتخاب شغل"
            slugs={[
              'choose-job',
              'confusion-in-choosing-career',
              'why-mbti-is-bad-for-choosing-job',
              // 'wrong-beliefs',
            ]}
            getBlogDataBySlug={getBlogDataBySlug}
            className="career-cat-clr"
          />
          <ArticleSection
            title="کار پیدا کردن"
            slugs={[
              'get-a-job',
              'resume-writing',
              'job-interview',
            ]}
            getBlogDataBySlug={getBlogDataBySlug}
          />
          <ArticleSection
            title="در محل کار"
            slugs={[
              'when-passion-leads-to-born-out',
              'job-satisfaction',
              'job-interview',
            ]}
            getBlogDataBySlug={getBlogDataBySlug}
            className="workplace-cat-clr"
          />

          <section aria-label="حامیان" className={`${styles.section} layout:stack gap--xxl`}>
            <h2>حامیان </h2>
            <div className={`max-width--page  ${styles.logoWrapper} `}>
              <SponsorCard
                name="پارک علم و فناوری دانشگاه صنعتی شریف"
                description="حامی راه‌اندازی ۱۰۰۰۰روز"
                Logo={ParkLogo}
                link="https://techpark.sharif.ir/"
              />
              <SponsorCard
                name="شتابدهنده استعداد بانا"
                description="حامی گزارش انتخاب رشته"
                Logo={BanaLogo}
                link="https://banaacc.ir/"
              />
            </div>
          </section>
          <section aria-label="همراهان " className={`${styles.section} 'layout:stack gap--xxl`}>
            <h2>همراهان </h2>
            <div className="max-width--page flex wrap gap--xxl j-center ">
              <PartnerCard
                name="آژانس دیزاین دیگرگون "
                description="همراه ۱۰۰۰۰روز"
                Logo={DigargoonLogo}
                link="https://digargoon.com/"
              />
              <PartnerCard
                name="بیست‌تا‌سی"
                description="همراه ۱۰۰۰۰روز"
                Logo={BistTaSiLogo}
                link="https://20ta30.com/"
              />
              <PartnerCard
                name="کاربن"
                description="همراه ۱۰۰۰۰روز"
                Logo={KarbonLogo}
                link="https://karbon.plus/"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;

const SponsorCard = ({
  name, description, Logo, link,
}) => {
  return (
    <a
      href={link}
      className={styles.sponsorCardWrapper}
      style={{ textDecoration: 'none' }}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.sponsorCard}>
        <div className="padding--xl" style={{ paddingBottom: '0' }}>
          <Logo style={{
            maxWidth: '20rem', maxHeight: '10rem', aspectRatio: '2/1', width: '100%', height: '100%',
          }}
          />
        </div>
        <p style={{ paddingBottom: 'var(--padding--xl)', paddingInline: 'var(--padding--s)' }}>{name}</p>
      </div>
      <p className={`${styles.sponsorDescription} bold`}>{description}</p>
    </a>
  );
};

const PartnerCard = ({
  name, description, Logo, link,
}) => {
  return (
    <a
      href={link}
      style={{ textDecoration: 'none' }}
      target="_blank"
      rel="noreferrer"
      className={`${styles.partnerCard} flex column gap--l`}
    >
      <Logo style={{ width: '10rem', height: '5rem' }} />
      <p className="font-size align:center">{name}</p>
      {/* <p className="bold">{description}</p> */}
    </a>
  );
};

const ArticleSection = ({
  title, slugs, getBlogDataBySlug, className, children,
}) => {
  return (
    <section aria-label={title} className={`${styles.section} ${className}`}>
      <div className="column max-width--page layout-stack">
        <h2>{title}</h2>
        <div className="card-grid gap--l">
          {slugs.map((slug) => {
            const p = getBlogDataBySlug(slug);
            return (
              <ArticleCard
                title={p.title}
                excerpt={p.description}
                slug={p.slug}
                link={`/posts/${p.slug}`}
                tags={p.tags}
                features={p.features}
              />
            );
          })}
          {children}
        </div>
      </div>
    </section>
  );
};
