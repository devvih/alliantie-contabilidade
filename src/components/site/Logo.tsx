import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-alliantie-completa.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex shrink-0 items-center", className)} aria-label="Alliantie — início">
      <img
        src={logo.url}
        alt="Alliantie Assessoria"
        className="h-9 w-auto sm:h-10"
        width={2400}
        height={519}
      />
    </Link>
  );
}
