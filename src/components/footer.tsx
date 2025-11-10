import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-8 py-12 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="space-y-4">
            <h3 className="font-heading text-xl">Accelerator Program</h3>
            <p className="text-sm text-muted-foreground">
              Empowering startups to reach their full potential
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h4 className="font-heading text-sm">Program</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/programs" className="text-muted-foreground hover:text-foreground">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/mentors" className="text-muted-foreground hover:text-foreground">
                    Mentors
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-heading text-sm">Social</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-heading text-sm">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Accelerator Program. All rights reserved.
        </div>
      </div>
    </footer>
  );
}