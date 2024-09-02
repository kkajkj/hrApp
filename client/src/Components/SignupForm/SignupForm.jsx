const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  const data = new FormData();

  // Append form data to FormData object
  data.append("firstname", formData.firstname);
  data.append("lastname", formData.lastname);
  data.append("email", formData.email);
  data.append("dob", formData.dob);
  data.append("gender", formData.gender);
  data.append("phone", formData.phone);
  data.append("location", formData.location);
  data.append("skills", formData.skills);
  data.append("resume", formData.resume);

  try {
    // Send form data to the server
    const response = await fetch("https://hrapp-773x.onrender.com/api/signup", {
      method: "POST",
      body: data,
      credentials: "include", // If you need to send cookies/auth headers
    });

    // Read the response as text
    const responseText = await response.text();

    // Check if response is empty
    if (responseText) {
      // Attempt to parse JSON if there is a response
      const result = JSON.parse(responseText);

      if (response.ok) {
        // Redirect to confirmation page on successful signup
        window.location.href = "/confirmation";
      } else {
        // Set error message from server response
        setError(result.message || "An error occurred. Please try again.");
      }
    } else {
      // If response is empty, set a generic error message
      setError("An empty response was received from the server.");
    }
  } catch (error) {
    // Handle any errors that occur during the fetch request
    console.error("Error:", error);
    setError("An error occurred. Please try again.");
  }
};
