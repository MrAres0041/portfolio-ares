export function TechMarquee() {
    const technologies = [
        "React", "JavaScript", "TypeScript", "Tailwind CSS v4",
        "Node.js", "Express", "Vite", "Zustand", "React Router 7",
        "Git", "Figma", "Firebase"
    ];

    const techString = technologies.join(" / ") + " / ";

    return (
        <div className="w-full my-8 group overflow-hidden bg-frame p-2">
            {/* 1. AGREGAMOS FLEX: Esto es vital para que los hijos se alineen uno tras otro */}
            <div className="flex w-max animate-marquee whitespace-nowrap py-3 [--speed:40s] group-hover:[animation-play-state:paused] px-2">

                {/* Bloque 1 */}
                <div className="flex shrink-0 items-center">
                    <span className="font-serif text-sm uppercase tracking-[0.2em] text-white px-4 select-none">
                        {techString}
                    </span>
                </div>

                {/* Bloque 2 (Copia idéntica) */}
                <div className="flex shrink-0 items-center">
                    <span className="font-serif text-sm uppercase tracking-[0.2em] text-white px-4 select-none">
                        {techString}
                    </span>
                </div>
            </div>
        </div>
    );
}