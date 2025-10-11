import faqData from '../assets/data/faq.json';

const FAQPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Frequently Asked Questions</h1>
            <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark">
              Find quick answers to the most common questions about living at La REZ. If you need more
              details, feel free to contact our team directly.
            </p>
          </header>
          <div className="space-y-8">
            {faqData.map(({ question, answer }) => (
              <article
                key={question}
                className="rounded-2xl bg-card-light dark:bg-card-dark shadow-lg p-8 border border-border-light dark:border-border-dark"
              >
                <h2 className="text-2xl font-semibold text-primary mb-4">{question}</h2>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-text-light dark:text-text-dark">
                  {answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
