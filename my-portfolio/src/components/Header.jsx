export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between  py-8 px-32">
      <div className="logo text-[#D88995] port-font text-5xl ">JT.</div>

      <nav className="navbar text-white text-2xl port-font flex gap-16 ">
        <Navlink title="Home" />
        <Navlink title="Education" />
        <Navlink title="Projects" />
        <Navlink title="Others" />
      </nav>
    </div>
  );
}
function Navlink({ title }) {
  return <a className=" navlink relative">{title}</a>;
}
