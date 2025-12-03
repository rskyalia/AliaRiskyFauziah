const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold ">Portfolio</h1>
      <div className="flex gap-7">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#proyek">Portofolio</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://www.tiktok.com/@alrskyy_">
          <i className="ri-tiktok-fill ri-2x "></i>
        </a>
        <a href="https://www.instagram.com/alrskyriss/">
          <i className="ri-instagram-fill ri-2x "></i>
        </a>
        <a href="https://wa.me/6285745695068">
          <i className="ri-whatsapp-fill ri-2x "></i>
        </a>
        <a href="#">
          <i className="ri-facebook-fill ri-2x "></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
