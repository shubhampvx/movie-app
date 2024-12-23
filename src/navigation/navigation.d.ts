export {};
declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Welcome: undefined;
      GenreSelection: undefined;
      Home: undefined;
      Favorite: undefined;
      MovieDetail: { id: number };
    }
  }
}
