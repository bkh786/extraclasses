// Shared configuration
const WHATSAPP_NUMBER = "919064435909"; 

// Navbar HTML
const navbarHTML = `
  <nav class="navbar">
    <div class="container">
      <a href="index.html" class="navbar-brand">
        <img src="images/Special5-logo.png" alt="Special5 Logo" style="height: 44px; vertical-align: middle; margin-right: 8px; border-radius: 8px; mix-blend-mode: multiply;">
        <span style="vertical-align: middle; font-weight: 700;">Special5</span>
      </a>
      <div class="navbar-nav" id="navbarNav">
        <a href="index.html" class="nav-link">Home</a>
        <a href="about.html" class="nav-link">About Us</a>
        <a href="contact.html" class="nav-link">Contact Us</a>
        <a href="online-classes.html" class="nav-link">Why Online Classes</a>
        <a href="faq.html" class="nav-link">FAQ</a>
      </div>
      <button class="mobile-menu-btn" id="mobileMenuBtn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </button>
    </div>
  </nav>
`;

// Footer HTML
const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col" style="text-align: left;">
          <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
            <img src="images/Special5-logo.png" alt="Special5 Logo" style="height: 64px; width: 64px; object-fit: contain; border-radius: 12px; mix-blend-mode: multiply; background: white; padding: 6px;">
            <h3 style="margin-bottom: 0; font-size: 1.6rem;">Special5</h3>
          </div>
          <p style="font-size: 0.95rem; line-height: 1.6; max-width: 300px;">Attention...Online Academics...Knowledge</p>
        </div>
        <div class="footer-col" style="padding-top: 10px;">
          <h4 style="font-size: 1.1rem; color: var(--color-accent-blue);">Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="online-classes.html">Why Online Classes</a></li>
          </ul>
        </div>
        <div class="footer-col" style="padding-top: 10px;">
          <h4 style="font-size: 1.1rem; color: var(--color-accent-blue);">Contact & Info</h4>
          <ul>
            <li>Email: <a href="mailto:bikash.roy@zohomail.in">bikash.roy@zohomail.in</a></li>
            <li>Phone: +${WHATSAPP_NUMBER}</li>
            <li><a href="contact.html">Send an Inquiry</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; ${new Date().getFullYear()} Special5. All rights reserved.
      </div>
    </div>
  </footer>
