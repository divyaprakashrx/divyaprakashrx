const siteMetadata = {
    title: `Divya Prakash`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: false,
    logo: `/images/icon.svg`,
    icon: `/images/icon.svg`,
    titleImage: `/images/mypic.jpg`,
    ogImage: `/images/mypic.jpg`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `DEVELOPER | WEB | AI | ML`,
    description: `I am a sophomore persuing my B.Tech in CSE from National Institute of Technology Patna.`,
    about:
        `I am a sophomore persuing my B.Tech in CSE from National Institute of Technology Patna.
I am currently data analyser at Hackslash,Web developer at Hackslash and Robotics Club NITP,participant in Girlscript Summer of Code 2020
I am a front end web developer and a Machine Learning enthusiast.
I am exploring myself and the open-source community and keep on learning.
My Achievements
Till now, my achievements in NIT PATNA comprises of SMDC 2.0 Winner, Hack'n Make(SIH Internal Hackathon) Winner.`,
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
            name: "PRIVACY POLICY",
            url: "/privacy-policy",
        },
        {
            name: "GitHub",
            url: "https://github.com/divyaprakash-Rx",
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
            url: "https://twitter.com/divya__prakash",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/divyaprakash.1/",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://formspree.io/mjvazank",
        description: `Feel free to contact me for anything.`,
        mail: "medivyaprakash@gmail.com",
        phone: "+91 754-196-8099",
    },
    disqus: "divyaprakash.tech",
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
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
