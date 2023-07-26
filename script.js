function calculateShipping() {
 const weight = parseFloat(document.getElementById("weight").value);
 const country = document.getElementById("country").value;
 const pincode = document.getElementById("pincode").value;
 const shipmentValue = parseFloat(document.getElementById("shipmentValue").value);

    // Define shipping rates based on weight and destination country
    const rates = {
        "USA": {
            0.5: 5.0,
            1: 7.5,
            2: 10.0,
            5: 15.0,
            10: 20.0
        },
        "Canada": {
            0.5: 6.0,
            1: 8.5,
            2: 12.0,
            5: 17.0,
            10: 22.0
        },
        "UK": {
            0.5: 8.0,
            1: 11.0,
            2: 15.0,
            5: 20.0,
            10: 25.0
        }
     // Add more rates for other countries as needed
    };

    let shippingCost = 0;
    for (const rateWeight in rates[country]) {
        if (weight <= rateWeight) {
            shippingCost = rates[country][rateWeight];
            break;
        }
    }

    // Additional shipping cost based on pin code (customize as needed)
    if (country === "India") {
        if (pincode.startsWith("50")) {
            shippingCost += 5.0;
        } else {
            shippingCost += 8.0;
        }
    }

    // Additional shipping cost based on shipment value (customize as needed)
    if (shipmentValue > 100) {
        shippingCost += 2.0;
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Shipping Cost to ${country} (${pincode}) with shipment value $${shipmentValue.toFixed(2)}: $${shippingCost.toFixed(2)}`;
}
function resetForm() {
    // Clear all input fields and result
    document.getElementById("weight").value = "";
    document.getElementById("country").selectedIndex = 0;
    document.getElementById("pincode").value = "";
    document.getElementById("shipmentValue").value = "";
    document.getElementById("result").textContent = "";
}
