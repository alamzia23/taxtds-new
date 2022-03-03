import Table from "../../components/admin/Table";
import { TableHeader, Button } from "../../components/admin/atoms";
import AdminWrapper from "../../components/admin/wrapper";

const demoData = [
  { id: 1, name: "Registration Services" },
  { id: 2, name: "Company Compliance" },
  { id: 3, name: "Tax Filling" },
  { id: 4, name: "Audit And Insurance" },
  { id: 5, name: "Taxation Advisory And Personal Advisory" },
  { id: 6, name: "FCRA FEMA NGOs" },
  { id: 7, name: "Valuations" },
];

const columns = [
  { title: "Name", field: "name", sorting: false },
  {
    tilte: "Actions",
    field: "",
    sorting: false,
    render: (rowData: any) => {
      return (
        <div className="flex flex-col md:flex-row gap-2 md:items-center justify-end">
          <Button color="bg-buttonDanger" label="Delete" onClick={() => {}} />
          <Button
            textColor="text-accentOne"
            color="bg-buttonSuccess"
            label="Edit"
            onClick={() => {}}
          />
        </div>
      );
    },
  },
];

const ProfesssionNameTable = () => {
  return (
    <AdminWrapper>
      <Table
        columns={columns}
        data={demoData}
        Title={<TableHeader title="Listed Professions" />}
      />
    </AdminWrapper>
  );
};

export default ProfesssionNameTable;