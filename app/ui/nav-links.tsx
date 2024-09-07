'use client'

import {
  UserGroupIcon,
  HomeIcon,
  Cog8ToothIcon,
  QuestionMarkCircleIcon,
  NewspaperIcon
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { NavLink } from '../lib/definitions';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

const links: NavLink[] = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Templates', href: '/templates', icon: NewspaperIcon},
  { name: 'Manage Account', href: '/plan', icon: UserGroupIcon},
  { name: 'Help', href: 'https://docs.agentops.ai/v1/introduction', icon: QuestionMarkCircleIcon },
  { name: 'Settings', href: '/settings', icon: Cog8ToothIcon },
];

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex h-[36px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3", {
              'bg-stone-200' : pathname === link.href
            })}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
