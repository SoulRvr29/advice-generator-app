const Footer = () => {
  return (
    <footer className="fixed bottom-0 mx-auto w-full text-center text-Light-Cyan p-4 max-sm:text-xs">
      Challenge by
      <a
        className="text-Neon-Green ml-1 hover:text-orange-400 hover:underline transition-all duration-300"
        href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a
        className="text-Neon-Green ml-1 hover:text-orange-400 hover:underline transition-all duration-300"
        href="https://www.frontendmentor.io/profile/SoulRvr29"
      >
        Paweł Chudecki
      </a>
      .
    </footer>
  );
};

export default Footer;
