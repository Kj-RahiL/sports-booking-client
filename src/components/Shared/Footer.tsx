

const Footer = () => {
  return (
    <>
      <footer className="footer bg-[#04190a] glass text-white p-10">
        <aside>
        <a className="text-[#083214] font-extrabold tracking-wider text-white-border text-4xl logo-font flex justify-center items-center">
          SP_Booking
        </a>
        <p className="logo-font text-lg text-[#083214]">Plant Supply Co.</p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">Product</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <aside className="bg-[#04190a] py-5 text-center text-sm text-white dark:bg-gray-800">
        <p>&copy; 2024 <span className="text-[#083214] logo-font text-white-border">TreeHouse</span>. All Rights Reserved.</p>
      </aside>
    </>
  );
};

export default Footer;

//
