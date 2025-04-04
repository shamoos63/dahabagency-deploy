import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="wow fadeInUp relative z-10 pt-20 pd-10"
      data-wow-delay=".15s">
 <div className="container flex justify-center items-center">
  <div className="-mx- flex flex-wrap justify-center">
    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12 flex flex-col items-center">
      <div className="mb-6 w-full flex flex-col items-center">
        <Link href="/" className="inline-block max-w-[700px]">
          <Image
            src="/images/logo/logo.svg"
            alt="logo"
            width={1400}
            height={600}
            className="max-w-full"
          />
        </Link>
        <div className="h-10"></div>
        <div className="flex items-center justify-center space-x-3">
          <Link
            aria-label="social link"
            href="https://www.facebook.com"
            className="text-dark dark:text-white hover:text-white"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M16.294 8.86875H14.369H13.6815V8.18125V6.05V5.3625H14.369H15.8128C16.1909 5.3625 16.5003 5.0875 16.5003 4.675V1.03125C16.5003 0.653125 16.2253 0.34375 15.8128 0.34375H13.3034C10.5878 0.34375 8.69714 2.26875 8.69714 5.12187V8.1125V8.8H8.00964H5.67214C5.19089 8.8 4.74402 9.17812 4.74402 9.72812V12.2031C4.74402 12.6844 5.12214 13.1313 5.67214 13.1313H7.94089H8.62839V13.8188V20.7281C8.62839 21.2094 9.00652 21.6562 9.55652 21.6562H12.7878C12.994 21.6562 13.1659 21.5531 13.3034 21.4156C13.4409 21.2781 13.544 21.0375 13.544 20.8312V13.8531V13.1656H14.2659H15.8128C16.2596 13.1656 16.6034 12.8906 16.6721 12.4781V12.4438V12.4094L17.1534 10.0375C17.1878 9.79688 17.1534 9.52187 16.9471 9.24687C16.8784 9.075 16.569 8.90312 16.294 8.86875Z" />
            </svg>
          </Link>
          <Link
            aria-label="social link"
            href="https://www.instagram.com"
            className="text-dark dark:text-white hover:text-yellow"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M11.0297 14.4305C12.9241 14.4305 14.4598 12.8948 14.4598 11.0004C14.4598 9.10602 12.9241 7.57031 11.0297 7.57031C9.13529 7.57031 7.59958 9.10602 7.59958 11.0004C7.59958 12.8948 9.13529 14.4305 11.0297 14.4305Z" />
              <path d="M14.7554 1.8335H7.24463C4.25807 1.8335 1.83334 4.25823 1.83334 7.24479V14.6964C1.83334 17.7421 4.25807 20.1668 7.24463 20.1668H14.6962C17.7419 20.1668 20.1667 17.7421 20.1667 14.7555V7.24479C20.1667 4.25823 17.7419 1.8335 14.7554 1.8335ZM11.0296 15.4948C8.51614 15.4948 6.53496 13.4545 6.53496 11.0002C6.53496 8.54586 8.54571 6.50554 11.0296 6.50554C13.4839 6.50554 15.4946 8.54586 15.4946 11.0002C15.4946 13.4545 13.5134 15.4948 11.0296 15.4948ZM17.2393 6.91952C16.9436 7.24479 16.5 7.42221 15.9973 7.42221C15.5538 7.42221 15.1102 7.24479 14.7554 6.91952C14.4301 6.59425 14.2527 6.18027 14.2527 5.67758C14.2527 5.17489 14.4301 4.79049 14.7554 4.43565C15.0807 4.08081 15.4946 3.90339 15.9973 3.90339C16.4409 3.90339 16.914 4.08081 17.2393 4.40608C17.535 4.79049 17.7419 5.23403 17.7419 5.70715C17.7124 6.18027 17.535 6.59425 17.2393 6.91952Z" />
              <path d="M16.0276 4.96777C15.6432 4.96777 15.318 5.29304 15.318 5.67745C15.318 6.06186 15.6432 6.38713 16.0276 6.38713C16.412 6.38713 16.7373 6.06186 16.7373 5.67745C16.7373 5.29304 16.4416 4.96777 16.0276 4.96777Z" />
            </svg>
          </Link>
          
        </div>
      </div>
      <div className="container flex justify-center items-center space-x-4">
  <Link href="tel:+963935446807" className="text-base text-dark dark:text-white hover:underline flex items-center space-x-2">
   
    <span>Call us now!</span>
  </Link>
</div>
<div className="container flex justify-center items-center space-x-4">
  <Link href="mailto:info@dahabagency.com" className="text-base text-dark dark:text-white hover:underline flex items-center space-x-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 4.5h16.5a1.5 1.5 0 011.5 1.5v12.75a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V6a1.5 1.5 0 011.5-1.5zM3.75 6l8.25 6 8.25-6"
      />
    </svg>
    <span>Too Shy?</span>
  </Link>
</div>
    </div>
  </div>
  
</div>
      <div className="h-60"></div>
      <div className="absolute bottom-0 left-0 w-full flex top justify-center border-t border-[#ca9762] border-opacity-40 py-8 mt-8"> {/* Added margin-top */}
  <p className="text-base text-dark dark:text-white">
    Designed and Developed by{" "}
    <Link
      href="https://t.me/xavior963"
      rel="nofollow noopner noreferrer"
      target="_blank"
      className=" text-dark dark:text-white hover:underline"
    >
      Eng.Hisham Khateeb
    </Link>
  </p>
</div>
          <div>
        <span className="absolute left-0 top-0 z-[-1] aspect-[95/82] w-full max-w-[570px]">
          <Image src="/images/footer/shape-1.svg" alt="shape" fill />
        </span>
        <span className="absolute bottom-0 right-0 z-[-1] aspect-[31/22] w-full max-w-[372px]">
          <Image src="/images/footer/shape-3.svg" alt="shape" fill />
        </span>
             </div>
    </footer>
  );
};
export default Footer;