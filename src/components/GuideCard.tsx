import { twMerge } from "tailwind-merge";

export default function GuideCard (props: {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
}) {
    const { title, description, children, className } = props;   
    return (
         <div
  className={twMerge(
    "border border-white/10 p-6 rounded-3xl bg-[#E65C00]",
    className
  )}
>
                        {/* IMAGE PLACEHOLDER */}
                        <div className="aspect-video">{children}</div>

                        {/* content - step 2 */}
                        <div className="">
                            <h3 className="text-xl font-medium mt-4">{title}</h3>
                            <p className="text-white/50 mt-2">{description}</p>
                        </div>
                    </div>
    );
}