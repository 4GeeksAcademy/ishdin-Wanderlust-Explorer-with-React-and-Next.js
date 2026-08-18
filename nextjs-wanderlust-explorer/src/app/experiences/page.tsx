import { Suspense } from "react";
import ExplorerLoading from "../../../components/ExplorerLoading";
import ExplorerView from "../../../components/ExplorerView";

const ExperiencesPage = () => {
  return (
    <Suspense fallback={<ExplorerLoading />}>
      <ExplorerView />
    </Suspense>
  );
};

export default ExperiencesPage;
