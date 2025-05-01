/* eslint-disable @typescript-eslint/no-unused-vars */
import CombineFilters from "./_components/CombineFilters";
import MainNestedLayout from "../_components/MainNestedLayout";
import Tabs from "../_components/Tabs";
import VectorsGrid from "./_components/VectorsGrid";
import PaginateVectorGrid from "./_components/PaginateVectorGrid";

export default async function VectorsPage() {
  return (
    <MainNestedLayout>
      <Tabs />
      <CombineFilters />
      <VectorsGrid />
      <PaginateVectorGrid  />
    </MainNestedLayout>
  );
}
