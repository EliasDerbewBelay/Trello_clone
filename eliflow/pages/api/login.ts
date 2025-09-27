import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (email === "test@test.com" && password === "123456") {
      return res.status(200).json({ message: "Login successful!" });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  }

  res.status(405).json({ message: "Method not allowed" });
}
