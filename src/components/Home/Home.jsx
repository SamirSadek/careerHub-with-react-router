import BannerSection from "./BannerSection";
import FeaturedJob from "./FeaturedJob";
import JobCategory from "./JobCategory";

const Home = () => {
    return (
        <div className="w-4/5 mx-auto text-center bg-white text-black">
            <BannerSection></BannerSection>
            <JobCategory></JobCategory>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;