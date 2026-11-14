import { Link } from "@tanstack/react-router";
import simbolo from "@/assets/alliantie-simbolo.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-3", className)} aria-label="Alliantie — início">
      <img src={simbolo.url} alt="" className="h-9 w-auto" width={26} height={36} />
      <span className="font-display text-xl tracking-wide text-foreground">ALLIANTIE</span>
    </Link>
  );
}
