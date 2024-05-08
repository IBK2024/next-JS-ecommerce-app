import Categories from '@/components/categories';
import {CategoriesLoadingSkeleton} from '@/components/loadingSkeletons';
import {Fragment, Suspense} from 'react';
import Hero from './components/hero';

// !Home page
export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Suspense fallback={<CategoriesLoadingSkeleton />}>
        <Categories />
      </Suspense>
    </Fragment>
  );
}
