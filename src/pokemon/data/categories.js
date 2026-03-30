const categories = [
    {
        name: "All",
        gen: "all",
    },

    {
        name: "Kanto",
        gen: 1,
        ids: Array.from({ length: 151 }, (_, i) => i + 1), // 1 à 151
    },

    {
        name: "Johto",
        gen: 2,
        ids: Array.from({ length: 100 }, (_, i) => i + 152), // 152 à 251
    },

    {
        name: "Hoenn",
        gen: 3,
        ids: Array.from({ length: 135 }, (_, i) => i + 252), // 252 à 386
    },

    {
        name: "Sinnoh",
        gen: 4,
        ids: Array.from({ length: 107 }, (_, i) => i + 387), // 387 à 493
    },

    {
        name: "Unova",
        gen: 5,
        ids: Array.from({ length: 156 }, (_, i) => i + 494), // 494 à 649
    },

    {
        name: "Kalos",
        gen: 6,
        ids: Array.from({ length: 72 }, (_, i) => i + 650), // 650 à 721
    },

    {
        name: "Alola",
        gen: 7,
        ids: Array.from({ length: 86 }, (_, i) => i + 722), // 722 à 807
    },

    {
        name: "Galar",
        gen: 8,
        ids: Array.from({ length: 89 }, (_, i) => i + 810), // 810 à 898
    },

    {
        name: "Hisui",
        gen: 8.5,
        ids: [899, 900, 901, 902, 903, 904, 905], 
    },

    {
        name: "Paldea",
        gen: 9,
        ids: Array.from({ length: 120 }, (_, i) => i + 906), 
    },

    {
        name: "Mega Evolutions",
        gen: "mega",
        ids: [
            3, 6, 9, 15, 18, 65, 80, 94, 115, 127,
            130, 142, 150, 181, 208, 212, 214, 229, 248, 254,
            257, 260, 282, 302, 303, 306, 308, 310, 319, 323,
            334, 354, 359, 362, 373, 376, 380, 381, 384, 428,
            445, 448, 460, 475, 531, 719
        ],
    },

    {
        name: "Gigantamax",
        gen: "gmax",
        ids: [
            3, 6, 9, 12, 25, 52, 68, 94, 99, 131,
            133, 143, 569, 809, 812, 815, 818, 823, 826, 834,
            839, 841, 842, 844, 849, 851, 858, 861, 869, 879,
            884, 892
        ],
    },

    {
        name: "Unknown",
        gen: "unknown",
        ids: [808, 809],
    },
];

export default categories;