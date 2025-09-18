import Image from "next/image";

const HeroImage = () => {
  return (
    <Image
      src="/yusuf-img.png"
      alt="Yusuf Usman image"
      width={400}
      height={500}
      className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] object-cover rounded-lg shadow-lg"
      priority
    />
  );
};

export default HeroImage;
