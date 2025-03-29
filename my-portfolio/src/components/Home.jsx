export default function Home() {
  return (
    <div className="flex flex-row items-center justify-between px-52">
      <div className="txt">
        <div className="txt1 mono-font text-3xl mb-4">Hi There!</div>
        <div className="txt2 poppins-bold text-5xl mb-8">I'm a Developer |</div>
        <div className="txt3 mono-font text-3xl mb-8">
          &lt; Code, Coffee & Creativity /&gt;
        </div>
        <button
          id="btn1"
          className="z-30 relative border-2 border-[#a34e5c] overflow-hidden rounded-3xl text-[#60343B] font-semibold text-lg px-4 py-2  hover:text-amber-50 transition-all duration-450 hover:shadow-lg shadow-[#60343B]"
        >
          <div>Contact me</div>
        </button>
        <div className="flex flex-row mt-36 gap-24">
          <div>
            <p>Email</p>
            <p>jayasreetummala2001@gmail.com</p>
          </div>
          <div className="border-1 border-amber-50/50 rounded-xl"></div>
          <div>
            <p>Location</p>
            <p>Chennai, India</p>
          </div>
        </div>
      </div>

      <div className="photo rounded-xl overflow-hidden w-fit mt-4 border-2 border-red-200 p-4">
        <img src="../images/background_sm.png " className="w-86 rounded-xl" />
      </div>
    </div>
  );
}
