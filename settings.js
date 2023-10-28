import path from 'path';

export const settings = {
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
    thumbnailImage: {
        width: 200,
        quality: 60
    },
    name: 'Alistair Robinson',
    siteTitle: 'Articles by Alistair Robinson',
}