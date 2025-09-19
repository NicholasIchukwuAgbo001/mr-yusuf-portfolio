"use client";

import React, { ReactElement } from "react";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

interface ContactItem {
  icon: ReactElement;
  title: string;
  details: string[];
}

const contacts: ContactItem[] = [
  {
    icon: <Phone className="w-8 h-8 text-secondary" />,
    title: "Phone & Mobile",
    details: ["123-456-7890", "+123-456-7890"],
  },
  {
    icon: <Mail className="w-8 h-8 text-secondary" />,
    title: "Email & Website",
    details: ["hello@reallygreatsite.com", "reallygreatsite.com"],
  },
  {
    icon: <MapPin className="w-8 h-8 text-secondary" />,
    title: "Address",
    details: ["123 Anywhere St, Any City, ST 12345"],
  },
  {
    icon: <Heart className="w-8 h-8 text-secondary" />,
    title: "Social Media",
    details: ["@reallygreatsite.com"],
  },
];

export default function ContactSection(): ReactElement {
  return (
    <section className="text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-2">
          Get In Touch
        </h2>
        <p className="text-secondary italic mb-12">Let&apos;s Work Together</p>

        <div className="grid gap-10 md:grid-cols-4">
          {contacts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 
                         p-6 rounded-lg bg-gray-900 shadow-md 
                         transition-all duration-300 
                         hover:bg-secondary/10 hover:scale-105 hover:shadow-lg"
            >
              <div className="p-4 rounded-full bg-gray-800 shadow-inner transition duration-300 hover:bg-secondary/20">
                {item.icon}
              </div>
              <h3 className="font-semibold group-hover:text-secondary">
                {item.title}
              </h3>
              <div className="space-y-1 text-sm text-grey">
                {item.details.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-grey pt-6">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-wider text-grey">
            YUSUF USMAN
          </h3>
        </div>
      </div>
    </section>
  );
}
