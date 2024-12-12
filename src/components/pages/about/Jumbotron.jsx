export default function Jumbotron() {
  return (
    <>
      <section
        className="bg-white dark:bg-gray-900 bg-[url('https://agnikul.in/static/media/banner-back.9734c30b561f2946116e.png')] flex items-center justify-center"
        style={{ height: "70vh" }}
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-4xl dark:text-white">
            Who are we?
          </h1>
          <p className="mb-8 text-base font-normal text-white lg:text-2xl sm:px-16 lg:px-48 dark:text-gray-400">
          TEN Space Research is a pioneering organization dedicated to exploring the cosmos and advancing space science. With a passionate team of scientists and engineers, we innovate in satellite technology, deep-space exploration, and sustainable solutions to uncover the universe's mysteries. Our mission is to push boundaries, inspire curiosity, and contribute to humanity's journey toward a brighter, spacefaring future.
          </p>
        </div>
      </section>
    </>
  );
}
