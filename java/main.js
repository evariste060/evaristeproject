 function showForm(role) {
      document.getElementById("adminForm").classList.remove("active");
      document.getElementById("customerForm").classList.remove("active");

      if (role === "admin") {
        document.getElementById("adminForm").classList.add("active");
      } else if (role === "customer") {
        document.getElementById("customerForm").classList.add("active");
      }
    }