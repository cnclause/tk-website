exports.handler = async (event, context) => {
    let statusCode = "200";
      
    if (event.httpMethod === "POST"){
      const sgMail = require("@sendgrid/mail");
      sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  
      const { email, message } = JSON.parse(event.body)
  
      try {
        await sgMail.send({
          from: "cnclause123@gmail.com",
          to: "cnclause123@gmail.com",
          reply_to: email,
          subject: "Inbound message from fromrootstowings.org",
          text: message,
        })
      } catch (err) {
        statusCode = "500";
      }
    }
  
    return {
      statusCode,
      headers: {
        "Access-Control-Allow-Origin": "https://fromrootstowings.org",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST"
      },
    };
}