const skills: string[] = [
  "Java",
  "Python",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "REST APIs",
  "Authentication",
  "Cloud Deployment",
  "Problem Solving",
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
        I am a passionate <span className="text-secondary font-semibold">Backend Developer </span> 
        dedicated to building scalable, secure, and efficient server-side 
        applications. My work focuses on architecting RESTful APIs, designing 
        robust database schemas, and ensuring high-performance systems that 
        can handle real-world demands.
      </p>

      <p className="text-grey mb-6 text-sm sm:text-base max-w-lg">
        With experience in <span className="font-medium">Java, Python, Node.js, Go, Django, Move and databases like MongoDB and SQL</span>, 
        I specialize in authentication, cloud deployment, and performance 
        optimization. I enjoy solving complex problems, writing clean code, 
        and collaborating to deliver seamless digital experiences.
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
