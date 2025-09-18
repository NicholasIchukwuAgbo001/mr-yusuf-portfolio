import React from "react";

interface EducationCardProps {
  title: string;
  subtitle: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ title, subtitle }) => {
  return (
    <div className="border-l-4 border-secondary pl-4 cursor-pointer rounded-md">
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-grey text-sm">{subtitle}</p>
    </div>
  );
};

export default EducationCard;
