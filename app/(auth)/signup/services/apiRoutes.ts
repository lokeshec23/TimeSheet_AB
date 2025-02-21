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
  } catch (ex: any) {
    console.error("Error in signupAPI:", ex.message);
    throw new Error(ex.message); // Re-throw the error with the server's message
  }
};
