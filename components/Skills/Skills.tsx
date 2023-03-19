import {NextPage} from "next";

const Skills: NextPage = () => {

    const designSkills = [
        {
            name: "Figma",
            icon: "figma-rainbow.svg",
            checked: "text-gradient-primary"
        },
        {
            name: "material-ui",
            icon: "material_ui.svg",
        },
    ];

    const frontEndSkills = [
        {
            name: "Typescript",
            icon: "typescript-rainbow.svg",
            checked: "text-gradient-primary"
        },
        {
            name: "Javascript",
            icon: "javascript.svg",
        },
        {
            name: "ReactJS",
            icon: "react.svg",
        },
        {
            name: "NextJS",
            icon: "nextjs.svg",
        },
        {
            name: "VueJS",
            icon: "vuejs.svg",
            checked: "text-gradient-primary"
        },
        {
            name: "NuxtJS",
            icon: "nuxtjs.svg",
        },

    ];


    const backEndSkills = [
        {
            name: "NodeJS",
            icon: "nodejs.svg",
            checked: "text-gradient-primary"
        },
        {
            name: "ExpressJS",
            icon: "expressjs.svg"
        },
    ];

    const databaseSkills = [
        {
            name: "MongoDB",
            icon: "mongodb.svg",
            checked: "text-gradient-primary"
        },
        {
            name: "MySQL",
            icon: "mysql.svg"
        },
        {
            name: "MariaDB",
            icon: "mariadb.svg"
        },
    ];

    const otherSkills = [
        {
            name: "Git & Github",
            icon: "git.svg",
            checked: "text-gradient-primary"
        },
        {
            name: "Jest",
            icon: "jest.svg"
        },
        {
            name: "Vitest",
            icon: "vitest.svg",
            checked: "text-gradient-primary"
        },
        {
            name: "Firebase",
            icon: "firebase.svg",
            checked: "text-gradient-primary"
        },
        {
            name: "Docker",
            icon: "docker.svg"
        },
    ];

    return (
        <div className="hidden sm:block w-full" id="Skills">
            <div className="w-full">
                <h2 className="mb-8 sm:mb-10 text-4xl text-center text-white fadeup-enter fadeup-enter-done" id="skills"
                    style={{transitionDelay: "50ms"}}>Skills</h2>
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-2xl font-bold fadeup-enter text-white fadeup-enter-done"
                            style={{transitionDelay: "100ms"}}>Design</h3>
                        {
                            designSkills.map((skill, index) => {
                                return (
                                    <ul className="flex flex-col gap-2 mt-4" key={index}>
                                        <span className="fadeup-enter fadeup-enter-done"
                                              style={{transitionDelay: "120ms"}}>
                                            <li className="flex items-center gap-2 text-lg">
                                            <span className="SkillsList_rainbowIcon__bSZdk">
                                                <img src={`/icon/${skill.icon}`} alt="Figma"/></span>
                                            <span className={`${skill.checked} font-bold`}>{skill.name}</span>
                                            </li>
                                        </span>
                                    </ul>
                                )
                            })
                        }
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold fadeup-enter text-white fadeup-enter-done"
                            style={{transitionDelay: "100ms"}}>Front-end</h3>
                        {
                            frontEndSkills.map((skill, index) => {
                                return (
                                    <ul className="flex flex-col gap-2 mt-4" key={index}>
                                        <span className="fadeup-enter fadeup-enter-done"
                                              style={{transitionDelay: "120ms"}}>
                                            <li className="flex items-center gap-2 text-lg">
                                            <span className="SkillsList_rainbowIcon__bSZdk">
                                                <img src={`/icon/${skill.icon}`} alt="Figma"/></span>
                                            <span className={`${skill.checked} font-bold`}>{skill.name}</span>
                                            </li>
                                        </span>
                                    </ul>
                                )
                            })
                        }
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold fadeup-enter text-white fadeup-enter-done"
                            style={{transitionDelay: "100ms"}}>Back-end</h3>

                        {
                            backEndSkills.map((skill, index) => {
                                return (
                                    <ul className="flex flex-col gap-2 mt-4" key={index}>
                                        <span className="fadeup-enter fadeup-enter-done"
                                              style={{transitionDelay: "120ms"}}>
                                            <li className="flex items-center gap-2 text-lg">
                                            <span className="SkillsList_rainbowIcon__bSZdk">
                                                <img src={`/icon/${skill.icon}`} alt="Figma"/></span>
                                            <span className={`${skill.checked} font-bold`}>{skill.name}</span>
                                            </li>
                                        </span>
                                    </ul>
                                )
                            })
                        }
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold fadeup-enter text-white fadeup-enter-done"
                            style={{transitionDelay: "100ms"}}>Database</h3>

                        {
                            databaseSkills.map((skill, index) => {
                                return (
                                    <ul className="flex flex-col gap-2 mt-4" key={index}>
                                        <span className="fadeup-enter fadeup-enter-done"
                                              style={{transitionDelay: "120ms"}}>
                                            <li className="flex items-center gap-2 text-lg">
                                            <span className="SkillsList_rainbowIcon__bSZdk">
                                                <img src={`/icon/${skill.icon}`} alt="Figma"/></span>
                                            <span className={`${skill.checked} font-bold`}>{skill.name}</span>
                                            </li>
                                        </span>
                                    </ul>
                                )
                            })
                        }
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold fadeup-enter text-white fadeup-enter-done"
                            style={{transitionDelay: "100ms"}}>Other</h3>
                        {
                            otherSkills.map((skill, index) => {
                                return (
                                    <ul className="flex flex-col gap-2 mt-4" key={index}>
                                        <span className="fadeup-enter fadeup-enter-done"
                                              style={{transitionDelay: "120ms"}}>
                                            <li className="flex items-center gap-2 text-lg">
                                            <span className="SkillsList_rainbowIcon__bSZdk">
                                                <img src={`/icon/${skill.icon}`} alt="Figma"/></span>
                                            <span className={`${skill.checked} font-bold`}>{skill.name}</span>
                                            </li>
                                        </span>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
