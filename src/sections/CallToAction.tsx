export default function CallToAction() {
    return (
        <section className="py-24">
        <div className="overflow-x-clip p-4 flex">
            <div className="flex flex-none gap-16 text-7xl md:text-8xl font-medium">
            {Array.from({ length: 10}).map((_,index) => (
                <div key={index}
                className="flex items-center gap-10">
                <span className="text-orange-400">&#10038;</span>
                <span className="">Enter For Free Today!</span>
            </div> 
            ))}
            </div>
        </div>
        </section>
    )
}
