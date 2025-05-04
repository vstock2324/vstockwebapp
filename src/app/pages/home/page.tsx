import Category from "./_components/Category";
import NewlyAdded from "./_components/NewlyAdded";
import PromotionalViews from "./_components/PromotionalViews";
// import ClientReview from "./_components/ClientReviews";
import MainHomeLayout from "./_components/MainHomeLayout";
import EditOwn from "./_components/EditOwn";
import RecommendedViews from "./_components/RecommendedViews";

export default function HomePage() {

  return (
    <MainHomeLayout>
      <div className="container mx-auto bg-[#FEFAFF]">
        <Category />
        <div className="mt-[40px] " />
        <NewlyAdded />
      </div>
      <EditOwn/>
      <div className="mt-[45px]">
        <PromotionalViews/>
      </div>
      <RecommendedViews/>
      <div className="container mx-auto bg-[#FEFAFF]">
        {/* <ClientReview /> */}
      </div>
    </MainHomeLayout>
  );
}
