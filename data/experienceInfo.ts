export type ExperienceItem = {
  company: string;
  title: string;
  years: string;
  description: string;
};

export const experiences: ExperienceItem[] = [
  {
    company: "Arrowai Industries",
    title: "Lead Backend Developer",
    years: "2022 - 2023",
    description:
      "Architected and developed scalable REST APIs using Node.js and Express, improving system performance by 35%. Led database migration from SQL to NoSQL.",
  },
  {
    company: "Borcelle",
    title: "Backend Developer",
    years: "2021 - 2022",
    description:
      "Implemented microservices in TypeScript and integrated third-party APIs, enhancing platform flexibility and maintainability.",
  },
  {
    company: "Borcelle",
    title: "Junior Backend Developer",
    years: "2020 - 2021",
    description:
      "Assisted in developing and maintaining backend services, optimized database queries, and improved API response times by 20%.",
  },
];
