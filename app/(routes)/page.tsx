import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

const HomePage = async ({ params }: { params: { id: string } }) => {
  const billboard = await getBillboard("95038568-30bc-4f76-94ed-8042971e3da0");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
