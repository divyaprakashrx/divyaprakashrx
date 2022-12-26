const siteMetadata = {
    title: `Divya Prakash`,
    siteUrl: `https://divyaprakash.co.in`,
    capitalizeTitleOnHome: false,
    logo: `/images/icon.svg`,
    icon: `/images/icon.svg`,
    titleImage: `/images/main.svg`,
    ogImage: `/images/main.svg`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `DEVELOPER | WEB | AI | ML`,
    description: `I am a Tech Fanatic, love community building 😍 and enjoy coding in nights with 🍿`,
    about: `Quality-oriented Full Stack Web Developer, with 2+ years of work experience. Aiming to leverage a proven knowledge of application development, database server, and web platform development skills to successfully fulfill my roles. Frequently praised as focused by my peers, I can be relied in a team achieve its goals.`,
    author: `@divyaprakash`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "ABOUT",
            url: "/about",
        },
        {
            name: "BLOG",
            url: "/blog",
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio",
        },
        {
            name: "CONTACT",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "GitHub",
            url: "https://github.com/divyaprakashrx",
        },
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/profile.php?id=100011144353781",
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/divyaprakashrx",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/divyaprakashrx/",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://formspree.io/mjvazank",
        description: `If you wanna hangout or have some exciting stuffs for me, feel free to contact 🤩`,
        mail: "medivyaprakash@gmail.com",
        phone: "",
    },
    disqus: "divyaprakash.co.in",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Enter a name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Enter a valid email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Enter a message with atleast 15 characters",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false,
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
