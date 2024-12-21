import PropTypes from "prop-types";

const Card = ({ image, title, id, onClick }) => {
  return (
    <div
      className="bg- rounded-lg p-1 shadow-md text-white flex-none w-[200px]"
      onClick={() => onClick(id)}
    >
      <img
        src={image || "https://via.placeholder.com/150"}
        alt={title || "No Title"}
        className="w-[200px] h-64 object-cover rounded-md mb-2"
      />
      <h3 className="text-md font-medium text-center">
        {title || "Unknown Title"}
      </h3>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
