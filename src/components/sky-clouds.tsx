import { cn } from "@/lib/utils";

function CloudShape({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 80"
      className={cn("h-auto w-full", className)}
      aria-hidden
    >
      <ellipse cx="60" cy="48" rx="48" ry="28" fill="currentColor" />
      <ellipse cx="110" cy="40" rx="55" ry="32" fill="currentColor" />
      <ellipse cx="150" cy="50" rx="40" ry="24" fill="currentColor" />
    </svg>
  );
}

export function SkyClouds() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#5eb3e8] via-[#7ec4ef] to-[#c8e8f8]" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#3d8c4a]/35 to-transparent" />

      <div className="animate-cloud-drift absolute top-[12%] flex w-[200%] text-white/85">
        <div className="flex w-1/2 justify-around px-8">
          <CloudShape className="w-40 opacity-90" />
          <CloudShape className="mt-8 w-56 opacity-80" />
          <CloudShape className="w-32 opacity-95" />
        </div>
        <div className="flex w-1/2 justify-around px-8">
          <CloudShape className="w-40 opacity-90" />
          <CloudShape className="mt-8 w-56 opacity-80" />
          <CloudShape className="w-32 opacity-95" />
        </div>
      </div>

      <div className="animate-cloud-drift-slow absolute top-[28%] flex w-[200%] text-white/70">
        <div className="flex w-1/2 justify-around px-12">
          <CloudShape className="mt-4 w-48" />
          <CloudShape className="w-64" />
          <CloudShape className="mt-10 w-36" />
        </div>
        <div className="flex w-1/2 justify-around px-12">
          <CloudShape className="mt-4 w-48" />
          <CloudShape className="w-64" />
          <CloudShape className="mt-10 w-36" />
        </div>
      </div>
    </div>
  );
}
