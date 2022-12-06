const Contact = () => {
  return (
    <section className="mt-4 pt-4 h-full" id="contact">
      <h1 className="text-3xl border-b-2 border-yellow-400 pb-2 w-fit m-auto">Contact</h1>

      <div className="mb-8 mt-6 flex gap-10 sm:flex-col">
        <div className="w-1/2 sm:w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63320.41799145178!2d80.59067589571481!3d7.294629083469905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!5e0!3m2!1sen!2slk!4v1670304981614!5m2!1sen!2slk"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-64"
          ></iframe>

          <h4 className="text-lg sm:text-md mt-4 mb-1">Phone</h4>
          <p className="font-semibold w-fit">
            <a href="tel:+94767881256">+94 76 123 4567</a>
          </p>

          <h4 className="text-lg sm:text-md mt-4 mb-1">Address</h4>
          <p className="font-semibold w-fit">
            <a href="mailto:hellodynamicbiz@gmail.com">No. 14, Yatinuwara St., Kandy.</a>
          </p>

          <h4 className="text-lg sm:text-md mt-4 mb-1">Find Us On</h4>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-8 fill-neutral-900 dark:fill-white">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-8 fill-neutral-900 dark:fill-white">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 fill-neutral-900 dark:fill-white">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 fill-neutral-900 dark:fill-white">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <form className="w-1/2 sm:w-full" action="" method="">
          {/* <h1 className="text-4xl font-semibold mb-4">Contact Us</h1> */}
          <div className="flex mb-6 space-x-3">
            <div className="w-full md:w-1/2 md:mb-0">
              <label className="block tracking-wide text-neutral-300 mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-900 border rounded p-3 leading-tight focus:outline-none"
                id="grid-first-name"
                type="text"
                name="firstName"
                placeholder="John"
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block tracking-wide text-neutral-300 mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded p-3 leading-tight focus:outline-none"
                id="grid-last-name"
                type="text"
                name="lastName"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label className="block tracking-wide text-neutral-300 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded p-3 leading-tight focus:outline-none"
                id="email"
                type="email"
                name="mail"
                placeholder="johndoe@cool.mail"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label className="block tracking-wide text-neutral-300 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded p-3 mb-3 leading-tight focus:outline-none h-48"
                id="message"
                name="message"
                placeholder="I would like to ask you..."
                required
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-sky-600 bg-yellow-400 text-black focus:outline-none text-xl font-medium py-2 px-6 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
