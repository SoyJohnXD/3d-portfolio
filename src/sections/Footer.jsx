const Footer = () => {
  return (
    <section className=" flex-wrap gap-5 c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center">
      <div className="text-white-500 flex gap-2">
        <p>Termns & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a
          href="https://github.com/SoyJohnXD"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h1/2" />
        </a>
        <a
          href="https://www.linkedin.com/in/jblondono"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <img
            src="/assets/linkedin.png"
            alt="linkedin"
            className="w-2/3 h2/3"
          />
        </a>
        <a
          href="https://www.instagram.com/tribalcode"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <img
            src="/assets/instagram.svg"
            alt="instagram"
            className="w-1/2 h1/2"
          />
        </a>
      </div>
      <p className="text-white-500">
        © 2024 John, Todos los derechos reservados{" "}
      </p>
    </section>
  );
};

export default Footer;
