import Tag from "@/components/Tag";
import GuideCard from "@/components/GuideCard";
import signupform from "@/assets/images/Sign-Up-form.png";
import FileUpload from "@/assets/images/file-upload.png";
import UploadForm from "@/assets/images/file-upload-form.png";
import Uploadformprogress from "@/assets/images/file-upload-progress.png";
import FileUpLoadSuccessful from "@/assets/images/file-upload-successful.png";
import Image from "next/image";
import Avatar from "@/components/Avatar";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Guide() {
    return(
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                <Tag>How To Enter</Tag>
                </div>
                <h2 className="text-4xl md:text-6xl font-medium mt-6 text-center max-w-xl mx-auto">Follow These Three Easy{" "}
                    <span className="text-orange-400">Steps</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <GuideCard
                        title="Step 1: Register Your Details"
                        description="Signup for the Jagermeister Design Awards by providing your personal and professional details. 
                        This will help us keep you updated with the latest information and ensure your entry is valid."
                        className=""
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Image src={FileUpload}
                                alt="Design Example"
                                className="object-cover w-auto" />
                        </div>
                        <div className="text-neutral-400 text-sm mt-4">
                            <span className="text-white">Tip:</span>
                            Ensure that your details are accurate to avoid any issues during the submission process.
                        </div>
                    </GuideCard>

                    <GuideCard
                        title="Step 2: Submit Your Designs"
                        description="Upload your design entries through our online portal. 
                        Ensure that your submissions meet the specified guidelines and criteria for each category."
                        className=""
                    >
                        <div className="aspect-video flex items-center justify-center gap-6">
                            <div className="flex flex-col items-center">
                                <Image
                                    src={Uploadformprogress}
                                    alt="File Upload Form"
                                    className="object-cover w-auto mb-2"
                                />
                            </div>
                        </div>
                        <div className="text-neutral-400 text-sm mt-4">
                            <span className="text-white">Tip:</span>
                            Double-check your designs for quality and adherence to the guidelines before submitting.
                        </div>
                    </GuideCard>

                    <GuideCard
                        title="Step 3: Click Submit"
                        description="After reviewing your entries, 
                        click the submit button to finalize your participation in the awards."
                        className=""
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Image src={FileUpLoadSuccessful}
                                alt="Design Example 1"
                                className="object-cover w-auto" />
                        </div>
                        <div className="text-neutral-400 text-sm mt-4">
                            <span className="text-white">Tip:</span>
                            Ensure that you have completed all steps before clicking submit to avoid any last-minute issues.
                        </div>
                    </GuideCard>
                </div>
            </div>
        </section>
    )
}
