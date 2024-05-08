import {getCategories} from '@/services/categories';
import {Suspense} from 'react';
import {CategoryLoadingSkeleton} from '../loadingSkeletons';
import Category from './category';

// !Categories component
export default async function Categories() {
  const allCategories = await getCategories();

  return (
    <section className='w-full py-16 bg-primary flex justify-center gap-x-5 flex-wrap'>
      <a href='/categories' className='text-secondary text-center pb-10 basis-full uppercase text-2xl'>
        Categories
      </a>
      {allCategories ? (
        allCategories.map((category) => (
          <Suspense key={category.id} fallback={<CategoryLoadingSkeleton />}>
            <Category category={category} />
          </Suspense>
        ))
      ) : (
        <p>Sorry something went wrong while trying to get the categories :)</p>
      )}
    </section>
  );
}
