const pic = {
    uniform: "https://spy-family.net/assets/img/common/header_bottomimg_3.png",
    icecream: "https://spy-family.net/assets/img/common/header_bottomimg_3_family.png",
    uniform_large: "https://spy-family.net/assets/img/top/chara_anya_1.png",
    casual_large: "https://spy-family.net/assets/img/top/chara_anya_2.png",
    avatars: [],
};

for (let i = 1; i <= 40; i++) {
    pic.avatars[i] = `https://spy-family.net/assets/img/special/anya/${i
        .toString()
        .padStart(2, "0")}.png`;
}
pic.avatars.push(
    
);

const titles = ["Handsome", "Handsome", "and Handsome"];

const about = [
    "My name is Handsome Boy. I am 15 years old now!",
    "I am very handsome.",
    "",
    "This summer I went to NTNU CSIE Camp to learn how to code.",
    "During the camp, I became much more: ",
    "  - Build SPA Website with frontend framework Vue and Tailwind.",
    "  - Develop efficiently with Node.js ecosystem.",
    "  - Design and develop a gomoku gaming agent with Python.",
    "  - Operate Linux system with common commands.",
    "  - Use Git and GitHub to work on projects.",
    "",
    'byeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
].join("\n");

const projects = [
    {
        name: "My Portfolio Website",
        description: "A portfolio website for myself that I developed in NTNU CSIE Camp.",
        image: "https://spy-family.net/assets/img/special/wall02.jpg",
        skills: ["Vue", "Tailwind", "Node.js", "GitHub"],
        url: "https://github.com/anya-forger/anya-forger.github.io",
    },
    {
        name: "AI Gomoku Gaming Agent",
        description: "A gomoku gaming agent with Python that I designed in NTNU CSIE Camp.",
        image: "https://spy-family.net/assets/img/special/wall01.jpg",
        skills: ["Python", "Algorithm", "Gomoku"],
        url: "https://github.com/anya-forger",
    },
    {
        name: "SPY x FAMILY",
        description: "An anime that I starred in.",
        image: "https://spy-family.net/assets/img/special/special10_1.gif",
        skills: ["Performings"],
        url: "https://spy-family.net",
    },
];

export { pic, titles, about, projects };
