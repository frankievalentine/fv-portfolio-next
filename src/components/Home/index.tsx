import Link from 'next/link';

const Home = () => (
  <header>
    <ul>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <a href="https://photos.valentinedev.com">Photos</a>
      </li>
    </ul>
  </header>
);

export default Home;
