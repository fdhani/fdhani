#!/usr/bin/env python3
"""
Generate a one-page PDF cover letter.

Your personal details and the reusable body paragraphs live in the CONFIG
section below. The per-application bits (company, role, date, location, and an
optional custom motivation paragraph) are passed on the command line.

Examples
--------
  # Simplest: just a company name (role/date default sensibly)
  python3 scripts/make_cover_letter_pdf.py --company "Talabat"

  # Full control
  python3 scripts/make_cover_letter_pdf.py \\
      --company "Talabat" \\
      --role "Frontend Engineer" \\
      --date "May 30, 2026" \\
      --location "Dubai, United Arab Emirates" \\
      --reason "What draws me to {company} is the chance to ..." \\
      --output Cover_Letter_Talabat.pdf

Notes
-----
* --date defaults to today's date.
* --role defaults to "Frontend Engineer".
* --reason may contain "{company}" placeholders; they are filled in for you.
  If omitted, a sensible generic motivation paragraph is used.
* The output filename defaults to Cover_Letter_<Company>.pdf.
"""

import argparse
import datetime
import re

from fpdf import FPDF

# --------------------------------------------------------------------------- #
# CONFIG — edit these once; they stay the same across applications.           #
# --------------------------------------------------------------------------- #
NAME = "F. Dhani Achmad"
CONTACT_LINES = [
    "West Java, Indonesia  |  +62 812-2713-9678  |  fachran.dhani@gmail.com",
    "linkedin.com/in/fachran-dhani  |  github.com/dhani48  |  fdhani.vercel.app",
]

# Opening paragraph. {company} and {role} are filled in.
OPENING = (
    "I'm writing to apply for the {role} role at {company}. Over the past eight "
    "years I've built and led frontend teams at some of Southeast Asia's largest "
    "consumer platforms, including Tokopedia, 99 Group, and most recently Omni HR. "
    "In each of those roles I've shipped production software used by millions of "
    "people, with a focus on performance, observability, and code quality. I'd love "
    "to bring that experience to {company}."
)

# Reusable body paragraphs (your background; the same for every application).
BODY_PARAGRAPHS = [
    "My core is modern React and Next.js with TypeScript, and I care as much about "
    "how a frontend system holds up over time as I do about what it does on day one. "
    "At 99 Group, I led a team of frontend engineers building the property platform "
    "for Singapore. There I drove the migration of a large legacy application to the "
    "Next.js App Router and coordinated the removal of legacy Redux usage across the "
    "codebase, which made the platform much easier to reason about and extend. At "
    "Tokopedia, I improved Lighthouse scores on critical Seller Dashboard pages by "
    "25% and standardized hundreds of alerts and dashboards so the team could rely "
    "on real frontend observability instead of guesswork.",

    "I've also grown teams, not just codebases. As Lead Software Engineer on "
    "Tokopedia's Web Platform I led and grew a team of eight engineers, mentored "
    "individual contributors, and deprecated fragile legacy modules to improve "
    "stability and security. I'm comfortable going deep technically, having "
    "initiated Flutter R&D at Tokopedia and shipped the company's first production "
    "Flutter app alongside cross-platform work in React Native. I'm equally "
    "comfortable zooming out to feature planning and end-to-end delivery across "
    "cross-functional teams, which is how I've operated in my current role at Omni "
    "HR on the Attendance, Time Off, and Payroll modules.",
]

# Default motivation paragraph, used when --reason is not supplied.
# {company} is filled in.
DEFAULT_REASON = (
    "What draws me to {company} is the chance to keep solving hard frontend "
    "problems for a product that real people depend on every day. I've spent my "
    "career adapting to different products, teams, and user bases, and I'm always "
    "looking for the next environment where I can learn quickly and have a real "
    "impact. I'm also interested in the role AI is starting to play in how we build "
    "software. At Omni HR I've been actively exploring AI-driven development "
    "workflows to boost engineering productivity, and I think it's a meaningful "
    "advantage for engineers who use it well. My background in UI/UX and design "
    "systems means I pay close attention to the details of the end-user experience, "
    "not just the architecture behind it."
)

