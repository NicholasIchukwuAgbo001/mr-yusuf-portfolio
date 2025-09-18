import Image from "next/image";

const Home = () => {
  return (
    <section className="text-whit flex items-center px-6 pt-15">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-16 w-full">
        <div className="text-center lg:text-left max-w-xl">
          <p className="text-sm tracking-widest uppercase text-secondary">
            Hello
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-2">
            I&apos;m <span className="text-secondary">Yusuf Usman</span>
          </h1>
          <p className="mt-4 inline-block bg-sky-500 text-black px-4 py-2 rounded-md text-sm font-semibold uppercase tracking-wide">
            Professional Content Creator
          </p>
          <p className="mt-6 text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet massa sed leo molestie ultrices in non mi. Suspendisse mollis
            nisi at aliquet pretium.
          </p>
        </div>

        <Image
          src="niko.png"
          alt="Yusuf usman imag"
          width={400}
          height={500}
          className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] object-cover rounded-lg shadow-lg"
          priority
        />
      </div>
    </section>
  );
};

export default Home;
