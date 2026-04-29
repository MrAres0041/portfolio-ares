export function StyledBody({ children }: any) {
    return (
        <div className="bg-frame p-5 rounded-sm">
            <div className="bg-zinc-800 flex flex-col items-center min-h-screen w-full px-36 py-4 font-serif rounded-sm gap-8">
                {children}
            </div>
        </div>
    )
}