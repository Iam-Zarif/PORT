import Container from "../../Container/Container";


const Footer = () => {
    return (
      <Container>
        <div className="mt-20 text-white ">
          <footer className="footer footer-center rounded-full p-4 bg-slate-700 text-base-content">
            <div>
              <p className="text-bold text-lg ">
                Copyright © 2023 - All right reserved by ACME Industries Ltd
              </p>
            </div>
          </footer>
        </div>
      </Container>
    );
};

export default Footer;