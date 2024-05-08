import data from '@/data';
import Link from 'next/link';
import {Logo} from '../icons';

// !Footer
function Footer() {
  return (
    <footer className='bg-accent text-primary'>
      <div className='container mx-auto py-14 px-6'>
        <div className='grid tablet:grid-cols-12 grid-cols-1 gap-7'>
          <div className='laptop:col-span-4 col-span-12'>
            <Link href='/' className='fill-primary inline-flex items-center text-3xl font-bold gap-x-1'>
              <Logo />
              Store
            </Link>
            <p className='mt-6'>IBK store. Here we sell quality products at affordable prices</p>
          </div>
          <div className='laptop:col-span-2 tablet:col-span-4 col-span-12'>
            <h1 className='tracking-wide text-primary font-semibold'>Contact</h1>
            <p>{data.address}</p>
            <br />
            <p>
              <u>fake.email@fake.email</u>
            </p>
            <p>
              <b>+44 1234567890</b>
            </p>
          </div>
          <div className='laptop:col-span-2 tablet:col-span-4 col-span-12'>
            <h1 className='tracking-wide text-primary font-semibold'>Important Links</h1>
            <ul className='list-none space-y-2 mt6'>
              <li>
                <Link href='/contact-us' className='hover:opacity-80 transition-all duration-500 ease-in-out'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className='=laptop:col-span-2 tablet:col-span-4 col-span-12'>
            <h1 className='tracking-wide text-primary font-semibold'>Newsletter</h1>
            <p className='mt-6'>Sign up and receive the latest tips via email.</p>
            <form action='/' method='post'>
              <div className='my-3'>
                <label htmlFor='newsletter-email'>
                  Write your email <span className='text-secondary'>*</span>
                </label>
                <input
                  type='email'
                  required={true}
                  name='email'
                  id='newsletter-email'
                  className='mt-3 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-primary focus:border-secondary focus:ring-0'
                  placeholder='name@example.com'
                />
              </div>
              <input
                type='submit'
                className='py-2 px-5 tracking-wide border-none duration-500 text-base bg-secondary hover:opacity-80 text-primary rounded-md w-full cursor-pointer'
                placeholder='name@example.com'
              />
            </form>
          </div>
        </div>
      </div>
      <div className='border-t border-primary'>
        <div className='tablet:text-left text-center container mx-auto py-7 px-6'>
          <p className='mb-0'>&copy;IBK2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
