import notFoundImage from '@/../public/images/notFoundLost.png';
import Image from 'next/image';
import Link from 'next/link';

// !Not found page
export default function NotFound() {
  return (
    <div className='h-hero w-screen bg-primary flex items-center justify-center flex-col relative overflow-hidden text-secondary *:block'>
      <h2 className='text-8xl animate-notFoundSlideDown'>Oops!!</h2>
      <p className='text-xl m-2'>404 page not found</p>
      <Image className='w-notFoundImage h-auto relative' src={notFoundImage} alt='Not found image' priority={true} />
      <Link className='m-5 py-4 px-12 border-4 border-accent bg-accent rounded-2xl text-primary no-underline text-xl animate-notFoundSlideUp hover:opacity-90 active:scale-95' href='/'>
        Take me to home
      </Link>
    </div>
  );
}
