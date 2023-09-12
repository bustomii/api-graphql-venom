const venom = require("venom-bot");

export const venomRun = async (phoneNumber: number) => {
  await venom
    .create(
      {
        session: "session-" + phoneNumber, //name of session
        multidevice: true, // for version not multidevice use false.(default: true)
      },
      (base64Qrimg: any, asciiQR: any, attempts: any, urlCode: any) => {
        console.log(base64Qrimg);
        return base64Qrimg;
      }
    )
    .then((result: any) => {
      console.log(result, "--------------------------");
      return result;
    })
    .catch((err: any) => {
      console.log(err, "++++++++++++++++++++++++++++++++");
      return err;
    });
};

const startVenom = (client: any) => {
  client.onMessage((message: any) => {
    if (message.body === "Hi" && message.isGroupMsg === false) {
      client
        .sendText(message.from, "Welcome Venom 🕷")
        .then((result: any) => {
          console.log("Result: ", result);
        })
        .catch((error: any) => {
          console.error("Error when sending: ", error);
        });
    }
  });
};
