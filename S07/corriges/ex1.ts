let format_messageEx1 = (from: string) => (to: string) => (message: string) =>
  "From: " + from + ", To: " + to + "Msg: " + message;

console.log(format_messageEx1("moi")("eux")("oh oh oh"));
