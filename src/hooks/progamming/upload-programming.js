import axios from 'axios';

export default function handleImport(file) {
    if (!file) {
        console.error("No file selected");
        return;
    }

    // Check if the file is a CSV file
    if (file.type !== "text/csv") {
        console.error("Invalid file type. Only CSV files are allowed.");
        return;
    }

    // Use the FileReader API to read the contents of the file
    const reader = new FileReader();
    reader.onload = async (e) => {
        // Split the CSV data into an array of rows
        const rows = e.target.result.split("\n").slice(0, -1);

        // Create an array of objects to store the data
        const data = rows.map((row) => {
            const cells = row.split(",");
            return {
                EventId: cells[0],
                RoomId: cells[1],
                DateAndTime: cells[2],
            }
        });
        // Send a POST request to the API to import the data
        try {
            await axios.post('/api/Programmering', data);
            console.log('Data imported successfully!');
        } catch (error) {
            console.log(error);
        }
    };
    reader.readAsText(file);
}