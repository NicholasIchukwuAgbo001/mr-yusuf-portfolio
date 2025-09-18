const HeroText = () => {
  return (
    <div className="text-center lg:text-left">
      <p className="text-sm tracking-widest uppercase text-secondary">
        Hello
      </p>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-2">
        I&apos;m <span className="text-secondary">Yusuf Usman</span>
      </h1>
      <p className="mt-4 inline-block bg-secondary text-black px-4 py-2 rounded-md text-sm font-semibold uppercase tracking-wide">
        Professional Content Creator
      </p>
      <p className="mt-6 text-grey leading-relaxed max-w-md mx-auto lg:mx-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
        amet massa sed leo molestie ultrices in non mi. Suspendisse mollis
        nisi at aliquet pretium.
      </p>
    </div>
  );
};

export default HeroText;
