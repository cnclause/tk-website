exports.handler = async (event, context) => {
    let statusCode = "200";
      
    if (event.httpMethod === "POST"){
      const sgMail = require("@sendgrid/mail");
      sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  
      const { email, message } = JSON.parse(event.body)
  
      try {
        await sgMail.send({
          from: "cat@timounkonta.org",
          to: "cat@timounkontan.org",
          reply_to: email,
          subject: "Message from FromRootstoWings.org",
          text: message,
        })
      } catch (err) {
        statusCode = "500";
      }
    }
  
    return {
      statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST"
      },
    };
  };