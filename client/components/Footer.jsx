const Footer = () => {
  return (
    <footer className="bg-[#1a6651] text-white py-8">
      <div className="container mx-auto px-25">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Languages</h3>
            <ul className="space-y-2">
              <li>Yoruba</li>
              <li>Igbo</li>
              <li>Hausa</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>Our Mission</li>
              <li>How It Works</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="md:col-span-2 py-20 lg:col-span-1">
            <p className="text-sm opacity-80">
              © 2025 LangMaster. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;