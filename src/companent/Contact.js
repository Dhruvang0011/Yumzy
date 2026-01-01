const Contact = () => {
  return (
    <main className="mx-auto max-w-[900px] px-6 py-10">
      
      {/* Glass Card */}
      <section
        className="
          rounded-2xl
          bg-white/70
          backdrop-blur-xl
          shadow-lg
          p-8
          dark:bg-neutral-800/80
        "
      >
        <h1 className="mb-4 text-3xl font-bold text-neutral-800 dark:text-neutral-300">
          Contact Us
        </h1>

        <p className="mb-4 text-neutral-600 leading-relaxed dark:text-neutral-400">
          Welcome to our restaurant app! We are dedicated to helping you find
          the best dining experiences around you. Our mission is to connect food
          lovers with top-rated restaurants, offering a variety of cuisines and
          dining options.
        </p>

        <p className="mb-6 text-neutral-600 leading-relaxed dark:text-neutral-400">
          Whether you're looking for a quick bite or a fine dining experience,
          we've got you covered. Explore our curated list of restaurants, read
          reviews, and discover new favorites. Thank you for choosing our app to
          satisfy your culinary cravings!
        </p>

        {/* Optional Contact Info */}
        <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-400">
          <p>
            📧 <span className="font-medium">Email:</span> yumzy@foodapp.com
          </p>
          <p>
            📞 <span className="font-medium">Phone:</span> +91 98765 43210
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
