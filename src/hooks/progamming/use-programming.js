import { useState, useEffect } from 'react'

// function useProgramming() {
    
//     function getTableData() {
//         fetch("/api/ProgrammingController")
//         .then(response => response.json())
//         .then(data => {
//             // Get the table element
//             let table = document.getElementById("myTable");
//             for (let i = 0; i < data.length; i++) {
//                 // Find the correct cell in the table
//                 let cell = table.rows[data[i].Row].cells[data[i].Col];
//                 // Update the cell's content
//                 cell.innerHTML = data[i].Data;
//             }
//         })
//         .catch(error => console.log(error));
//     }
    
//     // // Function to handle the form submit event
//     // function handleFormSubmit(event) {
//     //     event.preventDefault();
//     //     var form = event.target;
//     //     var data = {
//     //         Row: form.elements.row.value,
//     //         Col: form.elements.col.value,
//     //         NewContent: form.elements.newContent.value
//     //     };
    
//     //     // Send the data to the API to update the table
//     //     fetch("/api/table", {
//     //         method: "POST",
//     //         body: JSON.stringify(data),
//     //         headers: {
//     //             "Content-Type": "application/json"
//     //         }
//     //     })
//     //     .then(response => {
//     //         if (response.ok) {
//     //             getTableData();
//     //         } else {
//     //             console.log("An error occurred: " + response.statusText);
//     //         }
//     //     })
//     //     .catch(error => console.log(error));
//     // }
    
//     // Get the table data when the page loads
//     getTableData();
    
//     // Add an event listener to the form
//     var form = document.getElementById("editForm");
//     form.addEventListener("submit", handleFormSubmit);
// }

// export default useProgramming

export default function useData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('api/Programming')
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, []);

    

    return { data, setData};
}

