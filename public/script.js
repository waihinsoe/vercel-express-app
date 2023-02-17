const apiUrl = localStorage.getItem("apiUrl");
const fetchdata = async () => {
  if (apiUrl) {
    const respone = await fetch(`${apiUrl}/users`);
    const data = await respone.json();
    console.log(data);
  } else {
    window.location.href = "/api";
  }
};

fetchdata();

const uploadFile = async () => {
  const respone = await fetch(`${apiUrl}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ test: "hello" }),
  });
};
