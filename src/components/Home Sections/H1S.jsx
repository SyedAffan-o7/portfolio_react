export default function HfirstS() {
  return (
    <div>
      <div
        id="offcanvas"
        className="offcanvas right-0 top-0 bottom-0 z-50 transform translate-x-full fixed h-full w-[350px] md:w-[460px] transition-all ease-in-out duration-300 bg-black-800 pl-8 flex flex-wrap flex-col justify-between"
      >
        {/* close button start */}
        <div>
          <div className="flex flex-wrap justify-between items-center border-b border-border-white mb-[80px]">
            <a href="index.html">
              <img src="assets/images/logo/offcanvas-logo.png" alt />
            </a>
            <button
              id="offcanvas-close"
              className="offcanvas-close bg-primary py-7 px-[38px]"
              aria-label="offcanvas"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.2803 4.71967C19.5732 5.01256 19.5732 5.48744 19.2803 5.78033L5.78033 19.2803C5.48744 19.5732 5.01256 19.5732 4.71967 19.2803C4.42678 18.9874 4.42678 18.5126 4.71967 18.2197L18.2197 4.71967C18.5126 4.42678 18.9874 4.42678 19.2803 4.71967Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.71967 4.71967C5.01256 4.42678 5.48744 4.42678 5.78033 4.71967L19.2803 18.2197C19.5732 18.5126 19.5732 18.9874 19.2803 19.2803C18.9874 19.5732 18.5126 19.5732 18.2197 19.2803L4.71967 5.78033C4.42678 5.48744 4.42678 5.01256 4.71967 4.71967Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          {/* close button end */}
          {/* offcanvas-menu start */}
          <nav className="offcanvas-menu mr-[40px] flex flex-wrap flex-col justify-between">
            <ul>
              <li className="border-b border-border-white py-4 group">
                <a
                  href="index.html"
                  className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                >
                  Home
                  <span className="inline-block group-hover:animate-arrow-move-up">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7H17V17"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="border-b border-border-white py-4 group">
                <a
                  href="about.html"
                  className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                >
                  About
                  <span className="inline-block group-hover:animate-arrow-move-up">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7H17V17"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="border-b border-border-white py-4 group">
                <a
                  href="projects.html"
                  className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                >
                  Project
                  <span className="inline-block group-hover:animate-arrow-move-up">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7H17V17"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="border-b border-border-white py-4 group">
                <a
                  href="project-details.html"
                  className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                >
                  Project details
                  <span className="inline-block group-hover:animate-arrow-move-up">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7H17V17"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="border-b border-border-white py-4 group">
                <a
                  href="blog.html"
                  className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                >
                  Blog
                  <span className="inline-block group-hover:animate-arrow-move-up">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7H17V17"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="border-b border-border-white py-4 group">
                <a
                  href="blog-details.html"
                  className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                >
                  Blog Details
                  <span className="inline-block group-hover:animate-arrow-move-up">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7H17V17"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="border-b border-border-white py-4 group">
                <a
                  href="contact.html"
                  className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                >
                  Contact
                  <span className="inline-block group-hover:animate-arrow-move-up">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7H17V17"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="pb-10">
          <ul className="flex flex-wrap gap-x-4 items-center">
            <li>
              <a
                href="#"
                className="text-white transition-all duration-300 hover:text-orange"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.443 5.3501C8.082 5.3501 8.673 5.4001 9.213 5.5481C9.754 5.6471 10.197 5.8451 10.59 6.0921C10.984 6.3401 11.279 6.6861 11.475 7.1311C11.672 7.5761 11.771 8.1211 11.771 8.7141C11.771 9.4071 11.623 10.0001 11.279 10.4451C10.984 10.8911 10.492 11.2861 9.902 11.5831C10.738 11.8311 11.377 12.2761 11.771 12.8701C12.164 13.4631 12.41 14.2051 12.41 15.0461C12.41 15.7391 12.262 16.3321 12.016 16.8271C11.771 17.3221 11.377 17.7671 10.934 18.0641C10.4528 18.3824 9.92083 18.6164 9.361 18.7561C8.771 18.9051 8.181 19.0041 7.591 19.0041H1V5.3501H7.443ZM7.049 10.8901C7.59 10.8901 8.033 10.7421 8.377 10.4951C8.721 10.2481 8.869 9.8021 8.869 9.2581C8.869 8.9611 8.819 8.6651 8.721 8.4671C8.623 8.2691 8.475 8.1201 8.279 7.9721C8.082 7.8731 7.885 7.7741 7.639 7.7251C7.393 7.6751 7.148 7.6751 6.852 7.6751H4V10.8911H7.05L7.049 10.8901ZM7.197 16.7281C7.492 16.7281 7.787 16.6781 8.033 16.6291C8.279 16.5791 8.525 16.4811 8.721 16.3321C8.92138 16.1873 9.08903 16.002 9.213 15.7881C9.311 15.5411 9.41 15.2441 9.41 14.8981C9.41 14.2051 9.213 13.7111 8.82 13.3641C8.426 13.0671 7.885 12.9191 7.246 12.9191H4V16.7291L7.197 16.7281ZM16.689 16.6781C17.082 17.0741 17.672 17.2721 18.459 17.2721C19 17.2721 19.492 17.1241 19.885 16.8771C20.279 16.5801 20.525 16.2831 20.623 15.9871H23.033C22.639 17.1731 22.049 18.0141 21.263 18.5591C20.475 19.0531 19.541 19.3501 18.41 19.3501C17.6864 19.3523 16.9688 19.218 16.295 18.9541C15.6887 18.7267 15.148 18.353 14.721 17.8661C14.2643 17.4107 13.9267 16.8498 13.738 16.2331C13.492 15.5901 13.393 14.8981 13.393 14.1061C13.393 13.3641 13.492 12.6721 13.738 12.0281C13.9749 11.4085 14.3252 10.8384 14.771 10.3471C15.2201 9.88594 15.7543 9.51613 16.344 9.2581C17.0007 8.99416 17.7022 8.85969 18.41 8.8621C19.246 8.8621 19.984 9.0111 20.623 9.3571C21.263 9.7031 21.754 10.0991 22.147 10.6931C22.541 11.2371 22.837 11.8801 23.033 12.5731C23.131 13.2651 23.18 13.9581 23.131 14.7491H16C16 15.5411 16.295 16.2831 16.689 16.6791V16.6781ZM19.787 11.4841C19.443 11.1381 18.902 10.9401 18.262 10.9401C17.82 10.9401 17.475 11.0401 17.18 11.1881C16.885 11.3361 16.689 11.5341 16.492 11.7321C16.311 11.9234 16.1912 12.1643 16.148 12.4241C16.098 12.6721 16.049 12.8701 16.049 13.0671H20.475C20.377 12.3251 20.131 11.8311 19.787 11.4841ZM15.459 6.2901H20.967V7.6261H15.46V6.2901H15.459Z"
                    fill="currentColor"
                    fillOpacity="0.9"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white transition-all duration-300 hover:text-orange"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.94043 5.00002C6.94017 5.53046 6.7292 6.03906 6.35394 6.41394C5.97868 6.78883 5.46986 6.99929 4.93943 6.99902C4.409 6.99876 3.90039 6.78779 3.52551 6.41253C3.15062 6.03727 2.94016 5.52846 2.94043 4.99802C2.9407 4.46759 3.15166 3.95899 3.52692 3.5841C3.90218 3.20922 4.411 2.99876 4.94143 2.99902C5.47186 2.99929 5.98047 3.21026 6.35535 3.58552C6.73024 3.96078 6.9407 4.46959 6.94043 5.00002ZM7.00043 8.48002H3.00043V21H7.00043V8.48002ZM13.3204 8.48002H9.34043V21H13.2804V14.43C13.2804 10.77 18.0504 10.43 18.0504 14.43V21H22.0004V13.07C22.0004 6.90002 14.9404 7.13002 13.2804 10.16L13.3204 8.48002Z"
                    fill="currentColor"
                    fillOpacity="0.9"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white transition-all duration-300 hover:text-orange"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.989 11.572C19.907 9.99792 19.3596 8.4836 18.416 7.221C18.1285 7.53061 17.8212 7.82123 17.496 8.091C16.4969 8.92086 15.3805 9.5982 14.183 10.101C14.35 10.451 14.503 10.79 14.638 11.11V11.113C14.665 11.174 14.688 11.231 14.732 11.342L14.749 11.382C16.262 11.212 17.858 11.275 19.405 11.485C19.611 11.512 19.805 11.541 19.989 11.572ZM10.604 4.122C11.5786 5.49516 12.4772 6.92062 13.296 8.392C14.519 7.91 15.53 7.302 16.344 6.625C16.674 6.351 16.938 6.093 17.14 5.87C15.701 4.65972 13.8803 3.99733 12 4C11.524 4 11.058 4.042 10.604 4.121V4.122ZM4.253 9.997C4.93423 9.97981 5.61464 9.93878 6.293 9.874C7.93264 9.72734 9.55828 9.4525 11.155 9.052C10.3205 7.60221 9.41956 6.19171 8.455 4.825C7.42472 5.3354 6.51626 6.06141 5.79124 6.95379C5.06623 7.84617 4.54162 8.88404 4.253 9.997ZM5.783 17.035C6.25195 16.3575 6.77894 15.7221 7.358 15.136C8.812 13.646 10.528 12.486 12.514 11.846L12.576 11.828C12.411 11.464 12.256 11.139 12.1 10.833C10.264 11.368 8.33 11.702 6.403 11.875C5.463 11.96 4.62 11.997 4 12.003C3.99815 13.8356 4.62722 15.6128 5.783 17.035ZM15.004 19.415C14.6184 17.4703 14.0725 15.5607 13.372 13.706C11.372 14.433 9.776 15.496 8.543 16.764C8.0454 17.2664 7.60382 17.8213 7.226 18.419C8.60481 19.4478 10.2797 20.0025 12 20C13.0299 20.0015 14.0504 19.8035 15.005 19.417L15.004 19.415ZM16.878 18.34C18.4393 17.1398 19.5028 15.4057 19.865 13.47C19.525 13.385 19.094 13.3 18.62 13.234C17.5661 13.0823 16.4968 13.0712 15.44 13.201C16.035 14.8799 16.5154 16.5961 16.878 18.34ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z"
                    fill="currentColor"
                    fillOpacity="0.9"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white transition-all duration-300 hover:text-orange"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C1.99977 14.0992 2.65958 16.1454 3.88679 17.8484C5.114 19.5515 6.84631 20.8249 8.83798 21.488C9.33798 21.575 9.52598 21.275 9.52598 21.012C9.52598 20.775 9.51298 19.988 9.51298 19.15C7.00098 19.613 6.35098 18.538 6.15098 17.975C6.03798 17.687 5.55098 16.8 5.12598 16.562C4.77598 16.375 4.27598 15.912 5.11298 15.9C5.90098 15.887 6.46298 16.625 6.65098 16.925C7.55098 18.437 8.98798 18.012 9.56298 17.75C9.65098 17.1 9.91298 16.663 10.201 16.413C7.97598 16.163 5.65098 15.3 5.65098 11.475C5.65098 10.387 6.03798 9.488 6.67598 8.788C6.57598 8.538 6.22598 7.513 6.77598 6.138C6.77598 6.138 7.61298 5.875 9.52598 7.162C10.3401 6.9364 11.1812 6.82302 12.026 6.825C12.876 6.825 13.726 6.937 14.526 7.162C16.439 5.862 17.276 6.138 17.276 6.138C17.826 7.513 17.476 8.538 17.376 8.788C18.013 9.488 18.401 10.375 18.401 11.475C18.401 15.313 16.064 16.163 13.839 16.413C14.201 16.725 14.514 17.325 14.514 18.263C14.514 19.6 14.501 20.675 14.501 21.013C14.501 21.275 14.689 21.587 15.189 21.487C17.1738 20.8166 18.8985 19.5408 20.1203 17.8389C21.3421 16.1371 21.9995 14.095 22 12C22 6.475 17.525 2 12 2H12.001Z"
                    fill="currentColor"
                    fillOpacity="0.9"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <section className="bg-secondary relative pt-[140px] pb-[125px]">
        <div className="container">
          <div className="grid grid-cols-1 2xl:-mx-4">
            <div className="xl:pt-12">
              <span
                className="font-Syne text-black-800 font-bold text-2xl lg:text-[32px] leading-none flex flex-wrap items-center mb-3"
                data-aos="fade-right"
                data-aos-delay={300}
              >
                <span className="mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={65}
                    height={2}
                    viewBox="0 0 65 2"
                    fill="none"
                  >
                    <path d="M0 1H65" stroke="#080808" />
                  </svg>
                </span>
                Hello, I’m
                <img
                  className="ml-2"
                  src="/images/icon/victory.png"
                  alt="icon"
                />
              </span>
              <h1
                className="relative z-[1] font-Syne text-black-800 font-bold text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[64px] lg:leading-[80px] xl:leading-[90px] 2xl:leading-[110px] 2xl:before:w-[120px] xl:before:w-[100px] 2xl:before:h-[120px] xl:before:h-[100px] before:rounded-full before:bg-primary before:block before:absolute before:top-[0px] before:left-0 before:-z-[1] lg:before:w-[85px] lg:before:h-[85px] before:w-[70px] before:h-[70px]"
                data-aos="fade-right"
                data-aos-delay={400}
              >
                Mark
                {/* <br /> Henry */}
              </h1>
              <h2
                className="font-Syne text-black-800 font-bold text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[64px] lg:leading-[80px] xl:leading-[90px] 2xl:leading-[110px] mb-[20px]"
                data-aos="fade-right"
                data-aos-delay={600}
              >
                Henry
              </h2>
              <p
                className="font-Syne text-black-700 font-bold text-lg md:text-xl xl:text-2xl leading-tight mb-[30px]"
                data-aos="fade-right"
                data-aos-delay={800}
              >
                Product Designer | Based in Germany
              </p>
              <div className="flex flex-wrap mb-[50px] md:mb-[60px] xl:mb-[70px] 2xl:mb-[80px]">
                {/* Link Start */}
                <span data-aos="fade-right" data-aos-delay={1000}>
                  <a
                    href="contact.html"
                    className="flex items-center flex-wrap btn-primary mr-2 group"
                  >
                    Let’s Talk
                    <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="currentColor"
                          strokeOpacity="0.9"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          stroke="currentColor"
                          strokeOpacity="0.9"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </span>
                {/* Link End */}
                {/* Link Start */}
                <span data-aos="fade-right" data-aos-delay={1200}>
                  <a
                    href="projects.html"
                    className="flex items-center flex-wrap btn-primary-outline group"
                  >
                    My Work
                    <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="currentColor"
                          strokeOpacity="0.9"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          stroke="currentColor"
                          strokeOpacity="0.9"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </span>
                {/* Link End */}
              </div>
              <div
                className="flex flex-wrap items-center"
                data-aos="fade-right"
                data-aos-delay={1400}
              >
                <div className="flex flex-wrap items-center">
                  <span className="font-Syne text-black-800 font-bold text-[44px] leading-none">
                    <span className="counter">1.2</span>k+
                  </span>
                  <span className="text-lg text-black-700 ml-3">
                    Worldwide client
                  </span>
                  <span className="mx-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={2}
                      height={14}
                      viewBox="0 0 2 14"
                      fill="none"
                    >
                      <path
                        d="M1 0L1 14"
                        stroke="#080808"
                        strokeOpacity="0.4"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mt-5 sm:mt-0">
                  <ul className="flex flex-wrap gap-x-4 items-center">
                    <li>
                      <a href="#" className="text-black-800 hover:text-orange">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.443 5.3501C8.082 5.3501 8.673 5.4001 9.213 5.5481C9.754 5.6471 10.197 5.8451 10.59 6.0921C10.984 6.3401 11.279 6.6861 11.475 7.1311C11.672 7.5761 11.771 8.1211 11.771 8.7141C11.771 9.4071 11.623 10.0001 11.279 10.4451C10.984 10.8911 10.492 11.2861 9.902 11.5831C10.738 11.8311 11.377 12.2761 11.771 12.8701C12.164 13.4631 12.41 14.2051 12.41 15.0461C12.41 15.7391 12.262 16.3321 12.016 16.8271C11.771 17.3221 11.377 17.7671 10.934 18.0641C10.4528 18.3824 9.92083 18.6164 9.361 18.7561C8.771 18.9051 8.181 19.0041 7.591 19.0041H1V5.3501H7.443ZM7.049 10.8901C7.59 10.8901 8.033 10.7421 8.377 10.4951C8.721 10.2481 8.869 9.8021 8.869 9.2581C8.869 8.9611 8.819 8.6651 8.721 8.4671C8.623 8.2691 8.475 8.1201 8.279 7.9721C8.082 7.8731 7.885 7.7741 7.639 7.7251C7.393 7.6751 7.148 7.6751 6.852 7.6751H4V10.8911H7.05L7.049 10.8901ZM7.197 16.7281C7.492 16.7281 7.787 16.6781 8.033 16.6291C8.279 16.5791 8.525 16.4811 8.721 16.3321C8.92138 16.1873 9.08903 16.002 9.213 15.7881C9.311 15.5411 9.41 15.2441 9.41 14.8981C9.41 14.2051 9.213 13.7111 8.82 13.3641C8.426 13.0671 7.885 12.9191 7.246 12.9191H4V16.7291L7.197 16.7281ZM16.689 16.6781C17.082 17.0741 17.672 17.2721 18.459 17.2721C19 17.2721 19.492 17.1241 19.885 16.8771C20.279 16.5801 20.525 16.2831 20.623 15.9871H23.033C22.639 17.1731 22.049 18.0141 21.263 18.5591C20.475 19.0531 19.541 19.3501 18.41 19.3501C17.6864 19.3523 16.9688 19.218 16.295 18.9541C15.6887 18.7267 15.148 18.353 14.721 17.8661C14.2643 17.4107 13.9267 16.8498 13.738 16.2331C13.492 15.5901 13.393 14.8981 13.393 14.1061C13.393 13.3641 13.492 12.6721 13.738 12.0281C13.9749 11.4085 14.3252 10.8384 14.771 10.3471C15.2201 9.88594 15.7543 9.51613 16.344 9.2581C17.0007 8.99416 17.7022 8.85969 18.41 8.8621C19.246 8.8621 19.984 9.0111 20.623 9.3571C21.263 9.7031 21.754 10.0991 22.147 10.6931C22.541 11.2371 22.837 11.8801 23.033 12.5731C23.131 13.2651 23.18 13.9581 23.131 14.7491H16C16 15.5411 16.295 16.2831 16.689 16.6791V16.6781ZM19.787 11.4841C19.443 11.1381 18.902 10.9401 18.262 10.9401C17.82 10.9401 17.475 11.0401 17.18 11.1881C16.885 11.3361 16.689 11.5341 16.492 11.7321C16.311 11.9234 16.1912 12.1643 16.148 12.4241C16.098 12.6721 16.049 12.8701 16.049 13.0671H20.475C20.377 12.3251 20.131 11.8311 19.787 11.4841ZM15.459 6.2901H20.967V7.6261H15.46V6.2901H15.459Z"
                            fill="currentColor"
                            fillOpacity="0.9"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-black-800 hover:text-orange">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.94043 5.00002C6.94017 5.53046 6.7292 6.03906 6.35394 6.41394C5.97868 6.78883 5.46986 6.99929 4.93943 6.99902C4.409 6.99876 3.90039 6.78779 3.52551 6.41253C3.15062 6.03727 2.94016 5.52846 2.94043 4.99802C2.9407 4.46759 3.15166 3.95899 3.52692 3.5841C3.90218 3.20922 4.411 2.99876 4.94143 2.99902C5.47186 2.99929 5.98047 3.21026 6.35535 3.58552C6.73024 3.96078 6.9407 4.46959 6.94043 5.00002ZM7.00043 8.48002H3.00043V21H7.00043V8.48002ZM13.3204 8.48002H9.34043V21H13.2804V14.43C13.2804 10.77 18.0504 10.43 18.0504 14.43V21H22.0004V13.07C22.0004 6.90002 14.9404 7.13002 13.2804 10.16L13.3204 8.48002Z"
                            fill="currentColor"
                            fillOpacity="0.9"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-black-800 hover:text-orange">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.989 11.572C19.907 9.99792 19.3596 8.4836 18.416 7.221C18.1285 7.53061 17.8212 7.82123 17.496 8.091C16.4969 8.92086 15.3805 9.5982 14.183 10.101C14.35 10.451 14.503 10.79 14.638 11.11V11.113C14.665 11.174 14.688 11.231 14.732 11.342L14.749 11.382C16.262 11.212 17.858 11.275 19.405 11.485C19.611 11.512 19.805 11.541 19.989 11.572ZM10.604 4.122C11.5786 5.49516 12.4772 6.92062 13.296 8.392C14.519 7.91 15.53 7.302 16.344 6.625C16.674 6.351 16.938 6.093 17.14 5.87C15.701 4.65972 13.8803 3.99733 12 4C11.524 4 11.058 4.042 10.604 4.121V4.122ZM4.253 9.997C4.93423 9.97981 5.61464 9.93878 6.293 9.874C7.93264 9.72734 9.55828 9.4525 11.155 9.052C10.3205 7.60221 9.41956 6.19171 8.455 4.825C7.42472 5.3354 6.51626 6.06141 5.79124 6.95379C5.06623 7.84617 4.54162 8.88404 4.253 9.997ZM5.783 17.035C6.25195 16.3575 6.77894 15.7221 7.358 15.136C8.812 13.646 10.528 12.486 12.514 11.846L12.576 11.828C12.411 11.464 12.256 11.139 12.1 10.833C10.264 11.368 8.33 11.702 6.403 11.875C5.463 11.96 4.62 11.997 4 12.003C3.99815 13.8356 4.62722 15.6128 5.783 17.035ZM15.004 19.415C14.6184 17.4703 14.0725 15.5607 13.372 13.706C11.372 14.433 9.776 15.496 8.543 16.764C8.0454 17.2664 7.60382 17.8213 7.226 18.419C8.60481 19.4478 10.2797 20.0025 12 20C13.0299 20.0015 14.0504 19.8035 15.005 19.417L15.004 19.415ZM16.878 18.34C18.4393 17.1398 19.5028 15.4057 19.865 13.47C19.525 13.385 19.094 13.3 18.62 13.234C17.5661 13.0823 16.4968 13.0712 15.44 13.201C16.035 14.8799 16.5154 16.5961 16.878 18.34ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z"
                            fill="currentColor"
                            fillOpacity="0.9"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-black-800 hover:text-orange">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C1.99977 14.0992 2.65958 16.1454 3.88679 17.8484C5.114 19.5515 6.84631 20.8249 8.83798 21.488C9.33798 21.575 9.52598 21.275 9.52598 21.012C9.52598 20.775 9.51298 19.988 9.51298 19.15C7.00098 19.613 6.35098 18.538 6.15098 17.975C6.03798 17.687 5.55098 16.8 5.12598 16.562C4.77598 16.375 4.27598 15.912 5.11298 15.9C5.90098 15.887 6.46298 16.625 6.65098 16.925C7.55098 18.437 8.98798 18.012 9.56298 17.75C9.65098 17.1 9.91298 16.663 10.201 16.413C7.97598 16.163 5.65098 15.3 5.65098 11.475C5.65098 10.387 6.03798 9.488 6.67598 8.788C6.57598 8.538 6.22598 7.513 6.77598 6.138C6.77598 6.138 7.61298 5.875 9.52598 7.162C10.3401 6.9364 11.1812 6.82302 12.026 6.825C12.876 6.825 13.726 6.937 14.526 7.162C16.439 5.862 17.276 6.138 17.276 6.138C17.826 7.513 17.476 8.538 17.376 8.788C18.013 9.488 18.401 10.375 18.401 11.475C18.401 15.313 16.064 16.163 13.839 16.413C14.201 16.725 14.514 17.325 14.514 18.263C14.514 19.6 14.501 20.675 14.501 21.013C14.501 21.275 14.689 21.587 15.189 21.487C17.1738 20.8166 18.8985 19.5408 20.1203 17.8389C21.3421 16.1371 21.9995 14.095 22 12C22 6.475 17.525 2 12 2H12.001Z"
                            fill="currentColor"
                            fillOpacity="0.9"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            className="absolute top-0 right-0 md:max-w-[420px] lg:max-w-[570px] xl:max-w-[650px] 2xl:max-w-[initial]"
            data-aos="fade-left"
            src="assets/images/hero/hero.png"
            alt="hero Image"
          />
          <a href="contact.html">
            <svg
              className="absolute bottom-[200px] lg:bottom-[80px] xl:bottom-[80px] right-[40px] lg:right-[150px] xl:right-[150px]"
              width={180}
              height={180}
              viewBox="0 0 180 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="animate-spin origin-center">
                <path
                  d="M157.631 90C157.631 127.352 127.352 157.632 89.9995 157.632C52.6476 157.632 22.3678 127.352 22.3678 90C22.3678 52.6481 52.6476 22.3683 89.9995 22.3683C127.352 22.3683 157.631 52.6481 157.631 90Z"
                  fill="#080808"
                  stroke="#FFB646"
                  strokeWidth="2.08333"
                  strokeMiterlimit={10}
                />
                <path
                  d="M43.7883 74.5846C43.5199 75.4042 43.1104 76.0554 42.5597 76.5383C42.0037 77.0107 41.3536 77.3039 40.6095 77.4181C39.8574 77.5296 39.0598 77.4474 38.2165 77.1713C37.3654 76.8927 36.6735 76.4873 36.141 75.9552C35.6005 75.4205 35.2458 74.7983 35.0767 74.0886C34.9103 73.3709 34.9612 72.6023 35.2295 71.7827C35.5469 70.8133 36.0426 70.0987 36.7167 69.6388C37.3908 69.1789 38.1805 69.0055 39.0858 69.1186L38.6292 70.5135C38.1123 70.4665 37.6527 70.5778 37.2503 70.8474C36.8479 71.1171 36.5474 71.5553 36.3487 72.1622C36.0778 72.9897 36.1474 73.7367 36.5574 74.4032C36.9596 75.0671 37.6532 75.5603 38.6384 75.8828C39.6156 76.2027 40.4627 76.2139 41.1796 75.9163C41.8965 75.6188 42.3905 75.0562 42.6614 74.2287C42.86 73.6219 42.8847 73.0934 42.7354 72.6431C42.5862 72.1929 42.2971 71.8365 41.8682 71.5739L42.3249 70.179C43.0903 70.6128 43.6049 71.2132 43.8687 71.9801C44.1324 72.7471 44.1056 73.6152 43.7883 74.5846Z"
                  fill="white"
                />
                <path
                  d="M50.1726 61.9256C49.6756 62.6305 49.0849 63.1374 48.4004 63.4462C47.7159 63.7551 46.9941 63.8651 46.2348 63.7763C45.4688 63.6826 44.7232 63.3802 43.998 62.8689C43.2728 62.3576 42.7408 61.7594 42.4021 61.0741C42.0566 60.3841 41.9143 59.6648 41.9752 58.9163C42.0362 58.1679 42.3151 57.4412 42.812 56.7363C43.309 56.0315 43.8997 55.5246 44.5842 55.2158C45.2687 54.9069 45.9915 54.8027 46.7528 54.9031C47.512 54.9919 48.2542 55.292 48.9794 55.8032C49.7046 56.3145 50.24 56.9152 50.5855 57.6052C50.929 58.2837 51.0703 58.9972 51.0094 59.7456C50.9484 60.4941 50.6695 61.2208 50.1726 61.9256ZM49.2067 61.2447C49.5508 60.7567 49.741 60.2567 49.7774 59.7446C49.8185 59.2257 49.7074 58.7212 49.4441 58.2312C49.1808 57.7411 48.7679 57.2978 48.2053 56.9012C47.6428 56.5046 47.0865 56.2646 46.5365 56.1812C45.9865 56.0979 45.474 56.1627 44.9991 56.3758C44.529 56.5821 44.1219 56.9293 43.7779 57.4173C43.4338 57.9053 43.2412 58.4087 43.2001 58.9276C43.1589 59.4465 43.27 59.951 43.5333 60.441C43.8014 60.9242 44.2167 61.3642 44.7793 61.7608C45.3418 62.1574 45.8957 62.4008 46.4409 62.4909C46.9909 62.5743 47.5034 62.5094 47.9783 62.2963C48.4532 62.0832 48.8627 61.7327 49.2067 61.2447Z"
                  fill="white"
                />
                <path
                  d="M57.1532 53.6456L51.7944 46.7785L52.8343 45.967L60.3121 48.4499L56.2777 43.28L57.3175 42.4685L62.6763 49.3356L61.6365 50.1471L54.1587 47.6642L58.1931 52.8341L57.1532 53.6456Z"
                  fill="white"
                />
                <path
                  d="M70.5729 45.1508L67.6243 38.1023L65.248 39.0964L64.835 38.1092L70.793 35.6168L71.206 36.604L68.8412 37.5933L71.7898 44.6418L70.5729 45.1508Z"
                  fill="white"
                />
                <path
                  d="M78.8716 42.2432L80.7576 33.1533L82.1851 32.9397L86.6248 41.083L85.2465 41.2892L84.1931 39.2953L80.6734 39.822L80.2499 42.0369L78.8716 42.2432ZM80.8879 38.733L83.6692 38.3168L81.6911 34.599L80.8879 38.733Z"
                  fill="white"
                />
                <path
                  d="M96.3093 41.6882C95.4534 41.5795 94.7363 41.3002 94.1579 40.8504C93.5887 40.3935 93.1778 39.8103 92.925 39.1008C92.6734 38.3831 92.6034 37.584 92.7153 36.7034C92.8282 35.8146 93.0957 35.0584 93.5178 34.4346C93.9409 33.8026 94.4851 33.3366 95.1504 33.0364C95.824 32.7373 96.5887 32.6421 97.4445 32.7508C98.4568 32.8794 99.2525 33.2313 99.8317 33.8066C100.411 34.382 100.73 35.125 100.79 36.0357L99.3337 35.8507C99.2823 35.3341 99.0861 34.9036 98.7452 34.5592C98.4042 34.2149 97.9169 34.0025 97.2832 33.922C96.4191 33.8122 95.6984 34.0217 95.1212 34.5505C94.5449 35.071 94.1915 35.8456 94.0608 36.8743C93.9312 37.8948 94.0803 38.7291 94.5081 39.3772C94.9359 40.0252 95.5818 40.4041 96.4459 40.5139C97.0796 40.5944 97.6035 40.5188 98.0176 40.287C98.4317 40.0553 98.7272 39.704 98.9041 39.2331L100.361 39.4181C100.079 40.252 99.5866 40.871 98.8831 41.275C98.1795 41.679 97.3216 41.8168 96.3093 41.6882Z"
                  fill="white"
                />
                <path
                  d="M108.074 44.5801L110.985 37.5128L108.603 36.5314L109.01 35.5415L114.984 38.0021L114.576 38.992L112.205 38.0153L109.294 45.0827L108.074 44.5801Z"
                  fill="white"
                />
                <path
                  d="M123.795 54.407L130.354 48.6754L131.378 49.8467L128.952 55.883L135.251 54.2787L136.274 55.45L129.715 61.1815L128.847 60.1883L133.692 55.9552L128.032 57.3643L127.361 56.596L129.498 51.1752L124.663 55.4002L123.795 54.407Z"
                  fill="white"
                />
                <path
                  d="M133.257 67.1066L141.164 63.4523L143.487 68.4788L142.516 68.9278L140.746 65.0986L138.283 66.2366L139.897 69.727L138.948 70.1655L137.335 66.6752L134.782 67.855L136.552 71.6842L135.58 72.1332L133.257 67.1066Z"
                  fill="white"
                />
                <path
                  d="M137.181 86.6396L138.426 86.6423L138.411 93.4738L137.167 93.4711L137.181 86.6396Z"
                  fill="white"
                />
                <path
                  d="M133.683 111.594C134.061 110.818 134.556 110.229 135.168 109.826C135.783 109.434 136.468 109.232 137.221 109.221C137.981 109.213 138.761 109.404 139.558 109.792C140.364 110.185 140.994 110.681 141.449 111.282C141.912 111.885 142.178 112.55 142.248 113.277C142.315 114.011 142.16 114.766 141.782 115.541C141.335 116.458 140.746 117.099 140.015 117.462C139.284 117.826 138.477 117.89 137.596 117.654L138.239 116.334C138.745 116.451 139.215 116.404 139.651 116.192C140.087 115.979 140.445 115.586 140.724 115.012C141.106 114.229 141.139 113.479 140.824 112.763C140.516 112.05 139.896 111.466 138.964 111.012C138.04 110.561 137.202 110.434 136.45 110.631C135.699 110.828 135.133 111.318 134.751 112.101C134.471 112.675 134.375 113.195 134.461 113.662C134.547 114.128 134.785 114.521 135.174 114.84L134.531 116.16C133.832 115.625 133.404 114.96 133.247 114.164C133.091 113.368 133.236 112.511 133.683 111.594Z"
                  fill="white"
                />
                <path
                  d="M125.614 123.254C126.204 122.624 126.859 122.203 127.58 121.991C128.3 121.78 129.031 121.77 129.771 121.962C130.517 122.161 131.214 122.563 131.862 123.169C132.51 123.776 132.955 124.442 133.197 125.167C133.444 125.898 133.486 126.631 133.323 127.364C133.159 128.097 132.783 128.779 132.194 129.409C131.604 130.039 130.949 130.46 130.228 130.672C129.508 130.884 128.777 130.887 128.037 130.683C127.297 130.491 126.602 130.091 125.954 129.485C125.306 128.878 124.858 128.21 124.611 127.478C124.364 126.759 124.322 126.032 124.485 125.299C124.649 124.566 125.025 123.884 125.614 123.254ZM126.478 124.062C126.07 124.498 125.812 124.967 125.706 125.47C125.594 125.978 125.634 126.493 125.828 127.015C126.021 127.537 126.369 128.033 126.872 128.503C127.375 128.974 127.893 129.288 128.427 129.446C128.96 129.605 129.477 129.611 129.977 129.465C130.471 129.325 130.922 129.037 131.33 128.601C131.738 128.165 131.998 127.693 132.111 127.184C132.223 126.676 132.182 126.161 131.989 125.639C131.789 125.123 131.439 124.63 130.936 124.16C130.433 123.689 129.918 123.372 129.39 123.208C128.856 123.049 128.339 123.043 127.84 123.189C127.34 123.335 126.886 123.626 126.478 124.062Z"
                  fill="white"
                />
                <path
                  d="M117.563 130.504L121.936 138.038L120.795 138.7L113.725 135.221L117.017 140.893L115.876 141.555L111.503 134.021L112.644 133.358L119.714 136.838L116.422 131.166L117.563 130.504Z"
                  fill="white"
                />
                <path
                  d="M103.11 137.094L105.066 144.482L107.557 143.822L107.831 144.857L101.586 146.511L101.312 145.476L103.79 144.819L101.834 137.431L103.11 137.094Z"
                  fill="white"
                />
                <path
                  d="M94.5093 138.832L91.3962 147.578L89.9528 147.594L86.6703 138.92L88.0639 138.904L88.8342 141.024L92.3929 140.984L93.1157 138.848L94.5093 138.832ZM92.0312 142.033L89.2191 142.065L90.6695 146.018L92.0312 142.033Z"
                  fill="white"
                />
                <path
                  d="M77.1843 137.002C78.0177 137.224 78.6908 137.597 79.2035 138.121C79.7061 138.65 80.0349 139.283 80.1901 140.02C80.3432 140.764 80.3052 141.566 80.0762 142.423C79.8451 143.289 79.4785 144.002 78.9766 144.563C78.4725 145.133 77.8707 145.521 77.1713 145.73C76.4638 145.936 75.6933 145.927 74.8599 145.705C73.8742 145.441 73.133 144.986 72.6364 144.338C72.1397 143.69 71.9228 142.911 71.9857 142.001L73.4041 142.38C73.3858 142.898 73.5224 143.351 73.814 143.738C74.1055 144.125 74.5598 144.401 75.1769 144.566C76.0183 144.791 76.7605 144.68 77.4035 144.233C78.0443 143.795 78.4984 143.075 78.766 142.073C79.0314 141.079 78.9956 140.233 78.6588 139.533C78.3219 138.834 77.7327 138.372 76.8913 138.147C76.2742 137.982 75.745 137.987 75.3036 138.161C74.8622 138.335 74.5223 138.643 74.2838 139.086L72.8654 138.707C73.2563 137.919 73.8274 137.372 74.5787 137.066C75.3301 136.76 76.1986 136.739 77.1843 137.002Z"
                  fill="white"
                />
                <path
                  d="M65.8866 132.522L62.0282 139.116L64.2512 140.417L63.7107 141.34L58.1373 138.079L58.6777 137.155L60.8899 138.45L64.7483 131.856L65.8866 132.522Z"
                  fill="white"
                />
                <path
                  d="M51.6575 120.629L44.3842 125.419L43.5287 124.121L46.7486 118.469L40.2915 119.206L39.436 117.907L46.7093 113.116L47.4348 114.218L42.0629 117.756L47.8604 117.126L48.4216 117.978L45.5706 123.059L50.9321 119.527L51.6575 120.629Z"
                  fill="white"
                />
                <path
                  d="M44.0233 106.773L35.696 109.316L34.0791 104.022L35.1022 103.71L36.3339 107.743L38.9273 106.95L37.8045 103.275L38.8038 102.969L39.9266 106.645L42.6151 105.824L41.3833 101.791L42.4064 101.479L44.0233 106.773Z"
                  fill="white"
                />
                <path
                  d="M38.2513 95.1897L37.1449 95.2462L36.8866 90.1867L37.993 90.1302L38.2513 95.1897Z"
                  fill="white"
                />
              </g>
              <g>
                <path
                  d="M89.9999 123.016C108.234 123.016 123.016 108.234 123.016 89.9999C123.016 71.7654 108.234 56.9834 89.9999 56.9834C71.7654 56.9834 56.9834 71.7654 56.9834 89.9999C56.9834 108.234 71.7654 123.016 89.9999 123.016Z"
                  fill="#FFB646"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M89.0556 105.833H88.7517C88.7517 102.454 87.0878 100.016 84.9217 98.2993C82.7319 96.5641 80.0806 95.6169 78.3337 95.2864L78.721 93.2394C80.7295 93.6194 83.7111 94.6819 86.2156 96.6665C87.1483 97.4056 88.0215 98.2792 88.7523 99.2971V74.1667H90.8356V99.7399C91.622 98.5303 92.6098 97.5106 93.6751 96.6665C96.1795 94.6819 99.1612 93.6194 101.17 93.2394L101.557 95.2864C99.8101 95.6169 97.1587 96.5641 94.969 98.2993C92.8028 100.016 91.1389 102.454 91.1389 105.833H90.835H89.0556Z"
                  fill="#080808"
                  fillOpacity="0.9"
                />
              </g>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
