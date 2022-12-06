const Footer = () => {
  return (
    <footer className="container max-w-6xl mt-6 py-8 text-white">
      <hr />
      <div className="flex items-start justify-between sm:block sm:space-y-2 sm:text-center mt-4">
        <p>
          {/* Copyright &copy; {new Date().getFullYear()} <a href="https://dynamicbiz.org.lk" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">Dynamic Biz</a>. All Rights Reserved. */}
        </p>

        <div className="flex items-center gap-4 sm:justify-center">
          <p>Made with ❤️ By <a href="https://neranjana.tk" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">Neranjana Prasad</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
