import type {CategoriesType} from '@/types/categories';

// !Get categories from database
export default async function getCategories() {
  try {
    const categories: CategoriesType[] = [{id: 1, title: 'Category 1', imageFileExtension: 'png'}];
    await new Promise((resolve) => setTimeout(resolve, 9000));
    return categories;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
