export default function LoginForm() {
    return (
        <div className="h-full flex items-center justify-center">
            <form className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-6">
                <div className="text-center">
                    <h2 className="text-3xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Welcome Back
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm">
                        Please enter your details to login
                    </p>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition duration-200 hover:border-indigo-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition duration-200 hover:border-indigo-300"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center text-gray-600 cursor-pointer">
                        <input
                            type="checkbox"
                            className="mr-2 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        Remember me
                    </label>
                    <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                        Forgot password?
                    </a>
                </div>

                <button
                    type="submit"
                    className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-0.5 transition duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
