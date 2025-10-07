"use client";

import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };

  return (
    <>
      <button className="px-3 py-2 mt-5 bg-orange-400" onClick={handleBack}>
        Go home
      </button>
    </>
  );
};

export default Button;
