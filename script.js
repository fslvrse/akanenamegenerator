document
  .getElementById("akanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const birthday = document.getElementById("birthday").value;
    const gender = document.querySelector(
      'input[name="gender"]:checked'
    )?.value;

    if (!birthday || !gender) {
      alert("Please fill in all fields.");
      return;
    }

    // Extract Date Components
    const date = new Date(birthday);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-indexed
    const year = date.getFullYear();

    // Validation
    if (day <= 0 || day > 31 || month <= 0 || month > 12) {
      alert("Invalid date. Please enter a valid birthday.");
      return;
    }

    // Calculate Day of the Week using Zeller's Congruence
    const century = Math.floor(year / 100);
    const yearDigits = year % 100;
    const dayOfWeek = Math.floor(
      (day +
        Math.floor(2.6 * (month + 1)) +
        yearDigits +
        Math.floor(yearDigits / 4) +
        Math.floor(century / 4) -
        2 * century) %
        7
    );

    // Normalize Day Index (Sunday = 0, Saturday = 6)
    const dayIndex = (dayOfWeek + 7) % 7;

    // Akan Names
    const maleNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame",
    ];
    const femaleNames = [
      "Akosua",
      "Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama",
    ];

    // Determine Akan Name
    const akanName =
      gender === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];

    // Display Result
    document.getElementById(
      "result"
    ).textContent = `Your Akan name is ${akanName}`;
  });
