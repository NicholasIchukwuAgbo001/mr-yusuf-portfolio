import React from "react";
import EducationCard from "@/components/education/EducationCard";

interface EducationItem {
  title: string;
  subtitle: string;
}

const education: EducationItem[] = [
  {
    title: "Senior Vocational High School",
    subtitle: "School Of Art | 2012",
  },
  {
    title: "Bachelor Degree",
    subtitle: "Borcelle Art University | Graphic Design | 2017",
  },
  {
    title: "Master Degree",
    subtitle: "Borcelle Art University | Master of Communication | 2019",
  },
];

const Education: React.FC = () => {
  return (
    <section className="text-white px-6 py-16 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center border-b-2 border-secondary inline-block pb-2">
        EDUCATION
      </h2>
      <div className="max-w-6xl mx-auto mt-10 flex flex-col lg:flex-row gap-12 items-center justify-between w-full">
        <p className="text-grey lg:w-1/2 leading-relaxed max-w-2xl text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          eleifend massa sed leo molestie ultrices in non mi. Suspendisse mollis
          nisi et accumsan pretium. Fusce dignissim dignissim odio, convallis
          feugiat ligula. Curabitur tristique, tortor sed vestibulum vehicula,
          quam lacus.
        </p>
        <div className="lg:w-1/2 w-full">
          <h3 className="text-4xl md:text-6xl font-extrabold text-secondary/70 mb-8 text-center lg:text-left">
            2012 - 2019
          </h3>
          <div className="space-y-6">
            {education.map((item, index) => (
              <EducationCard
                key={index}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
