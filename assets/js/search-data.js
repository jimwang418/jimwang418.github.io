// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-motion-measurement-for-pet-imaging-won-best-student-paper-at-ismr-2022-in-atlanta",
          title: 'Motion measurement for PET imaging won Best Student Paper at ISMR 2022 in...',
          description: "",
          section: "News",},{id: "news-motion-compensation-for-mobile-pet-imaging-was-accepted-to-present-at-iros-2023-in-detroit",
          title: 'Motion compensation for mobile PET imaging was accepted to present at IROS 2023...',
          description: "",
          section: "News",},{id: "news-llm-powered-voice-assistant-was-published-in-ijhcs",
          title: 'LLM-powered voice assistant was published in IJHCS!',
          description: "",
          section: "News",},{id: "news-dvrk-digital-twin-was-accepted-to-present-at-ismr-2025-in-atlanta-code-paper",
          title: 'dVRK digital twin was accepted to present at ISMR 2025 in Atlanta! (code...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%75%6E%78%69%61%6E%67@%63%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jimwang418", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/junxiang-jim-wang", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=K7Zzm7YAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/wang_junxiang_", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
