import { useState } from "react";
import ContentManagement from "../components/Management/ContentManagement";
import ContentHeader from "../components/Management/ContentHeader";
import { type ContentPureType } from "@repo/zod";

function Library() {
  const [viewState, setViewState] = useState<ContentPureType | "new" | null>(
    null,
  );

  return (
    <>
      <ContentHeader onOpenCreate={() => setViewState("new")}></ContentHeader>
      <ContentManagement
        viewState={viewState}
        setViewState={setViewState}
      ></ContentManagement>
    </>
  );
}

export default Library;
