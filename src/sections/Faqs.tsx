import Tag from "@/components/Tag";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const faqs = [
    {
        question: "How can I enter the Jagermeister Design Awards?",
        answer: "To enter, simply register on our website, submit your design entries through our online portal, and click the submit button to finalize your participation.",
    },
    {
        question: "Is there a fee to enter the awards?",
        answer: "No, there is no fee to enter the Jagermeister Design Awards. We believe in celebrating creativity and innovation without financial barriers.",
    },
    {
        question: "How do I submit my designs?",
        answer: "You can submit your designs through our online portal. Make sure to follow the specified guidelines and criteria for each category.",
    },
    {
        question: "Can I submit multiple entries?",
        answer: "Yes, you can submit multiple entries. Each entry must be submitted separately and adhere to the submission guidelines.",
    },
    {
        question: "How does the judging process work?",
        answer: "The judging process involves a panel of industry experts who will evaluate the entries based on creativity, innovation, and impact. The winners will be announced at the awards ceremony.",
    },
    {
        question: "When will the winners be announced?",
        answer: "The winners will be announced at the awards ceremony, which will take place on 30 September 2025. Stay tuned for updates on our website and social media channels.",
    },
];

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-4xl md:text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Got Questions? We&apos;ve Got{" "} <span className="text-orange-400">Answers</span>
                </h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div 
                            key={faq.question}
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6 cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium">{faq.question}</h3>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className={twMerge(
                                        "feather feather-plus text-orange-400 flex-shrink-0 transition-transform duration-200",
                                        openIndex === index && "rotate-45"
                                    )}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <div className={twMerge("mt-6 transition-all duration-200", openIndex !== index && "hidden")}>
                                <p className="text-white/50">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
