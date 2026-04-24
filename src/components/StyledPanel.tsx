import { VscDebugBreakpointLog } from "react-icons/vsc";
import { StyledFrame } from "./StyledFrame";

export function StyledPanel({ title, par }: any) {
    return (
        <StyledFrame>
            <div className="grid gap-2 max-w-100 min-w-100">
                <div className="text-3xl flex items-center gap-2 px-4">
                    <VscDebugBreakpointLog color="white" size={24} />
                    <span>
                        {title}
                    </span>
                </div>

                <hr className="my-2 mx-4 border-white" />

                <div className="text-2xl px-3">
                    {par}
                </div>
            </div>
        </StyledFrame>
    )
}