`;

// Floating Buttons & Modals HTML
const floatingButtonsHTML = `
  <!-- Floating Buttons -->
  <button class="floating-btn floating-btn-teacher attractive-btn collapsible-btn" onclick="openModal('teacherModal')">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    <span class="btn-text" style="display: inline-block; vertical-align: middle;">Join Us</span>
  </button>
  <button class="floating-btn floating-btn-student attractive-btn" onclick="openModal('studentModal')">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
    <span class="btn-text">Book Special Class</span>
  </button>
  <button class="floating-btn floating-btn-whyus attractive-btn" onclick="openModal('whyUsModal')">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
    Why Us?
  </button>

  <!-- Student Registration Modal -->
  <div class="modal-overlay" id="studentModal">
    <div class="modal-content">
      <button class="modal-close" onclick="closeModal('studentModal')">&times;</button>
      <h2>Book Free Demo Class</h2>
      <p>Fill out this form to register as a student.</p>
      <form onsubmit="submitToWhatsApp(event, 'student')">
        <div class="form-group">
          <label class="form-label">Student Name *</label>
          <input type="text" id="s_name" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label">Email ID *</label>
          <input type="email" id="s_email" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label">Class *</label>
          <select id="s_class" class="form-control" required>
            <option value="">Select Class</option>
            <option value="Class 1">Class 1</option>
            <option value="Class 2">Class 2</option>
            <option value="Class 3">Class 3</option>
            <option value="Class 4">Class 4</option>
            <option value="Class 5">Class 5</option>
            <option value="Class 6">Class 6</option>
            <option value="Class 7">Class 7</option>
            <option value="Class 8">Class 8</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Subjects * (Select all that apply)</label>
          <div class="checkbox-group" id="s_subjects_group">
            <label class="checkbox-item"><input type="checkbox" name="s_subject" value="All Subject"> All Subject</label>
            <label class="checkbox-item"><input type="checkbox" name="s_subject" value="English"> English</label>
            <label class="checkbox-item"><input type="checkbox" name="s_subject" value="Hindi"> Hindi</label>
            <label class="checkbox-item"><input type="checkbox" name="s_subject" value="Maths"> Maths</label>
            <label class="checkbox-item"><input type="checkbox" name="s_subject" value="Science"> Science</label>
            <label class="checkbox-item"><input type="checkbox" name="s_subject" value="Social Science"> Social Science</label>
            <label class="checkbox-item"><input type="checkbox" name="s_subject" value="Computers"> Computers</label>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Preferred Mode *</label>
          <select id="s_mode" class="form-control" required>
             <option value="">Select Option</option>
             <option value="Online">Online</option>
             <option value="Offline">Offline</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Phone Number *</label>
          <input type="tel" id="s_phone" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%">Register on WhatsApp</button>
      </form>
    </div>
  </div>

  <!-- Teacher Registration Modal -->
  <div class="modal-overlay" id="teacherModal">
    <div class="modal-content">
      <button class="modal-close" onclick="closeModal('teacherModal')">&times;</button>
      <h2>Join Us as a Teacher</h2>
      <p>Partner with us to provide premium education.</p>
      <form onsubmit="submitToWhatsApp(event, 'teacher')">
        <div class="form-group">
          <label class="form-label">Name *</label>
          <input type="text" id="t_name" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label">Email ID *</label>
          <input type="email" id="t_email" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label">Qualification *</label>
          <input type="text" id="t_qual" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label">Subjects you can teach * (Select all that apply)</label>
          <div class="checkbox-group" id="t_subjects_group">
            <label class="checkbox-item"><input type="checkbox" name="t_subject" value="All Subject"> All Subject</label>
            <label class="checkbox-item"><input type="checkbox" name="t_subject" value="English"> English</label>
            <label class="checkbox-item"><input type="checkbox" name="t_subject" value="Hindi"> Hindi</label>
            <label class="checkbox-item"><input type="checkbox" name="t_subject" value="Maths"> Maths</label>
            <label class="checkbox-item"><input type="checkbox" name="t_subject" value="Science"> Science</label>
            <label class="checkbox-item"><input type="checkbox" name="t_subject" value="Social Science"> Social Science</label>
            <label class="checkbox-item"><input type="checkbox" name="t_subject" value="Computers"> Computers</label>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Classes you can teach *</label>
          <select id="t_classes" class="form-control" required>
            <option value="">Select Classes</option>
            <option value="Class 1 to 5">Class 1 to 5</option>
            <option value="Class 6 to 8">Class 6 to 8</option>
            <option value="Class 1 to 8">Class 1 to 8</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Experience (Years) *</label>
          <input type="text" id="t_exp" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label">Phone Number *</label>
          <input type="tel" id="t_phone" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label">Mode of Teaching *</label>
          <select id="t_mode" class="form-control" required>
             <option value="">Select Option</option>
             <option value="Online">Online</option>
             <option value="Offline">Offline</option>
             <option value="Both">Both</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%">Submit via WhatsApp</button>
      </form>
    </div>
  </div>

  <!-- Why Us Modal -->
  <div class="modal-overlay" id="whyUsModal">
    <div class="modal-content" style="max-width: 800px; text-align: left;">
      <button class="modal-close" onclick="closeModal('whyUsModal')">&times;</button>
      
      <div style="font-size: 1.1rem; line-height: 1.7; color: var(--color-dark-blue);">
        <h2 style="color: var(--color-accent-blue); font-size: 2.2rem; margin-bottom: 5px;">Why Choose Special5</h2>
        <h3 style="font-size: 1.2rem; color: var(--color-dark-grey); margin-bottom: 20px;">Not Just Tuition. A Structured Academic Support System.</h3>
        
        <hr style="margin: 30px 0; border-top: 1px solid rgba(0,0,0,0.1);">
        
        <h2 style="font-size: 1.8rem; margin-bottom: 20px;">Special5 vs Traditional Tuition</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; border: 1px solid rgba(0,0,0,0.1);">
          <thead>
            <tr style="background: var(--color-accent-blue); color: white;">
              <th style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">Feature</th>
              <th style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">Traditional Tuition</th>
              <th style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">Special5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">Batch Size</td>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">10–20 Students</td>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1); font-weight: bold;">Max 5 Students</td>
            </tr>
            <tr style="background: var(--color-soft-grey);">
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">Personal Attention</td>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">Limited</td>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1); font-weight: bold; color: #34c759;">High</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">Homework Support</td>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">Sometimes</td>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1); font-weight: bold; color: #34c759;">Yes</td>
            </tr>
            <tr style="background: var(--color-soft-grey);">
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">Monthly Test</td>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">Rare</td>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1); font-weight: bold; color: #34c759;">Yes</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">Progress Report</td>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">No</td>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1); font-weight: bold; color: #34c759;">Yes</td>
            </tr>
            <tr style="background: var(--color-soft-grey);">
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">Parent Feedback</td>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">No</td>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1); font-weight: bold; color: #34c759;">Yes</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">Demo Classes</td>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">Rare</td>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1); font-weight: bold; color: #34c759;">Yes</td>
            </tr>
            <tr style="background: var(--color-soft-grey);">
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">Online Option</td>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">Limited</td>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1); font-weight: bold; color: #34c759;">Yes</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">Structured System</td>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1);">No</td>
              <td style="padding: 12px; border: 1px solid rgba(0,0,0,0.1); font-weight: bold; color: #34c759;">Yes</td>
            </tr>
          </tbody>
        </table>
        
        <h2 style="font-size: 1.8rem; margin-bottom: 20px;">Message to Parents</h2>
        <p>If you are looking for Personal attention for your child, Small batch tuition, Regular tests and progress reports, Homework and school support, and Structured academic improvement, then <strong>Special5</strong> is the right place for your child.</p>
        <p style="font-size: 1.3rem; font-weight: bold; color: var(--color-accent-blue); text-align: center; margin: 30px 0;">Give your child the advantage of learning in a small batch with personal attention.</p>
        
        <div style="text-align: center; margin-bottom: 40px;">
          <button class="btn btn-primary attractive-btn" style="padding: 16px 32px; font-size: 1.2rem; box-shadow: 0 10px 20px rgba(0, 102, 204, 0.3); border-radius: 50px; position: relative; overflow: hidden;" onclick="closeModal('whyUsModal'); openModal('studentModal');">Book 2 Free Demo Classes Today</button>
        </div>

        <hr style="margin: 30px 0; border-top: 1px solid rgba(0,0,0,0.1);">
        
        <h2 style="font-size: 1.8rem; margin-bottom: 20px;">Our Key Advantages</h2>
        
        <h3 style="color: var(--color-accent-blue); margin-top: 25px;">1. Small Batch Size</h3>
        <p>Maximum 5 students per batch so that every student gets personal attention and can ask doubts freely.</p>

        <h3 style="color: var(--color-accent-blue); margin-top: 25px;">2. Personal Attention</h3>
        <p>Teachers focus on concept clarity, weak subjects, and individual improvement of each student.</p>
        
        <h3 style="color: var(--color-accent-blue); margin-top: 25px;">3. Monthly Test & Progress Report</h3>
        <p>We conduct monthly assessments and share progress reports with parents to track improvement.</p>
        
        <h3 style="color: var(--color-accent-blue); margin-top: 25px;">4. Homework & School Support</h3>
        <p>We help students with homework, school concepts, and exam preparation.</p>

        <h3 style="color: var(--color-accent-blue); margin-top: 25px;">5. 2 Free Demo Classes</h3>
        <p>Students can attend 2 free demo classes before joining to experience our teaching.</p>
        
        <h3 style="color: var(--color-accent-blue); margin-top: 25px;">6. Online + Offline Classes</h3>
        <p>Students can choose online classes or nearby offline classes as per convenience.</p>
        
        <h3 style="color: var(--color-accent-blue); margin-top: 25px;">7. Verified Teachers</h3>
        <p>All teachers go through screening and demo evaluation before teaching.</p>

        <h3 style="color: var(--color-accent-blue); margin-top: 25px;">8. Parent Feedback & Support</h3>
        <p>Parents can regularly share feedback, track progress, and communicate with us.</p>

        <h3 style="color: var(--color-accent-blue); margin-top: 25px;">9. Structured Class Method</h3>
        <p>Each class includes homework support + concept teaching + practice in a structured format.</p>
        
        <h3 style="color: var(--color-accent-blue); margin-top: 25px;">10. Focus on Academic Improvement</h3>
        <p>Our goal is not just teaching, but improving marks, concepts, and student confidence. <strong>Special5 is a complete academic support system.</strong></p>

      </div>
    </div>
  </div>
