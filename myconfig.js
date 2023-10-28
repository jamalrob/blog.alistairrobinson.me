import path from 'path';

export const config = {
    contentDirectory: path.join(process.cwd(), 'content'),
    imageLocation: "https://ik.imagekit.io/alistairrobinson/blog",
    bodyImage: {
        width: 800,
        quality: 82
    },
    headerImage: {
        width: 800,
        quality: 84
    },
}