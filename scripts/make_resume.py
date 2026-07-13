"""Generates public/resume.pdf from resume data. Replace with your own PDF anytime."""
from datetime import date
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable

CAREER_START = date(2021, 3, 1)  # keep in sync with src/content/site.json
YEARS = int((date.today() - CAREER_START).days / 365.2425)

INK = HexColor('#1a1a26')
MUTED = HexColor('#555566')
ACCENT = HexColor('#6d5bd0')

styles = {
    'name': ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=22, textColor=INK, spaceAfter=2),
    'contact': ParagraphStyle('contact', fontName='Helvetica', fontSize=9, textColor=MUTED, spaceAfter=10),
    'h2': ParagraphStyle('h2', fontName='Helvetica-Bold', fontSize=11.5, textColor=ACCENT, spaceBefore=12, spaceAfter=4),
    'role': ParagraphStyle('role', fontName='Helvetica-Bold', fontSize=10.5, textColor=INK, spaceBefore=7, spaceAfter=1),
    'meta': ParagraphStyle('meta', fontName='Helvetica-Oblique', fontSize=9, textColor=MUTED, spaceAfter=3),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=9.5, textColor=INK, leading=13.5, spaceAfter=2),
    'bullet': ParagraphStyle('bullet', fontName='Helvetica', fontSize=9.5, textColor=INK, leading=13.5,
                             leftIndent=10, bulletIndent=0, spaceAfter=2),
}

doc = SimpleDocTemplate('public/resume.pdf', pagesize=A4,
                        leftMargin=18*mm, rightMargin=18*mm, topMargin=16*mm, bottomMargin=16*mm,
                        title='Chetan Govindaraju Kajjidoni — Resume', author='Chetan Govindaraju Kajjidoni')

def rule():
    return HRFlowable(width='100%', thickness=0.7, color=HexColor('#ddddea'), spaceBefore=2, spaceAfter=2)

story = [
    Paragraph('Chetan Govindaraju Kajjidoni', styles['name']),
    Paragraph('Frontend Developer · Bengaluru, India<br/>+91-9972777455 · chetangkajjidoni@gmail.com · github.com/ChetanGk123', styles['contact']),
    rule(),
    Paragraph('PROFILE', styles['h2']),
    Paragraph(f'Results-driven Frontend Developer with {YEARS}+ years of professional experience specializing in React.js and '
              'modern JavaScript ecosystems. Proven track record of building scalable, high-performance web applications '
              'with a focus on clean architecture, reusable components, and responsive design. Experienced in TypeScript, '
              'Next.js, REST APIs, TanStack Query, and performance optimization.', styles['body']),
    Paragraph('SKILLS', styles['h2']),
    Paragraph('<b>Frontend:</b> React, Next.js, Angular, TypeScript, JavaScript, Tailwind CSS, Material UI, shadcn/ui, PrimeNG', styles['body']),
    Paragraph('<b>Backend:</b> Node.js, Express.js, Java, Spring Boot, ASP.NET, Prisma, REST APIs, JWT', styles['body']),
    Paragraph('<b>Tools:</b> Git, Docker, Nx, TanStack Query, Redux, Jest, Netlify, AI-driven development', styles['body']),
    Paragraph('EXPERIENCE', styles['h2']),

    Paragraph('Sr. Associate — Technology, Synechron', styles['role']),
    Paragraph('Apr 2025 – Present · Bengaluru, India', styles['meta']),
    Paragraph('• Built scalable frontend apps in an Nx monorepo with React and TypeScript, driving a 35% performance improvement.', styles['bullet']),
    Paragraph('• Implemented TanStack Query server-state management, cutting redundant network calls by 30% and improving load times by 25%.', styles['bullet']),
    Paragraph('• Increased test coverage by 40% with Jest and AI-driven workflows, accelerating feature development by 20%.', styles['bullet']),

    Paragraph('Software Developer, Insurite Private Limited', styles['role']),
    Paragraph('Aug 2022 – Mar 2025 · Bengaluru, India', styles['meta']),
    Paragraph('• Architected enterprise-grade React + TypeScript applications with memoization, lazy loading and code splitting.', styles['bullet']),
    Paragraph('• Migrated legacy class-based React to functional components with Hooks and TypeScript, reducing technical debt.', styles['bullet']),
    Paragraph('• Optimized global state with Redux and Context API, improving responsiveness.', styles['bullet']),

    Paragraph('Software Developer (Analyst A-4), Capgemini', styles['role']),
    Paragraph('Mar 2021 – Jul 2022 · Bengaluru, India', styles['meta']),
    Paragraph('• Led development of a generator project with Angular, ASP.NET and MySQL, cutting development time by 30%.', styles['bullet']),
    Paragraph('• Delivered high-quality solutions on time and within budget across cross-functional teams.', styles['bullet']),

    Paragraph('EDUCATION', styles['h2']),
    Paragraph('B.E. Information Science &amp; Engineering — First Class', styles['role']),
    Paragraph('Basaveshwar Engineering College, Bagalkot · 2015 – 2020', styles['meta']),
]

doc.build(story)
print('public/resume.pdf written')
