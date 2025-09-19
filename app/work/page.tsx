"use client";

import Image from "next/image";
import {projects} from  "@/data/workInfo"

export default function SelectedProjects() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
            Selected Project
          </h2>
          <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-grey to-secondary bg-clip-text text-transparent">
            2022 - 2023
          </span>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-full h-56 mb-6 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">
                {project.title} | {project.year}
              </h3>
              <p className="mt-3 text-grey text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
