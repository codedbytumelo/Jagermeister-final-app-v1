import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Avatar (props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherprops } = props;
    return (
        <div className={twMerge(
            "size-18 rounded-full overflow-hidden  border-4 border-green-950 bg-neutral-950", 
            className
        )} 
            {...otherprops}
            >
                {children}
        </div>
    );
}