import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -85;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <nav className="fixed z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-800"
            href="/"
          >
            ð åå½ï¼ææ¯ç»¿èï¼æ¥èªæ¹åç§æå­¦é¢ãè¿æ¯ä¸ä¸ªåºäºReactæ¡æ¶çç®åç½ç«
          </a>
        </div>
        <div
          className="lg:flex flex-grow items-center hidden"
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <HashLink
                smooth
                to="#education"
                scroll={(el) => scrollWithOffset(el)}
                className="px-3 py-2 flex items-center text-base uppercase font-bold text-gray-800 hover:text-gray-600"
              >
                <span className="ml-2">ð æè²ç»å</span>
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="#project"
                scroll={(el) => scrollWithOffset(el)}
                className="px-3 py-2 flex items-center text-base uppercase font-bold text-gray-800 hover:text-gray-600"
              >
                <span className="ml-2">ð é¡¹ç®ç»å</span>
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="#experience"
                scroll={(el) => scrollWithOffset(el)}
                className="px-3 py-2 flex items-center text-base uppercase font-bold text-gray-800 hover:text-gray-600"
              >
                <span className="ml-2">ð¼ å·¥ä½ç»å</span>
              </HashLink>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-base uppercase font-bold text-gray-800 hover:text-gray-600"
                href="My_Resume.pdf"
                target="_blank"
              >
                <span className="ml-2">ð æçç®å</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
