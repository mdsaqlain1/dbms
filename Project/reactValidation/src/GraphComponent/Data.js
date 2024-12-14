export const Data = async (id) => {
    try {
        const [fuelResponse, travelResponse, electricityResponse] = await Promise.all([
            fetch(`http://localhost:3000/api/fueldata?id=${id}`),
            fetch(`http://localhost:3000/api/traveldata?id=${id}`),
            fetch(`http://localhost:3000/api/electricitydata?id=${id}`)
        ]);
    
        // Assuming you want JSON responses, you need to await and then parse each response
        let fuelData = await fuelResponse.json();
        let travelData = await travelResponse.json();
        let electricityData = await electricityResponse.json();
    
        // Now you have access to the data from each response
        fuelData = fuelData.result;
        travelData = travelData.result;
        electricityData = electricityData.result;
        let track = 1;
        const dataset = fuelData.map((item, index) => ({
            fuel: Number(item.value),
            travel: Number(travelData[index].value),
            electricity: Number(electricityData[index].value),
            month: "Track " + track++ // You may want to adjust this based on your actual data
        }));
        return dataset;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};
console.log(await Data(1));