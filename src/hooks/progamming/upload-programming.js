import axios from "axios";



export default function handleImport(file) {
    var XLSX = require("xlsx");

    if (!file) {
        console.error("No file selected");
        return;
    }
    // Check if the file is a CSV or Excel file
    if (file.type !== "text/csv" && file.type !== "application/vnd.ms-excel") {
        console.error("Invalid file type. Only CSV and Excel files are allowed.");
        return;
    }
    // Use the FileReader API to read the contents of the file
    const reader = new FileReader();
    reader.onload = async (e) => {
        let rows;
        if (file.type === "text/csv") {
            // Split the CSV data into an array of rows
            rows = e.target.result.split("\n").slice(0, -1);
        } else {
            // Use the xlsx library to parse the Excel data
            const workbook = XLSX.read(e.target.result, { type: "binary" });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            rows = XLSX.utils.sheet_to_json(worksheet);
        }

        // Create an array of objects to store the data
        const data = rows.map((row) => {
            // Split the row into an array of cells
            const cells = row.split(",");
            return {
                EventId: cells[0],
                RoomId: cells[1],
                DateAndTime: cells[2],
            }
        });
        // Send a POST request to the API to import the data
        try {
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            console.log(data);
            await axios.post('http://localhost:7002/api/Programming/import', data);
            console.log('Data imported successfully!');
        } catch (error) {
            console.log(error);
        }
    };
    if (file.type === "application/vnd.ms-excel")
        reader.readAsBinaryString(file);
    else 
        reader.readAsText(file);
}