import PropTypes from "prop-types";

export default function ContactModal({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-black mb-4 text-center sm:text-left">
          Get in Touch
        </h2>
        <p className="mb-4 text-gray-600 font-semibold text-[17px] text-center sm:text-left">
        We Make & Install Quality Doors
        </p>

        <label className="block text-[17px] font-medium text-black mb-1">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />

        <label className="block text-[17px] font-medium text-black mb-1">Mobile</label>
        <input
          type="tel"
          placeholder="Enter your mobile number"
          required
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />

        <label className="block text-[17px] font-medium text-black mb-1">Message</label>
        <textarea
          placeholder="Enter your message here"
          required
          className="w-full p-2 border border-gray-300 rounded-lg h-32 mb-4"
        ></textarea>

        <button className="w-full py-3 bg-yellow-600 text-white rounded hover:bg-yellow-400 transition">
          Submit
        </button>
      </div>
    </div>
  );
}

ContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  setIsOpen: PropTypes.func.isRequired, 
};
