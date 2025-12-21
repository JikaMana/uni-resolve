![alt UniResolve](public/icons/logo.svg) UniResolve

Efficiency in Resolution, Transparency in Progress.

UniResolve is a centralized, student-led reporting and tracking portal designed to bridge the communication gap between university residents and campus management. By digitizing the reporting of infrastructure, academic, and safety issues, UniResolve ensures that student concerns are heard, tracked, and resolved in a data-driven manner.

🌟 Vision

Traditional university reporting is often slow, manual, and lacks transparency. UniResolve replaces paper-based complaints with a streamlined digital workflow, providing students with a "World-Class" interface to monitor the lifecycle of their reports from submission to resolution.

🚀 Key Features

Categorized Reporting: Specific channels for Water, Electricity, Academic grievances, and Security issues.

Dynamic Status Tracking: Real-time visibility into whether a report is Pending, In Progress, or Resolved.

Urgency Matrix: A priority-based system (Low, Medium, High, Emergency) to ensure critical campus failures (e.g., medical emergencies or major floods) are addressed immediately.

Analytics & Trends: Integrated with PostHog to track navigation flow and identify high-frequency problem zones on campus.

Mobile-First Design: Fully responsive UI built for students who need to report issues quickly while on the move.

🛠️ Technical Stack

Frontend: Next.js 16 (utilizing Turbopack for high-speed development)

Language: TypeScript for type-safe, scalable code.

Styling: Tailwind CSS for a modern, professional aesthetic.

Analytics: PostHog for behavioral tracking and funnel conversion monitoring.

Architecture: Modular component-based structure following the latest Next.js App Router patterns.

📂 Project Structure

├── app/ # Next.js App Router (Pages & Layouts)
├── components/ # UI Components (ReportCard, Navbar, ExploreBtn)
├── lib/ # Logic & Configuration
│ ├── constants/ # Professional Mock Data & Report Items
│ └── database/ # Mongoose Models (Coming Soon)
├── public/ # Static assets (Dark Green Logo, Icons)
└── .env # Environment Configuration

⚙️ Setup & Installation

Clone the repository:

git clone [https://github.com/your-username/uniresolve.git](https://github.com/your-username/uniresolve.git)
cd uniresolve

Install dependencies:

npm install

Configure Environment Variables:
Create a .env.local file in the root directory:

NEXT_PUBLIC_POSTHOG_KEY=your_ph_project_key
NEXT_PUBLIC_POSTHOG_HOST=[https://us.i.posthog.com](https://us.i.posthog.com)

Run the Development Server:

npm run dev

Open http://localhost:3000 to view the application.

📊 The Resolution Workflow

Student Reports: An issue is filed with a specific location (e.g., Hostel Block B) and urgency level.

PostHog Analysis: The system captures the "Explore" and "Report" events to measure platform engagement.

Management Review: Admins update the status from Pending to In Progress.

Final Resolution: Once the repair is done, the status is marked Resolved, updating the student's dashboard.

🤝 Contribution & Feedback

UniResolve is an evolving project aimed at improving campus life. Contributions, issues, and feature requests are welcome.

Developed as part of the Dev Event Series - Transforming University Administration through Technology.
