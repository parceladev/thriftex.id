import PropTypes from 'prop-types';

const AuthenticityStatus = ({ status, message }) => {
  const statusStyles = {
    Declined: 'text-red-600',
    original: 'text-green-600',
    fake: 'text-orange-300',
  };

  return (
    <div className={`flex gap-3 py-5 items-center ${statusStyles[status]}`}>
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8792 18.7617C13.0009 18.7617 15.0357 17.9189 16.536 16.4186C18.0363 14.9183 18.8792 12.8835 18.8792 10.7617C18.8792 8.63999 18.0363 6.60516 16.536 5.10486C15.0357 3.60457 13.0009 2.76172 10.8792 2.76172C8.75742 2.76172 6.72259 3.60457 5.2223 5.10486C3.72201 6.60516 2.87915 8.63999 2.87915 10.7617C2.87915 12.8835 3.72201 14.9183 5.2223 16.4186C6.72259 17.9189 8.75742 18.7617 10.8792 18.7617ZM10.8792 20.7617C5.35615 20.7617 0.87915 16.2847 0.87915 10.7617C0.87915 5.23872 5.35615 0.761719 10.8792 0.761719C16.4022 0.761719 20.8792 5.23872 20.8792 10.7617C20.8792 16.2847 16.4022 20.7617 10.8792 20.7617ZM9.87915 14.7617H11.8792V16.7617H9.87915V14.7617ZM9.87915 4.76172H11.8792V12.7617H9.87915V4.76172Z"
          fill="#474848"
        />
      </svg>
      <p>{message}</p>
    </div>
  );
};

AuthenticityStatus.propTypes = {
  status: PropTypes.oneOf(['fake', 'original', 'Declined']),
  message: PropTypes.string.isRequired,
};

export default AuthenticityStatus;
