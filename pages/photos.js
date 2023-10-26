import fs from 'fs';
import path from 'path';
import photoStyles from '@/styles/photos.module.css';
import PhotoLayout from '@/components/photoLayout';
import Head from 'next/head';
import Image from 'next/image';
//import me from '@/public/images/me-in-kazakhstan.webp';

const imagesDirectory = path.join(process.cwd(), 'public/photos/2010/07/01');

export function getStaticProps() {

    const images = fs.readdirSync(imagesDirectory);

    return {
        props: {
            images
        },
    };
}

export default function Photos({ images }) {

    const imageStyle = {
        width: 'auto',
        height: 'auto',
        maxWidth: '70%'
    }

    return (
      <PhotoLayout>
        <Head>
          <title>Photos</title>
        </Head>
        <section className={photoStyles.galleryContainer}>
            {images.map((image, i) =>
                <div className={photoStyles.photoContainer}>
                    <Image 
                        src={`/photos/2010/07/01/${image}`}
                        alt="image"
                        fill={true}
                        quality={100}
                        style={{objectFit: 'contain'}}
                        sizes="10vw"                        
                    />                                            
                </div>
            )}
        </section>
      </PhotoLayout>
    );
  }