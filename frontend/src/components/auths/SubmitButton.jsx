import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const SubmitButton = (props) => {
  const { name, onClick, onSubmit, loading, buttonColor } = props;
  const buttonStyle = {
    backgroundColor: buttonColor // Menggunakan properti buttonColor untuk menentukan warna latar belakang tombol
  };

  return (
    <button
      onClick={onClick}
      onSubmit={onSubmit}
      type="submit"
      className="py-3 text-center rounded-md -full"
      style={buttonStyle}
      disabled={loading}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-3">
          <FontAwesomeIcon icon={faCircleNotch} spin />
          <span>{name}</span>
        </div>
      ) : (
        <span>{name}</span>
      )}
    </button>
  );
};

SubmitButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
};

export default SubmitButton;
