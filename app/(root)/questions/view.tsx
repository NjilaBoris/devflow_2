"use client";

import { useEffect } from "react";
import { toast } from "sonner";

import { incrementViews } from "@/lib/actions/question.action";

const View = ({ questionId }: { questionId: string }) => {
  const handleIncrement = async () => {
    const result = await incrementViews({ questionId });

    if (result.success) {
      toast.success("Success", {
        description: "Views incremented",
        style: {
          backgroundColor: "#24a148",
          color: "#fff",
          border: "1px solid #24a148",
        },
      });
    } else {
      toast.error(`Error ${result?.status}`, {
        description: result?.error?.message || "Something Went Wrong",
        style: {
          backgroundColor: "#f8d7da",
          color: "#721c24",
          border: "1px solid #f5c6cb",
        },
      });
    }
  };

  useEffect(() => {
    handleIncrement();
  }, []);

  return null;
};

export default View;
