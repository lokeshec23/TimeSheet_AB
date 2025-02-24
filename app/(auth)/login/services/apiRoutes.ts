interface FormData {
  email: string;
  password: string;
}

export const loginAPI = async (formData: FormData) => {
  try {
    debugger;
    // API call to signup the user
    const response = await fetch("/login/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Return the successful response data
    return response.json();
  } catch (ex: unknown) {
    if (ex instanceof Error) {
      console.error("Error in signupAPI:", ex.message);
      throw new Error(ex.message); // Re-throw the error with the server's message
    } else {
      console.error("Unexpected error:", ex);
      throw new Error("An unknown error occurred");
    }
  }
};
