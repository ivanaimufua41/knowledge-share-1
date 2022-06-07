import React from "react";
import useFetchData from "./useFetchData";
import useFetchDataGeneric from './useFetchDataGeneric';

interface IBreed {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

interface ICatFacts {
    length: number;
    fact: string;
}
export const CatBreedList2 = () => {
  const { data, loading } = useFetchDataGeneric<ICatFacts>(
    "https://catfact.ninja/facts"
  );

  if (loading) return <div>Loading....</div>;

  if (data && data.length > 0) {
    const catBreedElements = data.map((d: any) => <div>{d.breed}</div>);
    return <>{catBreedElements}</>;
  }

  return null;
};
