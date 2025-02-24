interface FormData {
  email: string;
  password: string;
  name: string;
}

export const signupAPI = async (formData: FormData) => {
  try {
    // API call to signup the user
    const response = await fetch("/signup/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Check if the response is OK
    // if (!response.ok) {
    //   // Parse the error message from the server's response
    //   const errorData = await response.json();
    //   const errorMessage =
    //     errorData.message || `API request failed: ${response.status}`;
    //   throw new Error(errorMessage);
    // }

    // Return the successful response data
    return response.json();
  } catch (ex: unknown) {
    console.error("Error in signupAPI:", ex);

    if (ex instanceof Error) {
      throw new Error(ex.message); // Re-throw with server's message
    } else {
      throw new Error("An unknown error occurred"); // Generic error if ex is not an Error object
    }
  }
};
