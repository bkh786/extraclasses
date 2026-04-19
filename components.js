// Shared configuration
const WHATSAPP_NUMBER = "919064435909"; 

// Navbar HTML
const navbarHTML = `
  <nav class="navbar">
    <div class="container">
      <a href="index.html" class="navbar-brand">
        <img src="images/Special5-logo.png" alt="Special5 Logo" style="height: 44px; vertical-align: middle; border-radius: 8px; mix-blend-mode: multiply;">
      </a>
      <div class="navbar-nav" id="navbarNav">
        <a href="index.html" class="nav-link">Home</a>
        <a href="about.html" class="nav-link">About Us</a>
        <a href="contact.html" class="nav-link">Contact Us</a>
        <a href="online-classes.html" class="nav-link">Why Online Classes</a>
        <a href="faq.html" class="nav-link">FAQ</a>
        <a href="https://crm.special5.in/login" class="btn" style="padding: 8px 16px; font-size: 0.95rem; margin-left: 15px; background: var(--color-soft-grey, #f0f4f8); color: var(--color-accent-blue, #0066cc); border: 1px solid var(--color-accent-blue, #0066cc); display: inline-flex; align-items: center; justify-content: center; text-decoration: none; font-weight: 600; border-radius: 5px; transition: all 0.3s ease;">Login</a>
        <button class="btn btn-primary" style="padding: 8px 16px; font-size: 0.95rem; margin-left: 10px;" onclick="window.location.href='contact.html'">Book a Free Demo Class</button>
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
          <p style="font-size: 0.95rem; line-height: 1.6; max-width: 300px;">Attention...Academics...Knowledge</p>
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
            <li>Email: <a href="mailto:info@special5.in">info@special5.in</a></li>
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
  <button class="floating-btn floating-btn-teacher attractive-btn" onclick="openModal('teacherModal')">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    <span style="display: inline-block; vertical-align: middle;">Join Us</span>
  </button>
  <button class="floating-btn floating-btn-whyus attractive-btn" onclick="window.location.href='assessment.html'">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15 l2 2 4-4"/></svg>
    Free Assessment
  </button>



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
        <input type="hidden" id="t_mode" value="Online">
        <div class="form-disclaimer">
          <label class="disclaimer-item">
            <input type="checkbox" id="t_disclaimer1" onchange="validateForm('teacher')">
            By using this website, you agree to and accept all information, terms, and updates provided herein.
          </label>
          <label class="disclaimer-item">
            <input type="checkbox" id="t_disclaimer2" onchange="validateForm('teacher')">
            By submitting your details, you consent to receive service-related updates and confirmations via WhatsApp from Special5.
          </label>
        </div>
        <button type="submit" id="t_submit" class="btn btn-primary" style="width: 100%" disabled>Submit via WhatsApp</button>
      </form>
    </div>
  </div>


`;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // Inject Botpress Chatbot
  const botpressScript = document.createElement('script');
  botpressScript.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
  document.head.appendChild(botpressScript);

  const botpressConfig = document.createElement('script');
  botpressConfig.src = "https://files.bpcontent.cloud/2026/04/12/07/20260412074840-JPHH5AD4.js";
  botpressConfig.defer = true;
  document.head.appendChild(botpressConfig);

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
  whatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20want%20to%20register%20as%20a%20student.`;
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

// Form Validation for Disclaimers
function validateForm(type) {
  const checkbox1 = document.getElementById(type === 'student' ? 's_disclaimer1' : (type === 'teacher' ? 't_disclaimer1' : 'c_disclaimer1'));
  const checkbox2 = document.getElementById(type === 'student' ? 's_disclaimer2' : (type === 'teacher' ? 't_disclaimer2' : 'c_disclaimer2'));
  const submitBtn = document.getElementById(type === 'student' ? 's_submit' : (type === 'teacher' ? 't_submit' : 'c_submit'));
  
  if (checkbox1 && checkbox2 && submitBtn) {
    submitBtn.disabled = !(checkbox1.checked && checkbox2.checked);
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
    
    // Build payload and message for Google Sheets and WhatsApp
    payload.name = name;
    payload.email = email;
    payload.class = cls;
    payload.subjects = subs;
    payload.mode = mode;
    payload.phone = phone;
    
    message = `*Demo Request*\n\n*Name:* ${name}\n*Email:* ${email}\n*Class:* ${cls}\n*Subjects:* ${subs}\n*Mode:* ${mode}\n*Phone:* ${phone}\n\nI want to book a free demo class.`;
    
    const supabasePayload = {
      student_name: name,
      phone: phone,
      class: cls,
      subjects: subs,
      email_id: email,
      mode: mode,
      source: "website",
      status: "new",
      demo_status: "pending",
      conversion_status: "pending"
    };

    try {
      await fetch("https://pkwbtifellobbvaphigk.supabase.co/rest/v1/leads", {
        method: "POST",
        headers: {
          "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrd2J0aWZlbGxvYmJ2YXBoaWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNzkxMjAsImV4cCI6MjA5MDg1NTEyMH0.hhl5VSl05sUcuC4lsNPzTthZDRWRvIJz3srVyB1txjs",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrd2J0aWZlbGxvYmJ2YXBoaWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNzkxMjAsImV4cCI6MjA5MDg1NTEyMH0.hhl5VSl05sUcuC4lsNPzTthZDRWRvIJz3srVyB1txjs",
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(supabasePayload)
      });
    } catch (error) {
      console.error("Error logging student to Supabase", error);
    }
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
    
    // Supabase insert
    try {
      const supabaseTeacherPayload = {
        name: name,
        phone: phone,
        email: email,
        subjects: subs,
        classes: classes,
        experience: exp,
        salary_per_batch: null,
        working_status: "new",
        hiring_status: "pending"
      };

      await fetch("https://pkwbtifellobbvaphigk.supabase.co/rest/v1/teachers", {
        method: "POST",
        headers: {
          "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrd2J0aWZlbGxvYmJ2YXBoaWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNzkxMjAsImV4cCI6MjA5MDg1NTEyMH0.hhl5VSl05sUcuC4lsNPzTthZDRWRvIJz3srVyB1txjs",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrd2J0aWZlbGxvYmJ2YXBoaWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNzkxMjAsImV4cCI6MjA5MDg1NTEyMH0.hhl5VSl05sUcuC4lsNPzTthZDRWRvIJz3srVyB1txjs",
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(supabaseTeacherPayload)
      });
    } catch (e) {
      console.error("Error logging teacher to Supabase:", e);
    }
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
