"use client";

import React, { ReactElement } from "react";

interface ContactCardProps {
  icon: ReactElement;
  title: string;
  details: string[];
}

export default function ContactCard({ icon, title, details }: ContactCardProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="p-4 rounded-full bg-gray-800 shadow-md">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <div className="space-y-1 text-sm text-grey">
        {details.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}
