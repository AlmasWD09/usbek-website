
const Footer = () => {
  return (
    <footer className="px-4 bg-[#333333] text-[#FFFFFF]">
      <div className="max-w-[1167px] mx-auto flex flex-col justify-between pt-10  space-y-8 lg:flex-row lg:space-y-0">

        <div className="lg:w-1/3">
          <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
            <div className="flex items-center justify-center rounded-full dark:bg-violet-600 pb-[40px]">
              <img src="/logo.png" alt="nav logo" className="w-full h-full object-cover" />
            </div>
          </a>
          <div>
            <h2 className="font-Roboto text-[16px]">Meet your town specialists</h2>
            <p className="max-w-[344px] text-wrap font-Roboto text-[12px] pt-[5px] pb-[16px]">Expanding from the Chicagoland area to a nationwide reach,
              we aim to simplify and enhance the way people find services
              and businesses in their local communities, fostering closer
              connections between businesses and residents.</p>

            <div>
              <h2 className="font-Roboto text-[12px]">Email: info@mytsv.com</h2>
              <h2 className="font-Roboto text-[12px]">Mobile: +1 847-943-9634</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4 place-items-center md:place-items-start">

          <div className="space-y-3">
            <h3 className="font-Poppins font-medium text-[20px]">Useful Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="/about" className="underline text-[12px]">About us</a>
              </li>
              <li>
                <a href="/about" className="underline text-[12px]">Contact</a>
              </li>
              <li>
                <a href="/about" className="underline text-[12px]">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-Poppins font-medium text-[20px]">Company</h3>
            <ul className="space-y-1">
              <li>
                <a href="/about" className="underline text-[12px]">FAQ</a>
              </li>
              <li>
                <a href="/about" className="underline text-[12px]">Registration</a>
              </li>
              <li>
                <a href="/about" className="underline text-[12px]">Video Upload</a>
              </li>

            </ul>
          </div>



          <div className="space-y-3">
            <div className="font-Poppins font-medium text-[20px]">Follow Us</div>
            <div className="flex justify-start space-x-3">
              <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>
              <a href="">
                <svg width="30" height="30" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35.0134 9.75519C34.6208 8.27706 33.4642 7.11294 31.9956 6.71788C29.3338 6 18.6599 6 18.6599 6C18.6599 6 7.9862 6 5.32426 6.71788C3.8557 7.113 2.69907 8.27706 2.30651 9.75519C1.59326 12.4344 1.59326 18.0243 1.59326 18.0243C1.59326 18.0243 1.59326 23.6141 2.30651 26.2933C2.69907 27.7714 3.8557 28.8871 5.32426 29.2821C7.9862 30 18.6599 30 18.6599 30C18.6599 30 29.3337 30 31.9956 29.2821C33.4642 28.8871 34.6208 27.7714 35.0134 26.2933C35.7266 23.6141 35.7266 18.0243 35.7266 18.0243C35.7266 18.0243 35.7266 12.4344 35.0134 9.75519ZM15.169 23.0994V12.9491L24.0902 18.0244L15.169 23.0994Z" fill="#E0E0E0" />
                </svg>

              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 font-Roboto text-center">© MyTSV - Meet your town specialists</div>
    </footer>
  )
}

export default Footer