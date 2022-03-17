import path from "path";

export function handleServerSpa(req, res) {
  res.sendFile(path.resolve(__dirname, "..", "..", "client", "index.html"));
}
