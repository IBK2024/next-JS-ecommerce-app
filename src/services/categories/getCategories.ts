import type {CategoriesType} from '@/types/categories';

// !Get categories from database
export default async function getCategories() {
  try {
    const categories: CategoriesType[] = [
      {id: 1, title: 'Category 1', imageFileExtension: 'png'},
      // {id: 2, title: 'Category 2'},
      // {id: 3, title: 'Category 3'},
      // {id: 4, title: 'Category 4'},
      // {id: 5, title: 'Category 5'},
    ];
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return categories;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
