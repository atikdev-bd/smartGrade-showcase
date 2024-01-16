import Search from "./search";
import StudentTable from "./student-table";

export default function StudentInformation() {
  return (
    <div>
      <section className="py-24 lg:pt-[120px] lg:pb-28">
        <div className="container">
          <Search />

          <StudentTable />
        </div>
      </section>
    </div>
  );
}
