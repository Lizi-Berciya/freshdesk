function getTicketFeilds() {
    // let apiUrl = "https://64c255e2eb7fd5d6ebcfa665.mockapi.io/test";
    // let ticketUrl = "https://partnerchampion.freshdesk.com/api/v2/ticket_fields"
    // let token = 'rYdqbJLavvmHnXt5Z1p'
    
    let feilds = []
    // console.log('arg',arg);
    app.initialized().then(
        async function (_client) {
            window.client = _client;
            console.log(client);
             await client.request.invokeTemplate("getTickets").then(
                function (data) {
                    const response = JSON.parse(data.response)
                    console.log("data",data);
                    console.log("response",response);
                    response.forEach(ticket => {
                        console.log("feild", ticket.label);
                        feilds.push(ticket.label)
                    });
                      console.log("array of feild label", feilds);                      
                },
                function (error) {
                    console.log("error", error);
                }
            )
        },
        function (error) {
            console.error(error);
        }
    );

}
