import { useState } from "react";
// import ContentManagement from "../components/Management/ContentManagement";
import ContentHeader from "../components/Management/ContentHeader";
import { type ContentPureType } from "@repo/zod";
import EmployeeManagement from "../components/Management/EmployeeManagement";

function Employee() {
  const [viewState, setViewState] = useState<ContentPureType | "new" | null>(
    null,
  );

  return (
    <>
      {/* <ContentHeader onOpenCreate={() => setViewState("new")}></ContentHeader> */}
      {/* <ContentManagement
        viewState={viewState}
        setViewState={setViewState}
      ></ContentManagement> */}
      <EmployeeManagement></EmployeeManagement>
    </>
  );
}

export default Employee;
