// 'use client'

import { usePathname } from 'next/navigation';

const useActiveLink = (href: string): string => {
  const pathname = usePathname();
  return pathname === href ? 'active' : '';
};

export default useActiveLink;
