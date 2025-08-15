import { type ProfileType } from "@/sections/DesignerProfiles";
import Image from "next/image";
import Avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import Avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import Avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import Avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import { twMerge } from "tailwind-merge";

export default function ProfileColomn (props: {
    profiles: ProfileType
    className?: string;
}) {
    const { profiles, className } = props;
    return (
        <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
                       {profiles.map(profiles => {
                            let avatarSrc;
                            switch (profiles.icon) {
                                case "ashwinIcon":
                                    avatarSrc = Avatar1;
                                    break;
                                case "florenceIcon":
                                    avatarSrc = Avatar2;
                                    break;
                                case "lulaIcon":
                                    avatarSrc = Avatar3;
                                    break;
                                case "owenIcon":
                                    avatarSrc = Avatar4;
                                    break;
                                default:
                                    avatarSrc = Avatar1;
                            }
                            return (
                                <div key={profiles.id} className="bg-[#CC5500] border border-white/10 rounded-3xl p-6 ">
                                    <div className="flex items-center justify-center mb-4">
                                        <Image 
                                        src={avatarSrc} 
                                        alt={`${profiles.name} icon`} 
                                        className="size-24"/>
                                    </div>
                                    <h3 className="text-3xl text-center mt-6">{profiles.name}</h3>
                                    <p className="text-center text-white/50 mt-2">{profiles.description}</p>
                                </div>
                            );
                        })}
                    </div>
    )
}