import type {CategoriesType} from '@/types/categories';
import Link from 'next/link';

// !Category props
interface CategoryProps {
  category: CategoriesType;
}

// !Category
export default async function Category({category}: CategoryProps) {
  const backgroundImageUrl = (await import(`@/private/images/${category.title}.${category.imageFileExtension}`)).default.src;

  return (
    <Link href={`${category.title}`} className='size-32 relative category bg-no-repeat bg-cover flex items-center justify-center group' style={{backgroundImage: `url('${backgroundImageUrl}')`}}>
      <div className='absolute top-0 left-0 bottom-0 right-0 bg-secondary opacity-50 transition-all group-hover:opacity-20' />
      <h1 className='text-lg text-center text-shadow text-primary font-semibold uppercase [text-shadow:0px,4px,0px,#000] z-10'>{category.title}</h1>
    </Link>
  );
}
