export async function POST({request}: {request: Request}) {
  const form = await request.formData();

  const name = form.get("name");
  const email = form.get("email");
  const message = form.get("message");

  const botToken = import.meta.env.TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.TELEGRAM_CHAT_ID;

  const text = `
📨 New Message from Contact Page
--------------------------
👤 Name: ${name}
📧 Email: ${email}

💬 Message:
${message}
`;

  // Send to Telegram
  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });

  // Redirect user to Thank You page
  return new Response(null, {
    status: 302,
    headers: { Location: "/thank-you" },
  });
}
// export async function POST() {
//   return new Response("Route works!", {
//     status: 200
//   });
// }
