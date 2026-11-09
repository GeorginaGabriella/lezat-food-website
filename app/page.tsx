import NavbarComponent from "../components/navbar";
import HeroSection from "../components/herosection";
import Image from "next/image";

const menuItems = [
  {
    name: "Chicken Platter",
    category: "SPECIAL FOOD",
    price: "Rp 35.000",
    image: "/images/platter.jpg",
    description: "Ayam pilihan dengan sajian spesial yang menggugah selera."
  },
  {
    name: "Delicious Pizza",
    category: "BEST SELLER",
    price: "Rp 45.000",
    image: "/images/pizza.jpg",
    description: "Pizza dengan topping melimpah dan keju berkualitas."
  },
  {
    name: "Healthy Rice Bowl",
    category: "FAVORITE",
    price: "Rp 28.000",
    image: "/images/ricebowl.jpg",
    description: "Nasi hangat dengan lauk lezat dan sayuran segar."
  },
  {
    name: "Crispy Fast Food",
    category: "POPULAR",
    price: "Rp 32.000",
    image: "/images/fastfood.jpg",
    description: "Makanan cepat saji dengan rasa renyah dan nikmat."
  }
];

const features = [
  { icon: "🍽️", title: "Fresh Food", desc: "Makanan disiapkan dengan bahan pilihan dan berkualitas." },
  { icon: "🚀", title: "Fast Delivery", desc: "Nikmati kemudahan layanan pengantaran makanan." },
  { icon: "⭐", title: "Best Quality", desc: "Mengutamakan rasa dan kualitas dalam setiap sajian." },
  { icon: "❤️", title: "Best Service", desc: "Memberikan pengalaman pemesanan yang mudah dan nyaman." }
];

