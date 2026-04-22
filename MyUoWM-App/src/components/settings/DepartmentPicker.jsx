import { Select } from "@chakra-ui/react";
import React from "react";
import { useDepName, useDepartments } from "../../hooks";
import i18n from "../../i18n";
function DepartmentPicker({ onClose }) {
  const departments = useDepartments();
  const { depName, depCode, setDepCode } = useDepName();
  const handleChange = (e) => {
    e.preventDefault();
    let selectedDepartment = e.target.selectedOptions[0].value;
    setDepCode(selectedDepartment);
    onClose();
  };
  return (
    <>
      <Select
        fontWeight={"bold"}
        placeholder={i18n.t("choose_department")}
        onChange={handleChange}>
        {departments.map(({ code, name }) => (
          <option value={code} key={name}>
            {name}
          </option>
        ))}
      </Select>
      <br></br>
      {depName && i18n.t("current_department") + i18n.t(depName)}
    </>
  );
}

export default DepartmentPicker;
