const initialState = {
  posts: [
    // {
    //   name: "Mustafa Mahmoud",
    //   avatar: "/assets/user-5.jpg",
    //   date: "September 14, 2016",
    //   descripton: "Hello my friends",
    //   video: "",
    //   image:
    //     "https://images.pexels.com/photos/5860599/pexels-photo-5860599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //   category: "",
    //   tag: "",
    // },
  ],
  mostRecent: false,
  filters: { category: "", tag: "" },
  categories: [
    {
      name: "Food",
      tags: [{ name: "pasta" }, { name: "macaroni" }, { name: "pizza" }],
    },
    {
      name: "Photography",
      tags: [{ name: "portrait" }, { name: "landscape" }, { name: "vintage" }],
    },
    {
      name: "Science",
      tags: [{ name: "universe" }, { name: "stars" }, { name: "moon" }],
    },
  ],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.payload.post] };
    case "UPDATE_MOST_RECENT":
      return { ...state, mostRecent: action.payload };
    case "UPDATE_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterKey]: action.payload.filterValue,
        },
      };
    default:
      return state;
  }
};

export default Reducer;
