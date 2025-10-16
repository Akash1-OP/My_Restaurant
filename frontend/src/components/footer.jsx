// import React from "react";

// const Footer = () => {
//   return (
//     <footer>
//       <div className="container">
//         <div className="banner">
//           <div className="left">AKASH</div>
//           <div className="right">
//             <p>serampore,kolkata</p>
//             <p>Open: 10:00 AM - 12:00 AM</p>
//           </div>
//         </div>
//         <div className="banner">
//           <div className="left">
//             <p>Developed By Akash</p>
//           </div>
//           <div className="right">
//             <p>All Rights Reserved By ME.</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
// No external CSS file is needed.

const Footer = () => {
  // Function to smoothly scroll to the top of the page
  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer style={{ background: "#0b0b0b", color: "#fff", padding: "60px 5%" }}>
      {/* Container for the three main columns */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' }}>

        {/* Column 1: Let's Connect (Wider) */}
        <div style={{ flex: '2 1 300px' }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>Let's Connect</h3>
          <p style={{ color: "#ccc", lineHeight: 1.6, margin: 0, fontSize: '14px' }}>
            We are dedicated to providing innovative solutions that drive results. Have a project in mind or a question for our team? We’d love to hear from you and explore how we can work together. Feel free to reach out via email, phone, or our social media channels.
          </p>
        </div>

        {/* Column 2: Address, Email, Phone */}
        <div style={{ flex: '1 1 250px' }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>Address</h3>
          <p style={{ color: "#ccc", lineHeight: 1.6, margin: '0 0 24px 0', fontSize: '14px' }}>
            500 Terry Francine Street<br />
            San Francisco, CA 94158
          </p>

          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>Email</h3>
          <p style={{ color: "#ccc", margin: '0 0 24px 0', fontSize: '14px' }}>akashsahana62@gmail.com</p>

          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>Phone</h3>
          <p style={{ color: "#ccc", margin: 0, fontSize: '14px' }}>9883792511</p>
        </div>

        {/* Column 3: Social Media Links */}
        <div style={{ flex: '0 1 150px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '15px' }}>
              <a href="#facebook" style={{ color: '#fff', textDecoration: 'underline', fontSize: '14px' }}>Facebook</a>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <a href="www.linkedin.com/in/akash-sahana-315871373" style={{ color: '#fff', textDecoration: 'underline', fontSize: '14px' }}>LinkedIn</a>
            </li>
            <li>
              <a href="#youtube" style={{ color: '#fff', textDecoration: 'underline', fontSize: '14px' }}>YouTube</a>
            </li>
          </ul>
        </div>
      </div>

      {/* "Back to Top" Link Section */}
      <div style={{ marginTop: '60px' }}>
        <a
          href="#top"
          onClick={handleBackToTop}
          style={{ color: "#fff", textDecoration: "underline", fontSize: '14px' }}
        >
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;