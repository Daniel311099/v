"use client"
import React, { useState } from "react";
import { FAQ } from "../_components/home/faqs";
import "~/styles/home.css"
import { api } from "~/trpc/react";


export const FAQs: React.FC = () => {
    const [question, setQuestion] = useState("");
    // const mutation = api.content.submitQuestion.useMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // await mutation.mutateAsync({ question });
        setQuestion("");
    };

    return (
        <div className="faq-page">
            <FAQ n={-1} />
            {/* <div className="ask-question">
                <h2>Have a Question?</h2>
                <form onSubmit={handleSubmit} className="question-form">
                    <textarea
                        placeholder="Ask your question here..."
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div> */}
        </div>
    );
};