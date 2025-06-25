import logo from '/images/logo.svg';

const Header = () => {
  return (
    <header className="flex justify-center mt-[50px]">
      <img src={logo} width={86} />
    </header>
  );
};

export default Header;
