import { Link } from 'react-router-dom';
import { GitBranch, ExternalLink, Gamepad2, ShoppingBag, Briefcase } from 'lucide-react';

const pages = [
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const socials = [
  { href: 'https://github.com/SSpiderlxx', title: 'GitHub', icon: <GitBranch size={17} /> },
  { href: 'https://assetstore.unity.com/publishers/60320', title: 'Unity Asset Store', icon: <ShoppingBag size={17} /> },
  { href: 'https://www.linkedin.com/in/leon-twemlow', title: 'LinkedIn', icon: <Briefcase size={17} /> },
  { href: 'https://leon-twemlow.itch.io/', title: 'Itch.io', icon: <ExternalLink size={17} /> },
  { href: 'https://store.steampowered.com/app/3774250/Echoes_of_the_Hive/', title: 'Steam', icon: <Gamepad2 size={17} /> },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle/70 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-sm text-text-secondary">
          <span className="grid place-items-center w-7 h-7 rounded-md bg-accent text-white font-display font-bold text-xs">
            tw
          </span>
          <span>&copy; {year} twemlow.dev · Founded by Leon Twemlow</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          {pages.map((p) => (
            <Link key={p.to} to={p.to} className="text-text-secondary hover:text-text-primary transition-colors">
              {p.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-1">
          {socials.map((s) => (
            <a
              key={s.title}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/[0.05] transition-colors"
              title={s.title}
              aria-label={s.title}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
