import MainNestedLayout from "../_components/MainNestedLayout";
import Tabs from "../_components/Tabs";
import VectorContextsWrapper from "./_components/VectorContextsWrapper";

export default async function VectorsPage() {
  return (
    <MainNestedLayout>
      <Tabs />
      <VectorContextsWrapper/>
    </MainNestedLayout>
  );
}
