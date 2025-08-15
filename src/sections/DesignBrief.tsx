import Tag from "@/components/Tag";

export default function DesignBrief() {
    return (
        <section className="py-28 lg:py-30">
            <div className="container">
            <div className="flex justify-center">
                <Tag>Design Brief</Tag>
            </div>
            <div className="text-xl md:text-2xl lg:text-4xl text-center font-medium mt-10">
                <span>Unleash Your Creativity.</span>{" "}
                <span className="text-white/15"></span>
                This is your opportunity to redefine fashion with your unique vision and craftsmanship.
                <span className="text-orange-400 block">
                Submit your designs and be part of the Jagermeister Fashion Design Awards.
                </span>
            </div>

            {/* Competition Brief Section */}
            <div className="mt-16 flex flex-col items-center w-full">
                <div className="flex flex-col md:flex-row justify-between gap-6 w-full max-w-5xl">
                    <p className="bg-[#CC5500] rounded-2xl border border-white/10 p-6 text-base md:text-lg text-gray-300 mb-4 md:mb-0 md:w-1/2">
                        <strong>Key Themes:</strong> <br />
                        - Nightlife & Urban Culture<br />
                        - Boldness & Individuality<br />
                        - Heritage & Modernity Fusion<br />
                        - Sustainability & Innovation
                    </p>
                    <p className="bg-[#CC5500] rounded-2xl border border-white/10 p-6 text-base md:text-lg text-gray-300 mb-4 md:mb-0 md:w-1/2">
                        <strong>Materials to Use:</strong> <br />
                        - Eco-friendly fabrics (organic cotton, recycled polyester, hemp, etc.)<br />
                        - Leather or vegan leather accents<br />
                        - Metallic or reflective details<br />
                        - Upcycled or repurposed materials are encouraged
                    </p>
                </div>
                <p className="bg-[#CC5500] rounded-2xl border border-white/10 p-6 text-base md:text-lg text-gray-300 mt-6 w-full max-w-5xl">
                    <strong>Submission Requirements:</strong> <br />
                    - Upload a colored fashion illustration (digital or hand-drawn, JPEG/PNG, max 10MB)<br />
                    - Include technical flat drawings (front and back views, PDF/JPEG/PNG)<br />
                    - Brief description (max 200 words) explaining your concept and material choices
                </p>
               
            </div>
            </div>
        </section>
    );
}