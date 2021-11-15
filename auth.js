var config = {
    containerID: "sawo-container",
    identifierType: "email", // can be either 'email' or 'phone_number_sms'
    apiKey: "659044aa-cde7-4d50-9d47-2f0d3dde24b8", // add your api key here
    onSuccess: (payload) => {
        window.location.href = "index.html";
    },
};
var sawo = new Sawo(config);
sawo.showForm();