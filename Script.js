// JavaScript source code

const menuButton = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector(".menu-links");

menuButton.addEventListener("click", function() {

    const isOpen = menuLinks.classList.toggle("is-open");

    menuButton.textContent = isOpen ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Menü schließen" : "Menü öffnen"
    );

});

/* ÜBERSETZUNGEN */

const translations = {

    de: {
        "nav-about": "Über mich",
        "nav-education": "Studium",
        "nav-projects": "Projekte",
        "nav-experience": "Berufserfahrung",
        "nav-contact": "Kontakt",

        "hero-title": "Hallo, ich bin Asya.",
        "hero-subtitle": "Informatikstudentin | Softwareentwicklung",

        "about-heading": "Über mich",

        "about-text": `Engagierte Informatikstudentin im 5. Semester
        an der Frankfurt University of Applied Sciences
        mit Kenntnissen in Java, C, C++, SQL, R sowie Linux
        und Windows. Zusätzliche praktische Erfahrung im Kundenservice,
        in der Betreuung und Veranstaltungsorganisation. Zuverlässig,
        strukturiert und kommunikativ. Besonders interessiert
        an IT-nahen Tätigkeiten, Organisation und kreativen Aufgaben.
        IT-Kenntnisse durch eigenständiges Engagement, eigene Projekte,
        eine persönliche Portfolio-Website und universitäre Projekte im
        Bereich Softwareentwicklung vertieft. Auf der Suche nach einer
        Werkstudentenstelle im IT-Bereich, um Kenntnisse anzuwenden und
        weiterzuentwickeln.`,

        "projects-heading": "Meine Projekte",

        "project1-title": "Verkettete Liste",
        "project1-description": `Implementierung einer verketteten Liste
mit C++. Das Projekt umfasst das Einfügen,
Löschen und Durchlaufen von Elementen.`,
        "project1-tech": `C++ · Datenstrukturen`,

        "project2-title": "Zahlenratespiel",
        "project2-description": `Entwicklung eines interaktiven
Konsolenspiels in C mit Zufallszahlen,
Benutzereingaben und Hinweisen.`,
        "project2-tech": `C · Programmierlogik · Benutzerinteraktion`,


        "project3-title": "Datenvisualisierung",
        "project3-description": `Analyse und Visualisierung statistischer
Datensätze mit RStudio. Erstellung von
Diagrammen zur Darstellung von
Zusammenhängen und Entwicklungen.`,
        "project3-tech": `R · RStudio · Statistik`,

        "project4-title": "Datenbankabfragen",
        "project4-description": `Arbeiten mit relationalen Datenbanken.
Erstellung von SQL-Abfragen zur
Filterung, Sortierung und Verknüpfung
von Daten aus verschiedenen Tabellen.`,
        "project4-tech": `SQL · Datenbanken`,


        "experience-heading": "Berufserfahrung",

        "exp1-date": "01 / AKTUELL",
        "exp1-title": "Studentische Hilfskraft",
        "exp1-text": `Beratung und Unterstützung von Erstsemesterstudierenden
bei der Orientierung im Hochschulalltag.
Organisatorische Aufgaben, Ausgabe von Studienchips
sowie Bearbeitung studienbezogener Informationen.`,

        "exp2-date": "02 / AKTUELL",
        "exp2-title": "Betreuungskraft",
        "exp2-text": `Betreuung und Beaufsichtigung von Grundschulkindern.
Planung und Durchführung von Spiel- und Freizeitaktivitäten.
Unterstützung bei den Hausaufgaben und Zusammenarbeit
mit dem Betreuungsteam.`,

        "exp3-title": "Kundenservice",
        "exp3-text": `Kundenbetreuung und Service.
Bearbeitung von Kundenanliegen und
Unterstützung bei Serviceanfragen.`,

        "exp4-title": "Eventorganisation",
        "exp4-text": `Unterstützung bei der Veranstaltungsorganisation
und Besucherkoordination.`,

        "exp5-title": "Kinderbetreuung",
        "exp5-text": `Unterstützung bei der Betreuung von Kindern.`,

        "exp6-title": "Restaurant",
        "exp6-subtitle": "Service & Kasse",
        "exp6-text": `Tätigkeiten im Servicebereich und an der Kasse.`,

        "education-heading": "Studium & Ausbildung",

        "education-bachelor": "B.Sc. Informatik",
        "education-abitur": "Abitur",
        "Leistungskurse": " Leistungskurse: Mathematik & Biotechnologie",
        "education-school": "Schulbildung",
        "languages-heading": "Sprachen",
        "language-turkish": "Türkisch",
        "language-mother-tongue": "Muttersprache",
        "language-german": "Deutsch",
        "language-fluent": "Fließend",
        "language-english": "Englisch",
        "language-b2": "B2",
        "language-croatian": "Kroatisch",   
        "language-a1": "A1",

        "contact-heading": "Kontakt",
        "contact-description":"Du möchtest mit mir zusammenarbeiten oder hast Fragen zu meinen Projekten? Ich freue mich über deine Nachricht.",
        "collage-title": "Always Evolving.",
        "collage-description": "Neugierig bleiben, neue Wege entdecken und aus jeder Erfahrung etwas mitnehmen.",
        "cvdownload": "↓ Lebenslauf herunterladen",




    },

    en: {
        "nav-about": "About me",
        "nav-education": "Education",
        "nav-projects": "Projects",
        "nav-experience": "Work Experience",
        "nav-contact": "Contact",

        "hero-title": "Hello, I'm Asya.",
        "hero-subtitle": "Computer Science Student | Software Development",

        "about-heading": "About me",

        "about-text": `Motivated Computer Science student in my fifth semester
        at Frankfurt University of Applied Sciences, with knowledge of
        Java, C, C++, SQL, R, Linux and Windows.

        I also have practical experience in customer service,
        childcare and event organization. I am reliable, organized
        and communicative, with a particular interest in IT-related
        roles, organization and creative tasks.

        I have further developed my technical skills through
        independent learning, personal projects, this portfolio website
        and university projects in software development.

        I am currently looking for a working student position
        in IT where I can apply and further develop my skills.`,


        "projects-heading": "My Projects",

        "project1-title": "Linked List Implementation",
        "project1-description": `Developed a linked list implementation in C++,
including operations for inserting, deleting,
and traversing elements.`,
        "project1-tech": `C++ · Data Structures`,

        "project2-title": "Number Guessing Game",
        "project2-description": `Developed an interactive console-based
number guessing game in C, featuring random
number generation, user input, and
dynamic feedback.`,
        "project2-tech": `C · Programming Logic · User Interaction`,

        "project3-title": "Statistical Data Visualization",
        "project3-description": `Analyzed and visualized statistical
datasets using RStudio. Created charts
to illustrate patterns, relationships,
and trends in the data.`,

        "project4-title": "SQL Database Queries",
        "project4-description": `Worked with relational databases using SQL.
Created queries to filter, sort, and
combine data from multiple tables.`,

        "project4-tech": `SQL · Databases` ,

        "experience-heading": "Work Experience",

        "exp1-date": "01 / CURRENT",
        "exp1-title": "Student Assistant",
        "exp1-text": `Provided guidance and support to first-year
students during their transition into university life.
Assisted with administrative tasks, student card
distribution, and processing student-related information.`,

        "exp2-date": "02 / CURRENT",
        "exp2-title": "Childcare Assistant",
        "exp2-text": `Supervised and supported primary school children.
Planned and organized recreational activities,
provided homework assistance, and collaborated
with the childcare team.`,

        "exp3-title": "Customer Service Representative",
        "exp3-text": `Provided customer support, handled customer
inquiries, and assisted with service-related requests.`,

        "exp4-title": "Event Organization",
        "exp4-text": `Supported event organization and
visitor coordination.`,

        "exp5-title": "Childcare Assistant",
        "exp5-text": `Assisted with childcare and supervision.`,

        "exp6-title": "Restaurant",
        "exp6-subtitle": "Service & Cashier",
        "exp6-text": `Worked in restaurant service and
handled cashier responsibilities.`,

        "education-heading": "Education & Academic Background",
        "education-bachelor": "B.Sc. in Computer Science",
        "education-abitur": "German University Entrance Qualification (Abitur)",
        "Leistungskurse": "Advanced Courses: Mathematics & Biotechnology",
        "education-school": "Secondary Education",
        "languages-heading": "Languages",
        "language-turkish": "Turkish",
        "language-mother-tongue": "Native",
        "language-german": "German",
        "language-fluent": "Fluent",
        "language-english": "English",
        "language-b2": "B2",
        "language-croatian": "Croatian",
        "language-a1": "A1",


        "contact-heading": "Contact",
        "contact-description": "Would you like to collaborate with me or have any questions about my projects? I'd be happy to hear from you!",
        "collage-title": "Always Evolving.",
        "collage-description": "Stay curious, explore new paths, and learn from every experience.",
        "cvdownload": "↓ Download CV"

    }

};