`;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // Inject Components
  const body = document.body;
  
  // Create wrappers for injected content to keep DOM clean
  const headerWrapper = document.createElement('div');
  headerWrapper.innerHTML = navbarHTML;
  body.insertBefore(headerWrapper, body.firstChild);
  
  const footerWrapper = document.createElement('div');
  footerWrapper.innerHTML = footerHTML;
  body.appendChild(footerWrapper);
  
  const floatingWrapper = document.createElement('div');
  floatingWrapper.innerHTML = floatingButtonsHTML;
  body.appendChild(floatingWrapper);

  // Inject Floating WhatsApp Button
  const whatsappBtn = document.createElement('a');
  whatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}`;
  whatsappBtn.className = 'whatsapp-float';
  whatsappBtn.target = '_blank';
  whatsappBtn.innerHTML = `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.431h.049c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  `;
  body.appendChild(whatsappBtn);

  // Setup Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navbarNav = document.getElementById('navbarNav');
  if(mobileMenuBtn && navbarNav) {
    mobileMenuBtn.addEventListener('click', () => {
      navbarNav.classList.toggle('active');
    });
  }

  // Highlight active link in navbar
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Setup Intersection Observer for Animations
  setupScrollAnimations();
});

// Modal Logic
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal when clicking outside content
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Google Apps Script Webhook URL for Leads
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx75FM_AqMAjYs9dtYqEhrXGHcVp_JIwjUmFIaIWtDE7K6Pow7EtVPS3JUJn1675h5vwg/exec";

