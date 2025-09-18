import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="md:w-1/2 relative flex justify-center md:justify-start">
      <Image
        src="niko.png"
        alt="Yusuf Usman"
        width={320}
        height={320}
        className="w-48 sm:w-64 md:w-72 lg:w-80 rounded-lg grayscale shadow-lg"
      />
      <div className="absolute top-0 right-0 grid grid-cols-4 gap-2 p-4">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 bg-secondary rounded-full opacity-40"
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileImage;
