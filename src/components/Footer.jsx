export default function Footer() {
  return (
    <footer className="bg-gray-600 mt-24 text-white py-24">
      <div className="container items-center justify-between mx-auto px-4 leading-normal text-center">
        <div className="md:w-8/12 w-11/12 mx-auto ">
          <div className="grid grid-cols-3 mb-10">
            <a
              className="font-bold"
              // 以下占位符链接需被替换
              href="https://github.com/your_name"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i> Github
            </a>
            <a
              className="font-bold"
              // 以下占位符链接需被替换
              href="https://www.linkedin.com/your_name"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a className="font-bold" href=".">
              <i className="fas fa-file-code"></i> Website
            </a>
          </div>
          <p>© 2022 binbin呀,要加油啊.</p>
        </div>
      </div>
    </footer>
  );
}
