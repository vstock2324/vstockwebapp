import MainNestedLayout from "../../../_components/MainNestedLayout";
import Tabs from "../../../_components/Tabs";
export default async function VectorsCategoryPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  // console.log(name);
  return (
    <>
      <MainNestedLayout>
        <Tabs />
        <h1>{name}</h1>
      </MainNestedLayout>
    </>
  );
}
