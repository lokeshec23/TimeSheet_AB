import DatePickerDemo from "@/components/DatePickerDemo";
import TimeSheetTable from "@/components/TimeSheetTable";

const TimeSheetPage = async () => {
  return (
    <>
      <div className="flex gap-5 justify-center items-center">
        <div>
          <p>Task Date</p>
          <DatePickerDemo />
        </div>
        <div>
          <p>Mode of work</p>
          <select
            style={{
              border: "1px solid black",
              padding: "5px",
              background: "lightgray",
            }}
          >
            <option>Select</option>
            <option>Work From Office</option>
            <option>Work From Home</option>
          </select>
        </div>
      </div>
      <div>
        <TimeSheetTable />
      </div>
    </>
  );
};

export default TimeSheetPage;
