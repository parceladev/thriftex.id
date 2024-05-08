const Jumbotron = () => {
  return (
    <div
      className="flex flex-col items-center justify-center text-textWhite gap-8 h-[250px] p-10 text-center mt-14 sm:h-screen"
      style={{
        backgroundImage: "url('../../../public/homepage/jumbotron.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="block text-2xl sm:text-[40px] font-didot py-2">
        IS YOUR FASHION STYLE LEGIT?
      </h1>
      <a
        href="/user/legit-check"
        className="flex items-center gap-3 px-6 py-3 mt-2 bg-transparent border border-white rounded-lg dark:hover:text-textBlack hover:bg-white hover:text-primary"
      >
        <p className="text-xs sm:text-xl">CHECK NOW</p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.15023 4.55006H0.759209C0.639472 4.55006 0.524639 4.59746 0.439972 4.68184C0.355305 4.76622 0.307739 4.88067 0.307739 5C0.307739 5.11933 0.355305 5.23378 0.439972 5.31816C0.524639 5.40254 0.639472 5.44994 0.759209 5.44994H9.15023L5.85721 8.73093C5.77243 8.81542 5.72481 8.93001 5.72481 9.04949C5.72481 9.16897 5.77243 9.28356 5.85721 9.36805C5.94198 9.45254 6.05696 9.5 6.17685 9.5C6.29674 9.5 6.41172 9.45254 6.49649 9.36805L10.5597 5.31856C10.6018 5.27676 10.6351 5.22711 10.6579 5.17245C10.6806 5.11778 10.6924 5.05918 10.6924 5C10.6924 4.94082 10.6806 4.88222 10.6579 4.82755C10.6351 4.77289 10.6018 4.72324 10.5597 4.68144L6.49649 0.631952C6.41172 0.547464 6.29674 0.5 6.17685 0.5C6.05696 0.5 5.94198 0.547464 5.85721 0.631952C5.77243 0.716439 5.72481 0.831028 5.72481 0.950512C5.72481 1.06999 5.77243 1.18458 5.85721 1.26907L9.15023 4.55006Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
};

export default Jumbotron;
