import { GitBranch, ExternalLink, Gamepad2 } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle/30 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="font-mono text-sm text-text-secondary">
          <span className="text-accent">&lt;</span>
          Leon Twemlow
          <span className="text-accent">/&gt;</span>
          <span className="ml-2 opacity-50">&copy; {year}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/SSpiderlxx"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-text-secondary hover:text-accent hover:bg-accent-dim transition-all"
            title="GitHub"
          >
            <GitBranch size={18} />
          </a>
          <a
            href="https://leon-twemlow.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-text-secondary hover:text-accent hover:bg-accent-dim transition-all"
            title="Itch.io"
          >
            <ExternalLink size={18} />
          </a>
          <a
            href="https://store.steampowered.com/app/3774250/Echoes_of_the_Hive/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-text-secondary hover:text-accent hover:bg-accent-dim transition-all"
            title="Steam"
          >
            <Gamepad2 size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
