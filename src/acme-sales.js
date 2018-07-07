const sales = [
    {
        customerId: 1,
        orderId: 1,
        total: 55
    },
    {
        customerId: 2,
        orderId: 2,
        total: 32
    },
    {
        customerId: 2,
        orderId: 3,
        total: 1
    },
    {
        customerId: 1,
        orderId: 3,
        total: 3
    }
];
const customers = [
    {
        id: 2,
        name: 'moe'
    },
    {
        id: 2,
        name: 'larry'
    },
    {
        id: 3,
        name: 'curly'
    }
];
function generateCustomerSalesMap(salesData, customerData) {
    let customerObj = {};
    let customerNames = [];
    let salesTotal = [];
    let customerId = [];
    let id = [];
    let placeHolder = 0;

    for(let j = 0; j < salesData.length; j++) {
        if(customerId.indexOf(salesData[j].customerId) === -1) {  //distinct customerId
          customerId.push(salesData[j].customerId);
          salesTotal.push(salesData[j].total);
        }
        else { //same customerId
          customerId.push(salesData[j].customerId);
          salesTotal.push(salesData[j].total);
          let placeHolder = salesData[j].customerId;
          salesTotal[placeHolder - 1] += salesTotal.pop();   //add up different order totals for same customerId
        }
    };
    for(let i = 0; i < customerData.length; i++) {
        customerNames.push(customerData[i].name);
        id.push(customerData[i].id);
        
    };
    for(let h = 0; h < id.length; h++) {
        if(customerId.indexOf(id[h]) !== -1) {  //check if customer has any sales
          customerObj[customerNames[h]] = salesTotal[h]; 
        }
        else {
          customerObj[customerNames[h]] = 0;
        }
    }
    
    console.log(customerId);
    console.log(id);
    console.log(customerNames);
    console.log(salesTotal);
    console.log(customerObj);
    return customerObj;
}
generateCustomerSalesMap(sales, customers);

module.exports = generateCustomerSalesMap;
