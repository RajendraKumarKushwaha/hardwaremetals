import PropTypes from "prop-types";

export function Button({ children, bgColor, hoverColor }) {
  return (
    <button
      className={`py-3 px-6 rounded md:ml-8 cursor-pointer duration-500 ${bgColor} hover:${hoverColor}`}
    >
      {children}
    </button>
  );
}

// Validate props using PropTypes
Button.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is passed and can be any renderable node
  bgColor: PropTypes.string,           // Background color class
  hoverColor: PropTypes.string,        // Hover background color class
};

// Default prop values
Button.defaultProps = {
  bgColor: "bg-yellow-600",           // Default background color
  hoverColor: "bg-yellow-400",        // Default hover background color
};
