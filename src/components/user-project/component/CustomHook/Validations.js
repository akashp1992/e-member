export default function validate(values) {
    let errors = {};
    if (!values.ProjectName) {
        errors.ProjectName = 'Project Name is required';
    } if (!values.Location) {
        errors.Location = "Location Is Required"
    } if (!values.ProjectDate) {
        errors.ProjectDate = "Project Date is Required"
    } if (!values.ProjectEndDate) {
        errors.ProjectEndDate = "ProjectEndDate is Required"
    } if (!values.JoinAs) {
        errors.JoinAs = "Join As is Required"
    } if (values.ChoseType === "Select Team") {
        errors.ChoseType = "Select Team Type"
    } if (!values.TargetAmount) {
        errors.TargetAmount = "Target Amount is Required"
    }
    return errors;
};