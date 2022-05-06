import Image from 'next/image';

function HomePage() {
  return (
    <>
      <div>
        <div>
          <h1>
            Hey, I'm a Developer building V3 Digital Studio. I enjoy working
            with Next.js and crafting beautiful front-end experiences.
          </h1>
        </div>
      </div>

      <div>
        <Image
          src="/static/img/me3.jpg"
          alt="me"
          width={1000 / 2}
          height={850 / 2}
        />
      </div>
    </>
  );
}

export default HomePage;