/* SPRACHE WECHSELN */

function changeLanguage(lang) {

    document.querySelectorAll("[data-i18n]").forEach(function(element) {

        const key = element.getAttribute("data-i18n");

        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }

    });

    document.documentElement.lang = lang;

    document.querySelectorAll(".language-btn").forEach(function(button) {

        const active = button.dataset.lang === lang;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));

    });
    try {
        localStorage.setItem("portfolio-language", lang);
    } catch (error) {
        console.log("Sprache konnte nicht gespeichert werden.");
    }

}




/* BUTTONS ANKLICKBAR MACHEN */

document.querySelectorAll(".language-btn").forEach(function(button) {

    button.addEventListener("click", function() {

        changeLanguage(button.dataset.lang);

    });

});



/* SCROLL ANIMATION */

const animatedElements = document.querySelectorAll(
    ".projects-section, .experience-section, .education-section, .details-grid, #contact"
);

if ("IntersectionObserver" in window) {

    const scrollObserver = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                scrollObserver.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.1
    });

    animatedElements.forEach(function (element) {
        element.classList.add("scroll-reveal");
        scrollObserver.observe(element);
    });

}

/* GESPEICHERTE SPRACHE LADEN */

let savedLanguage = "de";

try {
    savedLanguage = localStorage.getItem("portfolio-language") || "de";
} catch (error) {
    console.log("Gespeicherte Sprache nicht verfügbar.");
}

changeLanguage(savedLanguage === "en" ? "en" : "de");
