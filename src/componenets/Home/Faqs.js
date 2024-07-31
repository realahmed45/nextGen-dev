import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQs = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What software development methodologies do you use?",
      answer:
        "We use a variety of software development methodologies depending on the project's needs, including Agile, Scrum, and Waterfall. Agile and Scrum are preferred for their flexibility and iterative approach, allowing for continuous feedback and improvement.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "Our team specializes in a wide range of technologies including React, Node.js, Python, Java, and various cloud platforms like AWS and Azure. We also work with databases such as MongoDB, PostgreSQL, and MySQL.",
    },
    {
      question: "Can you integrate third-party APIs into our application?",
      answer:
        "Yes, we can integrate various third-party APIs into your application. Whether it's for payment processing, social media integration, or data services, we ensure seamless integration and functionality.",
    },
    {
      question: "How do you ensure the quality of the software you develop?",
      answer:
        "We follow a robust quality assurance process that includes automated testing, manual testing, code reviews, and continuous integration. Our QA team performs extensive testing to ensure the software is reliable, secure, and meets all requirements.",
    },
    {
      question:
        "What is your approach to handling project updates and maintenance?",
      answer:
        "We offer ongoing support and maintenance services to address any issues that arise post-launch. Our approach includes regular updates, bug fixes, performance monitoring, and enhancements based on user feedback and evolving needs.",
    },
    {
      question: "How do you handle data security and privacy?",
      answer:
        "Data security and privacy are top priorities for us. We implement best practices such as data encryption, secure coding practices, and compliance with data protection regulations (e.g., GDPR). Regular security audits and updates ensure that your data remains safe.",
    },
  ];

  return (
    <section className="py-10 bg-black sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold leading-tight text-orange-500 sm:text-4xl lg:text-5xl">
            Questions & Answers
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">
            Explore some common answers to your software-related queries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div
                className="flex items-center justify-between w-full cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full">
                    <span className="text-lg font-semibold text-white">?</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-xl font-semibold text-orange-300">
                      {faq.question}
                    </p>
                  </div>
                </div>
                <div className="ml-auto">
                  <span className="text-lg font-semibold text-orange-300">
                    {openQuestionIndex === index ? "-" : "+"}
                  </span>
                </div>
              </div>
              <AnimatePresence>
                {openQuestionIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 overflow-hidden"
                  >
                    <p className="text-base text-gray-400">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center mt-12 md:mt-20"
        >
          <div className="px-8 py-4 text-center bg-orange-900 rounded-full">
            <p className="text-gray-50">
              Didn't find the answer you are looking for?{" "}
              <a
                href="mailto:realahmedali4@gmail.com"
                className="text-orange-300 transition-all duration-200 hover:text-orange-400 focus:text-orange-400 hover:underline"
              >
                Contact our support
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQs;
