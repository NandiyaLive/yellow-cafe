import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const hash = router.asPath.split("#")[1];

  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="py-3 flex items-center justify-between sm:flex-col sm:gap-2">
      <Link href="/">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-yellow-400">Yellow Café</h1>
        </div>
      </Link>

      <ul className="flex items-center gap-4">
        <li className={hash == "special-combos" ? "text-yellow-400 font-semibold" : undefined}>
          <Link href="#special-combos">Special Combos</Link>
        </li>
        <li className={hash == "gallery" ? "text-yellow-400 font-semibold" : undefined}>
          <Link href="#gallery">Gallery</Link>
        </li>
        <li className={hash == "contact" ? "text-yellow-400 font-semibold" : undefined}>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
