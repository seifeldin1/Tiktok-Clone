
const Login = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="relative flex min-h-screen justify-center items-center overflow-hidden bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 dark:from-gray-800 dark:via-gray-900 dark:to-black animate-gradientBG bg-size-200">
      {/* Optional overlay for blur and dimming */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/60 backdrop-blur-sm"></div>

      {/* Dark mode toggle button */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 bg-gray-800 dark:bg-white text-white dark:text-gray-800 px-3 py-2 rounded-full shadow hover:scale-105 transition"
      >
        Toggle Dark
      </button>

      {/* Login Card */}
      <div className="relative z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-sm animate-slideUp">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800 dark:text-white">
          Join the Doom Scroll!
        </h2>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition font-semibold"
          >
            Login
          </button>
        </form>

        <div className="my-6 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400 text-sm">OR</span>
        </div>

        {/* Social logins */}
        <div className="flex flex-col space-y-4">
          <button className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg"
              alt="Google"
              className="w-5 h-5 dark:invert"
            />
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              Continue with Google
            </span>
          </button>
          <button className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
              alt="Facebook"
              className="w-5 h-5 dark:invert"
            />
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              Continue with Facebook
            </span>
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300">
          Don’t have an account?{' '}
          <a
            href="/signup"
            className="text-pink-600 dark:text-pink-400 font-semibold hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
