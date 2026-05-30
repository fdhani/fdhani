#!/usr/bin/env python3
"""Generate a styled PDF of the Talabat cover letter."""
from fpdf import FPDF

NAME = "F. Dhani Achmad"
CONTACT1 = "West Java, Indonesia  |  +62 812-2713-9678  |  fachran.dhani@gmail.com"
CONTACT2 = "linkedin.com/in/fachran-dhani  |  github.com/dhani48  |  fdhani.vercel.app"

META = ["May 30, 2026", "", "Hiring Manager", "Talabat", "Dubai, United Arab Emirates"]

PARAS = [
    "Dear Hiring Manager,",
    "I'm writing to apply for the Frontend Engineer role at Talabat. Over the past eight years I've built and led frontend teams at some of Southeast Asia's largest consumer platforms, including Tokopedia, 99 Group, and most recently Omni HR. In each of those roles I've shipped production software used by millions of people, with a focus on performance, observability, and code quality. I'd love to bring that experience to Talabat.",
    "My core is modern React and Next.js with TypeScript, and I care as much about how a frontend system holds up over time as I do about what it does on day one. At 99 Group, I led a team of frontend engineers building the property platform for Singapore. There I drove the migration of a large legacy application to the Next.js App Router and coordinated the removal of legacy Redux usage across the codebase, which made the platform much easier to reason about and extend. At Tokopedia, I improved Lighthouse scores on critical Seller Dashboard pages by 25% and standardized hundreds of alerts and dashboards so the team could rely on real frontend observability instead of guesswork.",
    "I've also grown teams, not just codebases. As Lead Software Engineer on Tokopedia's Web Platform I led and grew a team of eight engineers, mentored individual contributors, and deprecated fragile legacy modules to improve stability and security. I'm comfortable going deep technically, having initiated Flutter R&D at Tokopedia and shipped the company's first production Flutter app alongside cross-platform work in React Native. I'm equally comfortable zooming out to feature planning and end-to-end delivery across cross-functional teams, which is how I've operated in my current role at Omni HR on the Attendance, Time Off, and Payroll modules.",
    "What draws me to Talabat is the chance to take on something genuinely new. I've shipped across e-commerce, prop-tech, and HR-tech, but food delivery would be a first for me. It's a fast-moving, logistics-heavy domain with its own real-time, high-stakes frontend challenges that I'm eager to learn. Doing that in a new market like the UAE is just as appealing. I've spent my career adapting to different products, teams, and user bases, and the prospect of contributing to a regional leader while settling into a new culture is exactly the kind of challenge I'm looking for. I'm also interested in the role AI is starting to play in how we build software. At Omni HR I've been actively exploring AI-driven development workflows to boost engineering productivity, and I think it's a meaningful advantage for engineers who use it well. My background in UI/UX and design systems means I pay close attention to the details of the end-user experience, not just the architecture behind it.",
    "I'd welcome the chance to discuss how I can contribute to Talabat's frontend and engineering culture. Thank you for your time and consideration.",
]

SIGN = ["Sincerely,", "F. Dhani Achmad"]


def clean(s: str) -> str:
    # Keep to latin-1 safe characters for the core fonts.
    return s.replace("’", "'").replace("—", "-").replace("–", "-")


pdf = FPDF(format="A4", unit="mm")
pdf.set_margins(left=22, top=16, right=22)
pdf.set_auto_page_break(auto=True, margin=14)
pdf.add_page()

# Header
pdf.set_font("Times", "B", 20)
pdf.cell(0, 9, clean(NAME), ln=1)
pdf.set_font("Times", "", 9.5)
pdf.set_text_color(70, 70, 70)
pdf.cell(0, 4.6, clean(CONTACT1), ln=1)
pdf.cell(0, 4.6, clean(CONTACT2), ln=1)
pdf.set_text_color(0, 0, 0)

# Divider
pdf.ln(2)
y = pdf.get_y()
pdf.set_draw_color(180, 180, 180)
pdf.line(22, y, 188, y)
pdf.ln(5)

# Meta block
pdf.set_font("Times", "", 11.5)
for line in META:
    if line == "":
        pdf.ln(2.5)
    else:
        pdf.cell(0, 5.4, clean(line), ln=1)
pdf.ln(4)

# Body
pdf.set_font("Times", "", 11)
for p in PARAS:
    pdf.multi_cell(0, 5.3, clean(p), align="J")
    pdf.ln(2.2)

# Signature
pdf.ln(2)
for line in SIGN:
    pdf.cell(0, 5.6, clean(line), ln=1)

pdf.output("Cover_Letter_Talabat_Dhani.pdf")
print("wrote Cover_Letter_Talabat_Dhani.pdf")
