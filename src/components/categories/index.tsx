import {getCategories} from '@/services/categories';
import Category from './category';

// !Categories component
export default async function Categories() {
  const allCategories = await getCategories();

  return (
    <section className='w-full py-16 bg-primary flex justify-center gap-x-5 flex-wrap'>
      <h1 className='text-secondary text-center pb-10 basis-full uppercase text-2xl'>Categories</h1>
      {allCategories ? allCategories.map((category) => <Category key={category.id} category={category} />) : <p>Sorry something went wrong while trying to get the categories :)</p>}
    </section>
  );
}
