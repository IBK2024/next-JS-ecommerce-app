import Link from 'next/link';

// !Hero
export default function Hero() {
  return (
    <div className='flex items-center justify-center flex-col h-hero text-primary text-center bg-accent'>
      <h1 className='text-[clamp(50px,8vw,100px)] tracking-[clamp(-2px,-0.16vw,-1px)] mb-4 font-black'>
        Quality Products
      </h1>
      <p className='text-opacity-90 text-3xl tracking-tighter mb-8'>At affordable prices</p>
      <Link
        href='/categories'
        className='decoration-transparent bg-secondary py-3 pr-20 pl-16 text-xl tracking-tight rounded-s-md cursor-pointer hover:opacity-80 active:scale-95'
      >
        Shop Now
      </Link>
    </div>
  );
}
