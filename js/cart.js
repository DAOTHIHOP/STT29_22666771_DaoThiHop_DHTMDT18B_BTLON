// KIỂM TRA FORM THANH TOÁN
// Kiểm tra Họ và Tên
function validateFullName() {
    const fullName = document.getElementById('fullName');
    const nameRegex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
    if (!nameRegex.test(fullName.value.trim())) {
        document.getElementById('fullNameError').textContent = "Họ và tên phải bắt đầu bằng chữ hoa và không dấu.";
        fullName.classList.add('is-invalid');
        fullName.classList.remove('is-valid');
    } else {
        fullName.classList.remove('is-invalid');
        fullName.classList.add('is-valid');
        document.getElementById('fullNameError').textContent = "";
    }
}

// Kiểm tra Email
function validateEmail() {
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!emailRegex.test(email.value.trim())) {
        document.getElementById('emailError').textContent = "Email phải đúng định dạng và phải có @gmail.com.";
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        document.getElementById('emailError').textContent = "";
    }
}

// Kiểm tra Số Điện Thoại
function validatePhone() {
    const phone = document.getElementById('phone');
    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phone.value.trim())) {
        document.getElementById('phoneError').textContent = "Số điện thoại phải bắt đầu bằng 0 và có 10 chữ số.";
        phone.classList.add('is-invalid');
        phone.classList.remove('is-valid');
    } else {
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
        document.getElementById('phoneError').textContent = "";
    }
}

// Kiểm tra Địa chỉ
function validateAddress() {
    const address = document.getElementById('address');
    if (address.value.trim() === "") {
        document.getElementById('addressError').textContent = "Địa chỉ không được để trống.";
        address.classList.add('is-invalid');
        address.classList.remove('is-valid');
    } else {
        address.classList.remove('is-invalid');
        address.classList.add('is-valid');
        document.getElementById('addressError').textContent = "";
    }
}

// THANH TOÁN
// Hàm xử lý thanh toán
function processPayment() {
    validateFullName();
    validateEmail();
    validatePhone();
    validatepaymentMethod();
    validateAddress();

    const isValid = document.querySelectorAll('.is-invalid').length === 0;

    if (isValid) {
        alert('Xác nhận thanh toán thành công!');
    } else {
        alert('Vui lòng kiểm tra và điền đầy đủ thông tin.');
    }
    
}

// Khi người dùng di chuyển giữa các trường, kiểm tra các trường trước đó
document.getElementById('email').addEventListener('focus', function() {
    if (document.getElementById('fullName').value.trim() === "") {
        document.getElementById('fullName').classList.add('is-invalid');
        document.getElementById('fullNameError').textContent = "Họ và tên không được để trống.";
        document.getElementById('fullName').focus();
    }
});

document.getElementById('phone').addEventListener('focus', function() {
    if (document.getElementById('fullName').value.trim() === "" || document.getElementById('email').value.trim() === "") {
        validateFullName();
        validateEmail();
        document.getElementById('fullName').focus();
    }
});

document.getElementById('address').addEventListener('focus', function() {
    if (document.getElementById('fullName').value.trim() === "" || document.getElementById('email').value.trim() === "" || document.getElementById('phone').value.trim() === "") {
        validateFullName();
        validateEmail();
        validatePhone();
        document.getElementById('fullName').focus();
    }
});

// Hàm load sản phẩm từ localStorage và hiển thị ra trang giỏ hàng
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';
    let total = 0;

  // Duyệt qua từng sản phẩm trong giỏ hàng
cart.forEach(function(item, index) {
    // Chuyển đổi màu sắc sang tên màu
    const colorName = item.color === 'red' ? 'đỏ' :
                      item.color === 'blue' ? 'xanh dương' :
                      item.color === 'green' ? 'xanh lá' :
                      item.color === 'yellow' ? 'vàng' : '';

    const cartItemHTML = `
        <div class="col-md-4 mb-3">
            <div class="card h-100">
                <img src="${item.image}" class="card-img-top" alt="${item.name}" style="height: 200px; object-fit: contain;">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text"><strong>Giá:</strong> ${item.price} VNĐ</p>
                    <p class="card-text"><strong>Số lượng:</strong> ${item.quantity}</p>
                    <p class="card-text"><strong>Màu sắc:</strong> <span style="color: ${item.color}; font-weight: bold;">${colorName}</span></p>
                    <button class="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#checkoutModal">Thanh toán</button>
                    <button class="btn btn-danger" onclick="removeItem(${index})">Xóa</button>
                </div>
            </div>
        </div>
    `;

        // Cộng dồn tổng tiền
        total += parseInt(item.price.replace(/\./g, '')) * item.quantity;

        // Thêm sản phẩm vào container giỏ hàng
        cartItemsContainer.innerHTML += cartItemHTML;
    });

    // Hiển thị tổng tiền
    document.getElementById('totalAmount').innerText = total.toLocaleString() + '';
}

// Hàm xóa từng sản phẩm khỏi giỏ hàng
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Xóa sản phẩm tại vị trí index
    localStorage.setItem('cart', JSON.stringify(cart)); // Cập nhật lại giỏ hàng trong localStorage
    loadCart(); // Load lại giỏ hàng sau khi xóa
}

// Hàm xóa toàn bộ giỏ hàng
function clearCart() {
    localStorage.removeItem('cart');
    loadCart(); // Load lại giỏ hàng sau khi xóa hết
}

function processPayment() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const address = document.getElementById('address').value;

    // Kiểm tra thông tin thanh toán
    if (fullName && email && phone && address) {
        // Lưu thông tin người thanh toán vào localStorage
        const customerInfo = {
            fullName: fullName,
            email: email,
            phone: phone,
            paymentMethod: paymentMethod,
            address: address
        };
        localStorage.setItem('customerInfo', JSON.stringify(customerInfo));

        // Chuyển đến trang kết quả thanh toán
        window.location.href = 'order-confirmation.html';
    } else {
        alert('Vui lòng điền đầy đủ thông tin.');
    }
}

// Khi trang giỏ hàng tải, load giỏ hàng từ localStorage
window.onload = loadCart;
