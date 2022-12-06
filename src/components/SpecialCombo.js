import Image from "next/image";
import Link from "next/link";

const SpecialCombo = () => {
  return (
    <section className="mt-4 pt-4 h-screen md:h-full" id="special-combos">
      <h1 className="text-3xl border-b-2 border-yellow-400 pb-2 w-fit m-auto">Special Combos</h1>

      <div className="grid grid-cols-4 gap-4 mt-16 text-center xmd:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div className="border border-dashed px-4 py-8 rounded-md">
          <div className="h-36 w-full">
            <Image src="/foods/burger.png" width={400} height={200} className="h-full w-auto block m-auto" />
          </div>
          <h4 className="text-2xl font-semibold mt-8 mb-2">Yellow Tower Burger</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p className="text-lg mt-6">0000 LKR</p>
        </div>
        <div className="border border-dashed px-4 py-8 rounded-md">
          <div className="h-36 w-full">
            <Image src="/foods/pizza.png" width={400} height={200} className="h-full w-auto block m-auto" />
          </div>
          <h4 className="text-2xl font-semibold mt-8 mb-2">Yellow Loaded Pizza</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p className="text-lg mt-6">0000 LKR</p>
        </div>
        <div className="border border-dashed px-4 py-8 rounded-md">
          <div className="h-36 w-full">
            <Image src="/foods/cappuccino.png" width={400} height={200} className="h-full w-auto block m-auto" />
          </div>
          <h4 className="text-2xl font-semibold mt-8 mb-2">Special Cappuccino</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p className="text-lg mt-6">0000 LKR</p>
        </div>
        <div className="border border-dashed px-4 py-8 rounded-md">
          <div className="h-36 w-full">
            <Image src="/foods/english-brakfast.png" width={400} height={200} className="h-full w-auto block m-auto" />
          </div>
          <h4 className="text-2xl font-semibold mt-8 mb-2">Full English Breakfast</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p className="text-lg mt-6">0000 LKR</p>
        </div>
      </div>

      <Link href="/">
        <button className="mt-8 px-4 py-2 rounded-md bg-yellow-400 text-black max-w-fit mx-auto flex items-center gap-2">
          <p>View Full Menu</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" className="h-6">
            <path d="M165 0C74.019 0 0 74.019 0 165s74.019 165 165 165 165-74.019 165-165S255.981 0 165 0zm60.606 175.605-80 80.002C142.678 258.535 138.839 260 135 260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355 0-21.213l69.393-69.396-69.393-69.392c-5.858-5.857-5.858-15.355 0-21.213 5.857-5.858 15.355-5.858 21.213 0l80 79.998a14.9955 14.9955 0 0 1 4.394 10.606 15.0042 15.0042 0 0 1-4.395 10.609z" />
          </svg>
        </button>
      </Link>
    </section>
  );
};

export default SpecialCombo;
