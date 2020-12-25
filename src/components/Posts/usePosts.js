import { useSelector } from "react-redux";

export const usePosts = () => {
  const { posts, mostRecent, filters } = useSelector((state) => state);

  let finalPosts = [...posts];
  if (mostRecent) {
    finalPosts = finalPosts.sort(function (a, b) {
      return b.date - a.date;
    });
  }
  if (filters.category !== "") {
    finalPosts = finalPosts.filter((post) => {
      if (filters.tag !== "") {
        return filters.tag === post.tag && post.category === filters.category;
      }
      return post.category === filters.category;
    });
  }

  return finalPosts;
};
