import Link from 'next/link';

interface NavbarLogoProps {
  scrollToSection: (href: string) => void;
}

export function NavbarLogo({ scrollToSection }: NavbarLogoProps) {
  return (
    <div className="shrink-0">
      <Link
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('#home');
        }}
        className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
      >
        Robert
      </Link>
    </div>
  );
}
