import { FormCreateNewPass } from '../../components/auths';

const CreatePassPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full min-h-screen gap-8"
      style={{
        backgroundImage: "url('/src/assets/auth/bg-img-auth.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <a href="#" className="flex justify-center mt-4 mb-2">
        <img src="/src/assets/auth/form-logo.png" alt="Auth Form Logo" />
      </a>
      <div className="flex flex-col items-center w-full px-8 mb-8">
        <FormCreateNewPass />
      </div>
      <footer className="w-full">
        <div className="flex justify-center gap-16 py-3 text-sm text-center text-white uppercase border border-gray-400 sm:text-xs sm:justify-start px-9">
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Terms Of Condition</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </div>
        <div className="flex items-center justify-between w-full py-3 px-9">
          <div className="flex h-4 gap-5">
            <img
              src="../../../public/icons/instagram-icon.svg"
              alt="instagram-icon"
            />
            <img src="../../../public/icons/meta-icon.svg" alt="meta-icon" />
            <img
              src="../../../public/icons/youtube-icon.svg"
              alt="youtube-icon"
            />
            <img
              src="../../../public/icons/xtwitter-icon.svg"
              alt="youtube-icon"
            />
          </div>
          <div className="text-white">
            <p>&copy; 2024 VERIFEX</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreatePassPage;