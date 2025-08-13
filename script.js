function saveData() {
    const product = document.getElementById("product").value;
    const name = document.getElementById("name").value;
    const order = document.getElementById("order").value;
    const phone = document.getElementById("phone").value;
    const amount = document.getElementById("amount").value;
    const upi = document.getElementById("upi").value;

    const params = new URLSearchParams({
        product, name, order, phone, amount, upi
    });

    const link = window.location.origin + "/customer.html?" + params.toString();
    document.getElementById("generatedLink").innerHTML =
        `<p>Customer Link:</p>
         <a href="${link}" target="_blank">${link}</a>`;
}

function loadCustomerPage() {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");
    const name = params.get("name");
    const order = params.get("order");
    const phone = params.get("phone");
    const amount = params.get("amount");
    const upi = params.get("upi");

    if (document.getElementById("details")) {
        document.getElementById("details").innerHTML = `
            <p><b>Loan Product:</b> ${product}</p>
            <p><b>Name:</b> ${name}</p>
            <p><b>Order No:</b> ${order}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Repayment Amount:</b> ₹${amount}</p>
            <button onclick="showUPI('${upi}', '${amount}')">Repayment</button>
        `;
    }
}

function showUPI(upi, amount) {
    document.getElementById("details").style.display = "none";
    document.getElementById("upiPage").style.display = "block";
    document.getElementById("upiID").innerText = upi;
    document.getElementById("amount").innerText = "₹" + amount;
}

function copyUPI() {
    const upi = document.getElementById("upiID").innerText;
    navigator.clipboard.writeText(upi).then(() => {
        alert("UPI ID copied: " + upi);
    });
}

function submitPayment() {
    document.getElementById("upiPage").style.display = "none";
    document.getElementById("successPage").style.display = "block";
}