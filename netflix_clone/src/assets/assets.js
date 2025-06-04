// Logo image
import netflix_logo from './netflix_logo.webp';
// Movie images
import criminal_code_movie from './movies/criminal_code.jpg';
import exterritorial_movie from './movies/exterritorial.jpg';
import forever_movie from './movies/forever.jpg';
import friends_movie from './movies/friends.jpg';
import ginny_and_georgia_movie from './movies/ginny_and_georgia.jpg';
import havoc_movie from './movies/havoc.webp';
import prison_break_movie from './movies/prison_break.jpg';
import sara_movie from './movies/sara.png';
import tudum_movie from './movies/tudum.jpg';
import you_movie from './movies/you.jpg';

// Title images
import criminal_code_title from './titles/criminal_code.png';
import exterritorial_title from './titles/exterritorial.png';
import forever_title from './titles/forever.png';
import friends_title from './titles/friends.png';
import ginny_and_georgia_title from './titles/ginny_and_georgia.png';
import havoc_title from './titles/havoc.png';
import prison_break_title from './titles/prison_break.png';
import sara_title from './titles/sara.png';
import you_title from './titles/you.png'
// ---
import prison_break_no_bg from './titles/prison_break-removebg-preview.png';
import tudum_no_bg from './titles/tudum-removebg-preview.png';

export const assets = {
    netflix_logo,
    // ---
    criminal_code_movie,
    exterritorial_movie,
    forever_movie,
    friends_movie,
    ginny_and_georgia_movie,
    havoc_movie,
    prison_break_movie,
    sara_movie,
    tudum_movie,
    you_movie,
    // ---
    criminal_code_title,
    exterritorial_title,
    forever_title,
    friends_title,
    ginny_and_georgia_title,
    havoc_title,
    prison_break_title,
    sara_title,
    you_title,
    // ---
    prison_break_no_bg,
    tudum_no_bg,
};

export const movies = [
    {
        id: 1,
        image: ginny_and_georgia_movie,
        title: ginny_and_georgia_title,
        date: 2023,
        age: "18+",
        type:  "Show",
        genre: ["Comedies", "Dramas"],
        description: "Free-spirited Georgia and her two kids, Ginny and Austin, move north in search of a fresh start but find that the road to new beginnings can be bumpy.",
    },
    {
        id: 2,
        image: havoc_movie,
        title: havoc_title,
        date: 2025,
        age: "18+",
        type:  "Movie",
        genre: ["Thrillers"],
        description: "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
    },
    {
        id: 3,
        image: forever_movie,
        title: forever_title,
        date: 2025,
        age: "18+",
        type:  "Show",
        genre: ["Romance", "Dramas"],
        description: "Reunited as teens, two childhood friends fall deeply in love, experiencing the joy and heartache of a first romance that will change their lives forever.",
    },
    {
        id: 4,
        image: you_movie,
        title: you_title,
        date: 2025,
        age: "18+",
        type:  "Show",
        genre: ["Thrillers", "Dramas"],
        description: "A dangerously charming, obsessive man goes to extreme measures to insert himself into the lives of women who fascinate him.",
    },
    {
        id: 5,
        image: sara_movie,
        title: sara_title,
        date: 2025,
        age: "16+",
        type:  "Show",
        genre: ["Thrillers", "Mysteries", "Dramas"],
        description: "The suspicious death of her son pushes a former secret agent back into action, investigating a series of crimes that grows increasingly sinister.",
    },
    {
        id: 6,
        image: tudum_movie,
        title: tudum_no_bg,
        date: 2025,
        age: "18+",
        type:  "Show",
        genre: ["Variety TV"],
        description: "Celebrate your favorite shows and movies at this star-studded, live global fan event with special performances and exclusive reveals.",
    },
    {
        id: 7,
        image: prison_break_movie,
        title: prison_break_no_bg,
        date: 2017,
        age: "16+",
        type:  "Show",
        genre: ["Action", "Thrillers", "Dramas"],
        description: "When his brother is wrongly convicted of murder, a structural engineer resolves to bust his sibling out of the notorious Fox River State Penitentiary.",
    },
    {
        id: 8,
        image: friends_movie,
        title: friends_title,
        date: 2003,
        age: "16+",
        type:  "Show",
        genre: ["Comedies"],
        description: "This hit sitcom follows the merry misadventures of six 20-something pals as they navigate the pitfalls of work, life and love in 1990s Manhattan.",
    },
    {
        id: 9,
        image: criminal_code_movie,
        title: criminal_code_title,
        date: 2023,
        age: "18+",
        type:  "Show",
        genre: ["Action", "Dramas"],
        description: "Federal police officers follow a DNA trail to solve a robbery beyond Brazil's borders in this explosive drama series inspired by real crimes.",
    },
    {
        id: 10,
        image: exterritorial_movie,
        title: exterritorial_title,
        date: 2025,
        age: "16+",
        type:  "Movie",
        genre: ["Action", "Thrillers"],
        description: "When her son vanishes inside a US consulate, ex-special forces soldier Sara does everything in her power to find him — and uncovers a dark conspiracy.",
    },
];
