"use client";
import Link from "next/link";
import { FacebookLogo, GithubLogo, LinkedinLogo } from "phosphor-react";

const socialLinks = [
  { Icon: FacebookLogo, href: "https://facebook.com" },
  { Icon: GithubLogo, href: "https://github.com/harnasdge" },
  {
    Icon: LinkedinLogo,
    href: "https://linkedin.com/in/damian-gębala-15822725a",
  },
];

export const SocialMedia = () => {
  return (
    <div className="flex gap-3 justify-center text-primary w-full  py-5 px-10">
      {socialLinks.map(({ Icon, href }, index) => (
        <Link
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1  border-2 border-gray/20 rounded-full  cursor-pointer transition-all hover:bg-primary hover:text-white dark:border-muted"
        >
          <Icon size={20} />
        </Link>
      ))}
    </div>
  );
};
