import Tag from "@/components/Tag";
const text = 
`Jagermeister Design Awards is a celebration of excellence and beauty in design.
We are thrilled to announce the launch of the Jagermeister Design Awards, a prestigious event that recognizes and honors outstanding design talent across various disciplines in South Africa. 
This competition aims to celebrate the creativity, innovation, 
and impact of designers who push the boundaries of their craft.`;

export default function About () {
    return (
        <section className="py-28 lg:py-30">
            <div className="container">
                <div className="flex justify-center">
                <Tag>Introducing Jagermeister Design Awards</Tag>
                </div>
                <div className="text-xl md:text-2xl lg:text-4xl text-center font-medium mt-10">
                    <span className="">Celebrating Excellence and Beauty.</span>{" "}
                    <span className="text-white/15">{text}</span>
                    <span className="text-orange-400 block"> Join us in honoring the best in design and innovation.</span>
                </div>
            </div>
        </section>
    )
}
