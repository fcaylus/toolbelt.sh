import { useEffect, useState } from 'react';
import { Route, routes } from '../routes';
import Fuse from 'fuse.js';

const flattenRoutes = () => {
  return routes
    .map((category) =>
      category.routes.map((route) => ({
        ...route,
        category: category.category,
      }))
    )
    .flat();
};

const fuse = new Fuse(flattenRoutes(), {
  isCaseSensitive: false,
  keys: ['name', 'category'],
});

export default function useSearch() {
  const [searchText, setSearchText] = useState<string>('');
  const [options, setOptions] = useState<Route[]>([]);

  const search = () => {
    if (searchText === '') {
      setOptions(flattenRoutes());
      return;
    }

    const results = fuse.search(searchText).map((result) => result.item);
    setOptions(results);
  };

  useEffect(() => {
    search();
  }, [searchText]);

  return { searchText, setSearchText, options };
}
