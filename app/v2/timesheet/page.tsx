import DatePickerDemo from "@/components/DatePickerDemo";
import TimeSheetTable from "@/components/TimeSheetTable";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="inprogress">Work From Office</SelectItem>
                <SelectItem value="completed">Work From Home</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <TimeSheetTable />
      </div>
    </>
  );
};

export default TimeSheetPage;
