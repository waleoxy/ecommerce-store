interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; 2022 Store Inc. All righs reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
