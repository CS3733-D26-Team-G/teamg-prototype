import ContentForm from "../components/Management/ContentForm";
import {
  ContentInputSchema,
  type ContentInputType,
  type ContentPureType,
} from "@repo/zod";
import React from "react";

interface ContentManagementProps {
  viewState: ContentPureType | "new" | null;
  setViewState: React.Dispatch<
    React.SetStateAction<ContentPureType | "new" | null>
  >;
}

function MyForms({ viewState }: ContentManagementProps) {
  const handleSave = async (formData: ContentInputType) => {
    const isExisting = viewState !== "new";
    const uuid =
      isExisting ? (viewState as ContentPureType).uuid : crypto.randomUUID();

    const parsed = ContentInputSchema.parse({
      ...formData,
      uuid,
    });

    const url =
      isExisting ?
        `http://localhost:3000/content/edit/${uuid}`
      : `http://localhost:3000/content/create`;

    const res = await fetch(url, {
      method: isExisting ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        isExisting ?
          (() => {
            const { uuid, ...rest } = parsed;
            return rest;
          })()
        : parsed,
      ),
    });

    console.log(res);
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <ContentForm
        key="new-content-form"
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
}

export default MyForms;
