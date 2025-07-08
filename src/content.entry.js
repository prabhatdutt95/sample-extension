import { userData } from "./userData";

function fillForm() {
  const map = {
    firstName: ["first_name", "firstname", "given-name", "fname"],
    lastName: ["last_name", "lastname", "family-name", "lname"],
    email: ["email", "email_address"],
    phone: ["phone", "phone_number", "tel"],
  };

  for (const [key, selectors] of Object.entries(map)) {
    for (const selector of selectors) {
      const input = document.querySelector(
        `input[name*="${selector}"], input[id*="${selector}"], input[placeholder*="${selector}"]`
      );
      if (input) {
        input.value = userData[key];
        input.dispatchEvent(new Event("input", { bubbles: true }));
        break;
      }
    }
  }
}

console.log("🚀 content script running");
setTimeout(fillForm, 1000);
