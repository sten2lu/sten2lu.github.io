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
  },{id: "nav-interesting",
          title: "interesting",
          description: "A curated list of things that I find interesting.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/interesting/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A few things I spend my time on...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "A few of my favorite repositories that I actually contibuted to...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Physicist by training, ML researcher by trade, firmly convinced that a closer look at our evaluation practices will lead us to Valinor.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-models-abstraction-amp-automation",
        
          title: "Models, Abstraction &amp; Automation",
        
        description: "ever wondered, why improvement took so long?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/models_abstraction/";
          
        },
      },{id: "post-focus-amp-attention",
        
          title: "Focus &amp; Attention",
        
        description: "a story about distraction",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/focus_attention/";
          
        },
      },{id: "post-hello-world",
        
          title: "Hello, World!",
        
        description: "the mandatory way to start a blog",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/hello_world/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-attending-neurips-2023-feel-free-to-hit-me-up",
          title: 'Attending NeurIPS 2023. Feel free to hit me up.',
          description: "",
          section: "News",},{id: "news-i-will-attend-iclr-2024-feel-free-to-hit-me-up",
          title: 'I will attend ICLR 2024. Feel free to hit me up.',
          description: "",
          section: "News",},{id: "news-attending-neurips-2024-feel-free-to-hit-me-up",
          title: 'Attending NeurIPS 2024. Feel free to hit me up.',
          description: "",
          section: "News",},{id: "news-attending-the-ellis-foundation-model-winter-school-in-amsterdam-this-march-feel-free-to-hit-me-up",
          title: 'Attending the ELLIS Foundation Model Winter School in Amsterdam this March. Feel free...',
          description: "",
          section: "News",},{id: "projects-nnu-net-workshop",
          title: 'nnU-Net Workshop',
          description: "Learn how to use nnU-Net for Segmentation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_nnunet-workshop/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%74%68.%63%61%72%73%74%65%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sten2lu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/carsten-lueth-530798190", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=3L6NkggAAAAJ", "_blank");
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
