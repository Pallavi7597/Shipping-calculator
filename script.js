function calculateShipmentCost() {
    const country = document.getElementById('country').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const pickupPincode = document.getElementById('pickup').value;
    const deliveryPincode = document.getElementById('delivery').value;
    const distance = parseFloat(document.getElementById('distance').value);
    const shipmentValue = parseFloat(document.getElementById('shipmentValue').value);
  
    // Assuming the shipment cost calculation is based on the distance, you can apply your own formula here.
    // For demonstration purposes, we will use a simple fixed cost per kilometer.
  
    const costPerKilometer = 0.1; // Replace with your actual cost per kilometer
  
    const shipmentCost = distance * costPerKilometer;
  
    // You can add more complex calculations based on weight, country, shipment value, etc.
  
    const resultElement = document.getElementById('result');
    const result = `Shipment Cost for ${country}:
                    Weight: ${weight} kg
                    Pickup Pincode: ${pickupPincode}
                    Delivery Pincode: ${deliveryPincode}
                    Distance: ${distance} km
                    Shipment Value: $${shipmentValue}
                    Calculated Shipment Cost: $${shipmentCost.toFixed(2)}`;
  
    resultElement.textContent = result;
  }
  
