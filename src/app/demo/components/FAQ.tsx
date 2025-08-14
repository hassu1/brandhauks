export default function FAQ() {
  return (
    <section style={{ backgroundColor: "#1b1c35"}}>
      <div className="container">
              <div className="bi-section-title-4 bins-text headline text-center mb-4">
                      <h2 className="mb-3">
                        FAQ
                      </h2>
                      </div>
        <div className="row">
          <div className="col-md-9 col-12 m-auto">
            <div className="accordion" id="faqAccordion">
              {faqData.map((faq, index) => (
                <div
                  className="accordion-item border-0 mb-3 rounded"
                  key={index}
                     style={{
                        background: "#2a2b4d",
                      }}
                >
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className="accordion-button collapsed text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`collapse${index}`}
                      style={{
                        background: "#2a2b4d",
                      }}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-light">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqData = [
  {
    question: "What services does brandHawks offer?",
    answer:
      "We specialize in branding, UI/UX design, digital marketing, and web development tailored to your business needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope, but most projects are completed within 4 to 8 weeks with regular client collaboration.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we offer maintenance plans and post-launch support to ensure everything runs smoothly.",
  },
  {
    question: "Can you work with international clients?",
    answer:
      "Absolutely. We work with clients globally through virtual collaboration and project management tools.",
  },
];
