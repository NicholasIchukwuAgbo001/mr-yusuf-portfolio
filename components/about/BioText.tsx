const skills: string[] = [
  "SOCIAL MEDIA",
  "DESIGN",
  "READING",
  "DATA ANALYST",
  "PHOTOGRAPHY",
];

const BioText = () => {
  return (
    <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500">
          MY BIOGRAPHY
        </span>
      </h2>

      <p className="text-grey mb-4 leading-relaxed text-sm sm:text-base max-w-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
        amet massa sed leo molestie ultrices in non mi. Suspendisse mollis
        nisl at aliquet pretium. Suspendisse dignissim, odio non hendrerit
        suscipit, lorem ipsum tempus tortor, suscipit vestibulum velit quam
        nec nibh.
      </p>

      <p className="text-grey mb-6 text-sm sm:text-base max-w-lg">
        Aliquam luctus faucibus augue, in porttitor eros imperdiet sit amet.
        Vivamus vel tortor at risus vestibulum elementum accumsan id ante.
      </p>

      <h3 className="text-lg font-semibold mb-3">Skills & Interests</h3>
      <div className="flex flex-wrap justify-center md:justify-start gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-1 border border-grey rounded-full text-xs sm:text-sm text-grey hover:border-secondary transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BioText;