// Form Submission logic pointing to WhatsApp & Google Sheets
async function submitToWhatsApp(event, type) {
  event.preventDefault();
  
  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerText;
  submitBtn.innerText = "Processing...";
  submitBtn.disabled = true;
  
  let message = "";
  let payload = { type: type };
  
  if (type === 'student') {
    const name = document.getElementById('s_name').value;
    const email = document.getElementById('s_email').value;
    const cls = document.getElementById('s_class').value;
    
    // Get all selected subjects
    const subjectCheckboxes = document.querySelectorAll('input[name="s_subject"]:checked');
    const subsArray = Array.from(subjectCheckboxes).map(cb => cb.value);
    const subs = subsArray.join(', ');
    
    const mode = document.getElementById('s_mode').value;
    const phone = document.getElementById('s_phone').value;
    
    payload.name = name;
    payload.email = email;
    payload.class = cls;
    payload.subjects = subs;
    payload.mode = mode;
    payload.phone = phone;
    
    message = `*New Student Registration*\n\n*Name:* ${name}\n*Email:* ${email}\n*Class:* ${cls}\n*Subjects:* ${subs}\n*Mode:* ${mode}\n*Phone:* ${phone}\n\nI would like to book a free demo class.`;
  } else if (type === 'teacher') {
    const name = document.getElementById('t_name').value;
    const email = document.getElementById('t_email').value;
    const qual = document.getElementById('t_qual').value;
    
    // Get all selected subjects
    const subjectCheckboxes = document.querySelectorAll('input[name="t_subject"]:checked');
    const subsArray = Array.from(subjectCheckboxes).map(cb => cb.value);
    const subs = subsArray.join(', ');
    
    const classes = document.getElementById('t_classes').value;
    const exp = document.getElementById('t_exp').value;
    const phone = document.getElementById('t_phone').value;
    const mode = document.getElementById('t_mode').value;
    
    payload.name = name;
    payload.email = email;
    payload.qualifications = qual;
    payload.subjects = subs;
    payload.classes = classes;
    payload.experience = exp;
    payload.phone = phone;
    payload.mode = mode;
    
    message = `*Teacher Application*\n\n*Name:* ${name}\n*Email:* ${email}\n*Qualification:* ${qual}\n*Subjects:* ${subs}\n*Classes:* ${classes}\n*Experience:* ${exp} Years\n*Mode:* ${mode}\n*Phone:* ${phone}\n\nI want to join Special5 as a teacher.`;
  }
  
  // 1. Send data to Google Sheets silently via POST
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(payload)
    });
  } catch (error) {
    console.error("Error logging to Google Sheets", error);
  }
  
  // 2. Open WhatsApp Redirect seamlessly
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
  
  // 3. Close the modal and reset form
  submitBtn.innerText = originalBtnText;
  submitBtn.disabled = false;
  
  if (type === 'student') {
    closeModal('studentModal');
    event.target.reset();
  } else {
    closeModal('teacherModal');
    event.target.reset();
  }
}

// Scroll animation logic
function setupScrollAnimations() {
  const elementsToAnimate = document.querySelectorAll('.fade-in-section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Add 'is-visible' when the element enters the viewport
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Optional: stop observing once animated
        // observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px" // Slight offset
  });
  
  elementsToAnimate.forEach(el => observer.observe(el));
}
