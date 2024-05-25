
const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-bblack py-10">
            <div className="w-full max-w-lg p-8 bg-gray-600 rounded-lg shadow-lg">
                <h2 className="text-3xl text-center text-twhite mb-8">Contact Me</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-tgray">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-2 mt-1 text-twhite bg-gray-400 border border-gray-600 rounded-md focus:border-tgolden focus:ring focus:ring-tgolden focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-tgray">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 mt-1 text-twhite bg-gray-400 border border-gray-600 rounded-md focus:border-tgolden focus:ring focus:ring-tgolden focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-tgray">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full p-2 mt-1 text-twhite bg-gray-400 border border-gray-600 rounded-md focus:border-tgolden focus:ring focus:ring-tgolden focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-tgray">Message</label>
                        <textarea
                            id="message"
                            className="w-full p-2 mt-1 text-twhite bg-gray-400 border border-gray-600 rounded-md focus:border-tgolden focus:ring focus:ring-tgolden focus:ring-opacity-50"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-2 text-lg text-twhite bg-tgray border-2 border-tgray rounded-md hover:bg-bblack hover:text-tgolden transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
