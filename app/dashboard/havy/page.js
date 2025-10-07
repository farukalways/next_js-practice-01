import wait from "@/components/wait";

const Havy = async () => {
  await wait(4000);

  return (
    <div>
      <h2 className="text-2xl my-5 px-3">Havy</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
        quis. Ducimus, optio, aperiam accusamus molestiae incidunt assumenda,
        perferendis impedit aspernatur animi doloribus natus nesciunt itaque
        minima illum voluptatum est consectetur!
      </p>
    </div>
  );
};

export default Havy;
