import './App.css';

function App() {
  return (
    <div className="App">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <span className="location">720 New Haven Ave, Aurora, IL 60506</span>
          <div className="top-contact">
            <a href="mailto:isp@ispalletinc.com">isp@ispalletinc.com</a>
            <a href="tel:6304863344" className="top-phone">(630) 486-3344</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <img src="/Logo.JPG" alt="Industrial Service Pallets" className="logo-img" />
            <div className="logo-text">
              <span className="logo-title">Industrial Service Pallets</span>
              <span className="logo-tagline">Quality Pallets Since Day One</span>
            </div>
          </div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="tel:6304863344" className="header-cta">
            <span className="cta-icon">&#9742;</span>
            <span className="cta-text">
              <span className="cta-label">Call Now</span>
              <span className="cta-number">(630) 486-3344</span>
            </span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1>Aurora's Trusted Pallet Manufacturer</h1>
          <p className="hero-subtitle">
            Custom wood pallets, recycled pallets, and expert repair services.
            Serving businesses across Illinois with reliable, high-quality pallet solutions.
          </p>
          <div className="hero-ctas">
            <a href="tel:6304863344" className="btn btn-primary btn-large">
              <span className="btn-icon">&#9742;</span> Call (630) 486-3344
            </a>
            <a href="#contact" className="btn btn-secondary btn-large">
              Get Free Quote
            </a>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-icon">&#10003;</span>
              <span>Fast Turnaround</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">&#10003;</span>
              <span>Competitive Pricing</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">&#10003;</span>
              <span>Custom Sizes Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Pallet Services</h2>
          <p className="section-subtitle">Complete pallet solutions for your business needs</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">&#9638;</div>
              <h3>New Wood Pallets</h3>
              <p>Custom-built pallets manufactured to your exact specifications. Available in all standard sizes and custom dimensions.</p>
              <ul className="service-features">
                <li>48x40 GMA Standard</li>
                <li>Custom Sizes</li>
                <li>Heat Treated (ISPM-15)</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">&#9851;</div>
              <h3>Recycled Pallets</h3>
              <p>Quality recycled pallets at competitive prices. Inspected and graded to meet your requirements.</p>
              <ul className="service-features">
                <li>Grade A, B, C Available</li>
                <li>Cost-Effective Solution</li>
                <li>Environmentally Friendly</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">&#9874;</div>
              <h3>Pallet Repair</h3>
              <p>Expert repair services to extend the life of your pallets. Fast turnaround and quality workmanship.</p>
              <ul className="service-features">
                <li>On-Site Repair Available</li>
                <li>Quick Turnaround</li>
                <li>Quality Guaranteed</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">&#9878;</div>
              <h3>Pallet Removal</h3>
              <p>We'll pick up your old, damaged, or unwanted pallets. Keep your facility clean and organized.</p>
              <ul className="service-features">
                <li>Free Pickup Available</li>
                <li>Scheduled Service</li>
                <li>Any Quantity</li>
              </ul>
            </div>
          </div>
          <div className="services-cta">
            <a href="tel:6304863344" className="btn btn-primary btn-large">
              Call For Pricing: (630) 486-3344
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="why-us">
        <div className="container">
          <h2 className="section-title">Why Choose Industrial Service Pallets?</h2>
          <div className="why-us-grid">
            <div className="why-us-item">
              <div className="why-us-number">01</div>
              <h3>Local & Reliable</h3>
              <p>Based in Aurora, IL, we provide fast delivery and responsive service to businesses throughout the Chicagoland area.</p>
            </div>
            <div className="why-us-item">
              <div className="why-us-number">02</div>
              <h3>Quality Materials</h3>
              <p>We use only quality lumber and materials to ensure your pallets meet industry standards and your specific requirements.</p>
            </div>
            <div className="why-us-item">
              <div className="why-us-number">03</div>
              <h3>Competitive Pricing</h3>
              <p>Get the best value for your pallet needs. We offer fair pricing without sacrificing quality or service.</p>
            </div>
            <div className="why-us-item">
              <div className="why-us-number">04</div>
              <h3>Custom Solutions</h3>
              <p>Need non-standard sizes or special requirements? We can manufacture pallets to your exact specifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for a free quote on your pallet needs</p>
          <div className="cta-banner-buttons">
            <a href="tel:6304863344" className="btn btn-white btn-large">
              <span className="btn-icon">&#9742;</span> (630) 486-3344
            </a>
            <a href="mailto:isp@ispalletinc.com" className="btn btn-outline-white btn-large">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-center">
            <h2>Contact Us</h2>
            <p className="contact-subtitle">Get in touch for a free quote or to discuss your pallet needs.</p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">&#9742;</div>
                <div className="contact-text">
                  <span className="contact-label">Phone</span>
                  <a href="tel:6304863344">(630) 486-3344</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">&#9993;</div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <a href="mailto:isp@ispalletinc.com">isp@ispalletinc.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">&#9906;</div>
                <div className="contact-text">
                  <span className="contact-label">Address</span>
                  <span>720 New Haven Ave<br/>Aurora, IL 60506</span>
                </div>
              </div>
            </div>

            <div className="business-hours">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
              <p>Saturday: By Appointment</p>
              <p>Sunday: Closed</p>
            </div>

            <div className="contact-cta">
              <a href="tel:6304863344" className="btn btn-primary btn-large">
                <span className="btn-icon">&#9742;</span> Call (630) 486-3344
              </a>
              <a href="mailto:isp@ispalletinc.com" className="btn btn-secondary btn-large">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="logo">
                <img src="/Logo.JPG" alt="Industrial Service Pallets" className="logo-img logo-img-footer" />
                <div className="logo-text">
                  <span className="logo-title">Industrial Service Pallets</span>
                </div>
              </div>
              <p>Your trusted partner for quality pallet solutions in Aurora, IL and the surrounding Chicagoland area.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="#services">Services</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-contact">
              <h4>Contact</h4>
              <a href="tel:6304863344">(630) 486-3344</a>
              <a href="mailto:isp@ispalletinc.com">isp@ispalletinc.com</a>
              <span>720 New Haven Ave, Aurora, IL 60506</span>
            </div>
            <div className="footer-directory">
              <h4>Directory</h4>
              <a href="mailto:sales@ispalletinc.com">Sales: sales@ispalletinc.com</a>
              <a href="mailto:accounting@ispalletinc.com">Accounting & Billing: accounting@ispalletinc.com</a>
              <a href="mailto:gllanos@ispalletinc.com">Questions & Inquiries: gllanos@ispalletinc.com</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Industrial Service Pallets. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="mobile-cta">
        <a href="tel:6304863344" className="mobile-cta-btn">
          <span className="mobile-cta-icon">&#9742;</span>
          <span>Call Now: (630) 486-3344</span>
        </a>
      </div>
    </div>
  );
}

export default App;
