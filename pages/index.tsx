import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import homeStyles from '../styles/Home.module.css';
import postStyles from '../styles/Post.module.css';
import { GetStaticProps } from 'next';
import { getSortedPostsData } from '@/lib/post';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home({
  allPostData,
}: {
  allPostData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <div className={postStyles.container}>
      <Head>
        <title>Seongeung Kim</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Seongeung Kim Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostData.map(({ id, date, title }) => (
            <li
              className={homeStyles.listItem}
              key={id}
            >
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={homeStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostData = getSortedPostsData();
  return {
    props: {
      allPostData,
    },
  };
};
