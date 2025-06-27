# 💼 HireMitra – Job Portal

**HireMitra** is a full-featured job portal web application designed to bridge the gap between **job seekers and employers**. It offers end-to-end functionality including job posting, job search, application tracking, and resume parsing, all powered by modern technologies and scalable backend systems.

---

## 🚀 Features

### 👤 Job Seeker
- Register/Login with email or OAuth (Google, LinkedIn, Microsoft)
- Create profile and upload resume
- Filter and search jobs by location, skills, and experience
- Apply for jobs and track application status
- Save/bookmark jobs
- Get job recommendations and notifications

### 🧑‍💼 Employer
- Register/Login securely
- Post and manage job listings
- Track applicants and download resumes
- Shortlist candidates
- Communicate via built-in messaging
- Subscribe to premium plans

### 🔧 Admin
- Manage users and employers
- Moderate job posts
- View system analytics and performance
- Handle complaints and queries

---

## 🏗️ System Architecture

- **Frontend:** React.js with TailwindCSS and ShadCN UI  
- **Backend:** Node.js + Express.js  
- **Database:** PostgreSQL  
- **Authentication:** JWT + OAuth via Clerk  
- **Hosting:** Render / AWS  
- **Resume Parsing:** AI-based resume analyzer module (planned)  

---

## 🖥️ Screens / Workflow

1. **Landing Page** – With featured jobs and CTAs for recruiter/seeker  
2. **Login/Register** – OAuth login and secure JWT sessions  
3. **Recruiter Dashboard** – Post/manage job listings  
4. **Candidate Dashboard** – Apply, save jobs, and track applications  
5. **Job Details Page** – View full job descriptions, salary, mode (onsite/remote), etc.  
6. **Resume Upload & Parsing** – Upload CV and analyze skills (future-ready)

---

## 🗃️ Database Schema (ER Highlights)

### `applications`
- `id`, `job_id`, `candidate_id`, `status`, `resume`, `skills`, `experience`, `education`, `name`

### `saved_jobs`
- `user_id`, `job_id`, `created_at`

### `jobs`
- `id`, `recruiter_id`, `title`, `description`, `location`, `requirements`, `isOpen`

### `companies`
- `id`, `name`, `logo_url`, `created_at`

---

## 🔐 Security Features

- SSL-encrypted data transmission
- JWT-based authentication and session control
- CAPTCHA on registration
- Role-based access control
- 2FA (optional with Clerk)
- Regular audit points

---

## 📱 Mobile Responsive Design

- Fully responsive UI for mobile and tablet devices
- Clean navigation and dashboards on all screen sizes

---

## 📈 Scalability & Optimization

- API-based microservice-ready architecture
- Load-balanced design for scaling
- Database indexing and caching strategies
- CDN for static content
- Future-ready with AI & analytics integration

---

## 🔮 Future Enhancements

- AI-based job recommendations
- Resume parsing with ML
- Integration with LinkedIn for auto-profile sync
- Real-time chat between candidates and recruiters
- Mobile app (Android & iOS)
- Payment gateway for premium listings

---

## 📌 Live Demo & Links

- 🌐 **Live Site:** [HireMitra Vercel](https://hire-mitra3-0-7pb9wrei3-anuragprajapati02005-gmailcoms-projects.vercel.app/)
- 📦 **GitHub Repo:** [Anurag915/HireMitra](https://github.com/Anurag915/HireMitra)

---

## 🧑‍💻 Author

**Anurag Prajapati**  
📧 anuragprajapati02005@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/anurag-prajapati-026918268/)  
🔗 [Portfolio](https://personal-portfolio-jwkj.onrender.com)

**Aman Chourasia**

---

> Made with ❤️ to simplify hiring and empower job seekers.