const reviews = [
  { initial: "A", name: "Andi", job: "Food Lover", text: "Pilihan menunya beragam dan tampilan websitenya sangat menarik. Mudah menemukan makanan favorit." },
  { initial: "S", name: "Sinta", job: "Food Enthusiast", text: "Desainnya bagus, warna orange membuat website terlihat menarik. Informasi menu juga mudah dibaca." },
  { initial: "R", name: "Rizky", job: "Food Explorer", text: "Tampilan makanan sangat menggugah selera. Website sederhana tetapi terlihat profesional." }
];

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section className="intro-section">
          <div className="container text-center">
            <span className="section-label">WELCOME TO LEZAT FOOD</span>
            <h2>Good Food, <span>Good Mood!</span></h2>
            <p>
              Selamat datang di LEZAT FOOD. Temukan berbagai pilihan makanan
              favorit dengan cita rasa istimewa. Kami hadir untuk menemani
              setiap momen spesialmu.
            </p>
          </div>
        </section>

        <section id="menu" className="menu-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">OUR MENU</span>
              <h2>Explore Our <span>Delicious Menu</span></h2>
              <p>Pilihan makanan spesial yang siap memanjakan seleramu.</p>
            </div>
            <div className="row g-4">
              {menuItems.map((item) => (
                <div className="col-12 col-sm-6 col-lg-3" key={item.name}>
                  <div className="menu-card">
                    <div className="menu-image-wrapper">
                      <Image src={item.image} alt={item.name} width={600} height={450} className="menu-image" />
                      <span className="menu-category">{item.category}</span>
                    </div>
                    <div className="menu-card-body">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <div className="menu-card-bottom">
                        <strong>{item.price}</strong>
                        <a href="#kontak" aria-label={`Pesan ${item.name}`}>Order +</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="promo" className="promo-section">
          <div className="container">
            <div className="promo-content">
              <div className="promo-text">
                <span className="promo-label">SPECIAL WEEKEND OFFER</span>
                <h2>Delicious Food <span>Up to 50% OFF!</span></h2>
                <p>Nikmati berbagai pilihan makanan favorit dengan penawaran spesial dari LEZAT FOOD.</p>
                <a href="#menu" className="promo-button">Explore Menu →</a>
              </div>
              <div className="promo-emoji">🍔 🍕 🍗</div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">WHY CHOOSE US</span>
              <h2>Why People <span>Love Us</span></h2>
              <p>Kami selalu mengutamakan kualitas dan kenyamanan.</p>
            </div>
            <div className="row g-4">
              {features.map((feature) => (
                <div className="col-12 col-sm-6 col-lg-3" key={feature.title}>
                  <div className="feature-card">
                    <div className="feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">CUSTOMER REVIEWS</span>
              <h2>What Our Customers <span>Say</span></h2>
              <p>Pengalaman dan kesan pelanggan terhadap LEZAT FOOD.</p>
            </div>
            <div className="row g-4">
              {reviews.map((review) => (
                <div className="col-12 col-md-4" key={review.name}>
                  <div className="review-card">
                    <div className="review-stars">★★★★★</div>
                    <p>&quot;{review.text}&quot;</p>
                    <div className="review-user">
                      <div className="review-avatar">{review.initial}</div>
                      <div>
                        <h4>{review.name}</h4>
                        <span>{review.job}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tentang" className="about-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-6">
                <div className="about-image">
                  <Image src="/images/platter.jpg" alt="Menu spesial LEZAT FOOD" width={700} height={500} />
                  <div className="about-badge">100%<span>Delicious</span></div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <span className="section-label">ABOUT US</span>
                <h2 className="about-title">We Make Food <span>With Love</span></h2>
                <p className="about-description">
                  LEZAT FOOD merupakan konsep website layanan makanan yang
                  menghadirkan berbagai pilihan hidangan untuk memenuhi
                  selera dan kebutuhan pelanggan.
                </p>
                <p className="about-description">
                  Kami percaya bahwa makanan lezat dapat membuat setiap
                  momen menjadi lebih menyenangkan.
                </p>
                <a href="#menu" className="about-button">Discover More →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">FAQ</span>
              <h2>Frequently Asked <span>Questions</span></h2>
              <p>Temukan jawaban dari pertanyaan umum tentang LEZAT FOOD.</p>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary>Apa saja menu yang tersedia?</summary>
                <p>Kami menyediakan pilihan Chicken Platter, Pizza, Rice Bowl, dan Fast Food.</p>
              </details>
              <details className="faq-item">
                <summary>Bagaimana cara melakukan pemesanan?</summary>
                <p>Pilih menu favoritmu, kemudian hubungi kami melalui informasi kontak yang tersedia.</p>
              </details>
              <details className="faq-item">
                <summary>Apakah tersedia layanan pengantaran?</summary>
                <p>Website ini menampilkan konsep layanan food delivery. Informasi pengantaran dapat ditanyakan melalui kontak.</p>
              </details>
              <details className="faq-item">
                <summary>Bagaimana cara mengetahui informasi promo?</summary>
                <p>Kunjungi bagian Special Promotion untuk melihat penawaran spesial dari LEZAT FOOD.</p>
              </details>
            </div>
          </div>
        </section>

        <section id="kontak" className="contact-section">
          <div className="container">
            <div className="contact-box">
              <span className="section-label">GET IN TOUCH</span>
              <h2>Let&apos;s Order Your <span>Favorite Food!</span></h2>
              <p>Punya pertanyaan atau ingin mengetahui informasi menu? Hubungi kami.</p>
              <div className="contact-details">
                <div>📍 <span>Indonesia</span></div>
                <div>📞 <span>+62 812 3456 7890</span></div>
                <div>✉️ <span>lezatfood@example.com</span></div>
              </div>
              <a href="mailto:lezatfood@example.com" className="contact-button">Contact Us →</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="row align-items-center gy-3">
            <div className="col-12 col-md-6">
              <a href="#home" className="footer-brand">🍴 LEZAT<span>.</span></a>
              <p>Good Food, Good Mood!</p>
            </div>
            <div className="col-12 col-md-6 text-md-end">
              <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#menu">Menu</a>
                <a href="#tentang">About</a>
                <a href="#kontak">Contact</a>
              </div>
              <p className="copyright">© 2026 LEZAT FOOD. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <a href="#home" className="back-to-top" aria-label="Kembali ke atas">↑</a>
    </>
  );
}