# Closing paragraph. {company} is filled in.
CLOSING = (
    "I'd welcome the chance to discuss how I can contribute to {company}'s frontend "
    "and engineering culture. Thank you for your time and consideration."
)

SIGN_OFF = ["Sincerely,", NAME]
# --------------------------------------------------------------------------- #


def clean(s: str) -> str:
    """Map smart punctuation to the latin-1 set the core PDF fonts support."""
    return (
        s.replace("’", "'")
        .replace("‘", "'")
        .replace("“", '"')
        .replace("”", '"')
        .replace("—", "-")
        .replace("–", "-")
    )


def safe_filename(company: str) -> str:
    slug = re.sub(r"[^A-Za-z0-9]+", "_", company).strip("_")
    return f"Cover_Letter_{slug}.pdf"


def build_pdf(company, role, date_str, location, reason, output):
    fields = {"company": company, "role": role}

    paragraphs = [
        OPENING.format(**fields),
        *BODY_PARAGRAPHS,
        reason.format(**fields),
        CLOSING.format(**fields),
    ]

    recipient = ["Hiring Manager", company]
    if location:
        recipient.append(location)

    pdf = FPDF(format="A4", unit="mm")
    pdf.set_margins(left=22, top=16, right=22)
    pdf.set_auto_page_break(auto=True, margin=14)
    pdf.add_page()

    # Header
    pdf.set_font("Times", "B", 20)
    pdf.cell(0, 9, clean(NAME), ln=1)
    pdf.set_font("Times", "", 9.5)
    pdf.set_text_color(70, 70, 70)
    for line in CONTACT_LINES:
        pdf.cell(0, 4.6, clean(line), ln=1)
    pdf.set_text_color(0, 0, 0)

    # Divider
    pdf.ln(2)
    y = pdf.get_y()
    pdf.set_draw_color(180, 180, 180)
    pdf.line(22, y, 188, y)
    pdf.ln(5)

    # Date + recipient block
    pdf.set_font("Times", "", 11.5)
    pdf.cell(0, 5.4, clean(date_str), ln=1)
    pdf.ln(2.5)
    for line in recipient:
        pdf.cell(0, 5.4, clean(line), ln=1)
    pdf.ln(4)

    # Salutation
    pdf.cell(0, 5.4, "Dear Hiring Manager,", ln=1)
    pdf.ln(2.2)

    # Body
    pdf.set_font("Times", "", 11)
    for p in paragraphs:
        pdf.multi_cell(0, 5.3, clean(p), align="J")
        pdf.ln(2.2)

    # Sign-off
    pdf.ln(2)
    pdf.set_font("Times", "", 11.5)
    for line in SIGN_OFF:
        pdf.cell(0, 5.6, clean(line), ln=1)

    pdf.output(output)
    return output


def main():
    parser = argparse.ArgumentParser(
        description="Generate a one-page PDF cover letter.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument("--company", required=True, help="Company name (required).")
    parser.add_argument(
        "--role",
        default="Frontend Engineer",
        help='Role title (default: "Frontend Engineer").',
    )
    parser.add_argument(
        "--date",
        default=datetime.date.today().strftime("%B %-d, %Y"),
        help="Letter date (default: today, e.g. 'May 30, 2026').",
    )
    parser.add_argument(
        "--location",
        default="",
        help="Company location for the address block (optional).",
    )
    parser.add_argument(
        "--reason",
        default=DEFAULT_REASON,
        help="Custom motivation paragraph. May include {company}. "
        "Defaults to a generic paragraph.",
    )
    parser.add_argument(
        "--output",
        default="",
        help="Output PDF path (default: Cover_Letter_<Company>.pdf).",
    )
    args = parser.parse_args()

    output = args.output or safe_filename(args.company)
    path = build_pdf(
        company=args.company,
        role=args.role,
        date_str=args.date,
        location=args.location,
        reason=args.reason,
        output=output,
    )
    print(f"wrote {path}")


if __name__ == "__main__":
    main()
