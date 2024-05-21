export async function login(values: {
  email: string;
  password: string;
}): Promise<{ error?: string; success?: string }> {
  // Replace this mock implementation with your actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      if (
        values.email === "admin@example.com" &&
        values.password === "password"
      ) {
        resolve({ success: "Login successful" });
      } else {
        resolve({ error: "Invalid credentials" });
      }
    }, 1000);
  });
}
