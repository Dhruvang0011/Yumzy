import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div
        className="
          max-w-md
          text-center
          rounded-2xl
          bg-white/70
          backdrop-blur-xl
          shadow-lg
          p-8
        "
      >
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4">
          404
        </h1>

        <h2 className="text-xl font-semibold text-neutral-800 mb-2">
          Page Not Found
        </h2>

        <p className="text-neutral-600 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="
            inline-block
            rounded-full
            bg-orange-500
            px-6
            py-2
            text-sm
            font-medium
            text-white
            hover:bg-orange-600
            transition
          "
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
