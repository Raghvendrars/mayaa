import { useState } from "react";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";
import "./Faqs.css";

function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Are your clothes comfortable for kids?",
            answer: "Yes! All our clothes are made from soft, breathable fabrics designed for all-day comfort."
        },
        {
            question: "Do your clothes last through messy adventures?",
            answer: "Absolutely. Our fabrics are durable and washing-machine friendly. But please read the care instructions before washing."
        },
        {
            question: "What about sizing? My kid grows so fast!",
            answer: "We offer flexible and roomy fits so your child can enjoy the clothes longer."
        },
        {
            question: "Can my child wear these for special occasions too?",
            answer: "Yes! We create styles that work for both playtime and special moments."
        },
        {
            question: "Will my kid actually want to wear them?",
            answer: "Kids love our soft fabrics, fun designs, and comfy fits!"
        },
        {
            question: "Do you offer returns or exchanges?",
            answer: "Yes, we have a hassle-free return and exchange policy within 15 days."
        },
        {
            question: "Are your clothes safe for sensitive skin?",
            answer: "Our fabrics are hypoallergenic and free from harmful chemicals."
        },
        {
            question: "Do you ship everywhere?",
            answer: "We offer worldwide shipping!"
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <Header2 />
            <div className="faqs-page">
                <div className="faqs-container">
                    <div className="faqs-box">
                        <div className="faqs-header">
                            <h1>Frequently Asked Questions</h1>
                        </div>

                        <div className="faq-section">
                            {faqs.map((item, index) => (
                                <div className="faq-item" key={index}>
                                    
                                    {/* Question Row */}
                                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                        <h3>{item.question}</h3>
                                        <span className="faq-toggle">
                                            {activeIndex === index ? "−" : "+"}
                                        </span>
                                    </div>

                                    {/* Answer */}
                                    {activeIndex === index && (
                                        <div className="faq-answer">
                                            <p>{item.answer}</p>
                                        </div>
                                    )}

                                    <div className="faq-divider"></div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Faqs;
