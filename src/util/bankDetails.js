const bankDetails = {
    search : (city) => {
        city = city.toUpperCase()
        const URI = `https://vast-shore-74260.herokuapp.com/banks?city=${city}`
        return fetch(URI, 
            {
                cache: 'force-cache'
            })
        .then( response => response.json())
        .then( jsonResponse => {
            if (jsonResponse) {
                return jsonResponse.map( bank => {
                    return {
                        ifsc: bank.ifsc,
                        id: bank.bank_id,
                        name: bank.bank_name,
                        branch: bank.branch,
                        address: bank.address,
                        city: bank.city,
                        district: bank.district,
                        state: bank.state
                    }
                })
            }
        })
    }
}

export default bankDetails;