const LoginFooter = () => {
  const footerItems = [
    "About",
    "Help Center",
    "Privacy Policy",
    "Cookie Policy",
    "Accessibility",
    "Ads Info",
    "Blog",
    "Status",
    "Careers",
    "Brand Resources",
    "Advertising",
    "Marketing",
    "Twitter for Business",
    "Developers",
    "Directory",
    "Settings",
  ];

  return (
    <footer className="hidden lg:flex">
      <div className="flex justify-center items-center flex-wrap w-full p-4 gap-4">
        {footerItems.map((item, id) => (
          <span
            className="text-gray-600 text-sm cursor-pointer hover:underline"
            key={id}
          >
            {item}
          </span>
        ))}
        <span className="text-gray-600 text-sm">© 2022 Twitter, Inc.</span>
      </div>
    </footer>
  );
};

export default LoginFooter;
