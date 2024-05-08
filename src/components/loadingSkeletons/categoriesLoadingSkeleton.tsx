import Link from 'next/link';
import CategoryLoadingSkeleton from './categoryLoadingSkeleton';

// !Categories loading skeleton
export default function CategoriesLoadingSkeleton() {
  return (
    <section className='w-full py-16 bg-primary flex justify-center gap-x-5 flex-wrap'>
      <Link href='/categories' className='text-secondary text-center pb-10 basis-full uppercase text-2xl'>
        Categories
      </Link>
      {[1, 2, 3, 4].map((_a, i) => (
        <CategoryLoadingSkeleton key={i} />
      ))}
    </section>
  );
}
