const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-text-muted-light dark:text-text-muted-dark mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
      >
        Back to Home
      </a>
    </div>
  );
};

export default NotFoundPage;
