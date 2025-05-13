function analyze() {
  const pulse = parseInt(document.getElementById("pulse").value);
  const bp = document.getElementById("bp").value;

  const [systolic, diastolic] = bp.split("/").map(Number);

  let status = "Normal";
  let color = "green";

  // Fuzzy Logic-like Conditions
  if (pulse < 60 || systolic < 90 || diastolic < 60) {
    status = "Low";
    color = "yellow";
  } else if (pulse > 100 || systolic > 140 || diastolic > 90) {
    status = "High";
    color = "red";
  }

  const msg = `Pulse & BP Status: ${status}`;
  const resultBox = document.getElementById("resultBox");

  document.getElementById("statusMessage").textContent = msg;
  resultBox.style.backgroundColor =
    color === "green"
      ? "rgba(0, 255, 0, 0.2)"
      : color === "yellow"
      ? "rgba(255, 255, 0, 0.2)"
      : "rgba(255, 0, 0, 0.2)";
}
