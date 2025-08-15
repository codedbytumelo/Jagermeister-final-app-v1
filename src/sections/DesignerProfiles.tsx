import Tag from "@/components/Tag";
import Image from "next/image";
import Avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import Avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import Avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import Avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Avatar5 from "@/assets/images/avatar-ashwin-santiago.jpg";
import Avatar6 from "@/assets/images/avatar-florence-shaw.jpg";
import { twMerge } from "tailwind-merge";
import ProfileColomn from "@/components/ProfileColomn";

const profiles = [
    { id: 1, name: "Avatar1", icon: "ashwinIcon", description: "Figma is a collaborative interface design tool." },
    { id: 2, name: "Avatar2", icon: "florenceIcon", description: "Notion is an all-in-one workspace for notes and docs." },
    { id: 3, name: "Avatar3", icon: "lulaIcon", description: "Slack is a powerful team communication platform." },
    { id: 4, name: "Avatar4", icon: "owenIcon", description: "Relume is a no-code website builder and design system." },
    { id: 5, name: "Avatar5", icon: "ashwinIcon", description: "Figma is a collaborative interface design tool." },
    { id: 6, name: "Avatar6", icon: "florenceIcon", description: "Notion is an all-in-one workspace for notes and docs." },
];
export type ProfileType = typeof profiles;
export default function DesignerProfiles () {
    return (
    <section className="py-24 overflow-hidden">
        <div className="container">
            <div className="grid lg:grid-cols-2 lg:gap-16">
                <div className="flex flex-col items-center justify-center text-center w-full">
                    <Tag className="mb-2">Designer Profiles</Tag>
                    <h2 className="text-4xl font-medium mt-6">
                        Meet Our Featured <span className="text-orange-400">Designers</span>
                    </h2>
                    <p className="text-white/50 mt-4 text-lg">
                        Discover the creative minds behind the designs. 
                        And celebrate the talent and innovation of our featured designers.
                    </p>
                </div>
                <div className="">
                    <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                        <div className="flex flex-col md:flex-row gap-6 h-full">
                            <ProfileColomn
                                profiles={profiles.slice(0, 3)}
                                
                            />
                            <ProfileColomn
                                profiles={profiles.slice(3, 6)}
                                
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>         
    </section>
    );
}
