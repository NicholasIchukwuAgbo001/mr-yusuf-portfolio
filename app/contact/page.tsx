"use client";

import React, { ReactElement } from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import ContactCard from "@/components/contact/contactCard";

interface ContactItem {
  icon: ReactElement;
  title: string;
  details: string[];
}

const contacts: ContactItem[] = [
  {
    icon: <MdPhone className="w-8 h-8 text-secondary" />,
    title: "Phone & Mobile",
    details: ["123-456-7890", "+123-456-7890"],
  },
  {
    icon: <MdEmail className="w-8 h-8 text-secondary" />,
    title: "Email & Website",
    details: ["hello@reallygreatsite.com", "reallygreatsite.com"],
  },
  {
    icon: <MdLocationOn className="w-8 h-8 text-secondary" />,
    title: "Address",
    details: ["123 Anywhere St, Any City, ST 12345"],
  },
  {
    icon: <FaLinkedin className="w-8 h-8 text-secondary" />,
    title: "LinkedIn",
    details: ["linkedin.com/in/yourprofile"],
  },
  {
    icon: <FaFacebook className="w-8 h-8 text-secondary" />,
    title: "Facebook",
    details: ["facebook.com/yourpage"],
  },
  {
    icon: <FaTwitter className="w-8 h-8 text-secondary" />,
    title: "Twitter / X",
    details: ["twitter.com/yourhandle"],
  },
  {
    icon: <FaInstagram className="w-8 h-8 text-secondary" />,
    title: "Instagram",
    details: ["instagram.com/yourhandle"],
  },
  {
    icon: <FaWhatsapp className="w-8 h-8 text-secondary" />,
    title: "WhatsApp",
    details: ["+123-456-7890"],
  },
  {
    icon: <FaYoutube className="w-8 h-8 text-secondary" />,
    title: "YouTube",
    details: ["youtube.com/@yourchannel"],
  },
  {
    icon: <FaGithub className="w-8 h-8 text-secondary" />,
    title: "GitHub",
    details: ["github.com/yourusername"],
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

        <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {contacts.map((item, idx) => (
            <ContactCard
              key={idx}
              icon={item.icon}
              title={item.title}
              details={item.details}
            />
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
