import type { ReactNode } from 'react';
import useScrollToElement from '@hooks/useScrollToElement';

interface Props {
  targetSection: string;
  children: ReactNode;
}

export default function NavbarLink({
  children,
  targetSection,
}: Props): JSX.Element {
  function scrollTo(target: string): void {
    const element = document.getElementById(target);

    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <button
      onClick={() => {
        scrollTo(targetSection);
      }}
      className="text-right font-spaceGrotesk text-sm font-bold transition hover:text-shadow md:text-center md:text-base">
      {children}
    </button>
  );
}
