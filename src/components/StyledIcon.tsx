export function StyledIcon({ children }: any) {
    return (
        <div className="cursor-pointer transition-all duration-300 ease-out hover:scale-120 hover:text-white">
            {children}
        </div>
    )
}